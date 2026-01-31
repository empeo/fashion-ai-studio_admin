import React, { useRef, useState } from "react";
import { ProjectState, INITIAL_STATE, TargetPlatform } from "./types";
import Layout from "./components/Layout";
import OptionGroup from "./components/OptionGroup";
import ImageUploader from "./components/ImageUploader";
import { translations } from "./translations";
import { styleImg } from "./utils/styleImages";
import { GoogleGenAI } from "@google/genai";

const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

const App: React.FC = () => {
  const [step, setStep] = useState(0);
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [state, setState] = useState<ProjectState>(INITIAL_STATE);
  const [userNotes, setUserNotes] = useState<string>("");
  const [refinedNotes, setRefinedNotes] = useState<string>("");
  const [isRefining, setIsRefining] = useState(false);

  const isAnyAnalyzing =
    state.environment.image.analysis.status === "loading" ||
    state.model.image.analysis.status === "loading" ||
    state.outfit.image.analysis.status === "loading" ||
    state.pose.image.analysis.status === "loading" ||
    state.lighting.image.analysis.status === "loading";

  const requestIdRef = useRef<Record<string, number>>({});
  const t = translations[lang];

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);
  const toggleLanguage = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  const analyzeImage = async (section: keyof ProjectState, file: File) => {
    const reqId = (requestIdRef.current[section as string] ?? 0) + 1;
    requestIdRef.current[section as string] = reqId;

    try {
      setState((prev) => ({
        ...prev,
        [section]: {
          ...(prev[section] as any),
          image: {
            ...(prev[section] as any).image,
            analysis: { status: "loading", text: null, error: null },
          },
        },
      }));

      const base64Data = await fileToBase64(file);

      if (!GEMINI_KEY) {
        throw new Error("Missing Gemini API key (VITE_GEMINI_API_KEY).");
      }

      const ai = new GoogleGenAI({ apiKey: GEMINI_KEY });

      let analysisPrompt = "";
      switch (section) {
        case "environment":
          analysisPrompt =
            "You are a professional fashion set analyst. Analyze this image and describe the environment and lighting ONLY. Focus on: setting type (e.g., luxury studio, urban street, industrial loft), lighting atmosphere (e.g., high-contrast, soft-diffused, cinematic), color temperature, and spatial depth. Ignore people and clothing. Be technical and concise.";
          break;
        case "model":
          analysisPrompt =
            "You are a senior fashion casting director. Analyze the model's physical features ONLY. Describe: facial structure (e.g., sharp jawline, high cheekbones), skin appearance and texture (e.g., dewy, natural pores, matte), and body proportions. Focus on editorial beauty and anatomical details. STRICTLY ignore clothing and background.";
          break;
        case "outfit":
          analysisPrompt =
            "You are a senior fashion product specialist. Analyze the clothing item ONLY. Describe: exact garment type, precise primary and secondary colors, fabric finish and texture (e.g., matte silk, polished leather, structured wool), cut and silhouette (e.g., hourglass, oversized, architectural), and all intricate design details (e.g., asymmetrical drapery, visible stitching). Do NOT describe the person or the scene.";
          break;
        case "pose":
          analysisPrompt =
            "You are a professional fashion movement coach. Analyze the model's body posture and movement ONLY. Describe: body posture (e.g., contrapposto, lunging forward), limb positioning, joint angles, and perceived movement energy. Focus on the geometric composition of the pose. Ignore clothing and background.";
          break;
        case "lighting":
          analysisPrompt =
            "You are a high-end fashion photography lighting technician. Analyze the lighting and camera setup ONLY. Describe: lighting direction (e.g., top-down, side-lit), shadow behavior (e.g., sharp-edged, soft-fading), light intensity, and perceived camera angle and framing. Focus on the technical light-to-shadow relationship.";
          break;
        default:
          analysisPrompt =
            "Describe visual characteristics relevant to high-end professional fashion photography.";
      }

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { inlineData: { data: base64Data, mimeType: file.type } },
          { text: analysisPrompt },
        ],
      });

      if (requestIdRef.current[section as string] !== reqId) return;

      const description = (response.text || "").trim();

      setState((prev) => ({
        ...prev,
        [section]: {
          ...(prev[section] as any),
          image: {
            ...(prev[section] as any).image,
            analysis: { status: "success", text: description, error: null },
          },
        },
      }));
    } catch (error: any) {
      console.error("Analysis error:", error);

      if (requestIdRef.current[section as string] !== reqId) return;

      setState((prev) => ({
        ...prev,
        [section]: {
          ...(prev[section] as any),
          image: {
            ...(prev[section] as any).image,
            analysis: {
              status: "error",
              text: null,
              error: error?.message || "Failed to analyze image.",
            },
          },
        },
      }));
    }
  };

  // ✅ NEW: AI Refinement for User Notes
  const refineUserNotes = async () => {
    if (!userNotes.trim()) {
      alert("Please enter some notes first!");
      return;
    }

    setIsRefining(true);

    try {
      if (!GEMINI_KEY) {
        throw new Error("Missing Gemini API key (VITE_GEMINI_API_KEY).");
      }

      const ai = new GoogleGenAI({ apiKey: GEMINI_KEY });

      // Create context from current selections
      const contextParts: string[] = [];

      if (state.environment.sceneType)
        contextParts.push(`Scene: ${state.environment.sceneType}`);
      if (state.environment.mood)
        contextParts.push(`Mood: ${state.environment.mood}`);
      if (state.model.gender) contextParts.push(`Model: ${state.model.gender}`);
      if (state.outfit.garmentType)
        contextParts.push(`Garment: ${state.outfit.garmentType}`);
      if (state.pose.selectedPoseId) {
        const pose = translations.en.poses.find(
          (p) => p.id === state.pose.selectedPoseId,
        );
        if (pose) contextParts.push(`Pose: ${pose.name}`);
      }
      if (state.lighting.lightingType)
        contextParts.push(`Lighting: ${state.lighting.lightingType}`);

      const context = contextParts.join(", ");

      const refinementPrompt = `You are an expert AI prompt engineer specializing in fashion photography prompts for AI image generation (Midjourney, Stable Diffusion, DALL-E).

Current Project Context: ${context}

User's Raw Notes/Ideas:
"${userNotes}"

Your task: Transform the user's notes into professionally refined prompt additions that:
1. Use technical photography and fashion terminology
2. Are specific and descriptive (avoid vague terms)
3. Complement the existing selections without contradicting them
4. Follow AI image generation best practices
5. Are formatted as comma-separated detailed descriptions

IMPORTANT RULES:
- Do NOT repeat what's already selected (${context})
- Do NOT contradict existing selections
- Focus on ADDITIONS and ENHANCEMENTS only
- Use professional fashion/photography terminology
- Be specific about colors, textures, lighting effects, props, atmosphere
- Output ONLY the refined prompt text, no explanations or preamble

Refined Prompt Addition:`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ text: refinementPrompt }],
      });

      const refined = (response.text || "").trim();
      setRefinedNotes(refined);
    } catch (error: any) {
      console.error("Refinement error:", error);
      alert("Failed to refine notes: " + (error?.message || "Unknown error"));
    } finally {
      setIsRefining(false);
    }
  };

  const updateImage = (section: keyof ProjectState, file: File | null) => {
    setState((prev) => {
      const prevImage = (prev[section] as any).image as any;

      if (prevImage?.previewUrl) {
        try {
          URL.revokeObjectURL(prevImage.previewUrl);
        } catch {}
      }

      const previewUrl = file ? URL.createObjectURL(file) : null;

      return {
        ...prev,
        [section]: {
          ...(prev[section] as any),
          image: {
            ...prevImage,
            file,
            previewUrl,
            analysis: { status: "idle", text: null, error: null },
          },
        },
      };
    });

    if (file) analyzeImage(section, file);
  };

  // ✅ ENHANCED PROMPT GENERATION - ALL selections + image analysis + AI-refined notes
  const generatePrompt = () => {
    const s = state;
    const parts: string[] = [];

    // ========== 1. ENVIRONMENT ==========
    const envParts: string[] = [];

    // User uploaded image analysis
    if (s.environment.image.isActive && s.environment.image.analysis.text) {
      envParts.push(
        `Environment reference: ${s.environment.image.analysis.text}`,
      );
    }

    // Scene Type - ALWAYS include if selected
    if (s.environment.sceneType) {
      const sceneDesc =
        s.environment.sceneType === "Studio"
          ? "professional fashion studio with controlled lighting, neutral seamless background, cyclorama wall"
          : s.environment.sceneType === "Runway"
            ? "dramatic fashion runway with stage lighting, dark audience area, elevated catwalk, spotlights"
            : s.environment.sceneType === "Street"
              ? "urban street environment with natural daylight, authentic city textures, architectural elements"
              : s.environment.sceneType === "Interior"
                ? "luxury interior space with architectural details, ambient lighting, high-end furnishings"
                : `${s.environment.sceneType} setting`;
      envParts.push(sceneDesc);
    }

    // Mood - ALWAYS include if selected
    if (s.environment.mood) {
      const moodDesc =
        s.environment.mood === "Clean"
          ? "clean minimalist atmosphere, bright and airy, pure aesthetic"
          : s.environment.mood === "Dramatic"
            ? "dramatic high-contrast mood, bold shadows, intense atmosphere"
            : s.environment.mood === "Minimal"
              ? "minimal zen aesthetic, empty space, subtle elegance"
              : s.environment.mood === "Luxury"
                ? "luxurious opulent ambiance, rich textures, sophisticated elegance"
                : `${s.environment.mood} mood`;
      envParts.push(moodDesc);
    }

    if (envParts.length > 0) {
      parts.push(`Environment: ${envParts.join(", ")}`);
    }

    // ========== 2. MODEL ==========
    const modelParts: string[] = [];

    // Image analysis
    if (s.model.image.isActive && s.model.image.analysis.text) {
      modelParts.push(`Model reference: ${s.model.image.analysis.text}`);
    }

    // CRITICAL: Natural skin texture - ALWAYS add for quality
    modelParts.push(
      "natural realistic skin texture with visible pores and fine details, soft subsurface scattering, healthy skin appearance, natural skin imperfections, no plastic or waxy finish, photorealistic skin rendering",
    );

    // Gender - ALWAYS include if selected
    if (s.model.gender) {
      modelParts.push(`${s.model.gender} fashion model`);
    }

    // Age Range - ALWAYS include if selected
    if (s.model.ageRange) {
      modelParts.push(`age range ${s.model.ageRange} years old`);
    }

    // Body Type - ALWAYS include if selected
    if (s.model.bodyType) {
      modelParts.push(
        `${s.model.bodyType} body type with natural proportions and realistic anatomy`,
      );
    }

    // Skin Tone - ALWAYS include if selected
    if (s.model.skinTone) {
      modelParts.push(
        `${s.model.skinTone} skin tone with accurate color preservation and realistic undertones`,
      );
    }

    // Facial Style - ALWAYS include if selected
    if (s.model.facialStyle) {
      const faceDesc =
        s.model.facialStyle === "Editorial"
          ? "editorial facial features with high cheekbones, defined jawline, strong bone structure"
          : s.model.facialStyle === "Commercial"
            ? "commercial approachable facial features, warm expression, relatable beauty"
            : s.model.facialStyle === "Avant-Garde"
              ? "avant-garde unique facial features, striking unconventional beauty, artistic expression"
              : s.model.facialStyle === "Natural"
                ? "natural classic beauty, soft features, timeless appeal"
                : `${s.model.facialStyle} facial features`;
      modelParts.push(faceDesc);
    }

    // Hair Style - ALWAYS include if selected
    if (s.model.hairStyle) {
      const hairDesc =
        s.model.hairStyle === "Sleek Back"
          ? "sleek hair pulled back tightly, smooth finish, polished appearance"
          : s.model.hairStyle === "Flowing"
            ? "flowing hair with natural movement, soft waves, dynamic volume"
            : s.model.hairStyle === "Sculptural"
              ? "sculptural architectural hairstyle, artistic shaping, bold structure"
              : s.model.hairStyle === "Minimal"
                ? "minimal simple hairstyle, understated elegance, clean lines"
                : `${s.model.hairStyle} hairstyle`;
      modelParts.push(hairDesc);
    }

    if (modelParts.length > 0) {
      parts.push(`Model: ${modelParts.join(", ")}`);
    }

    // ========== 3. OUTFIT ==========
    const outfitParts: string[] = [];

    // Image analysis
    if (s.outfit.image.isActive && s.outfit.image.analysis.text) {
      outfitParts.push(
        `Outfit reference (MUST match): ${s.outfit.image.analysis.text}`,
      );
    }

    // Garment Type - ALWAYS include if selected
    if (s.outfit.garmentType) {
      const garmentDesc =
        s.outfit.garmentType === "Gown"
          ? "elegant evening gown with floor-length silhouette"
          : s.outfit.garmentType === "Suit"
            ? "tailored professional suit with structured shoulders"
            : s.outfit.garmentType === "Streetwear"
              ? "contemporary streetwear with urban aesthetic"
              : s.outfit.garmentType === "Avant-Garde"
                ? "avant-garde experimental fashion piece with artistic design"
                : s.outfit.garmentType;
      outfitParts.push(garmentDesc);
    }

    // Color Palette - ALWAYS include if selected
    if (s.outfit.colorPalette) {
      outfitParts.push(
        `${s.outfit.colorPalette} color scheme with precise color accuracy`,
      );
    }

    // Fabric - ALWAYS include if selected
    if (s.outfit.fabric) {
      const fabricDesc =
        s.outfit.fabric === "Silk"
          ? "luxurious silk fabric with natural sheen and fluid drape"
          : s.outfit.fabric === "Leather"
            ? "premium leather with subtle grain texture and structured form"
            : s.outfit.fabric === "Denim"
              ? "high-quality denim with visible weave and natural texture"
              : s.outfit.fabric === "Latex"
                ? "glossy latex material with tight fit and reflective surface"
                : s.outfit.fabric === "Wool"
                  ? "fine wool fabric with soft texture and structured drape"
                  : `${s.outfit.fabric} fabric`;
      outfitParts.push(fabricDesc);
    }

    // Texture - ALWAYS include if selected
    if (s.outfit.texture) {
      outfitParts.push(
        `${s.outfit.texture} finish with realistic material properties`,
      );
    }

    // Cut - ALWAYS include if selected
    if (s.outfit.cut) {
      const cutDesc =
        s.outfit.cut === "Fitted"
          ? "fitted cut following body contours precisely"
          : s.outfit.cut === "Oversized"
            ? "oversized relaxed fit with intentional volume"
            : s.outfit.cut === "Tailored"
              ? "expertly tailored with perfect proportions and clean lines"
              : s.outfit.cut === "Flowing"
                ? "flowing loose cut with graceful movement"
                : `${s.outfit.cut} cut`;
      outfitParts.push(cutDesc);
    }

    // Details - ALWAYS include if selected
    if (s.outfit.details) {
      outfitParts.push(
        `${s.outfit.details} design details with meticulous craftsmanship`,
      );
    }

    // Always add quality statement
    outfitParts.push(
      "high-end construction with precise stitching and professional finishing",
    );

    if (outfitParts.length > 0) {
      parts.push(`Outfit: ${outfitParts.join(", ")}`);
    }

    // ========== 4. POSE ==========
    const poseParts: string[] = [];

    // Image analysis
    if (s.pose.image.isActive && s.pose.image.analysis.text) {
      poseParts.push(`Pose reference: ${s.pose.image.analysis.text}`);
    }

    // Selected pose - ALWAYS include if selected
    if (s.pose.selectedPoseId) {
      const selectedPose = translations.en.poses.find(
        (p) => p.id === s.pose.selectedPoseId,
      );
      if (selectedPose) {
        poseParts.push(selectedPose.prompt);
      }
    }

    // Emphasis - ALWAYS include if selected
    if (s.pose.emphasis.length > 0) {
      poseParts.push(
        `emphasizing and highlighting ${s.pose.emphasis.join(", ")} with intentional positioning`,
      );
    }

    // Energy - ALWAYS include if selected
    if (s.pose.energy) {
      poseParts.push(
        `${s.pose.energy} energy and attitude throughout the pose`,
      );
    }

    // Always add anatomical accuracy
    poseParts.push(
      "anatomically correct posture with natural joint angles and realistic body mechanics",
    );

    if (poseParts.length > 0) {
      parts.push(`Pose: ${poseParts.join(", ")}`);
    }

    // ========== 5. LIGHTING & CAMERA ==========
    const lightingParts: string[] = [];

    // Image analysis
    if (s.lighting.image.isActive && s.lighting.image.analysis.text) {
      lightingParts.push(
        `Lighting reference: ${s.lighting.image.analysis.text}`,
      );
    }

    // Lighting Type - ALWAYS include if selected
    if (s.lighting.lightingType) {
      const lightDesc =
        s.lighting.lightingType === "Soft Box"
          ? "soft box studio lighting with even diffused illumination, gentle wraparound light, minimal harsh shadows"
          : s.lighting.lightingType === "Hard Rim"
            ? "hard rim lighting with sharp defined edges, dramatic edge highlights, strong directional light"
            : s.lighting.lightingType === "High Key"
              ? "high key lighting setup with bright even exposure, minimal shadows, clean bright atmosphere"
              : s.lighting.lightingType === "Chiaroscuro"
                ? "chiaroscuro lighting with strong dramatic contrast, deep rich shadows, Renaissance-style illumination"
                : `${s.lighting.lightingType} lighting`;
      lightingParts.push(lightDesc);
    }

    // Shadow Intensity - ALWAYS include if selected
    if (s.lighting.shadowIntensity) {
      lightingParts.push(
        `${s.lighting.shadowIntensity} shadow intensity with realistic shadow falloff`,
      );
    }

    // Lens - ALWAYS include if selected
    if (s.lighting.lens) {
      const lensDesc =
        s.lighting.lens === "35mm"
          ? "shot with 35mm lens, moderate wide angle, natural perspective"
          : s.lighting.lens === "50mm"
            ? "shot with 50mm lens, natural field of view, true-to-life perspective"
            : s.lighting.lens === "85mm"
              ? "shot with 85mm portrait lens, slight compression, flattering perspective"
              : s.lighting.lens === "135mm"
                ? "shot with 135mm telephoto lens, strong compression, shallow depth of field"
                : `shot with ${s.lighting.lens} lens`;
      lightingParts.push(lensDesc);
    }

    // Shot Type - ALWAYS include if selected
    if (s.lighting.shotType) {
      lightingParts.push(
        `${s.lighting.shotType} framing with professional composition`,
      );
    }

    // Always add technical photography details
    lightingParts.push(
      "professional photography depth of field, bokeh, accurate exposure, color grading",
    );

    if (lightingParts.length > 0) {
      parts.push(`Lighting & Camera: ${lightingParts.join(", ")}`);
    }

    // ========== 6. QUALITY & STYLE ==========
    const qualityParts: string[] = [];

    // Realism Level - ALWAYS include if selected
    if (s.quality.realismLevel) {
      const realismDesc =
        s.quality.realismLevel === "Hyper-realistic"
          ? "hyper-realistic photorealistic rendering with extreme detail and lifelike quality"
          : s.quality.realismLevel === "Cinematic"
            ? "cinematic film-like quality with professional color grading and mood"
            : s.quality.realismLevel === "Raw Photography"
              ? "raw unprocessed photography aesthetic with natural authentic look"
              : `${s.quality.realismLevel} rendering quality`;
      qualityParts.push(realismDesc);
    }

    // Style - ALWAYS include if selected
    if (s.quality.style) {
      const styleDesc =
        s.quality.style === "Editorial"
          ? "editorial high-fashion magazine photography style, artistic and bold"
          : s.quality.style === "Commercial"
            ? "commercial catalog photography style, clean and marketable"
            : s.quality.style === "Artistic"
              ? "artistic conceptual photography style, creative and experimental"
              : s.quality.style === "Documentary"
                ? "documentary authentic photography style, realistic and candid"
                : `${s.quality.style} photography style`;
      qualityParts.push(styleDesc);
    }

    // Image Quality - ALWAYS include if selected
    if (s.quality.imageQuality) {
      qualityParts.push(
        `${s.quality.imageQuality} ultra high resolution output`,
      );
    }

    // Always add professional quality markers
    qualityParts.push(
      "professional fashion photography quality, editorial magazine standard, expert retouching, cinematic color grading, masterpiece composition",
    );

    if (qualityParts.length > 0) {
      parts.push(`Quality: ${qualityParts.join(", ")}`);
    }

    // ========== 7. USER REFINEMENTS (AI-Enhanced) ==========
    const notesToUse = refinedNotes.trim() || userNotes.trim();
    if (notesToUse) {
      parts.push(`Additional refinements: ${notesToUse}`);
    }

    // ========== PLATFORM-SPECIFIC OPTIMIZATIONS ==========
    let platformSuffix = "";
    if (s.targetPlatform === "Midjourney") {
      platformSuffix =
        " --style raw --stylize 200 --quality 2 --ar 2:3 --v 6.1";
    } else if (s.targetPlatform === "Stable Diffusion") {
      platformSuffix =
        ", masterpiece, best quality, highly detailed, professional photography, 8k uhd, dslr";
    } else if (s.targetPlatform === "DALL-E") {
      platformSuffix =
        ", photorealistic, professional studio photography, high-end fashion editorial";
    }

    return parts.length > 0
      ? parts.join(",\n\n") + platformSuffix
      : "Please select options and configure your project to generate a prompt.";
  };

  const getNegativePrompt = () => {
    const base =
      "plastic skin, waxy skin, over-smoothed face, artificial skin texture, blurry, bad anatomy, distorted proportions, low quality, duplicate limbs, extra fingers, missing fingers, deformed hands, text, watermark, signature, logo, bad composition, amateur photography, unnatural lighting";

    const garmentLock =
      "incorrect garment type, wrong fabric, changed colors, altered design, pattern modification, style deviation, color variation, design changes";

    const realismEnhancement =
      "cartoon, anime, illustration, painting, drawing, 3d render, unrealistic, fake, CGI";

    if (state.outfit.image.isActive && state.outfit.image.previewUrl) {
      return `${base}, ${garmentLock}, ${realismEnhancement}`;
    }

    return `${base}, ${realismEnhancement}`;
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 w-16 h-16 border border-white/20 flex items-center justify-center rotate-45">
              <i className="fa-solid fa-plus -rotate-45 text-white/50"></i>
            </div>
            <h2 className="text-xl tracking-[0.2em] uppercase font-light mb-8">
              {t.startNew}
            </h2>
            <div className="w-full space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                  {t.projectName}
                </label>
                <input
                  type="text"
                  value={state.projectName}
                  onChange={(e) =>
                    setState({ ...state, projectName: e.target.value })
                  }
                  placeholder={t.projectPlaceholder}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-center focus:border-white transition-colors outline-none tracking-widest uppercase text-sm"
                />
              </div>

              {/* Target Platform - Simple buttons without images */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4">
                  {t.targetPlatform}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    {
                      value: "Midjourney",
                      label: t.options.targetPlatform.Midjourney,
                    },
                    {
                      value: "Stable Diffusion",
                      label: t.options.targetPlatform["Stable Diffusion"],
                    },
                    {
                      value: "DALL-E",
                      label: t.options.targetPlatform["DALL-E"],
                    },
                    { value: "Other", label: t.options.targetPlatform.Other },
                  ].map((platform) => (
                    <button
                      key={platform.value}
                      type="button"
                      onClick={() =>
                        setState({
                          ...state,
                          targetPlatform: platform.value as TargetPlatform,
                        })
                      }
                      className={`py-3 px-4 text-xs uppercase tracking-widest transition-all duration-300 border-2 rounded-lg ${
                        state.targetPlatform === platform.value
                          ? "bg-white text-black border-white shadow-lg"
                          : "bg-transparent text-gray-400 border-white/10 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {platform.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={nextStep}
                disabled={isAnyAnalyzing}
                className={`
                  w-full p-4 rounded-xl uppercase tracking-[0.25em] text-[11px] font-extrabold
                  transition-all duration-300 ease-out shadow-lg
                  ${
                    isAnyAnalyzing
                      ? "bg-white/20 text-white/40 cursor-not-allowed shadow-none"
                      : "bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white hover:scale-[1.02] active:scale-[0.98]"
                  }
                `}
              >
                {isAnyAnalyzing
                  ? lang === "ar"
                    ? "جاري التحليل..."
                    : "Analyzing..."
                  : t.enterStudio}
              </button>
            </div>
          </div>
        );

      case 1:
      case 2:
      case 3:
      case 5:
      case 6: {
        const stepsData = [
          null,
          // STEP 1: Environment
          {
            title: t.steps[1],
            fields: [
              {
                label: t.labels.sceneType,
                options: [
                  {
                    value: "Studio",
                    label: t.options.sceneType.Studio,
                    image: styleImg("sceneType", "Studio"),
                  },
                  {
                    value: "Runway",
                    label: t.options.sceneType.Runway,
                    image: styleImg("sceneType", "Runway"),
                  },
                  {
                    value: "Street",
                    label: t.options.sceneType.Street,
                    image: styleImg("sceneType", "Street"),
                  },
                  {
                    value: "Interior",
                    label: t.options.sceneType.Interior,
                    image: styleImg("sceneType", "Interior"),
                  },
                ],
                val: state.environment.sceneType,
                fn: (v: any) =>
                  setState({
                    ...state,
                    environment: { ...state.environment, sceneType: v },
                  }),
              },
              {
                label: t.labels.mood,
                options: [
                  {
                    value: "Clean",
                    label: t.options.mood.Clean,
                    image: styleImg("mood", "Clean"),
                  },
                  {
                    value: "Dramatic",
                    label: t.options.mood.Dramatic,
                    image: styleImg("mood", "Dramatic"),
                  },
                  {
                    value: "Minimal",
                    label: t.options.mood.Minimal,
                    image: styleImg("mood", "Minimal"),
                  },
                  {
                    value: "Luxury",
                    label: t.options.mood.Luxury,
                    image: styleImg("mood", "Luxury"),
                  },
                ],
                val: state.environment.mood,
                fn: (v: any) =>
                  setState({
                    ...state,
                    environment: { ...state.environment, mood: v },
                  }),
              },
            ],
            assetKey: "environment",
          },

          // STEP 2: Model
          {
            title: t.steps[2],
            fields: [
              {
                label: t.labels.gender,
                options: [
                  {
                    value: "Female",
                    label: t.options.gender.Female,
                    image: styleImg("gender", "Female"),
                  },
                  {
                    value: "Male",
                    label: t.options.gender.Male,
                    image: styleImg("gender", "Male"),
                  },
                  {
                    value: "Non-binary",
                    label: t.options.gender["Non-binary"],
                    image: styleImg("gender", "Non-binary"),
                  },
                ],
                val: state.model.gender,
                fn: (v: any) =>
                  setState({ ...state, model: { ...state.model, gender: v } }),
              },
              {
                label: t.labels.ageRange,
                options: [
                  { value: "18-25", label: t.options.ageRange["18-25"] },
                  { value: "25-35", label: t.options.ageRange["25-35"] },
                  { value: "35-45", label: t.options.ageRange["35-45"] },
                  { value: "45+", label: t.options.ageRange["45+"] },
                ],
                val: state.model.ageRange,
                fn: (v: any) =>
                  setState({
                    ...state,
                    model: { ...state.model, ageRange: v },
                  }),
              },
              {
                label: t.labels.bodyType,
                options: [
                  { value: "Slim", label: t.options.bodyType.Slim },
                  { value: "Athletic", label: t.options.bodyType.Athletic },
                  { value: "Curvy", label: t.options.bodyType.Curvy },
                  {
                    value: "Plus Size",
                    label: t.options.bodyType["Plus Size"],
                  },
                ],
                val: state.model.bodyType,
                fn: (v: any) =>
                  setState({
                    ...state,
                    model: { ...state.model, bodyType: v },
                  }),
              },
              {
                label: t.labels.skinTone,
                options: [
                  {
                    value: "Fair",
                    label: t.options.skinTone.Fair,
                    image: styleImg("skintone", "Fair"),
                  },
                  {
                    value: "Natural",
                    label: t.options.skinTone.Natural,
                    image: styleImg("skintone", "Natural"),
                  },
                  {
                    value: "Olive",
                    label: t.options.skinTone.Olive,
                    image: styleImg("skintone", "Olive"),
                  },
                  {
                    value: "Deep",
                    label: t.options.skinTone.Deep,
                    image: styleImg("skintone", "Deep"),
                  },
                ],
                val: state.model.skinTone,
                fn: (v: any) =>
                  setState({
                    ...state,
                    model: { ...state.model, skinTone: v },
                  }),
              },
              {
                label: t.labels.facialStyle,
                options: [
                  {
                    value: "Editorial",
                    label: t.options.facialStyle.Editorial,
                  },
                  {
                    value: "Commercial",
                    label: t.options.facialStyle.Commercial,
                  },
                  {
                    value: "Avant-Garde",
                    label: t.options.facialStyle["Avant-Garde"],
                  },
                  { value: "Natural", label: t.options.facialStyle.Natural },
                ],
                val: state.model.facialStyle,
                fn: (v: any) =>
                  setState({
                    ...state,
                    model: { ...state.model, facialStyle: v },
                  }),
              },
              {
                label: t.labels.hairStyle,
                options: [
                  {
                    value: "Sleek Back",
                    label: t.options.hairStyle["Sleek Back"],
                    image: styleImg("hairstyle", "Sleek Back"),
                  },
                  {
                    value: "Flowing",
                    label: t.options.hairStyle.Flowing,
                    image: styleImg("hairstyle", "Flowing"),
                  },
                  {
                    value: "Sculptural",
                    label: t.options.hairStyle.Sculptural,
                    image: styleImg("hairstyle", "Sculptural"),
                  },
                  {
                    value: "Minimal",
                    label: t.options.hairStyle.Minimal,
                    image: styleImg("hairstyle", "Minimal"),
                  },
                ],
                val: state.model.hairStyle,
                fn: (v: any) =>
                  setState({
                    ...state,
                    model: { ...state.model, hairStyle: v },
                  }),
              },
            ],
            assetKey: "model",
          },

          // STEP 3: Outfit
          {
            title: t.steps[3],
            fields: [
              {
                label: t.labels.garment,
                options: [
                  {
                    value: "Gown",
                    label: t.options.garmentType.Gown,
                    image: styleImg("garment", "Gown"),
                  },
                  {
                    value: "Suit",
                    label: t.options.garmentType.Suit,
                    image: styleImg("garment", "Suit"),
                  },
                  {
                    value: "Streetwear",
                    label: t.options.garmentType.Streetwear,
                    image: styleImg("garment", "Streetwear"),
                  },
                  {
                    value: "Avant-Garde",
                    label: t.options.garmentType["Avant-Garde"],
                    image: styleImg("garment", "Avant-Garde"),
                  },
                ],
                val: state.outfit.garmentType,
                fn: (v: any) =>
                  setState({
                    ...state,
                    outfit: { ...state.outfit, garmentType: v },
                  }),
              },
              {
                label: t.labels.colorPalette,
                options: [
                  {
                    value: "Monochrome Black",
                    label: t.options.colorPalette["Monochrome Black"],
                  },
                  {
                    value: "Pure White",
                    label: t.options.colorPalette["Pure White"],
                  },
                  {
                    value: "Earth Tones",
                    label: t.options.colorPalette["Earth Tones"],
                  },
                  {
                    value: "Jewel Tones",
                    label: t.options.colorPalette["Jewel Tones"],
                  },
                  { value: "Pastels", label: t.options.colorPalette.Pastels },
                  { value: "Neon", label: t.options.colorPalette.Neon },
                ],
                val: state.outfit.colorPalette,
                fn: (v: any) =>
                  setState({
                    ...state,
                    outfit: { ...state.outfit, colorPalette: v },
                  }),
              },
              {
                label: t.labels.fabric,
                options: [
                  {
                    value: "Silk",
                    label: t.options.fabric.Silk,
                    image: styleImg("fabric", "Silk"),
                  },
                  {
                    value: "Leather",
                    label: t.options.fabric.Leather,
                    image: styleImg("fabric", "Leather"),
                  },
                  {
                    value: "Denim",
                    label: t.options.fabric.Denim,
                    image: styleImg("fabric", "Denim"),
                  },
                  {
                    value: "Latex",
                    label: t.options.fabric.Latex,
                    image: styleImg("fabric", "Latex"),
                  },
                  {
                    value: "Wool",
                    label: t.options.fabric.Wool,
                    image: styleImg("fabric", "Wool"),
                  },
                ],
                val: state.outfit.fabric,
                fn: (v: any) =>
                  setState({
                    ...state,
                    outfit: { ...state.outfit, fabric: v },
                  }),
              },
              {
                label: t.labels.texture,
                options: [
                  { value: "Glossy", label: t.options.texture.Glossy },
                  { value: "Matte", label: t.options.texture.Matte },
                  { value: "Metallic", label: t.options.texture.Metallic },
                  { value: "Textured", label: t.options.texture.Textured },
                ],
                val: state.outfit.texture,
                fn: (v: any) =>
                  setState({
                    ...state,
                    outfit: { ...state.outfit, texture: v },
                  }),
              },
              {
                label: t.labels.cut,
                options: [
                  { value: "Fitted", label: t.options.cut.Fitted },
                  { value: "Oversized", label: t.options.cut.Oversized },
                  { value: "Tailored", label: t.options.cut.Tailored },
                  { value: "Flowing", label: t.options.cut.Flowing },
                ],
                val: state.outfit.cut,
                fn: (v: any) =>
                  setState({
                    ...state,
                    outfit: { ...state.outfit, cut: v },
                  }),
              },
              {
                label: t.labels.details,
                options: [
                  {
                    value: "Intricate Drapery",
                    label: t.options.details["Intricate Drapery"],
                  },
                  { value: "Minimalist", label: t.options.details.Minimalist },
                  {
                    value: "Embellished",
                    label: t.options.details.Embellished,
                  },
                  { value: "Structured", label: t.options.details.Structured },
                ],
                val: state.outfit.details,
                fn: (v: any) =>
                  setState({
                    ...state,
                    outfit: { ...state.outfit, details: v },
                  }),
              },
            ],
            assetKey: "outfit",
          },

          null,

          // STEP 5: Lighting
          {
            title: t.steps[5],
            fields: [
              {
                label: t.labels.lightingType,
                options: [
                  {
                    value: "Soft Box",
                    label: t.options.lightingType["Soft Box"],
                    image: styleImg("lighting", "Soft Box"),
                  },
                  {
                    value: "Hard Rim",
                    label: t.options.lightingType["Hard Rim"],
                    image: styleImg("lighting", "Hard Rim"),
                  },
                  {
                    value: "High Key",
                    label: t.options.lightingType["High Key"],
                    image: styleImg("lighting", "High Key"),
                  },
                  {
                    value: "Chiaroscuro",
                    label: t.options.lightingType.Chiaroscuro,
                    image: styleImg("lighting", "Chiaroscuro"),
                  },
                ],
                val: state.lighting.lightingType,
                fn: (v: any) =>
                  setState({
                    ...state,
                    lighting: { ...state.lighting, lightingType: v },
                  }),
              },
              {
                label: t.labels.shadowIntensity,
                options: [
                  { value: "Subtle", label: t.options.shadowIntensity.Subtle },
                  {
                    value: "Moderate",
                    label: t.options.shadowIntensity.Moderate,
                  },
                  {
                    value: "Dramatic",
                    label: t.options.shadowIntensity.Dramatic,
                  },
                ],
                val: state.lighting.shadowIntensity,
                fn: (v: any) =>
                  setState({
                    ...state,
                    lighting: { ...state.lighting, shadowIntensity: v },
                  }),
              },
              {
                label: t.labels.lens,
                options: [
                  { value: "35mm", label: t.options.lens["35mm"] },
                  { value: "50mm", label: t.options.lens["50mm"] },
                  { value: "85mm", label: t.options.lens["85mm"] },
                  { value: "135mm", label: t.options.lens["135mm"] },
                ],
                val: state.lighting.lens,
                fn: (v: any) =>
                  setState({
                    ...state,
                    lighting: { ...state.lighting, lens: v },
                  }),
              },
              {
                label: t.labels.shotType,
                options: [
                  {
                    value: "Full Body",
                    label: t.options.shotType["Full Body"],
                    image: styleImg("shotType", "Full Body"),
                  },
                  {
                    value: "Medium Shot",
                    label: t.options.shotType["Medium Shot"],
                    image: styleImg("shotType", "Medium Shot"),
                  },
                  {
                    value: "Close-Up",
                    label: t.options.shotType["Close-Up"],
                    image: styleImg("shotType", "Close-Up"),
                  },
                ],
                val: state.lighting.shotType,
                fn: (v: any) =>
                  setState({
                    ...state,
                    lighting: { ...state.lighting, shotType: v },
                  }),
              },
            ],
            assetKey: "lighting",
          },

          // STEP 6: Quality
          {
            title: t.steps[6],
            fields: [
              {
                label: t.labels.realism,
                options: [
                  {
                    value: "Hyper-realistic",
                    label: t.options.realism["Hyper-realistic"],
                    image: styleImg("realism", "Hyper-realistic"),
                  },
                  {
                    value: "Cinematic",
                    label: t.options.realism.Cinematic,
                    image: styleImg("realism", "Cinematic"),
                  },
                  {
                    value: "Raw Photography",
                    label: t.options.realism["Raw Photography"],
                    image: styleImg("realism", "Raw Photography"),
                  },
                ],
                val: state.quality.realismLevel,
                fn: (v: any) =>
                  setState({
                    ...state,
                    quality: { ...state.quality, realismLevel: v },
                  }),
              },
              {
                label: t.labels.style,
                options: [
                  { value: "Editorial", label: t.options.style.Editorial },
                  { value: "Commercial", label: t.options.style.Commercial },
                  { value: "Artistic", label: t.options.style.Artistic },
                  { value: "Documentary", label: t.options.style.Documentary },
                ],
                val: state.quality.style,
                fn: (v: any) =>
                  setState({
                    ...state,
                    quality: { ...state.quality, style: v },
                  }),
              },
              {
                label: t.labels.outputQuality,
                options: [
                  {
                    value: "8K UHD",
                    label: t.options.outputQuality["8K UHD"],
                    image: styleImg("outputQuality", "8K UHD"),
                  },
                  {
                    value: "4K Masterpiece",
                    label: t.options.outputQuality["4K Masterpiece"],
                    image: styleImg("outputQuality", "4K Masterpiece"),
                  },
                  {
                    value: "Ultra HD",
                    label: t.options.outputQuality["Ultra HD"],
                    image: styleImg("outputQuality", "Ultra HD"),
                  },
                ],
                val: state.quality.imageQuality,
                fn: (v: any) =>
                  setState({
                    ...state,
                    quality: { ...state.quality, imageQuality: v },
                  }),
              },
            ],
            assetKey: null,
          },
        ];

        const cur = stepsData[step];
        if (!cur) return null;

        return (
          <div className="space-y-4">
            <h2 className="text-sm tracking-[0.3em] uppercase mb-8 pb-4 border-b border-white/10">
              {cur.title}
            </h2>

            {cur.fields.map((f, i) => (
              <OptionGroup
                key={i}
                label={f.label}
                options={f.options}
                currentValue={f.val}
                onChange={f.fn}
              />
            ))}

            {cur.assetKey && (
              <ImageUploader
                label={`${t.uploadRef} ${
                  cur.assetKey === "outfit" || cur.assetKey === "model"
                    ? t.primary
                    : t.optional
                }`}
                imageData={(state as any)[cur.assetKey].image}
                onUpload={(f) => updateImage(cur.assetKey as any, f)}
                onClear={() => updateImage(cur.assetKey as any, null)}
                lang={lang}
              />
            )}

            <div className="flex gap-4 pt-8">
              <button
                onClick={prevStep}
                className="flex-1 py-4 border border-white/10 uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all"
              >
                {t.back}
              </button>
              <button
                onClick={nextStep}
                disabled={isAnyAnalyzing}
                className={`flex-[2] py-4 uppercase tracking-widest text-[10px] font-bold transition-all
                  ${
                    isAnyAnalyzing
                      ? "bg-white/30 text-white/50 cursor-not-allowed"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
              >
                {isAnyAnalyzing
                  ? lang === "ar"
                    ? "جاري التحليل..."
                    : "Analyzing..."
                  : t.next}
              </button>
            </div>
          </div>
        );
      }

      case 4:
        return (
          <div className="space-y-8">
            <header>
              <h2 className="text-xl tracking-[0.2em] uppercase font-light mb-2">
                {t.choosePose}
              </h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                {t.poseSubtitle}
              </p>
            </header>

            {/* ✅ FIX #2: LARGER POSE IMAGES - 192px height */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {t.poses.map((p) => (
                <button
                  key={p.id}
                  onClick={() =>
                    setState({
                      ...state,
                      pose: { ...state.pose, selectedPoseId: p.id },
                    })
                  }
                  className={`group flex flex-col items-center p-4 border-2 rounded-lg transition-all duration-300 ${
                    state.pose.selectedPoseId === p.id
                      ? "bg-white text-black border-white scale-105 shadow-2xl"
                      : "bg-black/40 text-gray-400 border-white/10 hover:border-white/40 hover:scale-102 hover:bg-black/60"
                  }`}
                >
                  <div className="w-full h-48 mb-3 overflow-hidden rounded-md bg-black/20">
                    <img
                      src={styleImg("pose", p.id)}
                      alt={p.name}
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        state.pose.selectedPoseId === p.id
                          ? "grayscale-0 opacity-100"
                          : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                      }`}
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-center leading-tight font-medium">
                    {p.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-4">
                  {t.emphasisLabel}
                </label>
                <div className="flex flex-wrap gap-2">
                  {(
                    ["Waist", "Shoulders", "Jawline", "Legs", "Neck"] as const
                  ).map((emp) => (
                    <button
                      key={emp}
                      onClick={() => {
                        const newEmp = state.pose.emphasis.includes(emp)
                          ? state.pose.emphasis.filter((e) => e !== emp)
                          : [...state.pose.emphasis, emp];
                        setState({
                          ...state,
                          pose: { ...state.pose, emphasis: newEmp },
                        });
                      }}
                      className={`group relative overflow-hidden px-4 py-3 text-[9px] uppercase tracking-widest border-2 rounded-lg transition-all ${
                        state.pose.emphasis.includes(emp)
                          ? "bg-white text-black border-white"
                          : "bg-black/40 text-gray-500 border-white/10 hover:border-white/30 hover:bg-black/60"
                      }`}
                    >
                      <div className="absolute inset-0 w-full h-full">
                        <img
                          src={styleImg("emphasis", emp)}
                          alt={t.options.emphasis[emp]}
                          className={`w-full h-full object-cover transition-opacity ${
                            state.pose.emphasis.includes(emp)
                              ? "opacity-30"
                              : "opacity-20 group-hover:opacity-30"
                          }`}
                          loading="lazy"
                        />
                      </div>
                      <span className="relative z-10">
                        {t.options.emphasis[emp]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-4">
                  {t.energyLabel}
                </label>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      "Calm",
                      "Confident",
                      "Powerful",
                      "Feminine",
                      "Dynamic",
                    ] as const
                  ).map((eng) => (
                    <button
                      key={eng}
                      onClick={() =>
                        setState({
                          ...state,
                          pose: { ...state.pose, energy: eng },
                        })
                      }
                      className={`group relative overflow-hidden px-4 py-3 text-[9px] uppercase tracking-widest border-2 rounded-lg transition-all ${
                        state.pose.energy === eng
                          ? "bg-white text-black border-white"
                          : "bg-black/40 text-gray-500 border-white/10 hover:border-white/30 hover:bg-black/60"
                      }`}
                    >
                      <div className="absolute inset-0 w-full h-full">
                        <img
                          src={styleImg("energy", eng)}
                          alt={t.options.poseEnergy[eng]}
                          className={`w-full h-full object-cover transition-opacity ${
                            state.pose.energy === eng
                              ? "opacity-30"
                              : "opacity-20 group-hover:opacity-30"
                          }`}
                          loading="lazy"
                        />
                      </div>
                      <span className="relative z-10">
                        {t.options.poseEnergy[eng]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <ImageUploader
              label={`${t.uploadRef} ${t.optional}`}
              imageData={state.pose.image}
              onUpload={(f) => updateImage("pose", f)}
              onClear={() => updateImage("pose", null)}
              lang={lang}
            />

            <div className="flex gap-4 pt-8 border-t border-white/5">
              <button
                onClick={prevStep}
                className="flex-1 py-4 border border-white/10 uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all"
              >
                {t.back}
              </button>
              <button
                onClick={nextStep}
                disabled={isAnyAnalyzing}
                className={`flex-[2] py-4 uppercase tracking-widest text-[10px] font-bold transition-all
                  ${
                    isAnyAnalyzing
                      ? "bg-white/30 text-white/50 cursor-not-allowed"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
              >
                {isAnyAnalyzing
                  ? lang === "ar"
                    ? "جاري التحليل..."
                    : "Analyzing..."
                  : t.next}
              </button>
            </div>
          </div>
        );

      case 7: {
        const finalPrompt = generatePrompt();
        const neg = getNegativePrompt();

        return (
          <div className="space-y-8 animate-in fade-in duration-700">
            <h2 className="text-sm tracking-[0.3em] uppercase mb-8 pb-4 border-b border-white/10">
              {t.steps[7]}
            </h2>

            {/* User Notes / Refinements Section */}
            <div className="space-y-4 p-6 glass-card border border-white/20 bg-white/5">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400">
                  <i className="fa-solid fa-pen-to-square mr-2"></i>
                  Additional Notes & Refinements
                </label>
                {userNotes.trim() && (
                  <button
                    onClick={() => {
                      setUserNotes("");
                      setRefinedNotes("");
                    }}
                    className="text-[9px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <textarea
                value={userNotes}
                onChange={(e) => setUserNotes(e.target.value)}
                placeholder="Add your creative ideas, specific details, or modifications...

Examples:
• Add vintage film grain effect
• Make the lighting more golden hour
• Include oversized sunglasses
• Emphasize fabric texture
• Add red color accent in background"
                className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-sm text-gray-300 leading-relaxed font-light placeholder:text-gray-600 placeholder:text-xs focus:border-white/30 focus:outline-none transition-all min-h-[100px] resize-y"
                style={{ fontFamily: "monospace" }}
              />

              <button
                onClick={refineUserNotes}
                disabled={!userNotes.trim() || isRefining}
                className={`w-full py-3 px-4 rounded-lg uppercase tracking-widest text-[10px] font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  !userNotes.trim() || isRefining
                    ? "bg-white/10 text-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl"
                }`}
              >
                {isRefining ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    AI is refining your notes...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    Enhance with AI
                  </>
                )}
              </button>

              {refinedNotes && (
                <div className="mt-4 p-4 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[9px] uppercase tracking-widest text-purple-300 flex items-center gap-2">
                      <i className="fa-solid fa-sparkles"></i>
                      AI-Enhanced Version
                    </label>
                    <button
                      onClick={() => {
                        setUserNotes(refinedNotes);
                        setRefinedNotes("");
                      }}
                      className="text-[9px] uppercase tracking-widest text-purple-400 hover:text-purple-200 transition-colors"
                    >
                      Use This
                    </button>
                  </div>
                  <p
                    className="text-xs text-gray-300 leading-relaxed font-light"
                    style={{ fontFamily: "monospace" }}
                  >
                    {refinedNotes}
                  </p>
                </div>
              )}

              <p className="text-[9px] text-gray-600 uppercase tracking-widest flex items-center gap-2">
                <i className="fa-solid fa-lightbulb"></i>
                AI will transform your notes into professional prompt additions
              </p>
            </div>

            <div className="space-y-4">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500">
                {t.masterPrompt}
              </label>
              <div className="p-6 glass-card border border-white/10 relative">
                <p className="text-sm text-gray-300 leading-relaxed font-light whitespace-pre-wrap">
                  {finalPrompt}
                </p>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(finalPrompt);
                      alert(t.promptCopied);
                    }}
                    className="text-[10px] uppercase tracking-widest text-white hover:underline flex items-center gap-2 transition-all"
                  >
                    <i className="fa-regular fa-copy"></i> {t.copyPrompt}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500">
                {t.negativePrompt}
              </label>
              <div className="p-4 glass-card border border-white/5">
                <p className="text-[11px] text-gray-500 leading-relaxed italic">
                  {neg}
                </p>
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(neg);
                      alert(
                        lang === "ar"
                          ? "تم نسخ Negative Prompt!"
                          : "Negative Prompt Copied!",
                      );
                    }}
                    className="text-[9px] uppercase tracking-widest text-gray-600 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <i className="fa-regular fa-copy"></i> {t.copyPrompt}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-12">
              <button
                onClick={() => setStep(0)}
                className="flex-1 py-4 border border-white/10 uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all"
              >
                {t.newProject}
              </button>
              <button
                className="flex-[2] py-4 bg-white text-black uppercase tracking-widest text-[10px] font-bold hover:bg-gray-200 transition-all"
                onClick={() => {
                  const dataStr =
                    "data:text/json;charset=utf-8," +
                    encodeURIComponent(
                      JSON.stringify(
                        {
                          ...state,
                          userNotes: userNotes,
                          finalPrompt: finalPrompt,
                          negativePrompt: neg,
                        },
                        null,
                        2,
                      ),
                    );
                  const a = document.createElement("a");
                  a.setAttribute("href", dataStr);
                  a.setAttribute(
                    "download",
                    `${state.projectName || "project"}_fabusse.json`,
                  );
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                }}
              >
                {t.exportData}
              </button>
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <Layout
      currentStep={step}
      totalSteps={8}
      lang={lang}
      onLangToggle={toggleLanguage}
    >
      {renderStep()}
    </Layout>
  );
};

export default App;
