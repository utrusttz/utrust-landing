

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

            {/* Official Social Media Channels */}
            <div className="pt-2">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Official Social Channels
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://www.facebook.com/1290912484105453"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Utrust Clothing on Facebook"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-white transition-all text-xs font-medium group"
                >
                  <svg className="w-4 h-4 fill-current text-blue-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/utrustclothingtz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Utrust Clothing on Instagram"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-pink-950/40 border border-slate-800 hover:border-pink-500/50 text-slate-300 hover:text-white transition-all text-xs font-medium group"
                >
                  <svg className="w-4 h-4 fill-current text-pink-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@utrustclothingtz</span>
                </a>
              </div>
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
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                  <a href="https://wa.me/255741273333" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Retail WhatsApp: +255 741 273 333
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-orange-400 shrink-0" />
                  <a href="https://wa.me/255761644444" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Wholesale B2B: +255 761 644 444
                  </a>
                </div>
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
