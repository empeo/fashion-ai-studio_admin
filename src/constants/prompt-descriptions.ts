export const SCENE_DESCRIPTIONS: Record<string, string> = {
  Studio:
    "professional fashion studio with controlled lighting, neutral seamless background, cyclorama wall",
  Runway:
    "dramatic fashion runway with stage lighting, dark audience area, elevated catwalk, spotlights",
  Street:
    "urban street environment with natural daylight, authentic city textures, architectural elements",
  Interior:
    "luxury interior space with architectural details, ambient lighting, high-end furnishings",
};

export const MOOD_DESCRIPTIONS: Record<string, string> = {
  Clean: "clean minimalist atmosphere, bright and airy, pure aesthetic",
  Dramatic: "dramatic high-contrast mood, bold shadows, intense atmosphere",
  Minimal: "minimal zen aesthetic, empty space, subtle elegance",
  Luxury: "luxurious opulent ambiance, rich textures, sophisticated elegance",
};

export const FACIAL_STYLE_DESCRIPTIONS: Record<string, string> = {
  Editorial:
    "editorial facial features with high cheekbones, defined jawline, strong bone structure",
  Commercial:
    "commercial approachable facial features, warm expression, relatable beauty",
  "Avant-Garde":
    "avant-garde unique facial features, striking unconventional beauty, artistic expression",
  Natural: "natural classic beauty, soft features, timeless appeal",
};

export const HAIR_STYLE_DESCRIPTIONS: Record<string, string> = {
  "Sleek Back": "sleek hair pulled back tightly, smooth finish, polished appearance",
  Flowing: "flowing hair with natural movement, soft waves, dynamic volume",
  Sculptural:
    "sculptural architectural hairstyle, artistic shaping, bold structure",
  Minimal: "minimal simple hairstyle, understated elegance, clean lines",
};

export const GARMENT_DESCRIPTIONS: Record<string, string> = {
  Gown: "elegant evening gown with floor-length silhouette",
  Suit: "tailored professional suit with structured shoulders",
  Streetwear: "contemporary streetwear with urban aesthetic",
  "Avant-Garde":
    "avant-garde experimental fashion piece with artistic design",
};

export const FABRIC_DESCRIPTIONS: Record<string, string> = {
  Silk: "luxurious silk fabric with natural sheen and fluid drape",
  Leather: "premium leather with subtle grain texture and structured form",
  Denim: "high-quality denim with visible weave and natural texture",
  Latex: "glossy latex material with tight fit and reflective surface",
  Wool: "fine wool fabric with soft texture and structured drape",
};

export const CUT_DESCRIPTIONS: Record<string, string> = {
  Fitted: "fitted cut following body contours precisely",
  Oversized: "oversized relaxed fit with intentional volume",
  Tailored: "expertly tailored with perfect proportions and clean lines",
  Flowing: "flowing loose cut with graceful movement",
};

export const LIGHTING_DESCRIPTIONS: Record<string, string> = {
  "Soft Box":
    "soft box studio lighting with even diffused illumination, gentle wraparound light, minimal harsh shadows",
  "Hard Rim":
    "hard rim lighting with sharp defined edges, dramatic edge highlights, strong directional light",
  "High Key":
    "high key lighting setup with bright even exposure, minimal shadows, clean bright atmosphere",
  Chiaroscuro:
    "chiaroscuro lighting with strong dramatic contrast, deep rich shadows, Renaissance-style illumination",
};

export const LENS_DESCRIPTIONS: Record<string, string> = {
  "35mm": "shot with 35mm lens, moderate wide angle, natural perspective",
  "50mm": "shot with 50mm lens, natural field of view, true-to-life perspective",
  "85mm": "shot with 85mm portrait lens, slight compression, flattering perspective",
  "135mm":
    "shot with 135mm telephoto lens, strong compression, shallow depth of field",
};

export const REALISM_DESCRIPTIONS: Record<string, string> = {
  "Hyper-realistic":
    "hyper-realistic photorealistic rendering with extreme detail and lifelike quality",
  Cinematic:
    "cinematic film-like quality with professional color grading and mood",
  "Raw Photography":
    "raw unprocessed photography aesthetic with natural authentic look",
};

export const STYLE_DESCRIPTIONS: Record<string, string> = {
  Editorial:
    "editorial high-fashion magazine photography style, artistic and bold",
  Commercial: "commercial catalog photography style, clean and marketable",
  Artistic:
    "artistic conceptual photography style, creative and experimental",
  Documentary:
    "documentary authentic photography style, realistic and candid",
};

export const PLATFORM_SUFFIXES: Record<string, string> = {
  Midjourney: " --style raw --stylize 200 --quality 2 --ar 2:3 --v 6.1",
  "Stable Diffusion":
    ", masterpiece, best quality, highly detailed, professional photography, 8k uhd, dslr",
  "DALL-E":
    ", photorealistic, professional studio photography, high-end fashion editorial",
};
