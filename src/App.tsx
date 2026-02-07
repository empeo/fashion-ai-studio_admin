import React, { useState, useCallback } from "react";
import type { ProjectState, TargetPlatform } from "./types";
import Layout from "./components/Layout";
import { WelcomeStep } from "./components/steps/WelcomeStep";
import { ConfigurationStep } from "./components/steps/ConfigurationStep";
import { PoseStep } from "./components/steps/PoseStep";
import { OutputStep } from "./components/steps/OutputStep";
import { translations } from "./translations";
import { useAIService } from "./hooks/useAIService";
import { useProjectState } from "./hooks/useProjectState";
import { useImageAnalysis } from "./hooks/useImageAnalysis";
import { useNotesRefinement } from "./hooks/useNotesRefinement";
import { PromptGenerationService } from "./services/prompt-generation.service";

const App: React.FC = () => {
  const [step, setStep] = useState(0);
  const [lang, setLang] = useState<"en" | "ar">("en");

  const aiService = useAIService();
  const { state, updateState, updateImage, resetState } = useProjectState();
  const { analyzeImage, isAnalyzing } = useImageAnalysis(aiService);
  const {
    userNotes,
    refinedNotes,
    isRefining,
    setUserNotes,
    refineNotes,
    clearNotes,
  } = useNotesRefinement(aiService);

  const promptService = new PromptGenerationService();
  const t = translations[lang];

  const nextStep = useCallback(() => setStep((s) => s + 1), []);
  const prevStep = useCallback(() => setStep((s) => s - 1), []);
  const toggleLanguage = useCallback(
    () => setLang((prev) => (prev === "en" ? "ar" : "en")),
    [],
  );

  const handleImageUpload = useCallback(
    (section: keyof ProjectState, file: File | null) => {
      updateImage(section, file, file ? (s, f) => analyzeImage(s, f, updateState) : undefined);
    },
    [updateImage, analyzeImage, updateState],
  );

  const handleFieldChange = useCallback(
    (section: keyof ProjectState, field: string, value: string) => {
      updateState((prev) => ({
        ...prev,
        [section]: {
          ...(prev[section] as any),
          [field]: value,
        },
      }));
    },
    [updateState],
  );

  const handlePoseSelect = useCallback(
    (poseId: string) => {
      updateState((prev) => ({
        ...prev,
        pose: { ...prev.pose, selectedPoseId: poseId },
      }));
    },
    [updateState],
  );

  const handleEmphasisToggle = useCallback(
    (emphasis: string) => {
      updateState((prev) => {
        const newEmp = prev.pose.emphasis.includes(emphasis)
          ? prev.pose.emphasis.filter((e) => e !== emphasis)
          : [...prev.pose.emphasis, emphasis];
        return {
          ...prev,
          pose: { ...prev.pose, emphasis: newEmp },
        };
      });
    },
    [updateState],
  );

  const handleEnergyChange = useCallback(
    (energy: string) => {
      updateState((prev) => ({
        ...prev,
        pose: { ...prev.pose, energy },
      }));
    },
    [updateState],
  );

  const handleProjectNameChange = useCallback(
    (name: string) => {
      updateState((prev) => ({ ...prev, projectName: name }));
    },
    [updateState],
  );

  const handlePlatformChange = useCallback(
    (platform: TargetPlatform) => {
      updateState((prev) => ({ ...prev, targetPlatform: platform }));
    },
    [updateState],
  );

  const handleRefineNotes = useCallback(() => {
    refineNotes(state);
  }, [refineNotes, state]);

  const handleUseRefinedNotes = useCallback(() => {
    setUserNotes(refinedNotes);
  }, [refinedNotes, setUserNotes]);

  const handleExport = useCallback(() => {
    const finalPrompt = promptService.generatePrompt(
      state,
      refinedNotes,
      userNotes,
    );
    const negativePrompt = promptService.getNegativePrompt(state);

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(
        JSON.stringify(
          {
            ...state,
            userNotes: userNotes,
            finalPrompt: finalPrompt,
            negativePrompt: negativePrompt,
          },
          null,
          2,
        ),
      );
    const a = document.createElement("a");
    a.setAttribute("href", dataStr);
    a.setAttribute(
      "download",
      `${state.projectName || "project"}_fabusse.json`,
    );
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, [state, refinedNotes, userNotes, promptService]);

  const handleNewProject = useCallback(() => {
    resetState();
    setStep(0);
    clearNotes();
  }, [resetState, clearNotes]);

  const renderStep = () => {
    const isAnyAnalyzing = isAnalyzing(state);
    const finalPrompt = promptService.generatePrompt(state, refinedNotes, userNotes);
    const negativePrompt = promptService.getNegativePrompt(state);

    switch (step) {
      case 0:
        return (
          <WelcomeStep
            state={state}
            lang={lang}
            isAnyAnalyzing={isAnyAnalyzing}
            onProjectNameChange={handleProjectNameChange}
            onPlatformChange={handlePlatformChange}
            onNext={nextStep}
          />
        );

      case 1:
      case 2:
      case 3:
      case 5:
      case 6:
        return (
          <ConfigurationStep
            step={step}
            state={state}
            lang={lang}
            isAnyAnalyzing={isAnyAnalyzing}
            onFieldChange={handleFieldChange}
            onImageUpload={handleImageUpload}
            onNext={nextStep}
            onBack={prevStep}
          />
        );

      case 4:
        return (
          <PoseStep
            state={state}
            lang={lang}
            isAnyAnalyzing={isAnyAnalyzing}
            onPoseSelect={handlePoseSelect}
            onEmphasisToggle={handleEmphasisToggle}
            onEnergyChange={handleEnergyChange}
            onImageUpload={(file) => handleImageUpload("pose", file)}
            onNext={nextStep}
            onBack={prevStep}
          />
        );

      case 7:
        return (
          <OutputStep
            state={state}
            lang={lang}
            finalPrompt={finalPrompt}
            negativePrompt={negativePrompt}
            userNotes={userNotes}
            refinedNotes={refinedNotes}
            isRefining={isRefining}
            onUserNotesChange={setUserNotes}
            onRefineNotes={handleRefineNotes}
            onClearNotes={clearNotes}
            onUseRefinedNotes={handleUseRefinedNotes}
            onNewProject={handleNewProject}
            onExport={handleExport}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Layout
      currentStep={step}
      totalSteps={8}
      lang={lang}
      onLangToggle={toggleLanguage}
    >
      {renderStep()}
    </Layout>
  );
};

export default App;
