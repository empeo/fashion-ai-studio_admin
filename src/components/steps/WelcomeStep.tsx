import React from "react";
import type { ProjectState, TargetPlatform } from "../../types";
import { translations } from "../../translations";

interface WelcomeStepProps {
  state: ProjectState;
  lang: "en" | "ar";
  isAnyAnalyzing: boolean;
  onProjectNameChange: (name: string) => void;
  onPlatformChange: (platform: TargetPlatform) => void;
  onNext: () => void;
}

export const WelcomeStep: React.FC<WelcomeStepProps> = ({
  state,
  lang,
  isAnyAnalyzing,
  onProjectNameChange,
  onPlatformChange,
  onNext,
}) => {
  const t = translations[lang];

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
            onChange={(e) => onProjectNameChange(e.target.value)}
            placeholder={t.projectPlaceholder}
            className="w-full bg-transparent border-b border-white/20 py-3 text-center focus:border-white transition-colors outline-none tracking-widest uppercase text-sm"
          />
        </div>

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
                onClick={() => onPlatformChange(platform.value as TargetPlatform)}
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
          onClick={onNext}
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
};
