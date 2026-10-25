import React from "react";
import { useLanguage } from "@/lib/i18n";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export interface CountryCorridor {
  slug: string;
  country: string;
  flag: string;
  city: string;
  border: string;
  protocol: string;
  tariff: string;
  transitTime: string;
  description: string;
  transportMode: string;
  leadTime: string;
}

export const CORRIDORS: CountryCorridor[] = [
  {
    slug: "zambia",
    country: "Zambia",
    flag: "🇿🇲",
    city: "Lusaka, Ndola, Kitwe",
    border: "Tunduma / Nakonde Border Post (TAZARA / TanZam Highway)",
    protocol: "SADC Trade Protocol (0% Import Duty)",
    tariff: "0% Duty-Free (SADC Certificate of Origin provided)",
    transitTime: "2 – 3 Days",
    description: "Daily bonded freight trucks and courier buses from Dar es Salaam direct to Lusaka and Copperbelt. Save 25% import duty compared to importing from China.",
    transportMode: "Bonded Road Freight & Bus Parcel",
    leadTime: "Immediate Factory Stock Dispatch"
  },
  {
    slug: "drc",
    country: "Democratic Republic of Congo (DRC)",
    flag: "🇨🇩",
    city: "Lubumbashi, Kolwezi, Goma, Bukavu",
    border: "Kasumbalesa Border (Haut-Katanga) / Lake Tanganyika (Kigoma-Kalemie)",
    protocol: "SADC Trade Regime & Bilateral Transit Protocol",
    tariff: "Preferential Cross-Border Customs Clearance",
    transitTime: "3 – 5 Days",
    description: "Reliable logistics corridor linking Kigamboni factory production to Lubumbashi mining hubs and Eastern DRC retail markets with full export documentation.",
    transportMode: "Heavy Freight Truck & Lake Barge",
    leadTime: "24-Hour Dispatch"
  },
  {
    slug: "kenya",
    country: "Kenya",
    flag: "🇰🇪",
    city: "Nairobi, Mombasa, Kisumu",
    border: "Namanga / Horohoro / Taveta Border Posts (Northern Corridor)",
    protocol: "EAC Customs Union (Single Customs Territory)",
    tariff: "0% Import Duty under EAC Rules of Origin",
    transitTime: "1 – 2 Days",
    description: "Overnight road transit connecting Dar es Salaam directly to Eastleigh, Nairobi CBD, and Mombasa garment wholesale markets. 100% East African cotton.",
    transportMode: "Express Highway Truck & Bus Courier",
    leadTime: "Same-Day Waybill Issuance"
  },
  {
    slug: "uganda",
    country: "Uganda",
    flag: "🇺🇬",
    city: "Kampala, Jinja, Mbarara",
    border: "Mutukula Border Post (Central Transport Corridor)",
    protocol: "EAC Customs Union (0% Tariff)",
    tariff: "0% Duty-Free on Tanzanian Manufactured Apparel",
    transitTime: "2 – 3 Days",
    description: "Direct transit to Kampala's downtown wholesale markets (Kikuubo) with official EAC Origin documentation. Fast turnaround on bulk plain tees and boxers.",
    transportMode: "Interstate Bonded Truck & Bus Parcel",
    leadTime: "Immediate Packaging"
  },
  {
    slug: "rwanda",
    country: "Rwanda",
    flag: "🇷🇼",
    city: "Kigali, Rubavu, Huye",
    border: "Rusumo Border Post (Central Corridor Highway)",
    protocol: "EAC Single Customs Territory",
    tariff: "0% Duty-Free Tariff with EAC Origin Verification",
    transitTime: "2 – 3 Days",
    description: "Pristine factory-direct apparel meeting strict Rwandan quality and eco-packaging standards. Direct supply to Kigali clothing retail boutiques.",
    transportMode: "Express Paved Highway Freight",
    leadTime: "24-Hour Customs Clearance"
  },
  {
    slug: "burundi",
    country: "Burundi",
    flag: "🇧🇮",
    city: "Bujumbura, Gitega",
    border: "Kabanga / Manyovu / Kobero Border Posts",
    protocol: "EAC Common Market Protocol",
    tariff: "Zero Tariff on Value-Added Tanzanian Garments",
    transitTime: "2 – 3 Days",
    description: "Direct road delivery from Dar es Salaam to Bujumbura commercial districts. High-durability 180-200 GSM cotton basics ideal for local demand.",
    transportMode: "Cross-Border Cargo Freight",
    leadTime: "Immediate Dispatch"
  },
  {
    slug: "malawi",
    country: "Malawi",
    flag: "🇲🇼",
    city: "Lilongwe, Blantyre, Mzuzu",
    border: "Kasumulu / Songwe Border Post (Southern Highlands Corridor)",
    protocol: "SADC Trade Protocol (Duty-Free Status)",
    tariff: "0% Import Tariff with SADC Documentation",
    transitTime: "2 – 4 Days",
    description: "Southern Highlands route connecting Dar es Salaam through Mbeya directly into northern and central Malawi. Master export carton packaging.",
    transportMode: "Direct Bonded Road Freight",
    leadTime: "Fast-Track Border Clearance"
  },
  {
    slug: "mozambique",
    country: "Mozambique",
    flag: "🇲🇿",
    city: "Pemba, Nacala, Maputo",
    border: "Mtambaswala Border (Unity Bridge across Ruvuma River)",
    protocol: "SADC Trade Protocol",
    tariff: "Preferential Bilateral Trade Access",
    transitTime: "3 – 5 Days",
    description: "Export supply corridor for northern Mozambique and coastal commercial hubs. Breathable cotton garments tailored for humid coastal heat.",
    transportMode: "Coastal Freight & Cross-Border Truck",
    leadTime: "Standard Export Documentation"
  }
];

