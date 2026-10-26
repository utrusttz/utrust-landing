import { useState } from "react";
import {
  Factory,
  Target,
  Sparkles,
  Users,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  X,
  Layers,
  ShieldCheck,
  Building2,
  MapPin,
  Award,
  ChevronRight
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function AboutUs() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [activePhoto, setActivePhoto] = useState<{ src: string; title: string; desc: string } | null>(null);

  const officialPanels = [
    {
      src: "/about/boardroom-overview.jpg",
      title: "Executive Boardroom & Showroom Display",
      caption: "Panoramic view of Utrust's 4 core corporate panels: Vision, Mission, Value, and Belief.",
      tag: "Boardroom HQ",
    },
    {
      src: "/about/company-profile-panel.jpg",
      title: "20-Year Heritage & US$3M Investment Panel",
      caption: "Official factory specs: 5-acre Kigamboni footprint, 3,000 m² Phase 1, 650 jobs, 50M units target.",
      tag: "Company Profile",
    },
    {
      src: "/about/textile-process-panel.jpg",
      title: "6-Stage Textile Production Diagram",
      caption: "End-to-end closed loop manufacturing from raw Tanzanian cotton fiber to final packaged 3-packs.",
      tag: "Process Flow",
    },
    {
      src: "/about/utrust-value-panel.jpg",
      title: "Utrust Value & Sewing Floor Panel",
      caption: "Dedicated, competent and professional personnel operating modern computerized JUKI lines.",
      tag: "Core Values",
    },
    {
      src: "/about/utrust-belief-panel.jpg",
      title: "Utrust Belief & Dealer Philosophy Panel",
      caption: "Building everlasting positive experiences, mutual prosperity, and long-term trust with dealers.",
      tag: "Dealer Belief",
    },
  ];

  const pillarCards = [
    {
      tag: t.about.vision.tag,
      title: t.about.vision.title,
      statement: t.about.vision.statement,
      desc: t.about.vision.desc,
      icon: Target,
      accentBorder: "border-orange-500",
      accentBg: "bg-orange-50",
      accentText: "text-orange-700",
      iconBg: "bg-orange-500 text-white",
    },
    {
      tag: t.about.mission.tag,
      title: t.about.mission.title,
      statement: t.about.mission.statement,
      desc: t.about.mission.desc,
      icon: Sparkles,
      accentBorder: "border-amber-500",
      accentBg: "bg-amber-50",
      accentText: "text-amber-800",
      iconBg: "bg-amber-500 text-white",
    },
    {
      tag: t.about.value.tag,
      title: t.about.value.title,
      statement: t.about.value.statement,
      desc: t.about.value.desc,
      icon: Users,
      accentBorder: "border-blue-500",
      accentBg: "bg-blue-50",
      accentText: "text-blue-800",
      iconBg: "bg-blue-600 text-white",
    },
    {
      tag: t.about.belief.tag,
      title: t.about.belief.title,
      statement: t.about.belief.statement,
      desc: t.about.belief.desc,
      icon: HeartHandshake,
      accentBorder: "border-emerald-500",
      accentBg: "bg-emerald-50",
      accentText: "text-emerald-800",
      iconBg: "bg-emerald-600 text-white",
    },
  ];

  const stepImages = [
    "/about/company-profile-panel.jpg",
    "/about/textile-process-panel.jpg",
    "/about/textile-process-panel.jpg",
    "/about/textile-process-panel.jpg",
    "/about/utrust-value-panel.jpg",
    "/about/utrust-belief-panel.jpg",
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. Header & Industrial Heritage Stats */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-950 border border-orange-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Factory className="h-3.5 w-3.5 text-[#d46f24]" />
              {t.about.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              <span className="font-brand font-bold text-[#d46f24]">{t.about.titlePrefix}</span> {t.about.titleMain}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>

          {/* 5 Industrial Scale Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {t.about.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight font-brand">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500 leading-normal">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. The 4 Corporate Pillars (Vision, Mission, Value, Belief) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              {t.about.pillarsTitle}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {t.about.pillarsSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillarCards.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border-2 ${pillar.accentBorder} shadow-xs hover:shadow-lg transition-all duration-200 p-6 flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${pillar.accentBg} ${pillar.accentText}`}>
                        {pillar.tag}
                      </span>
                      <div className={`p-2.5 rounded-xl ${pillar.iconBg} shadow-xs`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {pillar.title}
                    </h4>

                    {/* Official Banner Statement from Boardroom Wall */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-semibold text-slate-800 italic leading-snug mb-4">
                      "{pillar.statement}"
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. The 6-Stage Textile Production Process Flow */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl border border-slate-800">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="h-3.5 w-3.5 text-orange-400" />
              {t.about.processBadge}
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              {t.about.processTitle}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed">
              {t.about.processSubtitle}
            </p>
          </div>

          {/* Stepper Tabs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {t.about.processSteps.map((stepItem, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  activeStep === idx
                    ? "bg-[#d46f24] border-[#d46f24] text-white shadow-md shadow-orange-950/40"
                    : "bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 text-slate-300"
                }`}
              >
                <div className="text-[10px] font-mono font-bold tracking-wider opacity-80 uppercase">
                  Step {stepItem.step}
                </div>
                <div className="text-xs font-bold mt-0.5 leading-snug line-clamp-1">
                  {stepItem.name}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Showcase Card */}
          {(() => {
            const current = t.about.processSteps[activeStep];
            return (
              <div className="bg-slate-800/90 rounded-2xl border border-slate-700 p-6 sm:p-8 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="h-9 w-9 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/40 font-mono font-bold text-sm flex items-center justify-center">
                      {current.step}
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
                      {current.name}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {current.headline}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="pt-3 border-t border-slate-700/80 flex flex-wrap gap-2">
                    {current.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 bg-slate-900/90 border border-slate-700 px-3 py-1 rounded-lg text-xs font-medium text-slate-200"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-orange-400" />
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-orange-400" />
                      Kigamboni Plant, Dar es Salaam
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      100% Quality Inspected
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative group">
                  <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 aspect-4/3 relative shadow-inner">
                    <img
                      src={stepImages[activeStep]}
                      alt={current.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <button
                      type="button"
                      onClick={() =>
                        setActivePhoto({
                          src: stepImages[activeStep],
                          title: current.name,
                          desc: current.headline + " — " + current.description,
                        })
                      }
                      className="absolute bottom-3 right-3 bg-slate-900/90 hover:bg-[#d46f24] text-white p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>Inspect Panel</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* 4. Official Executive Boardroom & Production Panels (Photo Verification) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-950 border border-orange-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="h-3.5 w-3.5 text-[#d46f24]" />
                {t.about.galleryBadge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                {t.about.galleryTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Installed inside Utrust's headquarters & showroom — documenting our investment, capacity, values, and dealer philosophy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {officialPanels.map((panel, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhoto({ src: panel.src, title: panel.title, desc: panel.caption })}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md cursor-pointer transition-all duration-200 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative aspect-3/4 overflow-hidden bg-slate-100">
                  <img
                    src={panel.src}
                    alt={panel.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border border-white/20">
                    {panel.tag}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-slate-950/70 p-1.5 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#d46f24] transition-colors line-clamp-1">
                    {panel.title}
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-normal">
                    {panel.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Dealer Commitment & Partnership Callout */}
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-orange-100/50 border-2 border-orange-200 p-8 sm:p-10 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#d46f24]">
                UTRUST DEALER COMMITMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                {t.about.dealerBannerTitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.about.dealerBannerSub}
              </p>
              <blockquote className="border-l-4 border-[#d46f24] pl-4 text-xs sm:text-sm font-semibold italic text-slate-800 bg-white/70 py-2 rounded-r-lg">
                {t.about.dealerBannerQuote}
              </blockquote>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="#partner"
                className="inline-flex items-center justify-center gap-2 bg-[#d46f24] hover:bg-[#b85816] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all text-center"
              >
                <span>{t.about.dealerBannerBtn}</span>
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/255761644444?text=Hello%20Utrust%20Tanzania%2C%20I%20am%20interested%20in%20becoming%20a%20wholesale%20dealer."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-6 py-3.5 rounded-xl text-sm font-bold transition-all text-center"
              >
                <span>WhatsApp Wholesale Desk</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/80">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {activePhoto.title}
                </h4>
                <p className="text-xs text-slate-400">
                  Utrust Factory & Showroom Evidence
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/40">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg border border-slate-800"
              />
            </div>
            <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-xs text-slate-300">
              {activePhoto.desc}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
