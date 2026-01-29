export const TARGET_PLATFORMS = [
  "Midjourney",
  "Stable Diffusion",
  "DALL-E",
  "Other",
] as const;
export type TargetPlatform = (typeof TARGET_PLATFORMS)[number];

export type AnalysisStatus = "idle" | "loading" | "success" | "error";

export interface ImageData {
  file: File | null;
  previewUrl: string | null;
  analysis: {
    status: AnalysisStatus;
    text: string | null;
    error: string | null;
  };
  role: string;
  isActive: boolean;
}

export const createImageData = (role = ""): ImageData => ({
  file: null,
  previewUrl: null,
  analysis: { status: "idle", text: null, error: null },
  role,
  isActive: true,
});

type WithImage<T> = T & { image: ImageData };

export interface ProjectState {
  projectName: string;
  targetPlatform: TargetPlatform;

  environment: WithImage<{ sceneType: string; mood: string }>;

  model: WithImage<{
    gender: string;
    ageRange: string;
    bodyType: string;
    skinTone: string;
    facialStyle: string;
    hairStyle: string;
  }>;

  outfit: WithImage<{
    garmentType: string;
    cut: string;
    fabric: string;
    texture: string;
    colorPalette: string;
    details: string;
  }>;

  pose: WithImage<{
    selectedPoseId: string;
    emphasis: string[];
    energy: string;
  }>;

  lighting: WithImage<{
    lightingType: string;
    shadowIntensity: string;
    lens: string;
    shotType: string;
  }>;

  quality: {
    realismLevel: string;
    style: string;
    imageQuality: string;
  };
}

// ✅ FIX #1: NO DEFAULT SELECTIONS - User must choose everything
export const INITIAL_STATE: Readonly<ProjectState> = {
  projectName: "",
  targetPlatform: "Midjourney",

  environment: {
    sceneType: "", // ✅ Empty by default
    mood: "", // ✅ Empty by default
    image: createImageData("Background & Lighting Inspiration"),
  },

  model: {
    gender: "", // ✅ Empty by default
    ageRange: "", // ✅ Empty by default
    bodyType: "", // ✅ Empty by default
    skinTone: "", // ✅ Empty by default
    facialStyle: "", // ✅ Empty by default
    hairStyle: "", // ✅ Empty by default
    image: createImageData("Face & Body Proportions"),
  },

  outfit: {
    garmentType: "", // ✅ Empty by default
    cut: "", // ✅ Empty by default
    fabric: "", // ✅ Empty by default
    texture: "", // ✅ Empty by default
    colorPalette: "", // ✅ Empty by default
    details: "", // ✅ Empty by default
    image: createImageData("Design & Silhouette Reference"),
  },

  pose: {
    selectedPoseId: "", // ✅ Empty by default
    emphasis: [],
    energy: "", // ✅ Empty by default
    image: createImageData("Pose Reference"),
  },

  lighting: {
    lightingType: "", // ✅ Empty by default
    shadowIntensity: "", // ✅ Empty by default
    lens: "", // ✅ Empty by default
    shotType: "", // ✅ Empty by default
    image: createImageData("Lighting Reference"),
  },

  quality: {
    realismLevel: "", // ✅ Empty by default
    style: "", // ✅ Empty by default
    imageQuality: "", // ✅ Empty by default
  },
};
