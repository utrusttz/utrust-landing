
import { ArrowRight, Zap, Truck, ShieldCheck, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import ProductShowcaseCarousel from "@/components/ProductShowcaseCarousel";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-slate-50/60 border-b border-slate-200/70 pt-10 pb-16 md:py-16 lg:py-20">
      {/* Subtle ambient lighting decorations */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Core Value Proposition (6 cols) */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 bg-orange-50 border border-orange-200/80 rounded-full px-4 py-1.5 text-xs font-bold text-orange-950 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#d46f24]" />
              <span>{t.hero.badge}</span>
              <span className="text-orange-300">•</span>
              <span className="text-orange-700">{t.hero.isoBadge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-950 tracking-tight leading-[1.12]">
                {t.hero.headlineStart}{" "}
                <span className="font-brand font-bold text-[#d46f24] underline decoration-orange-300 decoration-wavy decoration-2 underline-offset-8">
                  {t.hero.headlineHighlight}
                </span>{" "}
                {t.hero.headlineEnd}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed pt-1">
                {t.hero.subheadline}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#onboarding"
                className="inline-flex items-center justify-center gap-2.5 bg-[#d46f24] hover:bg-[#b85816] active:bg-[#9a450e] text-white px-6 py-3.5 rounded-xl font-bold text-base transition-all shadow-md shadow-orange-700/20 hover:shadow-lg hover:shadow-orange-700/30 hover:-translate-y-0.5"
              >
                <span>{t.common.requestQuote}</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#capacity"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 px-5 py-3.5 rounded-xl font-bold text-base transition-all shadow-xs"
              >
                <span>{t.common.viewSpecs}</span>
              </a>
            </div>

            {/* Trust Badges Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="p-2 bg-orange-50 rounded-lg text-[#d46f24] shrink-0">
                  <Truck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.hero.turnaroundTitle}</div>
                  <div className="text-[11px] text-slate-500">{t.hero.turnaroundSub}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="p-2 bg-orange-50 rounded-lg text-[#d46f24] shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.hero.inspectionTitle}</div>
                  <div className="text-[11px] text-slate-500">{t.hero.inspectionSub}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="p-2 bg-orange-50 rounded-lg text-[#d46f24] shrink-0">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.hero.automationTitle}</div>
                  <div className="text-[11px] text-slate-500">{t.hero.automationSub}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Product Showcase Carousel + Factory Cockpit (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* 1. The Animated 2.5s Crossfade Carousel */}
            <ProductShowcaseCarousel />

            {/* 2. Integrated Telemetry Summary Strip */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 space-y-4">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d46f24]" />
                  </span>
                  <span className="font-mono font-bold tracking-wider text-slate-900 uppercase text-[11px]">
                    {t.hero.telemetryTitle}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#d46f24] bg-orange-50 px-2 py-0.5 rounded border border-orange-200/60">
                  {t.hero.telemetryLive}
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50/90 rounded-xl p-3 border border-slate-100">
                  <span className="text-[11px] font-mono uppercase text-slate-500 block mb-0.5">
                    {t.hero.instantOutputLabel}
                  </span>
                  <div className="text-2xl font-black text-slate-950 tracking-tight font-mono">
                    {t.hero.instantOutputVal}
                  </div>
                  <span className="text-[11px] font-semibold text-[#d46f24] block">
                    {t.hero.instantOutputUnit}
                  </span>
                </div>

                <div className="bg-slate-50/90 rounded-xl p-3 border border-slate-100">
                  <span className="text-[11px] font-mono uppercase text-slate-500 block mb-0.5">
                    {t.hero.monthlyCapLabel}
                  </span>
                  <div className="text-2xl font-black text-slate-950 tracking-tight font-mono">
                    {t.hero.monthlyCapVal}
                  </div>
                  <span className="text-[11px] font-semibold text-[#d46f24] block">
                    {t.hero.monthlyCapUnit}
                  </span>
                </div>
              </div>

              {/* Line Utilization Progress */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">{t.hero.lineUtilizationLabel}</span>
                  <span className="font-mono font-bold text-orange-950">{t.hero.bookedVal}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#d46f24] rounded-full transition-all duration-1000 w-[78%]" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>{t.hero.activeUnitsLabel}</span>
                  <span>{t.hero.availableUnitsLabel}</span>
                </div>
              </div>

              {/* Quick Q4 advisory */}
              <div className="flex items-start gap-2.5 bg-amber-50/80 border border-amber-200/80 rounded-xl p-2.5">
                <TrendingUp className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-[11px] text-amber-900 leading-snug">
                  {t.hero.quarterlyAdvisory}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#onboarding"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-3 rounded-xl font-bold text-xs transition-colors shadow-xs"
              >
                <span>{t.hero.reserveButton}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
