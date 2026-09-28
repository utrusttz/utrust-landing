
import { useState, useRef, useEffect } from "react";

import { MapPin, Globe, UserCircle, Phone, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import type { Language } from "@/lib/i18n";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages: Array<{ code: Language; label: string; flag: string; nativeName: string }> = [
    { code: "en", label: "EN", flag: "🇬🇧", nativeName: "English" },
    { code: "sw", label: "SW", flag: "🇹🇿", nativeName: "Kiswahili" },
    { code: "zh", label: "ZH", flag: "🇨🇳", nativeName: "中文 (Chinese)" },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top micro-announcement bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-orange-400 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d46f24] animate-pulse" />
              {t.header.announcementDirect}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{t.header.announcementTransit}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+255761644444" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="h-3 w-3 text-orange-400" />
              <span>+255 761644444</span>
            </a>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <MapPin className="h-3 w-3 text-slate-400" />
              {t.common.darEsSalaam}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 md:h-20 items-center justify-between gap-4">
          
          {/* Logo Brand Anchor */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-orange-500/20 rounded-lg p-1">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-xl overflow-hidden shadow-sm border border-slate-200/80 group-hover:scale-105 transition-transform bg-[#d46f24] shrink-0">
              <img
                src="/logo.png"
                alt="Utrust Clothing Tanzania Limited Logo"
                loading="eager"
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline leading-none">
                <span className="font-brand font-bold text-2xl tracking-tight text-slate-950">
                  Utrust
                </span>
                <span className="text-[#d46f24] font-black text-2xl leading-none">.</span>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-[#d46f24] uppercase leading-tight mt-0.5">
                {t.common.tagline}
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#comparison" className="hover:text-[#d46f24] transition-colors">
              {t.header.mitumbaVsUtrust}
            </a>
            <a href="#capacity" className="hover:text-[#d46f24] transition-colors">
              {t.header.factorySpecs}
            </a>
            <a href="#calculator" className="hover:text-[#d46f24] transition-colors">
              {t.header.profitCalc}
            </a>
            <a href="#qa" className="hover:text-[#d46f24] transition-colors">
              {t.header.qualityAssurance}
            </a>
            <a href="#onboarding" className="hover:text-[#d46f24] transition-colors">
              {t.header.wholesaleAccounts}
            </a>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Live Telemetry Pill */}
            <div className="hidden xl:flex items-center gap-2 bg-orange-50 text-orange-900 border border-orange-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d46f24]"></span>
              </span>
              <span className="tracking-tight">{t.header.unitsPerHr}</span>
            </div>

            {/* Language Selector Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-2.5 sm:px-3 py-2 rounded-lg border border-slate-300/80 transition-all cursor-pointer shadow-2xs"
                title="Change Language / Badili Lugha / 切换语言"
              >
                <Globe className="h-3.5 w-3.5 text-[#d46f24] shrink-0" />
                <span className="text-base leading-none">{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <ChevronDown className={`h-3 w-3 text-slate-500 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-1.5 w-44 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in-50 zoom-in-95">
                  <div className="px-3 py-1 text-[10px] font-mono font-bold uppercase text-slate-400 border-b border-slate-100 mb-1">
                    Language / Lugha / 语言
                  </div>
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        setLanguage(item.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold transition-colors text-left ${
                        language === item.code
                          ? "bg-orange-50 text-orange-900 font-bold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{item.flag}</span>
                        <span>{item.nativeName}</span>
                      </div>
                      {language === item.code && <Check className="h-3.5 w-3.5 text-[#d46f24]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* B2B Portal Button */}
            <a
              href="#onboarding"
              className="inline-flex items-center gap-2 bg-[#d46f24] hover:bg-[#b85816] active:bg-[#9a450e] text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:shadow-orange-700/20 whitespace-nowrap"
            >
              <UserCircle className="h-4 w-4 shrink-0" />
              <span>{t.common.b2bPortal}</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
