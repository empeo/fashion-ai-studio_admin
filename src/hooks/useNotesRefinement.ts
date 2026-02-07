import { useState, useCallback } from "react";
import type { ProjectState } from "../types";
import type { AIService } from "../services/ai.service";
import { translations } from "../translations";

interface UseNotesRefinementReturn {
  userNotes: string;
  refinedNotes: string;
  isRefining: boolean;
  setUserNotes: (notes: string) => void;
  refineNotes: (state: ProjectState) => Promise<void>;
  clearNotes: () => void;
}

export function useNotesRefinement(
  aiService: AIService,
): UseNotesRefinementReturn {
  const [userNotes, setUserNotes] = useState<string>("");
  const [refinedNotes, setRefinedNotes] = useState<string>("");
  const [isRefining, setIsRefining] = useState<boolean>(false);

  const buildContext = useCallback((state: ProjectState): string => {
    const contextParts: string[] = [];

    if (state.environment.sceneType)
      contextParts.push(`Scene: ${state.environment.sceneType}`);
    if (state.environment.mood) contextParts.push(`Mood: ${state.environment.mood}`);
    if (state.model.gender) contextParts.push(`Model: ${state.model.gender}`);
    if (state.outfit.garmentType)
      contextParts.push(`Garment: ${state.outfit.garmentType}`);
    if (state.pose.selectedPoseId) {
      const pose = translations.en.poses.find(
        (p) => p.id === state.pose.selectedPoseId,
      );
      if (pose) contextParts.push(`Pose: ${pose.name}`);
    }
    if (state.lighting.lightingType)
      contextParts.push(`Lighting: ${state.lighting.lightingType}`);

    return contextParts.join(", ");
  }, []);

  const refineNotes = useCallback(
    async (state: ProjectState) => {
      if (!userNotes.trim()) {
        alert("Please enter some notes first!");
        return;
      }

      setIsRefining(true);

      try {
        const context = buildContext(state);
        const refined = await aiService.refineNotes(userNotes, context);
        setRefinedNotes(refined);
      } catch (error: any) {
        console.error("Refinement error:", error);
        alert("Failed to refine notes: " + (error?.message || "Unknown error"));
      } finally {
        setIsRefining(false);
      }
    },
    [userNotes, aiService, buildContext],
  );

  const clearNotes = useCallback(() => {
    setUserNotes("");
    setRefinedNotes("");
  }, []);

  return {
    userNotes,
    refinedNotes,
    isRefining,
    setUserNotes,
    refineNotes,
    clearNotes,
  };
}
