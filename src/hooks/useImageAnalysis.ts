import { useRef, useCallback } from "react";
import type { ProjectState, AnalysisStatus } from "../types";
import { FileService } from "../services/file.service";
import { AIService } from "../services/ai.service";
import { ANALYSIS_PROMPTS } from "../constants/analysis-prompts";

interface UseImageAnalysisReturn {
  analyzeImage: (
    section: keyof ProjectState,
    file: File,
    updateState: (updater: (prev: ProjectState) => ProjectState) => void,
  ) => Promise<void>;
  isAnalyzing: (state: ProjectState) => boolean;
}

export function useImageAnalysis(aiService: AIService): UseImageAnalysisReturn {
  const requestIdRef = useRef<Record<string, number>>({});

  const analyzeImage = useCallback(
    async (
      section: keyof ProjectState,
      file: File,
      updateState: (updater: (prev: ProjectState) => ProjectState) => void,
    ) => {
      const reqId = (requestIdRef.current[section as string] ?? 0) + 1;
      requestIdRef.current[section as string] = reqId;

      try {
        updateState((prev) => ({
          ...prev,
          [section]: {
            ...(prev[section] as any),
            image: {
              ...(prev[section] as any).image,
              analysis: { status: "loading" as AnalysisStatus, text: null, error: null },
            },
          },
        }));

        const base64Data = await FileService.toBase64(file);
        const prompt = ANALYSIS_PROMPTS[section] || ANALYSIS_PROMPTS.default;

        const description = await aiService.analyzeImage(
          base64Data,
          file.type,
          prompt,
        );

        if (requestIdRef.current[section as string] !== reqId) return;

        updateState((prev) => ({
          ...prev,
          [section]: {
            ...(prev[section] as any),
            image: {
              ...(prev[section] as any).image,
              analysis: {
                status: "success" as AnalysisStatus,
                text: description,
                error: null,
              },
            },
          },
        }));
      } catch (error: any) {
        console.error("Analysis error:", error);

        if (requestIdRef.current[section as string] !== reqId) return;

        updateState((prev) => ({
          ...prev,
          [section]: {
            ...(prev[section] as any),
            image: {
              ...(prev[section] as any).image,
              analysis: {
                status: "error" as AnalysisStatus,
                text: null,
                error: error?.message || "Failed to analyze image.",
              },
            },
          },
        }));
      }
    },
    [aiService],
  );

  const isAnalyzing = useCallback((state: ProjectState): boolean => {
    return (
      state.environment.image.analysis.status === "loading" ||
      state.model.image.analysis.status === "loading" ||
      state.outfit.image.analysis.status === "loading" ||
      state.pose.image.analysis.status === "loading" ||
      state.lighting.image.analysis.status === "loading"
    );
  }, []);

  return { analyzeImage, isAnalyzing };
}
