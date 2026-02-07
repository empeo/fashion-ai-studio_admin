import type { ProjectState } from "../types";
import {
  SCENE_DESCRIPTIONS,
  MOOD_DESCRIPTIONS,
  FACIAL_STYLE_DESCRIPTIONS,
  HAIR_STYLE_DESCRIPTIONS,
  GARMENT_DESCRIPTIONS,
  FABRIC_DESCRIPTIONS,
  CUT_DESCRIPTIONS,
  LIGHTING_DESCRIPTIONS,
  LENS_DESCRIPTIONS,
  REALISM_DESCRIPTIONS,
  STYLE_DESCRIPTIONS,
  PLATFORM_SUFFIXES,
} from "../constants/prompt-descriptions";
import { translations } from "../translations";

export class PromptGenerationService {
  generatePrompt(state: ProjectState, refinedNotes: string, userNotes: string): string {
    const parts: string[] = [];

    this.addEnvironmentSection(state, parts);
    this.addModelSection(state, parts);
    this.addOutfitSection(state, parts);
    this.addPoseSection(state, parts);
    this.addLightingSection(state, parts);
    this.addQualitySection(state, parts);
    this.addUserRefinements(refinedNotes, userNotes, parts);

    if (parts.length === 0) {
      return "Please select options and configure your project to generate a prompt.";
    }

    const prompt = parts.join(",\n\n");
    const suffix = PLATFORM_SUFFIXES[state.targetPlatform] || "";
    
    return prompt + suffix;
  }

  private addEnvironmentSection(state: ProjectState, parts: string[]): void {
    const envParts: string[] = [];

    if (state.environment.image.isActive && state.environment.image.analysis.text) {
      envParts.push(
        `Environment reference: ${state.environment.image.analysis.text}`,
      );
    }

    if (state.environment.sceneType) {
      const sceneDesc =
        SCENE_DESCRIPTIONS[state.environment.sceneType] ||
        `${state.environment.sceneType} setting`;
      envParts.push(sceneDesc);
    }

    if (state.environment.mood) {
      const moodDesc =
        MOOD_DESCRIPTIONS[state.environment.mood] ||
        `${state.environment.mood} mood`;
      envParts.push(moodDesc);
    }

    if (envParts.length > 0) {
      parts.push(`Environment: ${envParts.join(", ")}`);
    }
  }

  private addModelSection(state: ProjectState, parts: string[]): void {
    const modelParts: string[] = [];

    if (state.model.image.isActive && state.model.image.analysis.text) {
      modelParts.push(`Model reference: ${state.model.image.analysis.text}`);
    }

    modelParts.push(
      "natural realistic skin texture with visible pores and fine details, soft subsurface scattering, healthy skin appearance, natural skin imperfections, no plastic or waxy finish, photorealistic skin rendering",
    );

    if (state.model.gender) {
      modelParts.push(`${state.model.gender} fashion model`);
    }

    if (state.model.ageRange) {
      modelParts.push(`age range ${state.model.ageRange} years old`);
    }

    if (state.model.bodyType) {
      modelParts.push(
        `${state.model.bodyType} body type with natural proportions and realistic anatomy`,
      );
    }

    if (state.model.skinTone) {
      modelParts.push(
        `${state.model.skinTone} skin tone with accurate color preservation and realistic undertones`,
      );
    }

    if (state.model.facialStyle) {
      const faceDesc =
        FACIAL_STYLE_DESCRIPTIONS[state.model.facialStyle] ||
        `${state.model.facialStyle} facial features`;
      modelParts.push(faceDesc);
    }

    if (state.model.hairStyle) {
      const hairDesc =
        HAIR_STYLE_DESCRIPTIONS[state.model.hairStyle] ||
        `${state.model.hairStyle} hairstyle`;
      modelParts.push(hairDesc);
    }

    if (modelParts.length > 0) {
      parts.push(`Model: ${modelParts.join(", ")}`);
    }
  }

