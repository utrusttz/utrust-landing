
import { MapPin, MessageCircle, Truck, Store, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

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
          icon: MessageCircle,
          badge: "Fastest Option",
          title: "Order Directly on WhatsApp",
          desc: "Chat directly with our sales desk on WhatsApp. Browse available front-printed t-shirts and boxer briefs, pay via Lipa Namba, and receive same-day delivery.",
          action: "Chat on WhatsApp (+255 761644444)",
          link: "https://wa.me/255761644444?text=Hello%20Utrust!%20I%20want%20to%20order%20ready-made%20clothes.",
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
          icon: MessageCircle,
          badge: "Haraka Zaidi",
          title: "Agiza Moja kwa Moja WhatsApp",
          desc: "Tuma ujumbe kwenye WhatsApp ya mauzo. Chagua tisheti zenye michoro au boxer briefs, lipa kwa Lipa Namba, na mzigo wako utakufikia siku hiyo hiyo.",
          action: "Tuma Ujumbe WhatsApp (+255 761644444)",
          link: "https://wa.me/255761644444?text=Habari%20Utrust!%20Nahitaji%20kuagiza%20nguo%20zenu.",
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
          icon: MessageCircle,
          badge: "最快捷通道",
          title: "WhatsApp 现货极速下单",
          desc: "点击直联卡里亚库销售客服，实时查阅前胸印花T恤与平角内裤现货图册，支持 Lipa Namba 便捷结算，达市内当天送达。",
          action: "WhatsApp 在线咨询 (+255 761644444)",
          link: "https://wa.me/255761644444?text=你好Utrust！我想咨询现货成衣与订购。",
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
                    <div className="p-3 bg-orange-50 rounded-xl text-[#d46f24]">
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
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors shadow-xs"
                >
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
              <span>Kariakoo Wholesale & Partner Portal</span>
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

      </div>
    </section>
  );
}
