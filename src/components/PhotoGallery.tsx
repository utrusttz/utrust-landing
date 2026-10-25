import { useState, useEffect, useCallback } from "react";
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Layers,
  Shirt,
  Box,
  Palette,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

type CategoryFilter = "all" | "cotton" | "athletic" | "packaging" | "oem";

export default function PhotoGallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = t.gallery.items;
  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! === 0 ? filteredItems.length - 1 : prev! - 1
    );
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! === filteredItems.length - 1 ? 0 : prev! + 1
    );
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, handlePrev, handleNext]);

  const filterTabs: Array<{ id: CategoryFilter; label: string; icon: any; count: number }> = [
    {
      id: "all",
      label: t.gallery.filterAll,
      icon: Layers,
      count: items.length,
    },
    {
      id: "cotton",
      label: t.gallery.filterCotton,
      icon: Shirt,
      count: items.filter((i) => i.category === "cotton").length,
    },
    {
      id: "athletic",
      label: t.gallery.filterAthletic,
      icon: Palette,
      count: items.filter((i) => i.category === "athletic").length,
    },
    {
      id: "packaging",
      label: t.gallery.filterPackaging,
      icon: Box,
      count: items.filter((i) => i.category === "packaging").length,
    },
    {
      id: "oem",
      label: t.gallery.filterOem,
      icon: Sparkles,
      count: items.filter((i) => i.category === "oem").length,
    },
  ];

  const currentLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d46f24]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#d46f24]/20 border border-[#d46f24]/40 text-orange-300 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#d46f24]" />
            <span>{t.gallery.badge}</span>
          </div>

          <h2 className="font-brand font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {t.gallery.titlePrefix}{" "}
            <span className="text-[#d46f24]">
              {t.gallery.titleMain}
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.gallery.subtitle}
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8 sm:mt-10">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setLightboxIndex(null);
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#d46f24] text-white shadow-lg shadow-orange-900/40 ring-2 ring-[#d46f24]/50 scale-102"
                      : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isActive ? "text-white" : "text-orange-400"}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-slate-950/70 rounded-2xl overflow-hidden border border-slate-800 hover:border-[#d46f24]/60 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-orange-950/30 flex flex-col cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Subtle scrim & badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-slate-950/40 pointer-events-none" />

                {/* Category Tag (Top-left) */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d46f24] animate-pulse" />
                    {item.tag}
                  </span>
                </div>

                {/* Zoom Trigger Button (Top-right) */}
                <button
                  type="button"
                  aria-label={t.gallery.zoomHint}
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-900/70 hover:bg-[#d46f24] text-white backdrop-blur-md border border-white/10 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-md cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(index);
                  }}
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-slate-950/90">
                <div>
                  <h3 className="font-brand font-bold text-lg text-white group-hover:text-orange-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Technical Specs Tags */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.specs.slice(0, 2).map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-800/90 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60"
                      >
                        <CheckCircle2 className="h-3 w-3 text-orange-400 shrink-0" />
                        <span className="line-clamp-1">{spec}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-[#d46f24] pt-2 group-hover:translate-x-1 transition-transform">
                    <span>{t.gallery.zoomHint}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {lightboxIndex !== null && currentLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Controls Bar */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-50">
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-lg">
              <span className="text-[#d46f24]">{t.gallery.photoCounter}</span>
              <span>
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-slate-800/80 hover:bg-[#d46f24] text-white border border-slate-700 transition-all cursor-pointer shadow-lg"
              aria-label={t.gallery.closeLightbox}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-[#d46f24] text-white border border-slate-700/80 transition-all cursor-pointer shadow-xl"
            aria-label={t.gallery.prevPhoto}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-[#d46f24] text-white border border-slate-700/80 transition-all cursor-pointer shadow-xl"
            aria-label={t.gallery.nextPhoto}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row z-40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Display */}
            <div className="relative flex-1 bg-black flex items-center justify-center p-2 sm:p-4 min-h-[300px] sm:min-h-[420px] lg:min-h-[540px]">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-[50vh] lg:max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-md select-none"
              />
            </div>

            {/* Modal Content Info Panel */}
            <div className="w-full lg:w-96 p-6 sm:p-8 flex flex-col justify-between bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800 overflow-y-auto">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-[#d46f24]/20 border border-[#d46f24]/40 text-orange-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d46f24] animate-ping" />
                  {currentLightboxItem.tag}
                </div>

                <h3 className="font-brand font-bold text-2xl text-white tracking-tight">
                  {currentLightboxItem.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentLightboxItem.description}
                </p>

                <div className="pt-4 border-t border-slate-800 space-y-2.5">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
                    {t.gallery.specsLabel}
                  </div>
                  <ul className="space-y-2">
                    {currentLightboxItem.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-[#d46f24] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800 mt-6 space-y-3">
                <a
                  href="#onboarding"
                  onClick={closeLightbox}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#d46f24] hover:bg-[#b85816] active:bg-[#9a450e] text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-orange-700/30"
                >
                  <span>{t.gallery.orderSampleBtn}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="w-full inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t.gallery.closeLightbox}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
