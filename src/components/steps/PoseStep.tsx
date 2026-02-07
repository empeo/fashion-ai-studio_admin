import React from "react";
import type { ProjectState } from "../../types";
import ImageUploader from "../ImageUploader";
import { translations } from "../../translations";
import { styleImg } from "../../utils/styleImages";

interface PoseStepProps {
  state: ProjectState;
  lang: "en" | "ar";
  isAnyAnalyzing: boolean;
  onPoseSelect: (poseId: string) => void;
  onEmphasisToggle: (emphasis: string) => void;
  onEnergyChange: (energy: string) => void;
  onImageUpload: (file: File | null) => void;
  onNext: () => void;
  onBack: () => void;
}

export const PoseStep: React.FC<PoseStepProps> = ({
  state,
  lang,
  isAnyAnalyzing,
  onPoseSelect,
  onEmphasisToggle,
  onEnergyChange,
  onImageUpload,
  onNext,
  onBack,
}) => {
  const t = translations[lang];
  const emphasisOptions = ["Waist", "Shoulders", "Jawline", "Legs", "Neck"] as const;
  const energyOptions = ["Calm", "Confident", "Powerful", "Feminine", "Dynamic"] as const;

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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {t.poses.map((p) => (
          <button
            key={p.id}
            onClick={() => onPoseSelect(p.id)}
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
            {emphasisOptions.map((emp) => (
              <button
                key={emp}
                onClick={() => onEmphasisToggle(emp)}
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
                <span className="relative z-10">{t.options.emphasis[emp]}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-4">
            {t.energyLabel}
          </label>
          <div className="flex flex-wrap gap-2">
            {energyOptions.map((eng) => (
              <button
                key={eng}
                onClick={() => onEnergyChange(eng)}
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
                <span className="relative z-10">{t.options.poseEnergy[eng]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <ImageUploader
        label={`${t.uploadRef} ${t.optional}`}
        imageData={state.pose.image}
        onUpload={(f) => onImageUpload(f)}
        onClear={() => onImageUpload(null)}
        lang={lang}
      />

      <div className="flex gap-4 pt-8 border-t border-white/5">
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
