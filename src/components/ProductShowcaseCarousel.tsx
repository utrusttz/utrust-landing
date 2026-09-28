
import { useState, useEffect } from "react";

import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface SlideInfo {
  src: string;
  alt: string;
  tagEn: string;
  tagSw: string;
  tagZh: string;
  descEn: string;
  descSw: string;
  descZh: string;
}

const slides: SlideInfo[] = [
  {
    src: "/showcase/utrust-product-1.jpg",
    alt: "Utrust Everyday Comfort Cotton Boxer Shorts",
    tagEn: "100% Combed Cotton Blanks",
    tagSw: "Pamba Safi 100% Iliyochanwa",
    tagZh: "100% 原生精梳纯棉",
    descEn: "Everyday Comfort™ Collection • 8 Vibrant Colorways & Tartan Prints",
    descSw: "Mkusanyiko wa Everyday Comfort™ • Rangi 8 na Miundo ya Kisasa",
    descZh: "Everyday Comfort™ 经典系列 • 8款常青纯色与经典格纹印花",
  },
  {
    src: "/showcase/utrust-product-2.jpg",
    alt: "Utrust Athletic Mesh & Floral Boxer Shorts with Gift Box",
    tagEn: "Retail Gift Packaging Sets",
    tagSw: "Vifurushi vya Sanduku za Rejareja",
    tagZh: "外销精品礼盒套装",
    descEn: "Athletic Mesh, Tropical Prints & Premium 6-Pack Presentation Gift Box",
    descSw: "Nguo za Michezo, Miundo ya Maua na Sanduku la Zawadi la Vipande 6",
    descZh: "运动速干网眼、热带印花系列与高档 6条装礼品展示盒",
  },
  {
    src: "/showcase/utrust-product-3.jpg",
    alt: "Utrust Multi-Style Underwear Line with Luxury Box",
    tagEn: "OEM / ODM Custom Labeling",
    tagSw: "Uzalishaji wa Nembo Binafsi (OEM)",
    tagZh: "OEM / ODM 贴牌定制",
    descEn: "Direct Factory Multi-Packs, Waistband Branding & Master Carton Export",
    descSw: "Vifurushi vya Kiwandani, Lebo za Kiuno na Katoni za Kusafirisha Nje",
    descZh: "原厂直供多联包、专属提花腰带定制与集装箱大宗出口包装",
  },
];

export default function ProductShowcaseCarousel() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch between the 3 images every 2.5 seconds (2500ms)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[currentIndex];

  const getTag = (slide: SlideInfo) => {
    if (language === "sw") return slide.tagSw;
    if (language === "zh") return slide.tagZh;
    return slide.tagEn;
  };

  const getDesc = (slide: SlideInfo) => {
    if (language === "sw") return slide.descSw;
    if (language === "zh") return slide.descZh;
    return slide.descEn;
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg bg-slate-900 group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 4:3 / 16:11 portrait-friendly viewport */}
      <div className="relative w-full h-[360px] sm:h-[400px] overflow-hidden bg-slate-950">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={idx === 0 ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out"
              />
              {/* Subtle gradient scrim at the top and bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/60 pointer-events-none" />
            </div>
          );
        })}

        {/* Top Badges Header */}
        <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-md">
            <Sparkles className="h-3 w-3 text-orange-400" />
            <span>UTRUST: EVERYDAY COMFORT</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-[#d46f24] text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
            <span>{getTag(activeSlide)}</span>
          </div>
        </div>

        {/* Left / Right Chevron Controls (visible on hover) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all cursor-pointer border border-white/10"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all cursor-pointer border border-white/10"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Bottom Overlay Info & Progress Indicator */}
        <div className="absolute bottom-3 inset-x-3 z-20 space-y-2">
          <div className="bg-slate-900/85 backdrop-blur-md border border-white/15 rounded-xl p-3 text-white shadow-xl">
            <div className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider mb-0.5">
              {language === "sw" ? "Mfululizo wa Kiwandani" : language === "zh" ? "原厂量产成衣" : "Factory Production Series"}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug line-clamp-2">
              {getDesc(activeSlide)}
            </div>
          </div>

          {/* 3 Progress Bars (switching every 2.5 seconds) */}
          <div className="grid grid-cols-3 gap-1.5 pt-0.5">
            {slides.map((_, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className="h-1.5 rounded-full overflow-hidden bg-white/25 hover:bg-white/40 transition-colors cursor-pointer"
                  aria-label={`Jump to slide ${idx + 1}`}
                >
                  <div
                    className={`h-full bg-[#d46f24] transition-all duration-300 ${
                      isCurrent ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
