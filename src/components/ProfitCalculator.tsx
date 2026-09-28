
import { useState } from "react";
import { TrendingUp, Package, Coins, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ProfitCalculator() {
  const { t, language } = useLanguage();
  const [units, setUnits] = useState(2500);
  const [margin, setMargin] = useState(35);

  // Unit wholesale factory base price in Tanzanian Shillings (TZS)
  // Average premium combed cotton blank factory-direct price: TZS 11,500
  const factoryUnitPrice = 11500;
  const retailUnitPrice = Math.round(factoryUnitPrice / (1 - margin / 100));
  const revenue = units * retailUnitPrice;
  const factoryCost = units * factoryUnitPrice;
  const profit = revenue - factoryCost;

  const formatTZS = (amount: number) => `TZS ${Math.round(amount).toLocaleString()}`;

  const turnaround =
    language === "sw"
      ? units <= 2500
        ? "Siku 4–5"
        : units <= 15000
        ? "Siku 7–10"
        : units <= 30000
        ? "Siku 14–18"
        : "Siku 21–25"
      : language === "zh"
      ? units <= 2500
        ? "4–5 个工作日"
        : units <= 15000
        ? "7–10 个工作日"
        : units <= 30000
        ? "14–18 个工作日"
        : "21–25 个工作日"
      : units <= 2500
      ? "4–5 Days"
      : units <= 15000
      ? "7–10 Days"
      : units <= 30000
      ? "14–18 Days"
      : "21–25 Days";

  return (
    <section id="calculator" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-950 border border-orange-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Coins className="h-3.5 w-3.5 text-[#d46f24]" />
            {t.calculator.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            <span className="font-brand font-bold text-[#d46f24]">{t.calculator.titlePrefix}</span> {t.calculator.titleMain}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-8 flex flex-col justify-between">
            
            {/* Slider 1: Order Volume */}
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <div>
                  <label className="text-sm font-bold text-slate-900 block">
                    {t.calculator.volumeLabel}
                  </label>
                  <span className="text-xs text-slate-500">
                    {t.calculator.volumeSub}
                  </span>
                </div>
                <span className="text-2xl font-black font-mono text-[#d46f24] bg-orange-50 border border-orange-200/80 px-3 py-1 rounded-lg">
                  {units.toLocaleString()} <span className="text-xs font-semibold text-slate-500">{t.common.pcs}</span>
                </span>
              </div>

              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#d46f24]"
              />

              {/* Volume quick presets */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-slate-500 font-medium">{t.calculator.quickPresets}</span>
                {[1000, 2500, 10000, 25000, 50000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setUnits(preset)}
                    className={`text-xs px-2.5 py-1 rounded-md font-semibold border transition-all cursor-pointer ${
                      units === preset
                        ? "bg-[#d46f24] text-white border-[#d46f24]"
                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {preset.toLocaleString()} {t.common.pcs}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 2: Distributor Margin */}
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <div>
                  <label className="text-sm font-bold text-slate-900 block">
                    {t.calculator.marginLabel}
                  </label>
                  <span className="text-xs text-slate-500">
                    {t.calculator.marginSub}
                  </span>
                </div>
                <span className="text-2xl font-black font-mono text-[#d46f24] bg-orange-50 border border-orange-200/80 px-3 py-1 rounded-lg">
                  {margin}%
                </span>
              </div>

              <input
                type="range"
                min="10"
                max="60"
                step="1"
                value={margin}
                onChange={(e) => setMargin(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#d46f24]"
              />

              {/* Margin presets */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-slate-500 font-medium">{t.calculator.benchmarks}</span>
                {[
                  { label: t.calculator.marginWholesale, val: 20 },
                  { label: t.calculator.marginRetail, val: 35 },
                  { label: t.calculator.marginBoutique, val: 50 },
                ].map((item) => (
                  <button
                    key={item.val}
                    onClick={() => setMargin(item.val)}
                    className={`text-xs px-2.5 py-1 rounded-md font-semibold border transition-all cursor-pointer ${
                      margin === item.val
                        ? "bg-[#d46f24] text-white border-[#d46f24]"
                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quality Note */}
            <div className="flex items-center gap-3 text-xs text-slate-600 bg-white p-3.5 rounded-xl border border-slate-200">
              <ShieldCheck className="h-5 w-5 text-[#d46f24] shrink-0" />
              <span>
                <strong>{t.calculator.discardAdvantageTitle}</strong> {t.calculator.discardAdvantageText}
              </span>
            </div>

          </div>

          {/* Right Output Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-slate-900/10">
            <div className="space-y-6">
              
              {/* Header pill */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-orange-400 text-xs font-mono font-bold tracking-wider uppercase">
                  <TrendingUp className="h-4 w-4" />
                  <span>{t.calculator.returnsPill}</span>
                </div>
                <span className="text-[11px] font-mono text-orange-400 bg-orange-950/80 border border-orange-800/80 px-2 py-0.5 rounded">
                  {t.calculator.factoryDirectTag}
                </span>
              </div>

              {/* Big Profit Figure */}
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                  {t.calculator.grossProfitLabel}
                </span>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-mono">
                  {formatTZS(profit)}
                </div>
                <div className="text-xs text-orange-400 mt-2 font-semibold flex items-center gap-1.5">
                  <span>{t.calculator.grossReturnOn} {units.toLocaleString()} {t.common.units}</span>
                </div>
              </div>

              {/* Breakdown lines */}
              <div className="space-y-3 pt-4 border-t border-slate-800 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Package className="h-4 w-4 text-slate-500" />
                    {t.calculator.orderSizeLabel}
                  </span>
                  <span className="font-mono font-bold text-white">{units.toLocaleString()} {t.common.units}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Coins className="h-4 w-4 text-slate-500" />
                    {t.calculator.basePriceLabel}
                  </span>
                  <span className="font-mono text-slate-300">TZS {factoryUnitPrice.toLocaleString()} / {t.common.pcs}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Coins className="h-4 w-4 text-slate-500" />
                    {t.calculator.factoryCostLabel}
                  </span>
                  <span className="font-mono text-slate-300">{formatTZS(factoryCost)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Coins className="h-4 w-4 text-slate-500" />
                    {t.calculator.retailRevenueLabel}
                  </span>
                  <span className="font-mono font-bold text-white">{formatTZS(revenue)}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-400" />
                    {t.calculator.dispatchLeadLabel}
                  </span>
                  <span className="font-mono font-bold text-orange-400">{turnaround}</span>
                </div>
              </div>

            </div>

            {/* Card CTA */}
            <div className="pt-8">
              <a
                href="#onboarding"
                className="w-full flex items-center justify-center gap-2 bg-[#d46f24] hover:bg-[#b85816] active:bg-[#9a450e] text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-orange-700/30"
              >
                <span>{t.calculator.lockPricingBtn}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-[11px] text-center text-slate-400 block mt-2">
                {t.calculator.escrowNote}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