  private addOutfitSection(state: ProjectState, parts: string[]): void {
    const outfitParts: string[] = [];

    if (state.outfit.image.isActive && state.outfit.image.analysis.text) {
      outfitParts.push(
        `Outfit reference (MUST match): ${state.outfit.image.analysis.text}`,
      );
    }

    if (state.outfit.garmentType) {
      const garmentDesc =
        GARMENT_DESCRIPTIONS[state.outfit.garmentType] ||
        state.outfit.garmentType;
      outfitParts.push(garmentDesc);
    }

    if (state.outfit.colorPalette) {
      outfitParts.push(
        `${state.outfit.colorPalette} color scheme with precise color accuracy`,
      );
    }

    if (state.outfit.fabric) {
      const fabricDesc =
        FABRIC_DESCRIPTIONS[state.outfit.fabric] ||
        `${state.outfit.fabric} fabric`;
      outfitParts.push(fabricDesc);
    }

    if (state.outfit.texture) {
      outfitParts.push(
        `${state.outfit.texture} finish with realistic material properties`,
      );
    }

    if (state.outfit.cut) {
      const cutDesc =
        CUT_DESCRIPTIONS[state.outfit.cut] || `${state.outfit.cut} cut`;
      outfitParts.push(cutDesc);
    }

    if (state.outfit.details) {
      outfitParts.push(
        `${state.outfit.details} design details with meticulous craftsmanship`,
      );
    }

    outfitParts.push(
      "high-end construction with precise stitching and professional finishing",
    );

    if (outfitParts.length > 0) {
      parts.push(`Outfit: ${outfitParts.join(", ")}`);
    }
  }

  private addPoseSection(state: ProjectState, parts: string[]): void {
    const poseParts: string[] = [];

    if (state.pose.image.isActive && state.pose.image.analysis.text) {
      poseParts.push(`Pose reference: ${state.pose.image.analysis.text}`);
    }

    if (state.pose.selectedPoseId) {
      const selectedPose = translations.en.poses.find(
        (p) => p.id === state.pose.selectedPoseId,
      );
      if (selectedPose) {
        poseParts.push(selectedPose.prompt);
      }
    }

    if (state.pose.emphasis.length > 0) {
      poseParts.push(
        `emphasizing and highlighting ${state.pose.emphasis.join(", ")} with intentional positioning`,
      );
    }

    if (state.pose.energy) {
      poseParts.push(
        `${state.pose.energy} energy and attitude throughout the pose`,
      );
    }

    poseParts.push(
      "anatomically correct posture with natural joint angles and realistic body mechanics",
    );

    if (poseParts.length > 0) {
      parts.push(`Pose: ${poseParts.join(", ")}`);
    }
  }

  private addLightingSection(state: ProjectState, parts: string[]): void {
    const lightingParts: string[] = [];

    if (state.lighting.image.isActive && state.lighting.image.analysis.text) {
      lightingParts.push(
        `Lighting reference: ${state.lighting.image.analysis.text}`,
      );
    }

    if (state.lighting.lightingType) {
      const lightDesc =
        LIGHTING_DESCRIPTIONS[state.lighting.lightingType] ||
        `${state.lighting.lightingType} lighting`;
      lightingParts.push(lightDesc);
    }

    if (state.lighting.shadowIntensity) {
      lightingParts.push(
        `${state.lighting.shadowIntensity} shadow intensity with realistic shadow falloff`,
      );
    }

    if (state.lighting.lens) {
      const lensDesc =
        LENS_DESCRIPTIONS[state.lighting.lens] ||
        `shot with ${state.lighting.lens} lens`;
      lightingParts.push(lensDesc);
    }

    if (state.lighting.shotType) {
      lightingParts.push(
        `${state.lighting.shotType} framing with professional composition`,
      );
    }

    lightingParts.push(
      "professional photography depth of field, bokeh, accurate exposure, color grading",
    );

    if (lightingParts.length > 0) {
      parts.push(`Lighting & Camera: ${lightingParts.join(", ")}`);
    }
  }

  private addQualitySection(state: ProjectState, parts: string[]): void {
    const qualityParts: string[] = [];

    if (state.quality.realismLevel) {
      const realismDesc =
        REALISM_DESCRIPTIONS[state.quality.realismLevel] ||
        `${state.quality.realismLevel} rendering quality`;
      qualityParts.push(realismDesc);
    }

    if (state.quality.style) {
      const styleDesc =
        STYLE_DESCRIPTIONS[state.quality.style] ||
        `${state.quality.style} photography style`;
      qualityParts.push(styleDesc);
    }

    if (state.quality.imageQuality) {
      qualityParts.push(
        `${state.quality.imageQuality} ultra high resolution output`,
      );
    }

    qualityParts.push(
      "professional fashion photography quality, editorial magazine standard, expert retouching, cinematic color grading, masterpiece composition",
    );

    if (qualityParts.length > 0) {
      parts.push(`Quality: ${qualityParts.join(", ")}`);
    }
  }

  private addUserRefinements(
    refinedNotes: string,
    userNotes: string,
    parts: string[],
  ): void {
    const notesToUse = refinedNotes.trim() || userNotes.trim();
    if (notesToUse) {
      parts.push(`Additional refinements: ${notesToUse}`);
    }
  }


  getNegativePrompt(state: ProjectState): string {
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
  }
}
