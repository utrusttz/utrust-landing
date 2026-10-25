
import { MapPin, Truck, Store, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhereToBuy() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "Easy Ways to Buy",
      titlePrefix: "Get Your Fresh",
      titleMain: "Utrust Clothes Today",
      subtitle:
        "Whether you're shopping for yourself or stocking your boutique, getting brand-new Tanzanian cotton basics has never been easier.",
      cards: [
        {
          icon: Store,
          badge: "Walk-in & Feel",
          title: "Kariakoo Showroom & Partner Shops",
          desc: "Visit our commercial showroom in Kariakoo or walk into any of our partnered neighborhood clothing stores across Dar es Salaam (Sinza, Mwenge, Kinondoni).",
          action: "Visit Kariakoo Hub",
          link: "#partner",
        },
        {
          icon: WhatsAppIcon,
          badge: "Fastest Option",
          title: "Order Directly on WhatsApp",
          desc: "Chat directly with our sales desk on WhatsApp. Browse available front-printed t-shirts and boxer briefs, pay via Lipa Namba, and receive same-day delivery.",
          action: "Chat on WhatsApp (+255 741 273 333)",
          link: "https://wa.me/255741273333?text=Hello%20Utrust!%20I%20want%20to%20order%20ready-made%20clothes.",
          isExternal: true,
        },
        {
          icon: Truck,
          badge: "Upcountry Delivery",
          title: "Same-Day Bus Parcel Dispatch",
          desc: "Living outside Dar es Salaam? We dispatch same-afternoon parcels to your preferred bus office (Shabiby, Dar Express, Kilimanjaro, Saratoga) with waybill photo proof.",
          action: "Inquire for Upcountry Bus",
          link: "https://wa.me/255761644444?text=Hello%20Utrust!%20I%20want%20upcountry%20bus%20parcel%20delivery.",
          isExternal: true,
        },
      ],
      wholesaleBannerTitle: "Do you own a clothing shop or wholesale stall?",
      wholesaleBannerSub: "Get factory-direct wholesale carton prices, starting from just 3 dozens with our 14-day size swap guarantee.",
      wholesaleBannerBtn: "Become a Partner Stockist →",
    },
    sw: {
      badge: "Njia Rahisi za Kununua",
      titlePrefix: "Jinsi ya Kupata Nguo Zetu",
      titleMain: "Mpya Kabisa za Utrust Leo",
      subtitle:
        "Iwe unanunua kwa matumizi yako binafsi au unataka kuweka mzigo kwenye duka lako, kupata nguo bora za pamba halisi za Kitanzania ni rahisi sana.",
      cards: [
        {
          icon: Store,
          badge: "Njoo Ushuhudie",
          title: "Showroom ya Kariakoo & Maduka ya Karibu",
          desc: "Fika kwenye kituo chetu cha kibiashara Kariakoo au tembelea maduka ya nguo ya jirani yako Dar es Salaam (Sinza, Mwenge, Kinondoni) yanayouza Utrust.",
          action: "Angalia Ofisi ya Kariakoo",
          link: "#partner",
        },
        {
          icon: WhatsAppIcon,
          badge: "Haraka Zaidi",
          title: "Agiza Moja kwa Moja WhatsApp",
          desc: "Tuma ujumbe kwenye WhatsApp ya mauzo. Chagua tisheti zenye michoro au boxer briefs, lipa kwa Lipa Namba, na mzigo wako utakufikia siku hiyo hiyo.",
          action: "Tuma Ujumbe WhatsApp (+255 741 273 333)",
          link: "https://wa.me/255741273333?text=Habari%20Utrust!%20Nahitaji%20kuagiza%20nguo%20zenu.",
          isExternal: true,
        },
        {
          icon: Truck,
          badge: "Usafirishaji Mikoani",
          title: "Kutuma Mikoani kwa Mabasi",
          desc: "Uko nje ya Dar es Salaam? Tunasafirisha mizigo siku hiyo hiyo kupitia ofisi za mabasi (Shabiby, Dar Express, Kilimanjaro, Saratoga) na kukutumia picha ya risiti (waybill).",
          action: "Agiza Mzigo wa Basi",
          link: "https://wa.me/255761644444?text=Habari%20Utrust!%20Nahitaji%20kutumiwa%20mzigo%20mikoani.",
          isExternal: true,
        },
      ],
      wholesaleBannerTitle: "Je, unamiliki duka la nguo au meza ya biashara?",
      wholesaleBannerSub: "Pata bei ya jumla ya kiwandani, kuanzia dazeni 3 tu na dhamana ya kubadilisha size na rangi ndani ya siku 14.",
      wholesaleBannerBtn: "Kuwa Wakala / Muuzaji wa Jumla →",
    },
    zh: {
      badge: "便捷购买与提货指南",
      titlePrefix: "如何快速选购与提货",
      titleMain: "Utrust 本土全新现货",
      subtitle:
        "无论您是日常自穿还是档口批量进货，在达累斯萨拉姆及周边大区均可享受极速现货交付。",
      cards: [
        {
          icon: Store,
          badge: "到店实操摸样",
          title: "卡里亚库展厅与合作服装店",
          desc: "亲临达市卡里亚库商业中心展厅亲验现货，或就近前往达市各区（Sinza、Mwenge、Kinondoni）特约服装精品店直接试穿选购。",
          action: "查阅卡里亚库展厅信息",
          link: "#partner",
        },
        {
          icon: WhatsAppIcon,
          badge: "最快捷通道",
          title: "WhatsApp 现货极速下单",
          desc: "点击直联卡里亚库销售客服，实时查阅前胸印花T恤与平角内裤现货图册，支持 Lipa Namba 便捷结算，达市内当天送达。",
          action: "WhatsApp 咨询零售购买 (+255 741 273 333)",
          link: "https://wa.me/255741273333?text=你好Utrust！我想咨询现货成衣与订购。",
          isExternal: true,
        },
        {
          icon: Truck,
          badge: "外地客运直发",
          title: "长途大巴物流当天发运",
          desc: "达累斯萨拉姆外地客户（姆万扎、阿鲁沙、多多马等），下午2点前付款即可当天打包送达指定长途客运站，微信/WhatsApp即时同步托运单据。",
          action: "咨询外地大巴客运托运",
          link: "https://wa.me/255761644444?text=你好Utrust！我想咨询发往外地大巴客运。",
          isExternal: true,
        },
      ],
      wholesaleBannerTitle: "如果您是服装精品店主或批发档口老板：",
      wholesaleBannerSub: "享受一手出厂批发底价，3打开启试销，并享14天内未开封款式/尺码1对1免费调换保障。",
      wholesaleBannerBtn: "进入分销批发与档口专区 →",
    },
  };

  const t = content[language] || content.en;

  return (
    <section id="where-to-buy" className="py-20 md:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-950 border border-orange-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="h-3.5 w-3.5 text-[#d46f24]" />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            <span className="font-brand font-bold text-[#d46f24]">{t.titlePrefix}</span> {t.titleMain}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {t.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${Icon === WhatsAppIcon ? "bg-emerald-50 text-[#25D366]" : "bg-orange-50 text-[#d46f24]"}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-bold text-orange-900 bg-orange-100/60 px-2.5 py-1 rounded-full border border-orange-200/60">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{card.desc}</p>
                </div>

                <a
                  href={card.link}
                  target={card.isExternal ? "_blank" : undefined}
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                  className={`w-full inline-flex items-center justify-center gap-2 ${Icon === WhatsAppIcon ? "bg-[#25D366] hover:bg-[#20b859] active:bg-[#1caa52] text-white" : "bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white"} font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors shadow-xs`}
                >
                  {Icon === WhatsAppIcon && <WhatsAppIcon className="h-4 w-4 fill-white shrink-0" />}
                  <span>{card.action}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Wholesale Partner Strip */}
        <div className="bg-gradient-to-r from-orange-50 via-white to-amber-50 rounded-2xl border border-orange-200/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d46f24] uppercase tracking-wider font-mono">
              <ShieldCheck className="h-4 w-4" />
              <span>
                {language === "sw"
                  ? "Tovuti ya Jumla & Mawakala Kariakoo"
                  : language === "zh"
                  ? "卡里亚库批发中心与合作商通道"
                  : "Kariakoo Wholesale & Partner Portal"}
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
              {t.wholesaleBannerTitle}
            </div>
            <p className="text-sm text-slate-600 max-w-2xl">
              {t.wholesaleBannerSub}
            </p>
          </div>

          <a
            href="#partner"
            className="shrink-0 inline-flex items-center gap-2 bg-[#d46f24] hover:bg-[#b85816] active:bg-[#9a450e] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-orange-700/20 hover:shadow-lg hover:shadow-orange-700/30 whitespace-nowrap"
          >
            <span>{t.wholesaleBannerBtn}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Live Factory Social Updates Strip */}
        <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#d46f24] shrink-0 hidden sm:flex">
              <span className="text-lg">📸</span>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                {language === "sw"
                  ? "Tazama Moja kwa Moja Kiwandani & Nguo Mpya Zinazotoka"
                  : language === "zh"
                  ? "观看现代化成衣工厂实况生产与全新现货上市"
                  : "Watch Live Factory Production & New Apparel Drops"}
              </div>
              <div className="text-xs text-slate-500">
                {language === "sw"
                  ? "Fuata @utrustclothingtz na TikTok @utrustcloth kwa sasisho za kila siku za kushona na mizigo mipya."
                  : language === "zh"
                  ? "关注官方社交账号 Facebook、Instagram 及 TikTok (@utrustcloth)，实时获取裁剪、车缝及每日现货出厂动态。"
                  : "Follow @utrustclothingtz on Facebook and Instagram for daily cutting, sewing, and stock updates."}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.facebook.com/1290912484105453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-all shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>{language === "sw" ? "Ukurasa wa Facebook" : language === "zh" ? "Facebook 官方主页" : "Facebook Page"}</span>
            </a>
            <a
              href="https://www.instagram.com/utrustclothingtz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 text-white text-xs font-semibold transition-all shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@utrustcloth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 text-xs font-semibold transition-all shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.86-4.48V8.78a8.18 8.18 0 0 0 4.91 1.63V6.96a4.85 4.85 0 0 1-1-.27z"/>
              </svg>
              <span>TikTok @utrustcloth</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
