

import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-xl overflow-hidden shadow-md border border-slate-800 bg-[#d46f24] shrink-0">
                <img
                  src="/logo.png"
                  alt="Utrust Clothing Tanzania Limited Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline leading-none">
                  <span className="font-brand font-bold text-2xl text-white tracking-tight">
                    Utrust
                  </span>
                  <span className="text-[#d46f24] font-black text-2xl leading-none">.</span>
                </div>
                <span className="text-[10px] font-bold tracking-wider text-[#d46f24] uppercase leading-tight mt-0.5">
                  {t.common.tagline}
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              <span className="text-white font-medium">Utrust Clothing Tanzania Limited</span> {t.footer.bio}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 bg-orange-950/60 border border-orange-800/60 px-3 py-1.5 rounded-lg w-fit">
              <span>{t.footer.madeInTz}</span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              {t.footer.navTitle}
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  {t.header.mitumbaVsUtrust}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  {t.header.gallery}
                </a>
              </li>
              <li>
                <a href="#capacity" className="hover:text-white transition-colors">
                  {t.header.factorySpecs}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  {t.header.profitCalc}
                </a>
              </li>
              <li>
                <a href="#qa" className="hover:text-white transition-colors">
                  {t.header.qualityAssurance}
                </a>
              </li>
              <li>
                <a href="#partner" className="hover:text-white transition-colors">
                  {t.header.wholesaleAccounts}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Manufacturing Standards (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              {t.footer.complianceTitle}
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-orange-400 shrink-0" />
                <span>ISO 9001:2024 Quality Certified</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-orange-400 shrink-0" />
                <span>OEKO-TEX® Standard 100 Class I</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-orange-400 shrink-0" />
                <span>EAC Rules of Origin Duty-Free</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-orange-400 shrink-0" />
                <span>Tanzania Bureau of Standards (TBS)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Factory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              {t.footer.plantTitle}
            </div>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{t.footer.plantAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-orange-400 shrink-0" />
                <a href="tel:+255761644444" className="hover:text-white transition-colors">
                  +255 761644444
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-orange-400 shrink-0" />
                <a href="mailto:utrustclothingtz@gmail.com" className="hover:text-white transition-colors">
                  utrustclothingtz@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Micro Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Utrust Clothing Tanzania Limited. {t.footer.rights}
          </div>
          <div className="flex items-center gap-6">
            <span>{t.footer.badgeEnterprise}</span>
            <span>•</span>
            <span>{t.footer.badgeZeroWaste}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
