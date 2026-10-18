
import { ArrowRight, Wind, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import ProductShowcaseCarousel from "@/components/ProductShowcaseCarousel";

export default function Hero() {
  const { t, language } = useLanguage();

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
                href="#gallery"
                className="inline-flex items-center justify-center gap-2.5 bg-[#d46f24] hover:bg-[#b85816] active:bg-[#9a450e] text-white px-6 py-3.5 rounded-xl font-bold text-base transition-all shadow-md shadow-orange-700/20 hover:shadow-lg hover:shadow-orange-700/30 hover:-translate-y-0.5"
              >
                <span>{t.common.exploreCollection}</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#partner"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 px-5 py-3.5 rounded-xl font-bold text-base transition-all shadow-xs"
              >
                <span>{t.common.beOurPartner}</span>
              </a>
            </div>

            {/* 3 Quick-Scan Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="p-2 bg-orange-50 rounded-lg text-[#d46f24] shrink-0">
                  <Wind className="h-4 w-4" />
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
                  <Sparkles className="h-4 w-4" />
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

            {/* 2. Consumer Quality & Freshness Guarantee Box */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="font-bold text-xs uppercase tracking-wider text-slate-800">
                    {language === "sw" ? "Uzalishaji wa Ndani • Ubora Mpya" : language === "zh" ? "本土自主生产 · 全新出口品质" : "Proudly Tanzanian Made"}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  {language === "sw" ? "Miaka 2+ Kigamboni" : language === "zh" ? "扎根达市2年+" : "2+ Years in Kigamboni"}
                </span>
              </div>

              {/* 2 Highlight Blocks */}
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3 bg-orange-50/70 rounded-xl border border-orange-100/80">
                  <span className="text-xs font-bold text-slate-900 block">
                    {language === "sw" ? "Ajira 50+ za Watanzania" : language === "zh" ? "50+ 本地专业技工" : "50+ Tanzanian Jobs"}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    {language === "sw" ? "Kiwanda chetu cha Kigamboni kimeajiri wazawa" : language === "zh" ? "吉甘博尼工厂深度带动本地就业" : "Empowering local textile workers & families"}
                  </span>
                </div>

                <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100/80">
                  <span className="text-xs font-bold text-slate-900 block">
                    {language === "sw" ? "Mashine za Kisasa" : language === "zh" ? "现代化高精机缝" : "State-of-the-Art Sewing"}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    {language === "sw" ? "Mishono imara na kola zisizolegea" : language === "zh" ? "先进缝纫设备，领口紧实不散边" : "Precision stitching & non-sag collars"}
                  </span>
                </div>
              </div>

              {/* Local Kigamboni / Kariakoo reassurance */}
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600">
                <div className="p-2 bg-white rounded-lg text-[#d46f24] shadow-2xs shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="leading-snug">
                  <strong className="text-slate-900 font-semibold block">
                    {language === "sw" ? "Tisheti za Round Neck & Boxer Briefs Zipo Tayari" : language === "zh" ? "印花圆领T恤与平角内裤 · 现货充足" : "Front-Pattern Tees & Boxer Briefs in Ready Stock"}
                  </strong>
                  <span className="text-[11px] text-slate-500">
                    {language === "sw" ? "Mizigo ipo ghala Kigamboni na Kariakoo kwa ajili ya maduka ya Dar na mikoani." : language === "zh" ? "吉甘博尼仓库与卡里亚库中心现货直发，支持达市及外地客运。" : "Warehouse inventory ready for immediate Dar duka delivery or upcountry bus dispatch."}
                  </span>
                </div>
              </div>

              {/* Primary Consumer Action */}
              <a
                href="#gallery"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-3 rounded-xl font-bold text-xs transition-colors shadow-xs"
              >
                <span>{language === "sw" ? "Tazama Tisheti na Boxer Zetu" : language === "zh" ? "查阅印花T恤与平角内裤系列" : "Browse Front-Pattern Tees & Boxer Briefs"}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
