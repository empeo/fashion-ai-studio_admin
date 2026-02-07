import { useState, useCallback } from "react";
import type { ProjectState } from "../types";
import { INITIAL_STATE } from "../types";
import { FileService } from "../services/file.service";

interface UseProjectStateReturn {
  state: ProjectState;
  updateState: (updater: (prev: ProjectState) => ProjectState) => void;
  updateImage: (
    section: keyof ProjectState,
    file: File | null,
    onAnalyze?: (section: keyof ProjectState, file: File) => Promise<void>,
  ) => void;
  resetState: () => void;
}

export function useProjectState(): UseProjectStateReturn {
  const [state, setState] = useState<ProjectState>(INITIAL_STATE);

  const updateState = useCallback(
    (updater: (prev: ProjectState) => ProjectState) => {
      setState(updater);
    },
    [],
  );

  const updateImage = useCallback(
    (
      section: keyof ProjectState,
      file: File | null,
      onAnalyze?: (section: keyof ProjectState, file: File) => Promise<void>,
    ) => {
      setState((prev) => {
        const prevImage = (prev[section] as any).image as any;

        if (prevImage?.previewUrl) {
          FileService.revokeObjectURL(prevImage.previewUrl);
        }

        const previewUrl = file ? FileService.createObjectURL(file) : null;

        return {
          ...prev,
          [section]: {
            ...(prev[section] as any),
            image: {
              ...prevImage,
              file,
              previewUrl,
              analysis: { status: "idle", text: null, error: null },
            },
          },
        };
      });

      if (file && onAnalyze) {
        onAnalyze(section, file);
      }
    },
    [],
  );

  const resetState = useCallback(() => {
    setState((prev) => {
      // Revoke all existing object URLs before resetting
      Object.keys(prev).forEach((key) => {
        const section = prev[key as keyof ProjectState] as any;
        if (section?.image?.previewUrl) {
          FileService.revokeObjectURL(section.image.previewUrl);
        }
      });
      return INITIAL_STATE;
    });
  }, []);

  return { state, updateState, updateImage, resetState };
}
