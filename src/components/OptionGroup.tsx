import React from "react";
import { styleImg, UNSPLASH_FALLBACKS } from "../utils/styleImages";

export type OptionItem =
  | string
  | {
      value: string;
      label: string;
      image?: string;
    };

interface OptionGroupProps {
  label: string;
  options: OptionItem[];
  currentValue: string;
  onChange: (val: string) => void;
  styleFolder?: Parameters<typeof styleImg>[0];
  imageValueMode?: "value" | "label";
}

const OptionGroup: React.FC<OptionGroupProps> = ({
  label,
  options,
  currentValue,
  onChange,
  styleFolder,
  imageValueMode = "value",
}) => {
  // Default placeholder image (minimalist SVG)
  const placeholderImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect fill='%23111' width='200' height='150'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%23666'%3ENo Image%3C/text%3E%3C/svg%3E";

  return (
    <div className="mb-8">
      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4">
        {label}
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {options.map((opt) => {
          const value = typeof opt === "string" ? opt : opt.value;
          const display = typeof opt === "string" ? opt : opt.label;
          const image = styleFolder
            ? styleImg(
                styleFolder,
                imageValueMode === "label" ? display : value,
              )
            : typeof opt === "string"
              ? undefined
              : opt.image;
          const isActive = currentValue === value;

          // ✅ FIX #3: Get Unsplash fallback if available
          const unsplashFallback =
            UNSPLASH_FALLBACKS[value] || placeholderImage;

          return (
            <button
              type="button"
              key={value}
              onClick={() => onChange(value)}
              className={`group flex flex-col items-center p-4 transition-all duration-300 border-2 rounded-lg ${
                isActive
                  ? "bg-white text-black border-white scale-105 shadow-2xl"
                  : "bg-black/40 text-gray-400 border-white/10 hover:border-white/40 hover:scale-102 hover:bg-black/60"
              }`}
              aria-pressed={isActive}
            >
              {/* ✅ FIX #2: MUCH LARGER IMAGES - 160px height */}
              <div className="w-full h-full mb-3 overflow-hidden rounded-md bg-black/20">
                <img
                  src={image || unsplashFallback}
                  alt={display}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    isActive
                      ? "grayscale-0 opacity-100"
                      : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                  }`}
                  loading="lazy"
                  onError={(e) => {
                    // ✅ FIX #3: Fallback to Unsplash, then to placeholder
                    if (e.currentTarget.src !== unsplashFallback) {
                      e.currentTarget.src = unsplashFallback;
                    } else {
                      e.currentTarget.src = placeholderImage;
                    }
                  }}
                />
              </div>
              <span
                className={`text-[11px] uppercase tracking-widest text-center leading-tight font-medium ${
                  isActive ? "text-black" : "text-gray-300"
                }`}
              >
                {display}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default OptionGroup;
