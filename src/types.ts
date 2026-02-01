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

export const INITIAL_STATE: Readonly<ProjectState> = {
  projectName: "",
  targetPlatform: "Midjourney",

  environment: {
    sceneType: "",
    mood: "",
    image: createImageData("Background & Lighting Inspiration"),
  },

  model: {
    gender: "",
    ageRange: "",
    bodyType: "",
    skinTone: "",
    facialStyle: "",
    hairStyle: "",
    image: createImageData("Face & Body Proportions"),
  },

  outfit: {
    garmentType: "",
    cut: "",
    fabric: "",
    texture: "",
    colorPalette: "",
    details: "",
    image: createImageData("Design & Silhouette Reference"),
  },

  pose: {
    selectedPoseId: "",
    emphasis: [],
    energy: "",
    image: createImageData("Pose Reference"),
  },

  lighting: {
    lightingType: "",
    shadowIntensity: "",
    lens: "",
    shotType: "",
    image: createImageData("Lighting Reference"),
  },

  quality: {
    realismLevel: "",
    style: "",
    imageQuality: "",
  },
};
