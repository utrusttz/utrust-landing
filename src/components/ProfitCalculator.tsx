import { useState } from "react";
import { Sparkles, AlertTriangle, CheckCircle2, ArrowRight, ShieldCheck, Wallet, RefreshCw } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ProfitCalculator() {
  const { t } = useLanguage();
  const [pieces, setPieces] = useState(5);

  // Reality-based Tanzanian pricing & replacement frequency
  const mitumbaPiecePrice = 10000;
  const mitumbaCyclesPerYear = 3; // Secondhand clothes lose collar/waistband after 2-3 months of wash
  const mitumbaTotal = pieces * mitumbaCyclesPerYear * mitumbaPiecePrice;

  const utrustPiecePrice = 12000;
  const utrustCyclesPerYear = 1; // 1 pack lasts the full year with 50+ washes
  const utrustTotal = pieces * utrustCyclesPerYear * utrustPiecePrice;

  const savings = mitumbaTotal - utrustTotal;
  const savingsPercent = Math.round((savings / mitumbaTotal) * 100);

  const formatTZS = (amount: number) => `TZS ${Math.round(amount).toLocaleString()}`;

  return (
    <section id="calculator" className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-950 border border-orange-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Wallet className="h-3.5 w-3.5 text-[#d46f24]" />
            {t.calculator.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            <span className="font-brand font-bold text-[#d46f24]">{t.calculator.titlePrefix}</span> {t.calculator.titleMain}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Interactive Slider Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-10">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <label className="text-base font-bold text-slate-900 block">
                  {t.calculator.sliderLabel}
                </label>
                <span className="text-xs text-slate-500">
                  {t.calculator.sliderSub}
                </span>
              </div>
              <div className="self-start sm:self-center">
                <span className="text-2xl sm:text-3xl font-black font-brand text-[#d46f24] bg-orange-50 border border-orange-200/80 px-4 py-1.5 rounded-xl inline-block shadow-2xs">
                  {pieces} <span className="text-sm font-bold text-slate-600">{t.common.pcs}</span>
                </span>
              </div>
            </div>

            <input
              id="rotation-pieces-slider"
              name="rotationPieces"
              aria-label={t.calculator.sliderLabel}
              aria-valuemin={2}
              aria-valuemax={10}
              aria-valuenow={pieces}
              type="range"
              min="2"
              max="10"
              step="1"
              value={pieces}
              onChange={(e) => setPieces(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#d46f24]"
            />

            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-slate-500 font-medium">{t.calculator.presetPrefix}</span>
              {[3, 4, 5, 7, 10].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setPieces(preset)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-bold border transition-all cursor-pointer ${
                    pieces === preset
                      ? "bg-[#d46f24] text-white border-[#d46f24] shadow-xs"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {preset} {t.common.pcs}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch mb-10">
          
          {/* Card 1: Mitumba (Used) */}
          <div className="bg-rose-50/40 rounded-2xl border border-rose-200/80 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 bg-rose-100/70 px-3 py-1 rounded-full w-fit">
                <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />
                <span>{t.calculator.mitumbaTag}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {t.calculator.mitumbaTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {t.calculator.mitumbaPriceNote}
                </p>
              </div>

              <div className="space-y-2 py-2 text-xs text-slate-700 border-y border-rose-100">
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 text-rose-500 shrink-0" />
                  <span>{t.calculator.mitumbaReplacement}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold shrink-0">⏳</span>
                  <span>{t.calculator.mitumbaLifespan}</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                {t.calculator.mitumbaCons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold mt-0.5">✕</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-rose-200/80">
              <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider font-mono">
                {t.calculator.mitumbaSpendLabel}
              </span>
              <div className="text-3xl font-black text-rose-950 tracking-tight font-mono mt-1">
                {formatTZS(mitumbaTotal)}
              </div>
              <span className="text-[11px] text-rose-700 block mt-0.5">
                (Money spent replacing worn-out clothes every few months)
              </span>
            </div>
          </div>

          {/* Card 2: Utrust Brand-New Cotton */}
          <div className="bg-emerald-50/40 rounded-2xl border-2 border-emerald-500/60 p-6 sm:p-8 flex flex-col justify-between shadow-md relative">
            <div className="absolute -top-3.5 right-6 bg-[#d46f24] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
              Recommended Choice
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full w-fit">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                <span>{t.calculator.utrustTag}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {t.calculator.utrustTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {t.calculator.utrustPriceNote}
                </p>
              </div>

              <div className="space-y-2 py-2 text-xs text-slate-700 border-y border-emerald-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-900">{t.calculator.utrustReplacement}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{t.calculator.utrustLifespan}</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-700">
                {t.calculator.utrustPros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-200/80">
              <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider font-mono">
                {t.calculator.utrustSpendLabel}
              </span>
              <div className="text-3xl font-black text-emerald-950 tracking-tight font-mono mt-1">
                {formatTZS(utrustTotal)}
              </div>
              <span className="text-[11px] text-emerald-700 font-semibold block mt-0.5">
                (One pack keeps you looking sharp all year round)
              </span>
            </div>
          </div>

        </div>

        {/* Big Savings Highlight Banner */}
        <div className="max-w-5xl mx-auto bg-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-[#d46f24]" />
              <span>{t.calculator.savingsBadge}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight">
              {t.calculator.savingsHeadline}{" "}
              <span className="text-[#d46f24] font-mono">{formatTZS(savings)}</span>{" "}
              <span className="text-emerald-400 text-xl font-bold">({savingsPercent}% saved)</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xl">
              {t.calculator.savingsSub}
            </p>
          </div>

          <div className="shrink-0 text-center md:text-right space-y-2">
            <span className="text-xs text-slate-400 block">
              {t.calculator.retailerNote}
            </span>
            <a
              href="#partner"
              className="inline-flex items-center gap-2 bg-[#d46f24] hover:bg-[#b85816] active:bg-[#9a450e] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-orange-950/40"
            >
              <span>{t.calculator.retailerBtn}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
