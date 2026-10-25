
import { useState } from "react";
import { Layers, Ruler, Package, Clipboard, CheckCircle2, Factory } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface SpecDetail {
  value: string;
  headline: string;
  detail: string;
  applications: string[];
  metrics: { label: string; val: string }[];
}

export default function CapacityViewer() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("gsm");

  const tabs = [
    { id: "gsm", label: t.capacity.tabs.gsm, icon: Ruler },
    { id: "stitch", label: t.capacity.tabs.stitch, icon: Layers },
    { id: "packaging", label: t.capacity.tabs.packaging, icon: Package },
    { id: "moq", label: t.capacity.tabs.moq, icon: Clipboard },
  ];

  // Multilingual specs data
  const specsData: Record<string, Record<string, SpecDetail>> = {
    en: {
      gsm: {
        value: "140 – 320 GSM",
        headline: "Combed Virgin Cotton & Poly Blends",
        detail:
          "Automated knitting cylinders configured for ultra-fine combed cotton (140-180 GSM for summer tees), mid-weight pique (200-240 GSM for polos), and heavy brushed fleece (280-320 GSM for hoodies & workwear).",
        applications: [
          "Lightweight promotional tees (140-160 GSM)",
          "High-street retail crewnecks (180-210 GSM)",
          "Corporate pique polo shirts (220-250 GSM)",
          "Heavyweight winter/export fleece (280-320 GSM)",
        ],
        metrics: [
          { label: "Fabric Shrinkage", val: "< 3% after wash" },
          { label: "Yarn Count", val: "20s, 24s, 30s combed" },
          { label: "Dye Standard", val: "Reactive ISO Colorfast" },
        ],
      },
      stitch: {
        value: "12 – 18 SPI",
        headline: "Reinforced Overlock & Twin-Needle Seams",
        detail:
          "Precision computerized stitching stations utilizing high-tensile core-spun threads. Double-needle shoulder-to-shoulder tape reinforcement guarantees collar shape retention over 80+ wash cycles.",
        applications: [
          "Ribbed collar lock-stitching prevents baconing",
          "Twin-needle hem and sleeve edge folding",
          "Reinforced stress-point bar-tacking on plackets",
          "Four-thread overlock safety side seams",
        ],
        metrics: [
          { label: "Thread Tensile", val: "High-grade Polyester core" },
          { label: "Seam Strength", val: "> 220 Newtons" },
          { label: "Needle Precision", val: "Computerized CNC" },
        ],
      },
      packaging: {
        value: "Export Master Cartons",
        headline: "120 Retail Packs / Master Carton • 3 Pcs / Pack (360 Pcs Total)",
        detail:
          "Every single garment is individually steam-pressed, folded, and sealed in 3-piece retail display packs (120 packs per master carton = 360 pcs total). Packaged in 5-ply corrugated heavy-duty cartons designed for rough cross-country African transport.",
        applications: [
          "Individual transparent retail moisture-proof sleeves",
          "Pre-sorted by size & color ratio for easy distribution",
          "Outer carton strapped with security tamper seals",
          "EAN-13 barcode & GS1 compliant labels",
        ],
        metrics: [
          { label: "Carton Strength", val: "5-ply Corrugated (250 PSI)" },
          { label: "Units per Pallet", val: "2,500 – 4,000 units" },
          { label: "Transit Protection", val: "Silica moisture guards" },
        ],
      },
      moq: {
        value: "500 Units / Style",
        headline: "Scalable Direct-from-Factory Production Tiers",
        detail:
          "Flexible starting production volume designed to empower regional apparel brands and retail chains to test new colorways, while scaling effortlessly up to 500,000+ units for national tenders.",
        applications: [
          "Tier 1: 500 - 2,500 units (Fast turnaround stock cuts)",
          "Tier 2: 2,500 - 15,000 units (Custom Pantone colorways)",
          "Tier 3: 15,000 - 50,000+ units (Wholesale container orders)",
          "Enterprise: 100,000+ units (Scheduled monthly supply line)",
        ],
        metrics: [
          { label: "Sample Lead Time", val: "48 – 72 Hours" },
          { label: "Full Batch Lead", val: "7 – 14 Working Days" },
          { label: "Payment Terms", val: "LC / Escrow / Bank wire" },
        ],
      },
    },
    sw: {
      gsm: {
        value: "140 – 320 GSM",
        headline: "Pamba Safi Iliyochanwa & Mchanganyiko wa Poly",
        detail:
          "Mitambo ya kisasa ya kufuma vitambaa vya pamba nyepesi (GSM 140-180 kwa t-shirt za kawaida), pamba ya wastani ya pique (GSM 200-240 kwa mashati ya polo), na vitambaa vizito vya 'fleece' (GSM 280-320 kwa sweta na nguo za kazi).",
        applications: [
          "T-shirt nyepesi za matangazo (140-160 GSM)",
          "T-shirt za rejareja madukani (180-210 GSM)",
          "Mashati ya polo ya kofia/makampuni (220-250 GSM)",
          "Sweta nzito za baridi na kusafirisha nje (280-320 GSM)",
        ],
        metrics: [
          { label: "Kupungua Baada ya Kufuliwa", val: "< 3% baada ya kufuliwa" },
          { label: "Kiwango cha Uzi", val: "Uzi wa 20s, 24s, 30s" },
          { label: "Kiwango cha Rangi", val: "Rangi Imara ya ISO" },
        ],
      },
      stitch: {
        value: "12 – 18 SPI",
        headline: "Mishono Imara ya Overlock & Sindano Mbili",
        detail:
          "Vituo vya kompyuta vya kushona kwa usahihi kwa kutumia nyuzi zenye nguvu kubwa. Ukanda ulioimarishwa mabegani unahakikisha kola hailegi hata ikifuliwa zaidi ya mara 80.",
        applications: [
          "Kola ya rib iliyofungwa kuzuia kulegea",
          "Kunjio la pindo na mikono kwa sindano mbili",
          "Mishono iliyoimarishwa kwenye vifungo",
          "Overlock imara ya nyuzi nne pande zote",
        ],
        metrics: [
          { label: "Uimara wa Uzi", val: "Nyuzi Imara za Polyester" },
          { label: "Nguvu ya Mshono", val: "> Newtons 220" },
          { label: "Usahihi wa Sindano", val: "Mashine za CNC za Kompyuta" },
        ],
      },
      packaging: {
        value: "Katoni Maalum za Kusafirisha",
        headline: "Packs 120 kwa Katoni Kuu • Pcs 3 kwa Kila Pack (Pcs 360 Jumla)",
        detail:
          "Kila vazi linapigwa pasi ya mvuke, kukunjwa na kufungwa kwenye vifurushi vya rejareja vya vipande 3 (packs 120 kwa katoni kuu = jumla vipande 360). Huwekwa kwenye katoni imara za safu 5 zilizotengenezwa kuhimili safari ndefu za barabara za Afrika.",
        applications: [
          "Mifuko ya nailoni inayozuia unyevu kwa kila nguo",
          "Kupangwa vizuri kwa saizi na rangi kurahisisha ugawaji",
          "Katoni zilizofungwa mikanda ya usalama kuzuia wizi",
          "Lebo za 'barcode' za EAN-13 na GS1",
        ],
        metrics: [
          { label: "Uimara wa Katoni", val: "Safu 5 Imara (250 PSI)" },
          { label: "Vipande kwa Pallet", val: "Vipande 2,500 – 4,000" },
          { label: "Kinga ya Safari", val: "Vidonge vya kuzuia unyevu" },
        ],
      },
      moq: {
        value: "Vipande 500 kwa Mtindo",
        headline: "Madaraja ya Uzalishaji Moja kwa Moja Kiwandani",
        detail:
          "Uwezo wa kuanzia oda ya vipande 500 unaowawezesha wamiliki wa chapa za mavazi kujaribu rangi na miundo mipya, huku ukiweza kuongezeka kwa urahisi hadi vipande 500,000+ kwa zabuni za kitaifa.",
        applications: [
          "Daraja la 1: Vipande 500 - 2,500 (Oda ya haraka)",
          "Daraja la 2: Vipande 2,500 - 15,000 (Rangi maalum za Pantone)",
          "Daraja la 3: Vipande 15,000 - 50,000+ (Oda za makontena ya jumla)",
          "Daraja la Biashara Kubwa: 100,000+ (Ugavi wa kila mwezi)",
        ],
        metrics: [
          { label: "Muda wa Sampuli", val: "Saa 48 – 72" },
          { label: "Muda wa Uzalishaji Kamili", val: "Siku 7 – 14 za Kazi" },
          { label: "Njia za Malipo", val: "LC / Amana ya Benki / Wire" },
        ],
      },
    },
    zh: {
      gsm: {
        value: "140 – 320 GSM",
        headline: "精梳原生天然棉及聚酯混纺面料",
        detail:
          "大口径全电脑针织大圆机，精准适配 140–180 GSM 超柔精梳纯棉（夏季 T 恤）、200–240 GSM 经典珠地网眼（商务 POLO 衫）以及 280–320 GSM 抓绒加厚卫衣与工装面料。",
        applications: [
          "轻薄透气广告文化衫 (140-160 GSM)",
          "品牌专卖店高品质圆领衫 (180-210 GSM)",
          "企业及商务珠地翻领 POLO 衫 (220-250 GSM)",
          "高克重秋冬外销抓绒连帽卫衣 (280-320 GSM)",
        ],
        metrics: [
          { label: "水洗缩水率控制", val: "水洗后 < 3%" },
          { label: "精梳纱线支数", val: "20支、24支、30支精梳" },
          { label: "环保染色牢度", val: "ISO 国际活性环保耐洗" },
        ],
      },
      stitch: {
        value: "12 – 18 SPI",
        headline: "高密度电脑包缝与双针锁边工艺",
        detail:
          "配备自动化电脑数控车缝单元，选用高强力包芯涤纶线。领口及肩部通条双针压线加固工艺，确保领口在经过 80 次以上工业洗涤后仍保持挺括平整不荷叶边。",
        applications: [
          "领口罗纹内嵌弹力丝，持久紧致不松垮",
          "下摆及袖口精密双针折边车缝",
          "门襟及受力点高密度打枣强化加固",
          "四线高速工业包缝安全侧缝",
        ],
        metrics: [
          { label: "缝纫用线强力", val: "高强韧涤纶包芯线" },
          { label: "拼缝断裂强力", val: "> 220 牛顿 (N)" },
          { label: "走针精度控制", val: "全电脑 CNC 恒定间距" },
        ],
      },
      packaging: {
        value: "外销标准出口加强箱",
        headline: "每箱 120 独立零售包 • 每包 3 件 / 整箱 360 件标准装",
        detail:
          "每件成衣均经过专业工业蒸汽定型、规整折叠并装入3件装零售透明袋（整箱共120包=360件）。外包装采用五层重型加强瓦楞纸箱，专为东非区域跨国长途颠簸陆运环境设计。",
        applications: [
          "独立加厚防潮高透零售封口袋包装",
          "严格按尺码及颜色配比分装，到货即可快速铺货",
          "外箱配备工业打包带及防拆防盗安全封条",
          "符合国际 GS1 规范的 EAN-13 商品条形码标签",
        ],
        metrics: [
          { label: "外箱抗压强度", val: "五层加强瓦楞 (250 PSI)" },
          { label: "标准托盘容量", val: "2,500 – 4,000 件/托" },
          { label: "海运防潮保护", val: "内附食品级环保硅胶干燥剂" },
        ],
      },
      moq: {
        value: "500 件 / 单款",
        headline: "支持阶梯式工业直供产能合作",
        detail:
          "灵活弹性的起订批量，既支持东非本土新锐服装品牌低门槛试单打样测款，又能从容承接全国性大客户及政府企业统一制服单批 50 万件以上的大宗集装箱订单。",
        applications: [
          "第一梯队: 500 - 2,500 件 (现货布料快速裁缝交期)",
          "第二梯队: 2,500 - 15,000 件 (定制专属潘通 Pantone 染色彩批)",
          "第三梯队: 15,000 - 50,000+ 件 (大宗批发海运整柜排单)",
          "集团企业级: 100,000+ 件 (年度框架协议按月分批调度)",
        ],
        metrics: [
          { label: "样衣制作交期", val: "48 – 72 小时顺丰/DHL发运" },
          { label: "大货批量交期", val: "7 – 14 个工作日保质出厂" },
          { label: "结算与付款机制", val: "信用证 (L/C) / 保函 / 电汇" },
        ],
      },
    },
  };

  const currentLangData = specsData[language] || specsData.en;
  const currentSpec = currentLangData[activeTab] || currentLangData.gsm;

  return (
    <section id="capacity" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-950 border border-orange-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Factory className="h-3.5 w-3.5 text-[#d46f24]" />
            {t.capacity.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            <span className="font-brand font-bold text-[#d46f24]">{t.capacity.titlePrefix}</span> {t.capacity.titleMain}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t.capacity.subtitle}{" "}
            <span className="font-bold text-slate-900">{t.capacity.monthlyHighlight}</span>
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#d46f24] text-white shadow-md shadow-orange-700/20 font-bold"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:border-slate-300"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-slate-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Specification Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Main Value */}
            <div className="lg:col-span-5 space-y-4 lg:border-r lg:border-slate-100 lg:pr-8">
              <span className="inline-block text-xs font-mono font-bold tracking-wider uppercase text-[#d46f24] bg-orange-50 px-3 py-1 rounded-md border border-orange-200/60">
                {t.capacity.specRange}
              </span>
              <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                {currentSpec.value}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {currentSpec.headline}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentSpec.detail}
              </p>

              {/* Technical Tolerance Metrics */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                {currentSpec.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">{m.label}</span>
                    <span className="font-mono font-bold text-slate-800">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Applications List */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 block">
                {t.capacity.appsTitle}
              </span>
              
              <div className="grid sm:grid-cols-2 gap-3.5">
                {currentSpec.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#d46f24] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                      {app}
                    </span>
                  </div>
                ))}
              </div>

              {/* Sample Pack prompt */}
              <div className="mt-6 p-4 rounded-xl bg-orange-50/70 border border-orange-200/70 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-orange-950 font-medium">
                  {t.capacity.customPrompt}
                </span>
                <a
                  href="#onboarding"
                  className="text-xs font-bold text-[#d46f24] hover:text-[#b85816] underline underline-offset-4 shrink-0"
                >
                  {t.capacity.requestSample}
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
