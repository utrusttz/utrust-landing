
import { Shield, Award, Microscope, CheckCircle2, ShieldCheck, FileCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const icons = [Shield, Award, Microscope, CheckCircle2];

export default function QualityAssurance() {
  const { t } = useLanguage();

  return (
    <section id="qa" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-950 border border-orange-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="h-3.5 w-3.5 text-[#d46f24]" />
            {t.qa.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            <span className="font-brand font-bold text-[#d46f24]">{t.qa.titlePrefix}</span> {t.qa.titleMain}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t.qa.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.qa.cards.map((item, idx) => {
            const Icon = icons[idx] || Shield;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  {/* Icon Header */}
                  <div className="h-14 w-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 text-[#d46f24]">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Title & Tag */}
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#d46f24] block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Highlights list */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {item.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d46f24]" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom certification callout bar */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-50 rounded-lg text-[#d46f24] hidden sm:block">
              <FileCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                {t.qa.certificateBanner}
              </div>
              <div className="text-xs text-slate-500">
                {t.qa.certificateSub}
              </div>
            </div>
          </div>
          <a
            href="#onboarding"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#d46f24] hover:text-[#b85816] bg-orange-50 hover:bg-orange-100 px-4 py-2.5 rounded-lg border border-orange-200 transition-colors shrink-0"
          >
            <span>{t.qa.certificateBtn}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
