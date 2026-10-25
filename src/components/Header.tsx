
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
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="https://www.facebook.com/1290912484105453"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors p-0.5"
                aria-label="Utrust on Facebook"
                title="Facebook: Utrust Clothing Tanzania"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/utrustclothingtz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors p-0.5"
                aria-label="Utrust on Instagram"
                title="Instagram: @utrustclothingtz"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@utrustcloth"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors p-0.5"
                aria-label="Utrust on TikTok"
                title="TikTok: @utrustcloth"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.86-4.48V8.78a8.18 8.18 0 0 0 4.91 1.63V6.96a4.85 4.85 0 0 1-1-.27z"/>
                </svg>
              </a>
            </div>
            <span className="text-slate-600">•</span>
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
            <a href="#gallery" className="hover:text-[#d46f24] transition-colors">
              {t.header.gallery}
            </a>
            <a href="#where-to-buy" className="hover:text-[#d46f24] transition-colors">
              {t.header.profitCalc}
            </a>
            <a href="#qa" className="hover:text-[#d46f24] transition-colors">
              {t.header.qualityAssurance}
            </a>
            <a href="#partner" className="hover:text-[#d46f24] transition-colors">
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
                        if (typeof window !== "undefined") {
                          const target = item.code === "en" ? "/" : `/${item.code}/`;
                          if (window.location.pathname !== target && window.location.pathname !== target.slice(0, -1)) {
                            window.location.href = target;
                          }
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${
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
              href="#partner"
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
