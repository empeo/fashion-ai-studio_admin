import { GoogleGenAI } from "@google/genai";
import type { AnalysisStatus } from "../types";

export interface ImageAnalysisResult {
  status: AnalysisStatus;
  text: string | null;
  error: string | null;
}

export interface AIService {
  analyzeImage(
    base64Data: string,
    mimeType: string,
    prompt: string,
  ): Promise<string>;
  refineNotes(userNotes: string, context: string): Promise<string>;
}

export class GeminiAIService implements AIService {
  private client: GoogleGenAI;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error("Missing Gemini API key (VITE_GEMINI_API_KEY).");
    }
    this.client = new GoogleGenAI({ apiKey });
  }

  async analyzeImage(
    base64Data: string,
    mimeType: string,
    prompt: string,
  ): Promise<string> {
    const response = await this.client.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { inlineData: { data: base64Data, mimeType } },
        { text: prompt },
      ],
    });

    return (response.text || "").trim();
  }

  async refineNotes(userNotes: string, context: string): Promise<string> {
    const refinementPrompt = `You are an expert AI prompt engineer specializing in fashion photography prompts for AI image generation (Midjourney, Stable Diffusion, DALL-E).

Current Project Context: ${context}

User's Raw Notes/Ideas:
"${userNotes}"

Your task: Transform the user's notes into professionally refined prompt additions that:
1. Use technical photography and fashion terminology
2. Are specific and descriptive (avoid vague terms)
3. Complement the existing selections without contradicting them
4. Follow AI image generation best practices
5. Are formatted as comma-separated detailed descriptions

IMPORTANT RULES:
- Do NOT repeat what's already selected (${context})
- Do NOT contradict existing selections
- Focus on ADDITIONS and ENHANCEMENTS only
- Use professional fashion/photography terminology
- Be specific about colors, textures, lighting effects, props, atmosphere
- Output ONLY the refined prompt text, no explanations or preamble

Refined Prompt Addition:`;

    const response = await this.client.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ text: refinementPrompt }],
    });

    return (response.text || "").trim();
  }
}
