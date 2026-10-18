
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
    alt: "Utrust Front-Pattern Round Neck Cotton T-Shirts",
    tagEn: "Front-Pattern Round Neck Tees",
    tagSw: "Tisheti za Round Neck zenye Michoro",
    tagZh: "前胸时尚印花圆领T恤",
    descEn: "100% Combed Cotton • High-Definition Front Prints & Wash-Tested Durability",
    descSw: "Pamba Safi 100% • Michoro Imara Mbele Isiyopauka Wala Kulegea Kola",
    descZh: "100% 原生精梳棉 • 前胸高清防裂印花，水洗久穿不褪色",
  },
  {
    src: "/showcase/utrust-product-2.jpg",
    alt: "Utrust Everyday High-Comfort Boxer Briefs",
    tagEn: "Brand-New Export Quality Boxer Briefs",
    tagSw: "Nguo za Ndani (Boxer Briefs) Zenye Ubora Mpya",
    tagZh: "全新出口级平角内裤 (Boxer Briefs)",
    descEn: "Anti-Roll Elastic Waistbands, Breathable Stretch & Factory-Sealed Packs",
    descSw: "Mpira Imara wa Kiuno Usiojikunja, Pamba ya Kunyumbuka na Vifurushi Safi vya Kiwandani",
    descZh: "防卷高弹提花腰带，透气亲肤弹力棉，原厂全新密封独立包装",
  },
  {
    src: "/showcase/utrust-product-3.jpg",
    alt: "Utrust 50+ Local Craftsmen and Modern Machinery",
    tagEn: "Proudly Tanzanian Made",
    tagSw: "Zimetengenezwa Tanzania kwa Fahari",
    tagZh: "坦桑尼亚本土骄傲智造",
    descEn: "Over 2 Years in Kigamboni • Empowering 50+ Local Craftsmen with Modern Sewing Machinery",
    descSw: "Zaidi ya Miaka 2 Kigamboni • Ajira 50+ za Watanzania kwa Mashine za Kisasa za Kushona",
    descZh: "扎根达累斯萨拉姆2年 • 先进机械设备带动50余位本地员工就业",
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
