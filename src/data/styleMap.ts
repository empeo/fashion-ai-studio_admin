// src/data/styleMap.ts
// Maps option values to their corresponding image filenames

export type StyleFolder =
  | "sceneType"
  | "mood"
  | "gender"
  | "ageRange"
  | "bodyType"
  | "skintone"
  | "facialStyle"
  | "hairstyle"
  | "garment"
  | "colorPalette"
  | "fabric"
  | "texture"
  | "cut"
  | "details"
  | "lighting"
  | "shadowIntensity"
  | "lens"
  | "shotType"
  | "realism"
  | "style"
  | "outputQuality"
  | "pose"
  | "emphasis"
  | "energy";

type StyleMap = {
  [K in StyleFolder]?: Record<string, string>;
};

export const STYLE_MAP: StyleMap = {
  sceneType: {
    Studio: "studio",
    Runway: "runway",
    Street: "street",
    Interior: "interior",
  },
  mood: {
    Clean: "clean",
    Dramatic: "dramatic",
    Minimal: "minimal",
    Luxury: "luxury",
  },
  gender: {
    Female: "female",
    Male: "male",
    "Non-binary": "non_binary",
  },
  // ✅ NEW: Age Range mappings
  ageRange: {
    "18-25": "18-25",
    "25-35": "25-35",
    "35-45": "35-45",
    "45+": "45plus",
  },
  // ✅ NEW: Body Type mappings
  bodyType: {
    Slim: "slim",
    Athletic: "athletic",
    Curvy: "curvy",
    "Plus Size": "plussize",
  },
  skintone: {
    Fair: "fair",
    Natural: "natural",
    Olive: "olive",
    Deep: "deep",
  },
  // ✅ NEW: Facial Style mappings
  facialStyle: {
    Editorial: "editorial",
    Commercial: "commercial",
    "Avant-Garde": "avantgarde",
    Natural: "natural",
  },
  hairstyle: {
    "Sleek Back": "sleekback",
    Flowing: "flowing",
    Sculptural: "sculptural",
    Minimal: "minimal",
  },
  garment: {
    Gown: "gown",
    Suit: "suit",
    Streetwear: "streetwear",
    "Avant-Garde": "avantgarde",
  },
  // ✅ NEW: Color Palette mappings
  colorPalette: {
    "Monochrome Black": "monochrome",
    "Pure White": "white",
    "Earth Tones": "earth",
    "Jewel Tones": "jewel",
    Pastels: "pastels",
    Neon: "neon",
  },
  fabric: {
    Silk: "silk",
    Leather: "leather",
    Denim: "denim",
    Latex: "latex",
    Wool: "wool",
  },
  // ✅ NEW: Texture mappings
  texture: {
    Glossy: "glossy",
    Matte: "matte",
    Metallic: "metallic",
    Textured: "textured",
  },
  // ✅ NEW: Cut mappings
  cut: {
    Fitted: "fitted",
    Oversized: "oversized",
    Tailored: "tailored",
    Flowing: "flowing",
  },
  // ✅ NEW: Details mappings
  details: {
    "Intricate Drapery": "drapery",
    Minimalist: "minimalist",
    Embellished: "embellished",
    Structured: "structured",
  },
  lighting: {
    "Soft Box": "softbox",
    "Hard Rim": "hardrim",
    "High Key": "highkey",
    Chiaroscuro: "chiaroscuro",
  },
  // ✅ NEW: Shadow Intensity mappings
  shadowIntensity: {
    Subtle: "subtle",
    Moderate: "moderate",
    Dramatic: "dramatic",
  },
  // ✅ NEW: Lens mappings
  lens: {
    "35mm": "35mm",
    "50mm": "50mm",
    "85mm": "85mm",
    "135mm": "135mm",
  },
  shotType: {
    "Full Body": "fullbody",
    "Medium Shot": "mediumshot",
    "Close-Up": "closeup",
  },
  realism: {
    "Hyper-realistic": "hyperrealistic",
    Cinematic: "cinematic",
    "Raw Photography": "rawphotography",
  },
  // ✅ NEW: Style mappings
  style: {
    Editorial: "editorial",
    Commercial: "commercial",
    Artistic: "artistic",
    Documentary: "documentary",
  },
  outputQuality: {
    "8K UHD": "8K",
    "4K Masterpiece": "4K",
    "Ultra HD": "ultrahd",
  },
  pose: {
    pose_1: "1classicmodel",
    pose_2: "2leaningforward",
    pose_3: "3powerpose",
    pose_4: "4HIP-HOPVIBES",
    pose_5: "5HANDSONHIPS",
    pose_6: "6HANDSINPOCKETS",
    pose_7: "7PLAYINGWITHHAIR",
    pose_8: "8SHOULDERSFORWARD",
    pose_9: "9CONTRAPPOSTO",
    pose_10: "10LOOKINGAWAY",
    pose_11: "11Three-QuarterPose",
    pose_12: "12CrossedLegsPose",
    pose_13: "13S-CurvePose",
    pose_14: "14HandNearMouthPose",
    pose_15: "15SittingontheFloorPose",
    pose_16: "16MotionPose",
    pose_17: "17DefinedJawlinePose",
    pose_18: "18ArchedBackPose",
    pose_19: "19HandonShoulderPose",
    pose_20: "20HeadTiltPose",
    pose_21: "21WalkingPose",
    pose_22: "22ArmsRaisedPose",
    pose_23: "23EnvironmentalInteractionPose",
    pose_24: "24FaceTouchPose",
    pose_25: "25RecliningPose",
    pose_26: "26CasualSittingPose",
    pose_27: "27BackPose",
    pose_28: "28LeaningAgainsttheWallPose",
    pose_29: "29HandsClaspedinFrontPose",
    pose_30: "30OneLegForwardPose",
    pose_31: "31ChinDownEyesUpPose",
    pose_32: "32ElbowonKneePose",
    pose_33: "33KneesUpSittingPose",
    pose_34: "34OneLegBentSittingPose",
    pose_35: "35CouchSittingPose",
    pose_36: "36ElegantRecliningPose",
    pose_37: "37BackViewwithArmsBehindPose",
    pose_38: "38MirrorPose",
    pose_39: "39LegsApartSittingPose",
    pose_40: "40StairSittingPose",
    pose_41: "41ArmsCrossedPose",
    pose_42: "42StretchingPose",
    pose_43: "43ElegantHandPose",
    pose_44: "44ProfilePose",
    pose_45: "45ElbowLeanPose",
    pose_46: "46LegUpAgainsttheWallPose",
    pose_47: "47AngledShoulderPose",
    pose_48: "48HandonOutfitPose",
    pose_49: "49Over-the-ShoulderLookPose",
    pose_50: "50RelaxedArmPose",
  },
  emphasis: {
    Waist: "waist",
    Shoulders: "shoulders",
    Jawline: "jawline",
    Legs: "legs",
    Neck: "neck",
  },
  energy: {
    Calm: "calm",
    Confident: "confident",
    Powerful: "powerful",
    Feminine: "feminine",
    Dynamic: "dynamic",
  },
};
