import { useMemo } from "react";
import { GeminiAIService } from "../services/ai.service";

const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

export function useAIService(): GeminiAIService {
  return useMemo(() => {
    if (!GEMINI_KEY) {
      throw new Error("Missing Gemini API key (VITE_GEMINI_API_KEY).");
    }
    return new GeminiAIService(GEMINI_KEY);
  }, []);
}
