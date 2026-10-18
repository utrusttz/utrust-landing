import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, ShoppingBag, Store, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const content = {
    en: {
      btnTitle: "Chat with Utrust",
      status: "Online • Kariakoo Showroom",
      headline: "How can we help you today?",
      sub: "Connect directly with our Dar es Salaam team on WhatsApp.",
      retailTitle: "Buy for Myself (Retail)",
      retailDesc: "Inquire about sizes, retail prices & nearby partner shops.",
      wholesaleTitle: "Wholesale & Distribution Partner",
      wholesaleDesc: "Request per-dozen price book, 14-day swap program & sample kit.",
      retailMsg: encodeURIComponent("Hello Utrust Tanzania! I am interested in buying your clothes for myself. Where can I buy or see retail prices?"),
      wholesaleMsg: encodeURIComponent("Hello Utrust Kariakoo! I want to become a wholesale/retail partner. Please send me your per-dozen wholesale price list."),
    },
    sw: {
      btnTitle: "Ongea Nasi WhatsApp",
      status: "Mtandaoni • Showroom ya Kariakoo",
      headline: "Tukusaidie nini leo?",
      sub: "Wasiliana moja kwa moja na timu yetu ya Dar es Salaam kupitia WhatsApp.",
      retailTitle: "Ninataka Kununua (Rejareja)",
      retailDesc: "Ulizia saizi, bei ya rejareja na maduka yaliyo karibu nawe.",
      wholesaleTitle: "Kuwa Wakala / Muuzaji wa Jumla",
      wholesaleDesc: "Pata orodha ya bei za dazeni, mpango wa kubadilisha saizi na sampuli.",
      retailMsg: encodeURIComponent("Habari Utrust Tanzania! Ninavutiwa na nguo zenu na ninataka kununua. Naweza kupata wapi dukani Dar es Salaam?"),
      wholesaleMsg: encodeURIComponent("Habari Utrust Kariakoo! Ninataka kuwa wakala wa jumla/rejareja. Tafadhali nitumie orodha ya bei za dazeni."),
    },
    zh: {
      btnTitle: "WhatsApp 即时咨询",
      status: "在线 • 卡里亚库展厅直联",
      headline: "今天我们能为您提供什么帮助？",
      sub: "直接与我们在达累斯萨拉姆的销售团队进行 WhatsApp 沟通。",
      retailTitle: "个人购买 / 零售咨询",
      retailDesc: "了解零售款式、尺码推荐及达市就近合作销售门店。",
      wholesaleTitle: "成为批发/零售分销伙伴",
      wholesaleDesc: "索取每打出厂批发底价表、14天对调政策与实物样品盒。",
      retailMsg: encodeURIComponent("您好 Utrust 坦桑尼亚！我想个人购买体验你们的成衣，请问达市哪里可以买到？"),
      wholesaleMsg: encodeURIComponent("您好 Utrust 卡里亚库展厅！我想了解档口/门店批发合作，请发送每打出厂批发底价表。"),
    },
  }[language] || {
    btnTitle: "Chat with Utrust",
    status: "Online • Kariakoo Showroom",
    headline: "How can we help you today?",
    sub: "Connect directly with our Dar es Salaam team on WhatsApp.",
    retailTitle: "Buy for Myself (Retail)",
    retailDesc: "Inquire about sizes, retail prices & nearby partner shops.",
    wholesaleTitle: "Wholesale & Distribution Partner",
    wholesaleDesc: "Request per-dozen price book, 14-day swap program & sample kit.",
    retailMsg: encodeURIComponent("Hello Utrust Tanzania! I am interested in buying your clothes for myself. Where can I buy or see retail prices?"),
    wholesaleMsg: encodeURIComponent("Hello Utrust Kariakoo! I want to become a wholesale/retail partner. Please send me your per-dozen wholesale price list."),
  };

  const phoneNumber = "255761644444";

  return (
    <div ref={widgetRef} className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Dialog Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-92 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#128C7E] text-white p-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-full overflow-hidden bg-white shrink-0 border-2 border-white/40 shadow-xs">
                <img src="/logo.png" alt="Utrust Logo" className="object-cover w-full h-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-tight leading-tight">Utrust Clothing</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-100 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span>{content.status}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-slate-50/70">
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {content.headline} {content.sub}
            </p>

            {/* Option 1: Wholesale / Partner (Primary) */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${content.wholesaleMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-3.5 bg-white hover:bg-orange-50/60 rounded-xl border border-slate-200 hover:border-[#d46f24] transition-all shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-orange-100 text-[#d46f24] group-hover:scale-105 transition-transform">
                    <Store className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#d46f24] transition-colors">
                      {content.wholesaleTitle}
                    </div>
                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      {content.wholesaleDesc}
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-[#d46f24] shrink-0" />
              </div>
            </a>

            {/* Option 2: Retail / End-User */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${content.retailMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-3.5 bg-white hover:bg-emerald-50/60 rounded-xl border border-slate-200 hover:border-[#25D366] transition-all shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-100 text-[#25D366] group-hover:scale-105 transition-transform">
                    <ShoppingBag className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#128C7E] transition-colors">
                      {content.retailTitle}
                    </div>
                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      {content.retailDesc}
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-[#25D366] shrink-0" />
              </div>
            </a>
          </div>

          {/* Footer note */}
          <div className="px-4 py-2.5 bg-white border-t border-slate-100 text-[10px] text-slate-400 text-center font-mono">
            Direct Line: +255 761644444 • Kariakoo, DSM
          </div>
        </div>
      )}

      {/* Floating Main Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2 bg-[#25D366] hover:bg-[#20b859] active:bg-[#1caa52] text-white px-4 py-3 sm:py-3.5 rounded-full shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/35 transition-all hover:scale-105 cursor-pointer"
        aria-label="Open WhatsApp conversation"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="h-6 w-6 fill-current text-white" />
        <span className="text-xs font-bold hidden sm:inline-block pr-1">{content.btnTitle}</span>
      </button>
    </div>
  );
}
