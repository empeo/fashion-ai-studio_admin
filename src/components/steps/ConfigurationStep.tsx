import React from "react";
import type { ProjectState } from "../../types";
import OptionGroup from "../OptionGroup";
import ImageUploader from "../ImageUploader";
import { translations } from "../../translations";
import { styleImg } from "../../utils/styleImages";

interface FieldConfig {
  label: string;
  options: Array<{
    value: string;
    label: string;
    image?: string;
  }>;
  val: string;
  fn: (v: string) => void;
}

interface ConfigurationStepProps {
  step: number;
  state: ProjectState;
  lang: "en" | "ar";
  isAnyAnalyzing: boolean;
  onFieldChange: (section: keyof ProjectState, field: string, value: string) => void;
  onImageUpload: (section: keyof ProjectState, file: File | null) => void;
  onNext: () => void;
  onBack: () => void;
}

export const ConfigurationStep: React.FC<ConfigurationStepProps> = ({
  step,
  state,
  lang,
  isAnyAnalyzing,
  onFieldChange,
  onImageUpload,
  onNext,
  onBack,
}) => {
  const t = translations[lang];

  const getStepConfig = (): {
    title: string;
    fields: FieldConfig[];
    assetKey: keyof ProjectState | null;
  } | null => {
    const configs = [
      null,
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
            fn: (v: string) => onFieldChange("environment", "sceneType", v),
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
            fn: (v: string) => onFieldChange("environment", "mood", v),
          },
        ],
        assetKey: "environment" as keyof ProjectState,
      },
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
            fn: (v: string) => onFieldChange("model", "gender", v),
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
            fn: (v: string) => onFieldChange("model", "ageRange", v),
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
            fn: (v: string) => onFieldChange("model", "bodyType", v),
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
            fn: (v: string) => onFieldChange("model", "skinTone", v),
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
            fn: (v: string) => onFieldChange("model", "facialStyle", v),
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
            fn: (v: string) => onFieldChange("model", "hairStyle", v),
          },
        ],
        assetKey: "model" as keyof ProjectState,
      },
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
            fn: (v: string) => onFieldChange("outfit", "garmentType", v),
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
            fn: (v: string) => onFieldChange("outfit", "colorPalette", v),
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
            fn: (v: string) => onFieldChange("outfit", "fabric", v),
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
            fn: (v: string) => onFieldChange("outfit", "texture", v),
          },
          {
            label: t.labels.cut,
            options: [
              { value: "Fitted", label: t.options.cut.Fitted, image: styleImg("cut", "Fitted") },
              { value: "Oversized", label: t.options.cut.Oversized },
              { value: "Tailored", label: t.options.cut.Tailored },
              { value: "Flowing", label: t.options.cut.Flowing },
            ],
            val: state.outfit.cut,
            fn: (v: string) => onFieldChange("outfit", "cut", v),
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
            fn: (v: string) => onFieldChange("outfit", "details", v),
          },
        ],
        assetKey: "outfit" as keyof ProjectState,
      },
      null,
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
            fn: (v: string) => onFieldChange("lighting", "lightingType", v),
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
            fn: (v: string) => onFieldChange("lighting", "shadowIntensity", v),
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
            fn: (v: string) => onFieldChange("lighting", "lens", v),
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
            fn: (v: string) => onFieldChange("lighting", "shotType", v),
          },
        ],
        assetKey: "lighting" as keyof ProjectState,
      },
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
            fn: (v: string) => onFieldChange("quality", "realismLevel", v),
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
            fn: (v: string) => onFieldChange("quality", "style", v),
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
            fn: (v: string) => onFieldChange("quality", "imageQuality", v),
          },
        ],
        assetKey: null,
      },
    ];

    return configs[step] || null;
  };

  const config = getStepConfig();
  if (!config) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-sm tracking-[0.3em] uppercase mb-8 pb-4 border-b border-white/10">
        {config.title}
      </h2>

      {config.fields.map((f, i) => (
        <OptionGroup
          key={i}
          label={f.label}
          options={f.options}
          currentValue={f.val}
          onChange={f.fn}
        />
      ))}

      {config.assetKey && (
        <ImageUploader
          label={`${t.uploadRef} ${
            config.assetKey === "outfit" || config.assetKey === "model"
              ? t.primary
              : t.optional
          }`}
          imageData={(state as any)[config.assetKey].image}
          onUpload={(f) => onImageUpload(config.assetKey!, f)}
          onClear={() => onImageUpload(config.assetKey!, null)}
          lang={lang}
        />
      )}

      <div className="flex gap-4 pt-8">
        <button
          onClick={onBack}
          className="flex-1 py-4 border border-white/10 uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all"
        >
          {t.back}
        </button>
        <button
          onClick={onNext}
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
};
