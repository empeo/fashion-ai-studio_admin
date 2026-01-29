// src/utils/styleImages.ts
import { STYLE_MAP } from "../data/styleMap";
import type { StyleFolder } from "../data/styleMap";

// ✅ FIX #3: Unsplash fallback images for missing styles
const UNSPLASH_FALLBACKS: Record<string, string> = {
  // Age Range
  "18-25":
    "https://images.unsplash.com/photo-1560589168-bd06c13ed713?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  "25-35":
    "https://plus.unsplash.com/premium_photo-1667511316159-faf667237427?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  "35-45":
    "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 580w",
  "45+":
    "https://images.unsplash.com/photo-1608649672519-e8797a9560cf?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VuaW9yJTIwYWdlfGVufDB8fDB8fHww 300w",
  // Body Type
  Slim: "https://images.unsplash.com/photo-1531520563951-4c0e3d3fcacc?q=80&w=356&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 356w",
  Athletic:
    "https://images.unsplash.com/photo-1765045768265-e3eb8471fce3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  Curvy:
    "https://images.unsplash.com/photo-1643130595472-1cb43d8bb8e9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  "Plus Size":
    "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",

  // Facial Style
  Editorial:
    "https://images.unsplash.com/photo-1754473720977-f39053f22586?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEVkaXRvcmlhbCUyMEZhY2lhbHxlbnwwfHwwfHx8MA%3D%3D 300w",
  Commercial:
    "https://images.unsplash.com/photo-1671093057018-70d006f85c0d?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 385w",
  "Avant-Garde":
    "https://images.unsplash.com/photo-1612555699958-7f1a531eff99?q=80&w=433&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 433w",
  Natural:
    "https://images.unsplash.com/photo-1764844463777-2accb463f1b5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",

  // Color Palette
  "Monochrome Black":
    "https://plus.unsplash.com/premium_photo-1688045617936-14ac260f13d2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  "Pure White": "https://images.unsplash.com/photo-1590101489965-2d1d346b86de?q=80&w=794&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 794w",
  "Earth Tones":
    "https://images.unsplash.com/photo-1636663162711-78e196bd4a13?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  "Jewel Tones":
    "https://plus.unsplash.com/premium_photo-1667597508515-8ecc913ef5d6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  Pastels: "https://images.unsplash.com/photo-1619793906000-a89279ed88e0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  Neon: "https://images.unsplash.com/photo-1550275994-cdc89cd1948f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",

  // Texture
  Glossy: "https://plus.unsplash.com/premium_photo-1672680442261-ce8ba0e2fc2d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 872w",
  Matte: "https://plus.unsplash.com/premium_photo-1701015911625-8a5078f6e2dd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  Metallic: "https://plus.unsplash.com/premium_photo-1672088819273-63ffdc71bbd9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  Textured: "https://images.unsplash.com/photo-1750786459886-5cf70a911e72?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 870w",

  // Cut
  Fitted: "https://source.unsplash.com/200x150/?fitted,fashion,tailored",
  Oversized: "https://images.unsplash.com/photo-1759308554122-11008075dba1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  Tailored: "https://images.unsplash.com/photo-1617896848219-5ec29570d680?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  Flowing: "https://images.unsplash.com/photo-1654946280612-268a7ae37196?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 386w",

  // Details
  "Intricate Drapery":
    "https://images.unsplash.com/photo-1753550577234-cc579e6498dc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  Minimalist: "https://plus.unsplash.com/premium_photo-1690034978591-10f7ded473b5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  Embellished:
    "https://images.unsplash.com/photo-1629455047322-a1fa628939a8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  Structured:
    "https://images.unsplash.com/photo-1765114470103-b68286cf9c6d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 580w",

  // Shadow Intensity
  Subtle: "https://images.unsplash.com/photo-1559277493-90a3b46127c3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  Moderate: "https://plus.unsplash.com/premium_photo-1750770000542-25746bd9bb43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  Dramatic:
    "https://images.unsplash.com/photo-1543001746-6b48d1dcf32b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 725w",

  // Lens
  "35mm": "https://plus.unsplash.com/premium_photo-1673349178635-39b654f84401?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 580w",
  "50mm": "https://images.unsplash.com/photo-1682264352134-3cf37109a846?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 870w",
  "85mm": "https://images.unsplash.com/photo-1597840900568-663e38b03f85?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 580w",
  "135mm": "https://images.unsplash.com/photo-1737259380765-5a2331c21fd2?q=80&w=805&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 805w",

  // Style
  Artistic: "https://images.unsplash.com/photo-1607081403956-bc43ea4ddf32?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w",
  Documentary:
    "https://plus.unsplash.com/premium_photo-1761148472224-6c3a17c8e0fd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 870w",
};

export function styleImg(folder: StyleFolder, valueOrLabel: string) {
  const mapped = STYLE_MAP?.[folder]?.[valueOrLabel];
  const fileBase = mapped ?? valueOrLabel;

  // Try local image first
  const localPath = `/styles/${folder}/${encodeURIComponent(fileBase)}.webp`;

  // If we have an Unsplash fallback for this value, we'll use it if local fails
  // The OptionGroup component handles the fallback via onError
  // For now, just return the local path and let the component handle fallback
  return localPath;
}

// Export the fallback map so OptionGroup can use it
export { UNSPLASH_FALLBACKS };
