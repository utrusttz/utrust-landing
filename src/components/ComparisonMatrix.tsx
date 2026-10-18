
import { X, Check, AlertTriangle, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ComparisonMatrix() {
  const { t } = useLanguage();

  const comparisonData = [
    {
      feature: t.comparison.criteria.hygiene.title,
      subtext: t.comparison.criteria.hygiene.sub,
      mitumba: {
        status: "bad" as const,
        text: t.comparison.criteria.hygiene.mitumba,
      },
      utrust: {
        text: t.comparison.criteria.hygiene.utrust,
      },
    },
    {
      feature: t.comparison.criteria.consistency.title,
      subtext: t.comparison.criteria.consistency.sub,
      mitumba: {
        status: "bad" as const,
        text: t.comparison.criteria.consistency.mitumba,
      },
      utrust: {
        text: t.comparison.criteria.consistency.utrust,
      },
    },
    {
      feature: t.comparison.criteria.customization.title,
      subtext: t.comparison.criteria.customization.sub,
      mitumba: {
        status: "bad" as const,
        text: t.comparison.criteria.customization.mitumba,
      },
      utrust: {
        text: t.comparison.criteria.customization.utrust,
      },
    },
    {
      feature: t.comparison.criteria.supply.title,
      subtext: t.comparison.criteria.supply.sub,
      mitumba: {
        status: "warn" as const,
        text: t.comparison.criteria.supply.mitumba,
      },
      utrust: {
        text: t.comparison.criteria.supply.utrust,
      },
    },
    {
      feature: t.comparison.criteria.accountability.title,
      subtext: t.comparison.criteria.accountability.sub,
      mitumba: {
        status: "bad" as const,
        text: t.comparison.criteria.accountability.mitumba,
      },
      utrust: {
        text: t.comparison.criteria.accountability.utrust,
      },
    },
    {
      feature: t.comparison.criteria.tariffs.title,
      subtext: t.comparison.criteria.tariffs.sub,
      mitumba: {
        status: "warn" as const,
        text: t.comparison.criteria.tariffs.mitumba,
      },
      utrust: {
        text: t.comparison.criteria.tariffs.utrust,
      },
    },
  ];

  return (
    <section id="comparison" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            {t.comparison.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            {t.comparison.titleStart}{" "}
            <span className="font-brand font-bold text-emerald-700">Utrust</span> {t.comparison.titleEnd}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-5 px-6 text-sm font-bold text-slate-900 w-1/3">
                    {t.comparison.colCriteria}
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-rose-900 bg-rose-50/50 w-1/3 border-x border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                      {t.comparison.colMitumba}
                    </div>
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-emerald-950 bg-emerald-50/80 w-1/3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                      <span className="font-brand font-bold text-base">Utrust</span> {t.comparison.titleEnd}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {comparisonData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    {/* Feature name */}
                    <td className="py-5 px-6 align-top">
                      <div className="font-bold text-slate-900 text-base mb-0.5">{item.feature}</div>
                      <div className="text-xs text-slate-500">{item.subtext}</div>
                    </td>

                    {/* Mitumba column */}
                    <td className="py-5 px-6 align-top bg-rose-50/20 border-x border-slate-200">
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 shrink-0 rounded-full p-0.5 bg-rose-100 text-rose-600">
                          {item.mitumba.status === "bad" ? (
                            <X className="h-4 w-4" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-amber-600" />
                          )}
                        </div>
                        <span className="text-slate-700 leading-relaxed">{item.mitumba.text}</span>
                      </div>
                    </td>

                    {/* Utrust column */}
                    <td className="py-5 px-6 align-top bg-emerald-50/30">
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 shrink-0 rounded-full p-0.5 bg-emerald-100 text-emerald-700">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="font-medium text-slate-900 leading-relaxed">
                          {item.utrust.text}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Table Callout */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-bold text-base sm:text-lg">
                {t.comparison.bannerTitle}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                {t.comparison.bannerSub}
              </div>
            </div>
            <a
              href="#where-to-buy"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shrink-0"
            >
              <span>{t.comparison.bannerBtn}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