export default function FactorySpecsTable() {
  const { language } = useLanguage();

  const isSw = language === "sw";
  const isZh = language === "zh";

  return (
    <section id="factory-specs" aria-labelledby="specs-heading" className="py-16 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Table 1: Factory Production Specifications */}
        <div className="mb-14">
          <div className="max-w-3xl mb-6">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-950 border border-orange-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <span>{isSw ? "🏭 Vipimo vya Viwandani (B2B Specifications)" : isZh ? "🏭 B2B 工业生产与技术参数" : "🏭 B2B Industrial Specifications"}</span>
            </div>
            <h2 id="specs-heading" className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              {isSw
                ? "Utrust Clothing Tanzania — Vipimo vya Uzalishaji Kiwandani & Bei za Jumla"
                : isZh
                ? "Utrust 服饰（坦桑尼亚）有限公司 — 工厂产能与批发技术规范"
                : "Utrust Clothing Tanzania — Factory Production & Wholesale Specifications"}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {isSw
                ? "Uwezo halisi wa kiwanda chetu cha Kigamboni (vipande 20,000+ kwa siku) na ofisi ya Kariakoo."
                : isZh
                ? "基甘博尼现代化成衣工厂（日产 20,000+ 件）与卡里亚库商业中心一手一手现货参数。"
                : "Direct manufacturing parameters from our Kigamboni plant (20,000+ units/day) and Kariakoo commercial hub."}
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white font-mono uppercase text-[11px] tracking-wider">
                  <th scope="col" className="p-4 sm:p-4.5 border-b border-slate-800">
                    {isSw ? "Aina ya Nguo" : isZh ? "产品系列" : "Product Line"}
                  </th>
                  <th scope="col" className="p-4 sm:p-4.5 border-b border-slate-800">
                    {isSw ? "Aina ya Kitambaa & Uzito (GSM)" : isZh ? "面料与克重规格 (GSM)" : "Fabric & GSM Specification"}
                  </th>
                  <th scope="col" className="p-4 sm:p-4.5 border-b border-slate-800 whitespace-nowrap">
                    {isSw ? "Uzalishaji kwa Siku" : isZh ? "每日产能" : "Daily Output"}
                  </th>
                  <th scope="col" className="p-4 sm:p-4.5 border-b border-slate-800">
                    {isSw ? "Masharti ya Jumla & Usafirishaji" : isZh ? "批发与跨境物流条款" : "Wholesale & Transit Terms"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 sm:p-4.5 font-bold text-slate-950">
                    {isSw
                      ? "Tisheti Tupu & Zenye Michoro (Tisheti za Jumla)"
                      : isZh
                      ? "纯棉纯色空白与印花 T恤 (Tisheti za Jumla)"
                      : "Plain & Graphic Cotton T-Shirts (Tisheti za Jumla)"}
                  </td>
                  <td className="p-4 sm:p-4.5">
                    {isSw
                      ? "100% Pamba Safi ya Tanzania • 180–200 GSM Ring-Spun"
                      : isZh
                      ? "100% 坦桑尼亚优质精梳棉 • 180–200 GSM 精梳紧密纺"
                      : "100% Tanzanian Combed Cotton • 180–200 GSM Ring-Spun"}
                  </td>
                  <td className="p-4 sm:p-4.5 font-mono font-semibold text-[#d46f24] whitespace-nowrap">
                    10,000+ pcs/day
                  </td>
                  <td className="p-4 sm:p-4.5 text-slate-600">
                    {isSw
                      ? "Kuchukua Kariakoo Showroom • Kutumiwa Mikoani kwa Mabasi • 0% Ushuru SADC/EAC"
                      : isZh
                      ? "卡里亚库档口提货 • 省级客运大巴代发 • SADC/EAC 0% 关税直通"
                      : "Kariakoo Showroom Pickup • Upcountry Bus Parcel • 0% SADC/EAC Duty-Free"}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 sm:p-4.5 font-bold text-slate-950">
                    {isSw
                      ? "Boksa za Kiume za Pamba (Boksa za Jumla)"
                      : isZh
                      ? "高弹透气男士纯棉平角内裤 (Boxer Briefs)"
                      : "Breathable Boxer Briefs (Boksa za Jumla)"}
                  </td>
                  <td className="p-4 sm:p-4.5">
                    {isSw
                      ? "95% Pamba / 5% Elastane • Mpira Imara Usiolegea"
                      : isZh
                      ? "95% 纯棉 / 5% 氨纶 • 进口耐磨高弹宽边腰带"
                      : "95% Combed Cotton / 5% Elastane • High-Durability Anti-Sag Band"}
                  </td>
                  <td className="p-4 sm:p-4.5 font-mono font-semibold text-[#d46f24] whitespace-nowrap">
                    6,000+ pcs/day
                  </td>
                  <td className="p-4 sm:p-4.5 text-slate-600">
                    {isSw
                      ? "Katoni 1 ya Kiwandani (Packs 120 × Pcs 3 = Pcs 360) • Tayari kwa Kuweka Madukani"
                      : isZh
                      ? "1箱起订（每箱120包，每包3件，共360件）• 档口独立零售包装"
                      : "Master Cartons (120 Packs of 3 Pcs = 360 Pcs Total) • Pre-Packaged Retail Packs"}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 sm:p-4.5 font-bold text-slate-950">
                    {isSw
                      ? "Tisheti za Kola / Sare za Kazi (Polo Workwear)"
                      : isZh
                      ? "商务工装珠地网眼翻领 POLO 衫"
                      : "Pique Polo Workwear (Sare za Kampuni)"}
                  </td>
                  <td className="p-4 sm:p-4.5">
                    {isSw
                      ? "200–220 GSM Pique Knit • Haichuji Rangi wala Kulegea Kola"
                      : isZh
                      ? "200–220 GSM 蜂巢珠地网眼 • 领口不卷边、耐洗不褪色"
                      : "200–220 GSM Honeycomb Pique • Color-Fast & Anti-Pilling"}
                  </td>
                  <td className="p-4 sm:p-4.5 font-mono font-semibold text-[#d46f24] whitespace-nowrap">
                    4,000+ pcs/day
                  </td>
                  <td className="p-4 sm:p-4.5 text-slate-600">
                    {isSw
                      ? "Nembo za Kampuni (Embroidery) • Screen Print • Rangi Mbalimbali"
                      : isZh
                      ? "支持企业刺绣/丝印定制 • 提供现货空白底衫"
                      : "Custom Corporate Embroidery • Screen Print • Bulk Solid Blanks"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Cross-Border Sourcing Corridors with Dedicated Country Links */}
        <div>
          <div className="max-w-3xl mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-950 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <span>{isSw ? "🌍 Kituo cha Mauzo ya Nje SADC & EAC" : isZh ? "🌍 SADC & EAC 区域免税出海走廊" : "🌍 SADC & EAC Regional Export Hub"}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
              {isSw
                ? "Njia za Usafirishaji Nchi Jirani (East & Southern Africa)"
                : isZh
                ? "坦桑尼亚周边八大邻国跨境采购与直达陆运走廊"
                : "East & Southern Africa Cross-Border Sourcing Corridors"}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {isSw
                ? "Bofya nchi yoyote kuona maelezo kamili ya usafirishaji, forodha na punguzo la ushuru (0% duty-free)."
                : isZh
                ? "点击对应国家查看专属跨境清关指南、专线物流时效及零关税政策。"
                : "Click on any destination country below to view dedicated border clearance, transit logistics, and 0% duty-free trade details."}
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs mb-8">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white font-mono uppercase text-[11px] tracking-wider">
                  <th scope="col" className="p-4 sm:p-4.5 border-b border-slate-800">
                    {isSw ? "Nchi Inayoenda (Bonyeza)" : isZh ? "目的国 (点击查看专属页面)" : "Destination Country (Click for Details)"}
                  </th>
                  <th scope="col" className="p-4 sm:p-4.5 border-b border-slate-800">
                    {isSw ? "Mpaka & Njia ya Usafiri" : isZh ? "通关口岸与干线走廊" : "Transit Corridor & Border Hub"}
                  </th>
                  <th scope="col" className="p-4 sm:p-4.5 border-b border-slate-800">
                    {isSw ? "Mkataba wa Biashara & Ushuru" : isZh ? "自贸协定与关税政策" : "Trade Protocol & Tariff"}
                  </th>
                  <th scope="col" className="p-4 sm:p-4.5 border-b border-slate-800 whitespace-nowrap">
                    {isSw ? "Muda wa Kufika" : isZh ? "常规汽运时效" : "Typical Transit"}
                  </th>
                  <th scope="col" className="p-4 sm:p-4.5 border-b border-slate-800 text-right">
                    {isSw ? "Ukurasa Maalum" : isZh ? "专属页面" : "Corridor Guide"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {CORRIDORS.map((c) => (
                  <tr key={c.slug} className="hover:bg-orange-50/40 transition-colors group">
                    <td className="p-4 sm:p-4.5 font-bold text-slate-950 whitespace-nowrap">
                      <a
                        href={`/export/${c.slug}/`}
                        className="inline-flex items-center gap-2 group-hover:text-[#d46f24] transition-colors"
                      >
                        <span className="text-lg leading-none">{c.flag}</span>
                        <span className="underline decoration-slate-300 group-hover:decoration-[#d46f24] underline-offset-4 font-semibold">
                          {c.country}
                        </span>
                      </a>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                        {c.city}
                      </div>
                    </td>
                    <td className="p-4 sm:p-4.5 text-slate-600">
                      {c.border}
                    </td>
                    <td className="p-4 sm:p-4.5 text-slate-700">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
                        {c.tariff}
                      </span>
                    </td>
                    <td className="p-4 sm:p-4.5 font-mono font-semibold text-emerald-700 whitespace-nowrap">
                      {c.transitTime}
                    </td>
                    <td className="p-4 sm:p-4.5 text-right whitespace-nowrap">
                      <a
                        href={`/export/${c.slug}/`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#d46f24] text-slate-700 hover:text-white font-semibold text-xs transition-all shadow-2xs"
                      >
                        <span>{isSw ? `Tazama ${c.country}` : isZh ? `查看 ${c.country} 专页` : `View ${c.country}`}</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Callout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-orange-50/80 rounded-2xl border border-orange-200/80">
            <div className="text-xs sm:text-sm text-slate-700 font-medium">
              <span className="font-bold text-slate-950">
                {isSw ? "Showroom & Ofisi:" : isZh ? "商业展厅与批发中心：" : "Showroom & Office:"}
              </span>{" "}
              2nd Floor, Nasra Tower, 21 Kisarawe St, Kariakoo, Dar es Salaam <br />
              <span className="font-bold text-slate-950">
                {isSw ? "Kiwanda cha Uzalishaji:" : isZh ? "自营现代化生产厂区：" : "Factory Plant:"}
              </span>{" "}
              24804, Lingato Street, Kisarawe 2, Kigamboni, Dar Es Salaam
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/255761644444?text=Habari%20Utrust!%20Naomba%20katalogi%20na%20bei%20za%20jumla%20(Wholesale%20RFQ)."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b859] active:bg-[#1caa52] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm whitespace-nowrap"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white shrink-0" />
                <span>
                  {isSw ? "Ulizia Bei za Jumla (+255 761 644 444)" : isZh ? "索取每打批发底价表 (+255 761 644 444)" : "Inquire Wholesale Catalog (+255 761 644 444)"}
                </span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
