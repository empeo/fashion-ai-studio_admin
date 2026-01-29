import React from "react";
import { translations } from "../translations";

interface LayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  lang: "en" | "ar";
  onLangToggle: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  currentStep,
  totalSteps,
  lang,
  onLangToggle,
}) => {
  const denom = Math.max(totalSteps - 1, 1);
  const progress = (currentStep / denom) * 100;
  const t = translations[lang];

  return (
    <div
      className="min-h-screen flex flex-col max-w-4xl mx-auto px-4 sm:px-6 py-8"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <header className="mb-12 relative">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 text-center">
            <h1
              className={`text-4xl sm:text-5xl font-serif text-white mb-2 ${
                lang === "en" ? "tracking-widest uppercase" : "tracking-normal"
              }`}
            >
              {t.title}
            </h1>
            <p
              className={`text-gray-500 text-xs sm:text-sm ${
                lang === "en" ? "tracking-[0.3em] uppercase" : "tracking-normal"
              }`}
            >
              {t.subtitle}
            </p>
          </div>
          <button
            onClick={onLangToggle}
            className={`absolute top-0 px-3 py-1 border border-white/10 text-[10px] tracking-widest hover:bg-white/5 transition-colors ${
              lang === "en" ? "right-0 uppercase" : "left-0"
            }`}
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
        </div>
      </header>

      {currentStep > 0 && (
        <div className="mb-10">
          <div className="flex justify-between items-center mb-2 text-[10px] uppercase tracking-widest text-gray-500">
            <span>{t.progress}</span>
            <span>
              {t.step} {currentStep} {t.of} {totalSteps - 1}
            </span>
          </div>
          <div className="h-[2px] w-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500 ease-out"
              style={{
                width: `${progress}%`,
                transformOrigin: lang === "ar" ? "right" : "left",
              }}
            />
          </div>
        </div>
      )}

      <main className="flex-1">{children}</main>

      <footer
        className={`mt-12 pt-8 border-t border-white/5 text-center text-[10px] text-gray-600 ${
          lang === "en" ? "uppercase tracking-widest" : "tracking-normal"
        }`}
      >
        &copy; {new Date().getFullYear()} FABUSSE – Designed for Excellence
      </footer>
    </div>
  );
};

export default Layout;
