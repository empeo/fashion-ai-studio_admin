import React from "react";
import type { ProjectState } from "../../types";
import { translations } from "../../translations";

interface OutputStepProps {
  state: ProjectState;
  lang: "en" | "ar";
  finalPrompt: string;
  negativePrompt: string;
  userNotes: string;
  refinedNotes: string;
  isRefining: boolean;
  onUserNotesChange: (notes: string) => void;
  onRefineNotes: () => void;
  onClearNotes: () => void;
  onUseRefinedNotes: () => void;
  onNewProject: () => void;
  onExport: () => void;
}

export const OutputStep: React.FC<OutputStepProps> = ({
  state,
  lang,
  finalPrompt,
  negativePrompt,
  userNotes,
  refinedNotes,
  isRefining,
  onUserNotesChange,
  onRefineNotes,
  onClearNotes,
  onUseRefinedNotes,
  onNewProject,
  onExport,
}) => {
  const t = translations[lang];

  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    alert(message);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <h2 className="text-sm tracking-[0.3em] uppercase mb-8 pb-4 border-b border-white/10">
        {t.steps[7]}
      </h2>

      <div className="space-y-4 p-6 glass-card border border-white/20 bg-white/5">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-[10px] uppercase tracking-widest text-gray-400">
            <i className="fa-solid fa-pen-to-square mr-2"></i>
            Additional Notes & Refinements
          </label>
          {userNotes.trim() && (
            <button
              onClick={onClearNotes}
              className="text-[9px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        <textarea
          value={userNotes}
          onChange={(e) => onUserNotesChange(e.target.value)}
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
          onClick={onRefineNotes}
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
                onClick={onUseRefinedNotes}
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
              onClick={() =>
                copyToClipboard(finalPrompt, t.promptCopied)
              }
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
            {negativePrompt}
          </p>
          <div className="mt-3 flex justify-end">
            <button
              onClick={() =>
                copyToClipboard(
                  negativePrompt,
                  lang === "ar"
                    ? "تم نسخ Negative Prompt!"
                    : "Negative Prompt Copied!",
                )
              }
              className="text-[9px] uppercase tracking-widest text-gray-600 hover:text-white transition-colors flex items-center gap-2"
            >
              <i className="fa-regular fa-copy"></i> {t.copyPrompt}
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-12">
        <button
          onClick={onNewProject}
          className="flex-1 py-4 border border-white/10 uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all"
        >
          {t.newProject}
        </button>
        <button
          className="flex-[2] py-4 bg-white text-black uppercase tracking-widest text-[10px] font-bold hover:bg-gray-200 transition-all"
          onClick={onExport}
        >
          {t.exportData}
        </button>
      </div>
    </div>
  );
};
