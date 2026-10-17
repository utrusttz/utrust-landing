
import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "sw" | "zh";

export interface Translations {
  common: {
    companyName: string;
    tagline: string;
    tzs: string;
    darEsSalaam: string;
    units: string;
    pcs: string;
    days: string;
    requestQuote: string;
    viewSpecs: string;
    b2bPortal: string;
    activeProduction: string;
  };
  header: {
    announcementDirect: string;
    announcementTransit: string;
    mitumbaVsUtrust: string;
    gallery: string;
    factorySpecs: string;
    profitCalc: string;
    qualityAssurance: string;
    wholesaleAccounts: string;
    unitsPerHr: string;
  };
  hero: {
    badge: string;
    isoBadge: string;
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    subheadline: string;
    turnaroundTitle: string;
    turnaroundSub: string;
    inspectionTitle: string;
    inspectionSub: string;
    automationTitle: string;
    automationSub: string;
    telemetryTitle: string;
    telemetryLive: string;
    instantOutputLabel: string;
    instantOutputVal: string;
    instantOutputUnit: string;
    monthlyCapLabel: string;
    monthlyCapVal: string;
    monthlyCapUnit: string;
    lineUtilizationLabel: string;
    bookedVal: string;
    activeUnitsLabel: string;
    availableUnitsLabel: string;
    quarterlyAdvisory: string;
    reserveButton: string;
  };
  comparison: {
    badge: string;
    titleStart: string;
    titleVs: string;
    titleEnd: string;
    subtitle: string;
    colCriteria: string;
    colMitumba: string;
    colUtrust: string;
    criteria: {
      hygiene: { title: string; sub: string; mitumba: string; utrust: string };
      consistency: { title: string; sub: string; mitumba: string; utrust: string };
      customization: { title: string; sub: string; mitumba: string; utrust: string };
      supply: { title: string; sub: string; mitumba: string; utrust: string };
      accountability: { title: string; sub: string; mitumba: string; utrust: string };
      tariffs: { title: string; sub: string; mitumba: string; utrust: string };
    };
    bannerTitle: string;
    bannerSub: string;
    bannerBtn: string;
  };
  capacity: {
    badge: string;
    titlePrefix: string;
    titleMain: string;
    subtitle: string;
    monthlyHighlight: string;
    tabs: {
      gsm: string;
      stitch: string;
      packaging: string;
      moq: string;
    };
    specRange: string;
    appsTitle: string;
    customPrompt: string;
    requestSample: string;
    shrinkageLabel: string;
    yarnCountLabel: string;
    dyeStandardLabel: string;
  };
  calculator: {
    badge: string;
    titlePrefix: string;
    titleMain: string;
    subtitle: string;
    volumeLabel: string;
    volumeSub: string;
    marginLabel: string;
    marginSub: string;
    quickPresets: string;
    benchmarks: string;
    marginWholesale: string;
    marginRetail: string;
    marginBoutique: string;
    discardAdvantageTitle: string;
    discardAdvantageText: string;
    returnsPill: string;
    factoryDirectTag: string;
    grossProfitLabel: string;
    grossReturnOn: string;
    orderSizeLabel: string;
    basePriceLabel: string;
    factoryCostLabel: string;
    retailRevenueLabel: string;
    dispatchLeadLabel: string;
    lockPricingBtn: string;
    escrowNote: string;
  };
  qa: {
    badge: string;
    titlePrefix: string;
    titleMain: string;
    subtitle: string;
    cards: Array<{
      title: string;
      tagline: string;
      description: string;
      highlights: string[];
    }>;
    certificateBanner: string;
    certificateSub: string;
    certificateBtn: string;
  };
  onboarding: {
    badge: string;
    titlePrefix: string;
    titleMain: string;
    subtitle: string;
    advantagesTitle: string;
    perks: Array<{ title: string; desc: string }>;
    preferWhatsApp: string;
    whatsAppDesc: string;
    whatsAppBtn: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    volumeLabel: string;
    volumeOptions: Array<{ val: string; label: string }>;
    interestLabel: string;
    interestOptions: string[];
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    resetBtn: string;
  };
  gallery: {
    badge: string;
    titlePrefix: string;
    titleMain: string;
    subtitle: string;
    filterAll: string;
    filterCotton: string;
    filterAthletic: string;
    filterPackaging: string;
    filterOem: string;
    zoomHint: string;
    specsLabel: string;
    orderSampleBtn: string;
    closeLightbox: string;
    prevPhoto: string;
    nextPhoto: string;
    photoCounter: string;
    items: Array<{
      id: string;
      category: "cotton" | "athletic" | "packaging" | "oem";
      title: string;
      tag: string;
      description: string;
      specs: string[];
      image: string;
    }>;
  };
  footer: {
    bio: string;
    madeInTz: string;
    navTitle: string;
    complianceTitle: string;
    plantTitle: string;
    plantAddress: string;
    rights: string;
    badgeEnterprise: string;
    badgeZeroWaste: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    common: {
      companyName: "Utrust Clothing Tanzania Limited",
      tagline: "Clothing Tanzania Limited",
      tzs: "TZS",
      darEsSalaam: "Dar es Salaam, Tanzania",
      units: "units",
      pcs: "pcs",
      days: "Days",
      requestQuote: "Request Bulk Wholesale Quote",
      viewSpecs: "View Technical Specs",
      b2bPortal: "B2B Portal",
      activeProduction: "High Volume Active",
    },
    header: {
      announcementDirect: "Direct from Dar es Salaam Factory",
      announcementTransit: "EAC Duty-Free Transit Certified",
      mitumbaVsUtrust: "Mitumba vs Utrust",
      gallery: "Product Gallery",
      factorySpecs: "Factory Specs",
      profitCalc: "Profit Calculator",
      qualityAssurance: "Quality Assurance",
      wholesaleAccounts: "Wholesale Accounts",
      unitsPerHr: "12.4k units/hr active",
    },
    hero: {
      badge: "TANZANIA'S LARGEST INDUSTRIAL TEXTILE MILL",
      isoBadge: "ISO 9001:2024",
      headlineStart: "Replace Mitumba with",
      headlineHighlight: "Utrust",
      headlineEnd: "Factory-Direct Apparel.",
      subheadline:
        "Say goodbye to random second-hand bale rejects, volatile shipping costs, and port delays. Source certified, 100% brand-new apparel straight from Utrust Clothing Tanzania Limited's Dar es Salaam manufacturing lines with guaranteed profit margins.",
      turnaroundTitle: "7-Day Turnaround",
      turnaroundSub: "Fast East Africa dispatch",
      inspectionTitle: "100% Inspected",
      inspectionSub: "Zero-defect grading",
      automationTitle: "12,400 Units / Hr",
      automationSub: "Automated industrial line",
      telemetryTitle: "PLANT 1 TELEMETRY • DAR ES SALAAM",
      telemetryLive: "ONLINE • REALTIME",
      instantOutputLabel: "INSTANT OUTPUT",
      instantOutputVal: "12,400",
      instantOutputUnit: "units / hour",
      monthlyCapLabel: "MONTHLY CAPACITY",
      monthlyCapVal: "2.8M",
      monthlyCapUnit: "units / month",
      lineUtilizationLabel: "Line Capacity Utilization",
      bookedVal: "78% Booked",
      activeUnitsLabel: "Active: 2.18M units",
      availableUnitsLabel: "Available: 620k units",
      quarterlyAdvisory: "Quarterly Slot Advisory: Only 2 wholesale allocation slots remain open for this quarter. Lock your container schedule before seasonal cutoff.",
      reserveButton: "Reserve Production Allocation",
    },
    comparison: {
      badge: "Competitive Benchmark",
      titleStart: "Imported Bales (Mitumba) vs.",
      titleVs: "vs.",
      titleEnd: "Factory-Direct",
      subtitle:
        "Why leading wholesale distributors and national retail chains across East Africa are shifting capital from unpredictable second-hand bales to certified domestic manufacturing by Utrust Clothing Tanzania Limited.",
      colCriteria: "Evaluation Criteria",
      colMitumba: "Imported Bales (Mitumba)",
      colUtrust: "Utrust Factory-Direct",
      criteria: {
        hygiene: {
          title: "Hygienic Condition & Freshness",
          sub: "Sanitary grade, cleanliness, and immediate retail readiness",
          mitumba: "Used & unwashed. Chemical fumigation residues and bio-contaminant risks.",
          utrust: "100% Brand-new, factory-sealed, OEKO-TEX® certified hypoallergenic.",
        },
        consistency: {
          title: "Consistency & Grade Predictability",
          sub: "Variance across pieces and unsellable discard rates",
          mitumba: "Random bale grading. Up to 35% discarded as tears, stains, or off-sizes.",
          utrust: "Zero-discard guarantee. Precision sizing specs (XS–4XL) across every carton.",
        },
        customization: {
          title: "Custom Specifications & Branding",
          sub: "Neck labels, specific Pantone colors, custom GSM blends",
          mitumba: "Zero customization. Generic mishmash of second-hand foreign brands.",
          utrust: "Full OEM/ODM service. Custom neck tags, barcodes, screen-printing & packaging.",
        },
        supply: {
          title: "Supply Chain & Order Scalability",
          sub: "Predictability of replenishment and container delivery",
          mitumba: "Subject to erratic container shipments, port delays, and changing border rules.",
          utrust: "Guaranteed scheduled monthly dispatch from Dar es Salaam (500 to 500,000+ units).",
        },
        accountability: {
          title: "Accountability & Local Support",
          sub: "Recourse for defective merchandise and contract guarantees",
          mitumba: "Cash-and-carry brokers. Zero refunds, returns, or legal accountability.",
          utrust: "Direct manufacturer contract, dedicated B2B manager, on-site plant visits.",
        },
        tariffs: {
          title: "Tariff & Price Transparency",
          sub: "Import tariffs, customs clearing fees, and margin stability",
          mitumba: "Volatile shipping surcharges, rising import levies, and currency volatility.",
          utrust: "Fixed factory-direct TZS contract rates. Zero EAC inter-state import duties.",
        },
      },
      bannerTitle: "Ready to eliminate your 35% bale discard loss?",
      bannerSub: "Switch your inventory to 100% sellable first-grade apparel with guaranteed factory turnaround.",
      bannerBtn: "Calculate Margin Difference",
    },
    capacity: {
      badge: "Industrial Technical Specs",
      titlePrefix: "Utrust",
      titleMain: "Factory Specifications & Capacity",
      subtitle:
        "Backed by Utrust Clothing Tanzania Limited's modern automated textile plant in Dar es Salaam with a monthly production throughput of",
      monthlyHighlight: "2.8 million units.",
      tabs: {
        gsm: "GSM & Weight",
        stitch: "Stitch & Seams",
        packaging: "Packaging Format",
        moq: "MOQ & Tiers",
      },
      specRange: "Specification Range",
      appsTitle: "Standard Applications & Manufacturing Standards:",
      customPrompt: "Custom blends, dyes, and specs available on demand.",
      requestSample: "Request Sample Pack →",
      shrinkageLabel: "Fabric Shrinkage:",
      yarnCountLabel: "Yarn Count:",
      dyeStandardLabel: "Dye Standard:",
    },
    calculator: {
      badge: "Commercial Yield Simulator (TZS)",
      titlePrefix: "Utrust",
      titleMain: "B2B Volume & Profit Simulator",
      subtitle:
        "Simulate your distributor earnings in Tanzanian Shillings (TZS) based on factory-direct wholesale pricing from Utrust Clothing Tanzania Limited with 0% discard waste.",
      volumeLabel: "Order Volume (Units)",
      volumeSub: "Minimum order starts at 500 units per style",
      marginLabel: "Target Retail Markup / Margin (%)",
      marginSub: "Average retail margin on brand-new apparel is 30% – 50%",
      quickPresets: "Quick presets:",
      benchmarks: "Industry benchmarks:",
      marginWholesale: "20% High-Volume Wholesale",
      marginRetail: "35% Retail Chain",
      marginBoutique: "50% Boutique Brand",
      discardAdvantageTitle: "0% Discard Waste Advantage:",
      discardAdvantageText:
        "Unlike second-hand mitumba bales where 20-35% of capital is lost to unsellable discards, 100% of Utrust Clothing Tanzania Limited units are retail-ready.",
      returnsPill: "Projected Returns (TZS)",
      factoryDirectTag: "Factory Direct",
      grossProfitLabel: "Estimated Gross Profit",
      grossReturnOn: "Gross return across",
      orderSizeLabel: "Wholesale Order Size",
      basePriceLabel: "Factory Base Unit Price",
      factoryCostLabel: "Total Production Cost",
      retailRevenueLabel: "Estimated Retail Revenue",
      dispatchLeadLabel: "Guaranteed Dispatch Lead Time",
      lockPricingBtn: "Lock In Volume Tier Pricing",
      escrowNote: "Escrow & Bank Guarantee (L/C) accepted in TZS or USD",
    },
    qa: {
      badge: "Rigorous Verification",
      titlePrefix: "Utrust",
      titleMain: "QA Protocols & Certifications",
      subtitle:
        "Enterprise-grade apparel manufacturing by Utrust Clothing Tanzania Limited adhering to strict East African Community (EAC) and international export standards.",
      cards: [
        {
          title: "ISO 9001:2024 Certified",
          tagline: "Quality Management System",
          description:
            "Full factory operational audit ensuring rigorous traceability from raw cotton bale intake through cutting, stitching, and finishing.",
          highlights: ["Traceable lot numbering", "Standardized operating protocols", "Quarterly external audits"],
        },
        {
          title: "OEKO-TEX® Standard 100",
          tagline: "Chemical Safety Assurance",
          description:
            "All fabrics and reactive dyes are verified 100% free from carcinogenic amines, formaldehyde, heavy metals, and harmful phthalates.",
          highlights: ["Hypoallergenic safe", "Eco-friendly reactive dyes", "Zero toxic discharge compliance"],
        },
        {
          title: "In-House Textile Laboratory",
          tagline: "Physical & Stress Testing",
          description:
            "Our Dar es Salaam facility features an on-site testing lab assessing tensile tear strength, colorfastness against light/sweat, and seam slippage.",
          highlights: ["50+ home-wash colorfast test", "<3% controlled shrinkage", "Tensile burst-force verification"],
        },
        {
          title: "100% Piece Inspection",
          tagline: "AQL 1.5 Export Standards",
          description:
            "Every single garment is examined on vacuum suction light-tables by certified QA inspectors before steam pressing and protective bagging.",
          highlights: ["Zero second-hand reject risk", "Individual barcode verification", "Optical stain & needle check"],
        },
      ],
      certificateBanner: "Official Factory Inspection Certificates Available",
      certificateSub: "Full test certificates and sample lab dip swatches provided with every production contract.",
      certificateBtn: "Request Certificate Pack",
    },
    onboarding: {
      badge: "Wholesale Partnerships",
      titlePrefix: "Utrust",
      titleMain: "Direct B2B Manufacturer Onboarding",
      subtitle:
        "Open a commercial manufacturing account with Utrust Clothing Tanzania Limited or request a physical sample swatch pack delivered to your office in Dar es Salaam, Nairobi, or Kampala.",
      advantagesTitle: "Wholesale Account Advantages",
      perks: [
        {
          title: "Sample Box in 48 Hours:",
          desc: "Receive actual production blanks, stitch samples, and color cards.",
        },
        {
          title: "Dedicated Account Manager:",
          desc: "Direct factory contact for custom sizing, labeling, and delivery schedules.",
        },
        {
          title: "Factory Floor Walkthroughs:",
          desc: "Transparent on-site audits at our Dar es Salaam industrial plant.",
        },
        {
          title: "Flexible Regional Payment:",
          desc: "L/C, bank guarantees, and escrow options in TZS and USD for recurring container orders.",
        },
      ],
      preferWhatsApp: "Prefer Instant Messaging?",
      whatsAppDesc:
        "Speak directly with our East African sales engineers via WhatsApp for fast stock availability and container quotes.",
      whatsAppBtn: "Chat on WhatsApp Direct (+255 761644444)",
      formTitle: "Wholesale Application & Sample Request",
      formSub: "Complete this brief registration to receive our wholesale price book and schedule a sample box.",
      nameLabel: "Full Name *",
      namePlaceholder: "e.g. Juma Rashid",
      emailLabel: "Corporate Email *",
      emailPlaceholder: "juma@company.co.tz",
      companyLabel: "Company / Wholesale Brand *",
      companyPlaceholder: "e.g. Kilimo Retail Group",
      phoneLabel: "Phone / WhatsApp *",
      phonePlaceholder: "+255 7XX XXX XXX",
      volumeLabel: "Estimated Monthly Volume (Pieces) *",
      volumeOptions: [
        { val: "500-2500", label: "500 – 2,500 pcs (Test / Boutique Tier)" },
        { val: "2500-10000", label: "2,500 – 10,000 pcs (Commercial Distributor)" },
        { val: "10000-50000", label: "10,000 – 50,000 pcs (Regional Chain Store)" },
        { val: "50000+", label: "50,000+ pcs (National / Full Container)" },
      ],
      interestLabel: "Primary Product Interests (Select all that apply)",
      interestOptions: [
        "Combed Cotton T-Shirts (160–200 GSM)",
        "Pique Polo Shirts (220–250 GSM)",
        "Fleece Hoodies & Sweatshirts (280–320 GSM)",
        "Custom OEM / Private Label Branding",
      ],
      notesLabel: "Specific Customization or Delivery Requirements",
      notesPlaceholder:
        "Mention required Pantone shades, neck label specifications, target delivery port, or timeline...",
      submitBtn: "Submit Wholesale Application",
      successTitle: "Wholesale Application Received!",
      successDesc:
        "A senior commercial account executive from Utrust Clothing Tanzania Limited will contact you within 24 business hours. Your sample swatch request has been queued.",
      resetBtn: "Submit Another Inquiry",
    },
    gallery: {
      badge: "REAL FACTORY PRODUCTION RUNS",
      titlePrefix: "Industrial Precision",
      titleMain: "Factory-Direct Apparel Gallery",
      subtitle:
        "High-definition photographic proof of our active manufacturing lines in Dar es Salaam. From single-jersey combed cotton boxer shorts to athletic performance mesh, custom jacquard elastic waistbands, and luxury rigid retail presentation boxes.",
      filterAll: "All Showcase",
      filterCotton: "Cotton Blanks",
      filterAthletic: "Athletic & Prints",
      filterPackaging: "Retail Packaging",
      filterOem: "OEM / ODM Custom",
      zoomHint: "Click any image to inspect high-resolution details",
      specsLabel: "Factory Production Specifications",
      orderSampleBtn: "Inquire for Wholesale",
      closeLightbox: "Close",
      prevPhoto: "Previous Photo",
      nextPhoto: "Next Photo",
      photoCounter: "Photo",
      items: [
        {
          id: "cotton-blanks-hero",
          category: "cotton",
          title: "Everyday Comfort™ 100% Combed Cotton Blanks",
          tag: "Classic Cotton Blanks",
          description:
            "Our flagship single-jersey combed cotton boxer shorts. Featuring 8 permanent retail colorways and classic highland tartans with pre-shrunk finish.",
          specs: [
            "100% Tanzanian Combed Cotton",
            "160-180 GSM Single Jersey Knit",
            "Pre-shrunk < 3% Dimensional Stability",
            "8 Vibrant Solid & Tartan Colorways",
          ],
          image: "/gallery/cotton-blanks-hero.jpg",
        },
        {
          id: "gift-box-teal",
          category: "packaging",
          title: "6-Pack Luxury Retail Presentation Gift Box",
          tag: "Retail Presentation",
          description:
            "Turnkey luxury packaging solution for high-end retail boutiques and department stores with foil hot-stamping and custom ribbon pull.",
          specs: [
            "Rigid Cardboard Hinged Construction",
            "Teal & Gold Foil Hot-Stamping",
            "Individual Rolled Garment Separators",
            "Custom Retail Barcode & Hangtag Ready",
          ],
          image: "/gallery/gift-box-teal.jpg",
        },
        {
          id: "athletic-mesh",
          category: "athletic",
          title: "Athletic Breathable Performance Mesh Shorts",
          tag: "Activewear & Mesh",
          description:
            "Engineered with micro-perforated breathable mesh for active lifestyle consumers. Features moisture-wicking and quick-drying yarn.",
          specs: [
            "Poly-Spandex Breathable Micro-Mesh",
            "Active Moisture Wicking Finish",
            "Ergonomic 3D Contour Comfort Pouch",
            "High-Durability Flatlock Stitching",
          ],
          image: "/gallery/athletic-mesh.jpg",
        },
        {
          id: "tropical-prints",
          category: "athletic",
          title: "Tropical Flora & Vibrant Resort Prints",
          tag: "Resort Prints",
          description:
            "High-contrast tropical botanical and floral designs printed with premium eco-certified reactive dyes for lasting color depth.",
          specs: [
            "Eco-Certified Reactive Printing",
            "Grade 4.5+ Wash Colorfastness",
            "Non-Toxic Skin-Safe European Standard Dyes",
            "Available in 12 Summer Pattern Variations",
          ],
          image: "/gallery/tropical-prints.jpg",
        },
        {
          id: "jacquard-briefs",
          category: "oem",
          title: "Branded Jacquard Elastic Waistband Briefs",
          tag: "Jacquard Elastic",
          description:
            "Ultra-comfortable boxer briefs equipped with custom woven jacquard brand waistbands engineered to maintain elasticity after dozens of washes.",
          specs: [
            "35mm High-Tensile Anti-Roll Waistband",
            "Direct Jacquard Custom Weaving",
            "Reinforced Double-Layer Crotch Gusset",
            "4-Way Stretch Cotton-Modal Blend",
          ],
          image: "/gallery/jacquard-briefs.jpg",
        },
        {
          id: "graphic-prints",
          category: "athletic",
          title: "Graphic Animal Prints & Urban Camo Line",
          tag: "Graphic Underwear",
          description:
            "Youthful and contemporary patterns including leopard spots, zebra stripes, and geo-camo for fast-moving retail stores.",
          specs: [
            "High-Impact Graphic Aesthetics",
            "Reinforced Stress Points",
            "Soft-Touch Surface Brushing",
            "Tested Against Extreme Humidity Wear",
          ],
          image: "/gallery/graphic-prints.jpg",
        },
        {
          id: "oem-packaging",
          category: "packaging",
          title: "Custom OEM / ODM Labeling & Master Cartons",
          tag: "OEM / ODM Export",
          description:
            "Turnkey private labeling service: bespoke woven labels, customized retail boxes, barcode stickers, and palletized export shipping.",
          specs: [
            "Full Private Label Branding Service",
            "Export-Standard 5-Ply Corrugated Cartons",
            "Polybagged Individual Packaging Options",
            "Customs & SADC / EAC Documentation",
          ],
          image: "/gallery/oem-packaging.jpg",
        },
        {
          id: "catalog-triptych-1",
          category: "cotton",
          title: "Factory Production Summer & Active Series",
          tag: "Factory Production",
          description:
            "Comprehensive production overview showing our seamless transition from cotton blanks to active mesh and presentation gift boxes.",
          specs: [
            "2.8M Units Monthly Production Volume",
            "ISO 9001:2024 Quality Management System",
            "Factory Direct Dar es Salaam Mill Pricing",
            "Zero Mitumba Defect Guarantee",
          ],
          image: "/gallery/catalog-triptych-1.jpg",
        },
        {
          id: "catalog-triptych-2",
          category: "oem",
          title: "Export Wholesale Suites & Custom Packaging Lines",
          tag: "Export Wholesale",
          description:
            "Full spectrum of wholesale products engineered for East African retail distribution, regional wholesalers, and supermarket chains.",
          specs: [
            "Standardized Size Grading (S to 4XL)",
            "Factory Batch Color Consistency",
            "Direct Delivery to Kariakoo & Regional Hubs",
            "Flexible B2B Minimum Order Quantities",
          ],
          image: "/gallery/catalog-triptych-2.jpg",
        },
      ],
    },
    footer: {
      bio: "is East Africa’s premier industrial apparel manufacturing partner. We replace unreliable second-hand bales (mitumba) with pristine, factory-direct, certified local apparel.",
      madeInTz: "Proudly Made in Tanzania 🇹🇿",
      navTitle: "Navigation",
      complianceTitle: "Compliance & Export",
      plantTitle: "Dar es Salaam Plant",
      plantAddress: "Plot 42/B, Industrial Area, Dar es Salaam, Tanzania",
      rights: "All rights reserved.",
      badgeEnterprise: "Enterprise B2B Manufacturing",
      badgeZeroWaste: "Zero Second-Hand Waste",
    },
  },

  sw: {
    common: {
      companyName: "Utrust Clothing Tanzania Limited",
      tagline: "Clothing Tanzania Limited",
      tzs: "TZS",
      darEsSalaam: "Dar es Salaam, Tanzania",
      units: "vipande",
      pcs: "pcs",
      days: "Siku",
      requestQuote: "Omba Makadirio ya Bei ya Jumla",
      viewSpecs: "Angalia Vipimo vya Kiufundi",
      b2bPortal: "Tovuti ya B2B",
      activeProduction: "Uzalishaji Mkubwa Unaendelea",
    },
    header: {
      announcementDirect: "Moja kwa Moja Kutoka Kiwanda cha Dar es Salaam",
      announcementTransit: "Imethibitishwa Usafirishaji Bila Ushuru EAC",
      mitumbaVsUtrust: "Mitumba vs Utrust",
      gallery: "Matunzio ya Picha",
      factorySpecs: "Uwezo wa Kiwanda",
      profitCalc: "Kikokotoo cha Faida",
      qualityAssurance: "Uhakika wa Ubora",
      wholesaleAccounts: "Akaunti za Jumla",
      unitsPerHr: "Vipande 12,400/saa vinazalishwa",
    },
    hero: {
      badge: "KIWANDA KIKUBWA CHA NGUO ZA VIWANDANI TANZANIA",
      isoBadge: "ISO 9001:2024",
      headlineStart: "Badilisha Mitumba na Nguo za",
      headlineHighlight: "Utrust",
      headlineEnd: "Moja kwa Moja Kutoka Kiwandani.",
      subheadline:
        "Sema kwaheri marobota ya mitumba yenye nguo zilizoharibika, gharama kubwa za usafirishaji, na ucheleweshaji wa bandarini. Pata mavazi mapya 100%, yaliyothibitishwa moja kwa moja kutoka kiwanda cha Utrust Clothing Tanzania Limited jijini Dar es Salaam kwa faida ya uhakika.",
      turnaroundTitle: "Siku 7 za Uzalishaji",
      turnaroundSub: "Usafirishaji wa haraka Afrika Mashariki",
      inspectionTitle: "Ukaguzi wa 100%",
      inspectionSub: "Hakuna nguo yenye dosari",
      automationTitle: "Vipande 12,400 / Saa",
      automationSub: "Mashine za kisasa za kiotomatiki",
      telemetryTitle: "TAARIFA ZA KIWANDA 1 • DAR ES SALAAM",
      telemetryLive: "MTANDAONI • MUDA HALISI",
      instantOutputLabel: "UZALISHAJI WA SASA",
      instantOutputVal: "12,400",
      instantOutputUnit: "vipande / saa",
      monthlyCapLabel: "UWEZO KWA MWEZI",
      monthlyCapVal: "M 2.8",
      monthlyCapUnit: "vipande / mwezi",
      lineUtilizationLabel: "Kiwango cha Matumizi ya Kiwanda",
      bookedVal: "78% Imeshikiliwa",
      activeUnitsLabel: "Inatumika: Vipande Milioni 2.18",
      availableUnitsLabel: "Nafasi iliyobaki: Vipande 620,000",
      quarterlyAdvisory: "Ushauri wa Robo Mwaka: Zimesalia nafasi 2 tu za ugawaji wa jumla kwa robo hii ya mwaka. Weka ratiba ya kontena lako mapema.",
      reserveButton: "Weka Nafasi Yako ya Uzalishaji",
    },
    comparison: {
      badge: "Ulinganifu wa Kibiashara",
      titleStart: "Marobota ya Mitumba dhidi ya",
      titleVs: "dhidi ya",
      titleEnd: "Kiwandani",
      subtitle:
        "Sababu zinazowafanya wafanyabiashara wakubwa wa jumla na maduka ya rejareja kote Afrika Mashariki kuachana na mitumba na kuchagua uzalishaji wa kiwandani wa Utrust Clothing Tanzania Limited.",
      colCriteria: "Vigezo vya Tathmini",
      colMitumba: "Marobota ya Mitumba (Used)",
      colUtrust: "Utrust Moja kwa Moja Kiwandani",
      criteria: {
        hygiene: {
          title: "Usafi na Hali ya Nguo",
          sub: "Usafi wa kiafya, ubora na uwezo wa kuuzwa mara moja dukani",
          mitumba: "Zimetumika na hazijafuliwa. Zina kemikali za dawa za kuua vijidudu na hatari ya mzio.",
          utrust: "Mpya 100%, zimefungwa kiwandani, zimethibitishwa na OEKO-TEX® kuwa salama kwa ngozi.",
        },
        consistency: {
          title: "Msimamo na Uhakika wa Vipimo",
          sub: "Tofauti kati ya vipande na hasara ya nguo zisizouzika",
          mitumba: "Madaraja ya kubahatisha. Hadi 35% hutupwa kama fagio kwa kuraruka au kuchakaa.",
          utrust: "Dhamana ya 0% hasara ya kutupa. Vipimo kamili (XS–4XL) katika kila katoni.",
        },
        customization: {
          title: "Nembo na Mahitaji Maalum ya Chapa",
          sub: "Lebo za shingoni, rangi maalum za Pantone, na uzito wa pamba (GSM)",
          mitumba: "Hakuna uwezo wa kubinafsisha. Mchanganyiko wa majina ya nchi za nje yasiyolingana.",
          utrust: "Huduma kamili ya OEM/ODM. Lebo zako, chapa yako, 'barcode' na vifungashio vyako.",
        },
        supply: {
          title: "Uthabiti wa Ugavi na Ukubwa wa Oda",
          sub: "Uhakika wa kupata mzigo mpya kwa wakati unaotaka",
          mitumba: "Hutegemea meli za nje, ucheleweshaji bandarini, na mabadiliko ya ushuru wa forodha.",
          utrust: "Ugavi wa kila mwezi uliohakikishwa kutoka Dar es Salaam (vipande 500 hadi 500,000+).",
        },
        accountability: {
          title: "Uwajibikaji na Msaada wa Karibu",
          sub: "Haki ya kisheria na fidia iwapo mzigo una hitilafu",
          mitumba: "Madalali wa fedha taslimu bila risiti wala uwezo wa kurudisha mzigo ukiharibika.",
          utrust: "Mkataba rasmi na kiwanda, meneja maalum wa akaunti yako, na kutembelea kiwanda.",
        },
        tariffs: {
          title: "Uwazi wa Kodi na Bei",
          sub: "Ushuru wa forodha, gharama za bandari, na uhakika wa faida",
          mitumba: "Gharama zinazobadilika mara kwa mara, ongezeko la kodi ya mitumba na bei ya dola.",
          utrust: "Bei thabiti za Shilingi ya Tanzania (TZS). Hakuna ushuru wa forodha ndani ya Jumuiya ya Afrika Mashariki (EAC).",
        },
      },
      bannerTitle: "Je, uko tayari kuondoa hasara ya 35% ya fagio la mitumba?",
      bannerSub: "Badilisha mtaji wako kuwa nguo mpya 100% zenye soko la haraka na faida iliyohakikishwa.",
      bannerBtn: "Kokotoa Tofauti ya Faida",
    },
    capacity: {
      badge: "Vipimo vya Kiufundi vya Kiwanda",
      titlePrefix: "Utrust",
      titleMain: "Uwezo wa Kiwanda & Vipimo vya Nguo",
      subtitle:
        "Tukitegemea mitambo ya kisasa ya nguo ya kiotomatiki ya Utrust Clothing Tanzania Limited jijini Dar es Salaam yenye uwezo wa kuzalisha",
      monthlyHighlight: "vipande milioni 2.8 kwa mwezi.",
      tabs: {
        gsm: "Uzito wa Pamba (GSM)",
        stitch: "Aina ya Mshono",
        packaging: "Vifungashio",
        moq: "Kiwango cha Chini (MOQ)",
      },
      specRange: "Kiwango cha Uzito",
      appsTitle: "Matumizi ya Kawaida na Viwango vya Uzalishaji:",
      customPrompt: "Mchanganyiko maalum wa rangi na uzito unapatikana kwa oda yako.",
      requestSample: "Omba Sampuli Bure →",
      shrinkageLabel: "Kupungua Baada ya Kufuliwa:",
      yarnCountLabel: "Kiwango cha Uzi:",
      dyeStandardLabel: "Kiwango cha Rangi:",
    },
    calculator: {
      badge: "Kikokotoo cha Faida ya Kibiashara (TZS)",
      titlePrefix: "Utrust",
      titleMain: "Kikokotoo cha Faida na Wingi wa Nguo",
      subtitle:
        "Piga hesabu ya faida halisi utakayopata kwa Shilingi za Kitanzania (TZS) kwa kununua nguo za jumla moja kwa moja kutoka kiwanda cha Utrust Clothing Tanzania Limited bila hasara ya kutupa.",
      volumeLabel: "Idadi ya Nguo (Vipande)",
      volumeSub: "Oda ya chini kabisa huanzia vipande 500 kwa muundo mmoja",
      marginLabel: "Faida ya Rejareja Unayolenga (%)",
      marginSub: "Wastani wa faida ya rejareja kwa nguo mpya ni 30% hadi 50%",
      quickPresets: "Chagua haraka:",
      benchmarks: "Viwango vya kawaida sokoni:",
      marginWholesale: "20% Bei ya Jumla Kubwa",
      marginRetail: "35% Maduka ya Rejareja",
      marginBoutique: "50% Maduka ya Mavazi ya Kifahari",
      discardAdvantageTitle: "Faida ya 0% Hasara ya Kutupa:",
      discardAdvantageText:
        "Tofauti na marobota ya mitumba ambapo 20% hadi 35% ya mtaji hupotea kwenye nguo mbovu, mavazi yote ya Utrust Clothing Tanzania Limited yapo tayari kuuzwa mara moja.",
      returnsPill: "Makadirio ya Faida (TZS)",
      factoryDirectTag: "Moja kwa Moja Kiwandani",
      grossProfitLabel: "Makadirio ya Faida Ghafi",
      grossReturnOn: "Jumla ya faida kwa vipande",
      orderSizeLabel: "Ukubwa wa Oda ya Jumla",
      basePriceLabel: "Bei ya Kiwanda kwa Kipande",
      factoryCostLabel: "Jumla ya Gharama ya Kiwanda",
      retailRevenueLabel: "Makadirio ya Mauzo ya Rejareja",
      dispatchLeadLabel: "Muda wa Kukamilisha na Kutoa Mzigo",
      lockPricingBtn: "Thibitisha Bei Yako ya Kiwanda Sasa",
      escrowNote: "Tunakubali malipo ya Benki (L/C) na dhamana za kibenki kwa TZS au USD",
    },
    qa: {
      badge: "Ukaguzi Mkali wa Ubora",
      titlePrefix: "Utrust",
      titleMain: "Uhakika wa Ubora & Vyeti vya Kimataifa",
      subtitle:
        "Viwango vya juu vya utengenezaji nguo kutoka Utrust Clothing Tanzania Limited vinavyofuata sheria kali za Jumuiya ya Afrika Mashariki (EAC) na viwango vya kimataifa.",
      cards: [
        {
          title: "Cheti cha ISO 9001:2024",
          tagline: "Mfumo wa Usimamizi wa Ubora",
          description:
            "Ukaguzi wa kina wa kiwanda unaohakikisha ufuatiliaji kuanzia marobota ya pamba ghafi, ukataji, ushonaji hadi ukamilishaji.",
          highlights: ["Nambari za utambulisho wa kila kundi", "Mifumo sanifu ya uzalishaji", "Ukaguzi huru wa kila robo mwaka"],
        },
        {
          title: "OEKO-TEX® Standard 100",
          tagline: "Usalama wa Kikemikali",
          description:
            "Vitambaa na rangi zote zimethibitishwa 100% kutokuwa na kemikali zenye sumu, metali nzito, au vichocheo vya mzio wa ngozi.",
          highlights: ["Salama kwa ngozi", "Rangi rafiki kwa mazingira", "Hakuna uchafuzi wa vyanzo vya maji"],
        },
        {
          title: "Maabara ya Ndani ya Vitambaa",
          tagline: "Vipimo vya Uimara wa Nguo",
          description:
            "Kiwanda chetu cha Dar es Salaam kina maabara ya kisasa ya kupima uimara wa nyuzi, kutopauka kwa rangi, na kutosinyaa.",
          highlights: ["Kupimwa kufuliwa mara 50+", "Kupungua chini ya 3%", "Uthabiti mkubwa wa nyuzi"],
        },
        {
          title: "Ukaguzi wa 100% wa Kila Nguo",
          tagline: "Viwango vya Kusafirisha Nje (AQL 1.5)",
          description:
            "Kila nguo inakaguliwa moja kwa moja kwenye meza maalum zenye mwanga mkali na wataalamu walioidhinishwa kabla ya kupigwa pasi na kufungwa.",
          highlights: ["Hakuna hasara ya nguo mbovu", "Ukaguzi wa 'barcode' binafsi", "Ukaguzi wa madoa na sindano"],
        },
      ],
      certificateBanner: "Vyeti Rasmi vya Ukaguzi wa Kiwanda Vinapatikana",
      certificateSub: "Vyeti kamili vya vipimo vya maabara na sampuli za rangi hutolewa na kila mkataba wa uzalishaji.",
      certificateBtn: "Omba Vifurushi vya Vyeti",
    },
    onboarding: {
      badge: "Ushirikiano wa Kibiashara",
      titlePrefix: "Utrust",
      titleMain: "Kufungua Akaunti ya Ununuzi Kiwandani",
      subtitle:
        "Fungua akaunti ya kibiashara na Utrust Clothing Tanzania Limited au uombe sampuli za vitambaa ziletwe ofisini kwako Dar es Salaam, Nairobi, au Kampala.",
      advantagesTitle: "Faida za Kuwa na Akaunti ya Jumla",
      perks: [
        {
          title: "Boksi la Sampuli Ndani ya Saa 48:",
          desc: "Pokea nguo halisi zilizoshonwa, sampuli za mishono, na kadi za rangi.",
        },
        {
          title: "Meneja Binafsi wa Akaunti Yako:",
          desc: "Mawasiliano ya moja kwa moja na kiwanda kuhusu saizi, lebo na ratiba za mizigo.",
        },
        {
          title: "Kutembelea Kiwanda:",
          desc: "Ukaguzi wa wazi wa mitambo yetu kwenye kiwanda chetu cha Dar es Salaam.",
        },
        {
          title: "Mifumo ya Malipo ya Kikanda:",
          desc: "Dhamana za benki (L/C), akaunti za amana kwa TZS na USD kwa oda za makontena.",
        },
      ],
      preferWhatsApp: "Je, Unapendelea Mawasiliano ya Haraka?",
      whatsAppDesc:
        "Wasiliana moja kwa moja na wahandisi wetu wa mauzo wa Afrika Mashariki kupitia WhatsApp kwa bei na upatikanaji wa nafasi za makontena.",
      whatsAppBtn: "Tuma Ujumbe WhatsApp (+255 761644444)",
      formTitle: "Fomu ya Maombi ya Jumla na Sampuli",
      formSub: "Jaza taarifa hizi fupi ili upate orodha ya bei za jumla na ratiba ya boksi la sampuli.",
      nameLabel: "Jina Kamili *",
      namePlaceholder: "mfano: Juma Rashid",
      emailLabel: "Barua Pepe ya Kampuni *",
      emailPlaceholder: "juma@kampuni.co.tz",
      companyLabel: "Jina la Kampuni au Biashara *",
      companyPlaceholder: "mfano: Kariakoo Retailers Co.",
      phoneLabel: "Nambari ya Simu / WhatsApp *",
      phonePlaceholder: "+255 7XX XXX XXX",
      volumeLabel: "Makadirio ya Nguo kwa Mwezi (Vipande) *",
      volumeOptions: [
        { val: "500-2500", label: "Vipande 500 – 2,500 (Kiwango cha Majaribio / Maduka Madogo)" },
        { val: "2500-10000", label: "Vipande 2,500 – 10,000 (Msambazaji wa Kibiashara)" },
        { val: "10000-50000", label: "Vipande 10,000 – 50,000 (Msururu wa Maduka ya Kikanda)" },
        { val: "50000+", label: "Vipande 50,000+ (Oda ya Kitaifa / Makontena Kamili)" },
      ],
      interestLabel: "Aina ya Mavazi Unayovutiwa Nayo (Chagua yote yanayofaa)",
      interestOptions: [
        "T-Shirt za Pamba Safi (160–200 GSM)",
        "Mashati ya Polo (Pique) (220–250 GSM)",
        "Sweta na Nguo Nzito za Baridi (280–320 GSM)",
        "Utengenezaji Maalum wa Lebo Yako (OEM/Private Label)",
      ],
      notesLabel: "Mahitaji Maalum ya Kushona au Usafirishaji",
      notesPlaceholder:
        "Taja rangi unazotaka, aina ya lebo za shingoni, bandari unayotaka kupelekewa au tarehe...",
      submitBtn: "Wasilisha Maombi ya Jumla",
      successTitle: "Maombi Yako Yamepokelewa!",
      successDesc:
        "Afisa mkuu wa kibiashara kutoka Utrust Clothing Tanzania Limited atawasiliana nawe ndani ya saa 24 za kazi. Ombi lako la sampuli limeandikishwa.",
      resetBtn: "Wasilisha Ombi Lingine",
    },
    gallery: {
      badge: "UZALISHAJI HALISI WA KIWANDANI",
      titlePrefix: "Kiwango cha Juu cha Viwandani",
      titleMain: "Matunzio ya Mavazi ya Kiwandani",
      subtitle:
        "Uthibitisho halisi wa picha za ubora wa juu kutoka kwenye mistari yetu ya uzalishaji jijini Dar es Salaam. Kuanzia boksa za pamba safi hadi nguo za michezo za wavu, lebo za kiunoni za jacquard, na masanduku ya zawadi ya kifahari ya rejareja.",
      filterAll: "Picha Zote",
      filterCotton: "Pamba Safi",
      filterAthletic: "Michezo na Maua",
      filterPackaging: "Vifurushi vya Rejareja",
      filterOem: "Lebo Binafsi (OEM)",
      zoomHint: "Bofya picha yoyote kutazama maelezo ya kina kwa ukubwa",
      specsLabel: "Vipimo vya Uzalishaji wa Kiwanda",
      orderSampleBtn: "Ulizia kwa Bei ya Jumla",
      closeLightbox: "Funga",
      prevPhoto: "Picha Iliyopita",
      nextPhoto: "Picha Inayofuata",
      photoCounter: "Picha",
      items: [
        {
          id: "cotton-blanks-hero",
          category: "cotton",
          title: "Pamba Safi 100% ya Everyday Comfort™",
          tag: "Nguo za Pamba Asilia",
          description:
            "Boksa zetu bora za pamba iliyochanwa. Zinajumuisha rangi 8 thabiti na miundo ya kisasa ya tartan iliyotibiwa kuzuia kusinyaa.",
          specs: [
            "Pamba Safi 100% ya Tanzania",
            "Uzito wa 160-180 GSM",
            "Imenyoshwa kuzuia kusinyaa (<3%)",
            "Rangi 8 Thabiti na Miundo ya Kisasa",
          ],
          image: "/gallery/cotton-blanks-hero.jpg",
        },
        {
          id: "gift-box-teal",
          category: "packaging",
          title: "Sanduku la Zawadi la Vipande 6 la Kifahari",
          tag: "Ufungashaji wa Rejareja",
          description:
            "Suluhisho la ufungashaji wa kifahari kwa maduka makubwa na maduka ya nguo yenye chapa ya dhahabu na utepe wa kisasa.",
          specs: [
            "Sanduku Imara la Kadibodi Yenye Nguvu",
            "Chapa ya Dhahabu na Rangi ya Kifahari",
            "Sehemu Maalum ya Kukunja Nguo",
            "Tayari kwa Msimbo Pau (Barcode) na Lebo",
          ],
          image: "/gallery/gift-box-teal.jpg",
        },
        {
          id: "athletic-mesh",
          category: "athletic",
          title: "Boksa za Michezo za Wavu Zinazopumua",
          tag: "Nguo za Michezo",
          description:
            "Zimetengenezwa kwa kitambaa cha wavu chenye matundu madogo kinachoruhusu hewa kupita na kukausha jasho haraka.",
          specs: [
            "Mchanganyiko wa Poly-Spandex Unaopumua",
            "Hukausha Jasho Haraka kwa Michezo",
            "Muundo wa 3D Unaotoa Faraja ya Juu",
            "Mshono Imara Usiokwangua Mwili",
          ],
          image: "/gallery/athletic-mesh.jpg",
        },
        {
          id: "tropical-prints",
          category: "athletic",
          title: "Miundo ya Maua ya Kitropiki na Rangi za Kisasa",
          tag: "Mitindo ya Maua",
          description:
            "Miundo ya rangi yenye kuvutia ya maua ya kitropiki iliyochapishwa kwa rangi thabiti za kisasa zisizopauka.",
          specs: [
            "Uchapishaji wa Rangi Thabiti wa Kisasa",
            "Kiwango cha 4.5+ cha Kudumu Rangi",
            "Rangi Salama Zisizo na Kemikali Hatari",
            "Inapatikana katika Miundo 12 Tofauti",
          ],
          image: "/gallery/tropical-prints.jpg",
        },
        {
          id: "jacquard-briefs",
          category: "oem",
          title: "Boksa zenye Mpira wa Kiuno wa Jacquard",
          tag: "Lebo ya Jacquard Kiunoni",
          description:
            "Boksa zenye mpira mpana wa kiunoni wa jacquard unaodumu bila kulegea hata baada ya kufuliwa mara nyingi.",
          specs: [
            "Mpira Imara wa Milimita 35 Usiokunjika",
            "Ufumaji wa Nembo Binafsi Moja kwa Moja",
            "Sehemu ya Chini ya Safu Mbili Imara",
            "Kitambaa cha Kunyumbulika kwa Faraja",
          ],
          image: "/gallery/jacquard-briefs.jpg",
        },
        {
          id: "graphic-prints",
          category: "athletic",
          title: "Miundo ya Kisasa ya Chui na Mistari ya Pundamilia",
          tag: "Mitindo ya Kisasa",
          description:
            "Mitindo ya kisasa ya michoro ya wanyama na maumbo ya kijiji kwa ajili ya maduka na masoko yanayouza kwa kasi.",
          specs: [
            "Mwonekano wa Kisasa wa Kuvutia",
            "Mishono Imara Maeneo Yanayovutika",
            "Kitambaa Laini Kisichowasha",
            "Kimejaribiwa Kuhimili Joto na Unyevu",
          ],
          image: "/gallery/graphic-prints.jpg",
        },
        {
          id: "oem-packaging",
          category: "packaging",
          title: "Lebo Binafsi (OEM/ODM) na Katoni za Kusafirisha Nje",
          tag: "Uzalishaji wa Lebo Binafsi",
          description:
            "Huduma kamili ya kuweka chapa yako mwenyewe: lebo zilizofumwa, masanduku maalum, na katoni imara za usafirishaji.",
          specs: [
            "Huduma Kamili ya Chapa ya Mteja (OEM)",
            "Katoni Imara za Daraja la 5 za Kusafirisha Nje",
            "Ufungashaji wa Mfuko Mmoja Mmoja (Polybag)",
            "Nyaraka za Forodha za SADC na EAC",
          ],
          image: "/gallery/oem-packaging.jpg",
        },
        {
          id: "catalog-triptych-1",
          category: "cotton",
          title: "Mfululizo Kamili wa Uzalishaji wa Majira ya Joto",
          tag: "Uzalishaji wa Kiwandani",
          description:
            "Mwonekano kamili wa uwezo wetu wa kutengeneza nguo za pamba, nguo za michezo, na vifurushi vya zawadi.",
          specs: [
            "Uzalishaji wa Vipande Milioni 2.8 kwa Mwezi",
            "Usimamizi wa Ubora wa ISO 9001:2024",
            "Bei ya Moja kwa Moja ya Kiwanda Dar es Salaam",
            "Dhamana ya 0% ya Kasoro za Nguo",
          ],
          image: "/gallery/catalog-triptych-1.jpg",
        },
        {
          id: "catalog-triptych-2",
          category: "oem",
          title: "Mkusanyiko wa Jumla wa Kusafirisha Nje na Sanduku za Zawadi",
          tag: "Usafirishaji wa Jumla",
          description:
            "Bidhaa zote za jumla zilizotengenezwa kwa ajili ya maduka na wasambazaji wa Afrika Mashariki na masoko makuu.",
          specs: [
            "Vipimo Sanifu vya Saizi (S hadi 4XL)",
            "Rangi Sawa Katika Kila Kundi la Uzalishaji",
            "Uwasilishaji wa Haraka Kariakoo na Mikoani",
            "Kiwango Nafuu cha Kuanzia Kuagiza (MOQ)",
          ],
          image: "/gallery/catalog-triptych-2.jpg",
        },
      ],
    },
    footer: {
      bio: "ni mshirika kiongozi wa utengenezaji wa mavazi ya viwandani Afrika Mashariki. Tunachukua nafasi ya marobota ya mitumba yenye hasara kwa kutoa nguo mpya za kiwandani zenye ubora uliothibitishwa.",
      madeInTz: "Imetengenezwa kwa Fahari Tanzania 🇹🇿",
      navTitle: "Menyu Kuu",
      complianceTitle: "Viwango & Usafirishaji Nje",
      plantTitle: "Kiwanda cha Dar es Salaam",
      plantAddress: "Plot 42/B, Eneo la Viwanda, Dar es Salaam, Tanzania",
      rights: "Haki zote zimehifadhiwa.",
      badgeEnterprise: "Uzalishaji wa Nguo za Viwandani",
      badgeZeroWaste: "Hakuna Hasara ya Mitumba",
    },
  },

  zh: {
    common: {
      companyName: "Utrust Clothing Tanzania Limited",
      tagline: "Clothing Tanzania Limited",
      tzs: "TZS (坦桑尼亚先令)",
      darEsSalaam: "坦桑尼亚 · 达累斯萨拉姆",
      units: "件",
      pcs: "件",
      days: "天",
      requestQuote: "获取大宗批发报价",
      viewSpecs: "查阅生产技术规格",
      b2bPortal: "B2B企业门户",
      activeProduction: "高产能生产中",
    },
    header: {
      announcementDirect: "达累斯萨拉姆自营大型现代化服装工厂直发",
      announcementTransit: "东非共同体 (EAC) 原产地免关税认证",
      mitumbaVsUtrust: "二手碎布对比",
      gallery: "产品与工厂图集",
      factorySpecs: "工厂产能",
      profitCalc: "利润测算器",
      qualityAssurance: "质量保证体系",
      wholesaleAccounts: "大宗客户合作",
      unitsPerHr: "实时产能 12,400 件/小时",
    },
    hero: {
      badge: "坦桑尼亚规模化现代纺织成衣制造工厂",
      isoBadge: "ISO 9001:2024认证",
      headlineStart: "全面替代二手旧衣，选择",
      headlineHighlight: "Utrust",
      headlineEnd: "原厂直供品牌成衣",
      subheadline:
        "彻底摆脱二手进口衣物（Mitumba）高达35%的破损碎布损耗、海运周期不确定性及港口清关延误。直接对接 Utrust Clothing Tanzania Limited 达累斯萨拉姆现代化成衣工厂生产线，采购全新经严格质检的合规成衣，锁定稳定高额利润。",
      turnaroundTitle: "7天快速交付周期",
      turnaroundSub: "东非区域高效直运",
      inspectionTitle: "100% 全检出厂",
      inspectionSub: "AQL 1.5 零瑕疵标准",
      automationTitle: "12,400 件 / 小时",
      automationSub: "全自动化工业缝制线",
      telemetryTitle: "一号厂区生产遥测监控 • 达累斯萨拉姆",
      telemetryLive: "在线运行 • 实时数据",
      instantOutputLabel: "当前实时产能",
      instantOutputVal: "12,400",
      instantOutputUnit: "件 / 小时",
      monthlyCapLabel: "月度核准总产能",
      monthlyCapVal: "280万",
      monthlyCapUnit: "件 / 月",
      lineUtilizationLabel: "生产线排产负荷率",
      bookedVal: "已锁定 78%",
      activeUnitsLabel: "排产中: 218万件",
      availableUnitsLabel: "剩余可预定: 62万件",
      quarterlyAdvisory: "季度排产预警提示：本季度仅剩最后 2 个大宗集装箱排产名额，请在大促旺季截止前确认生产船期。",
      reserveButton: "立即锁定生产配额",
    },
    comparison: {
      badge: "商业效益横向对比",
      titleStart: "进口二手衣（Mitumba）与",
      titleVs: "对比",
      titleEnd: "原厂直供",
      subtitle:
        "深度解析东非各大批发商、连锁品牌与采购商放弃二手盲盒旧衣包，全面转向 Utrust Clothing Tanzania Limited 本地工业化成衣制造的核心原因。",
      colCriteria: "采购评估维度",
      colMitumba: "进口二手包 (Mitumba)",
      colUtrust: "Utrust 本地工厂直供",
      criteria: {
        hygiene: {
          title: "卫生状况与即时销售能力",
          sub: "洁净度、气味与货架陈列就绪度",
          mitumba: "陈旧未洗涤，残留大宗化学熏蒸杀虫气味，存在微生物与皮肤接触风险。",
          utrust: "100% 全新出厂密封包装，通过 OEKO-TEX® Standard 100 婴儿级亲肤环保认证。",
        },
        consistency: {
          title: "品控一致性与损耗率",
          sub: "批次尺码标准度与不可销售报废率",
          mitumba: "完全凭运气开盲盒，破损、污渍、怪异尺码导致高达 20%–35% 沦为报废垃圾。",
          utrust: "零损耗承诺保障。严格遵循国际成衣尺码公差（XS–4XL），每箱每件完全合规。",
        },
        customization: {
          title: "自主品牌与定制生产能力",
          sub: "领标洗水唛、定制Pantone潘通色号、克重配比",
          mitumba: "无法定制，充斥欧美杂乱淘汰二手商标，无法沉淀自主品牌价值。",
          utrust: "全套 OEM/ODM 贴牌定制：定制领标、防伪条码标签、丝网印花及专属包装箱。",
        },
        supply: {
          title: "供应链与订单交付确定性",
          sub: "集装箱到货周期与补货响应速度",
          mitumba: "受制于跨大西洋海运集装箱短缺、港口压港及东非共同体关税政策限制。",
          utrust: "达累斯萨拉姆工厂保障每月固定专车/集装箱调度（单批 500 至 500,000+ 件均可）。",
        },
        accountability: {
          title: "售后责任与本土商务支持",
          sub: "质量异议维权、退换货法律保障",
          mitumba: "露天批发市场现金交易，货物出门概不负责，无任何法律追索权。",
          utrust: "签署正规工业采购合同，配备专属大客户经理，支持随时到厂实地验货审厂。",
        },
        tariffs: {
          title: "关税透明度与汇率成本控制",
          sub: "进口征税、海关清关与利润率波动",
          mitumba: "海运费波动剧烈，各国持续上调旧衣进口附加税，美元外汇结算风险高。",
          utrust: "直接以坦桑尼亚先令 (TZS) 或固定汇率结算。享受东非共同体 (EAC) 零关税通关。",
        },
      },
      bannerTitle: "是否准备好消除高达 35% 的二手包残次损耗？",
      bannerSub: "将采购预算全部转换为 100% 可售的一等品成衣，保障每批货的确定性交期与净利润。",
      bannerBtn: "测算两者的利润差距",
    },
    capacity: {
      badge: "工业生产标准与规格",
      titlePrefix: "Utrust",
      titleMain: "工业技术规格与月度产能",
      subtitle:
        "依托 Utrust Clothing Tanzania Limited 位于达累斯萨拉姆的先进自动化纺织成衣生产基地，月均综合产能达",
      monthlyHighlight: "280 万件。",
      tabs: {
        gsm: "面料克重 (GSM)",
        stitch: "车缝工艺标准",
        packaging: "外销包装规格",
        moq: "起订量 (MOQ)",
      },
      specRange: "面料规格范围",
      appsTitle: "主流生产品类与工艺执行标准：",
      customPrompt: "支持特殊克重配比、定制混纺纱线及环保染色要求。",
      requestSample: "申请工厂实物样品包 →",
      shrinkageLabel: "水洗缩水率控制:",
      yarnCountLabel: "纱线精梳支数:",
      dyeStandardLabel: "环保色牢度标准:",
    },
    calculator: {
      badge: "商业收益投资测算器 (TZS)",
      titlePrefix: "Utrust",
      titleMain: "B2B 采购规模与利润回报测算",
      subtitle:
        "根据 Utrust Clothing Tanzania Limited 的工厂直销批发价，以坦桑尼亚先令 (TZS) 实时测算您在消除 35% 二手损耗后的真实纯利回报。",
      volumeLabel: "单次采购数量 (件)",
      volumeSub: "单款批量起订仅需 500 件",
      marginLabel: "目标零售毛利率 (%)",
      marginSub: "全新品牌服装在东非主流零售渠道的平均毛利率为 30% – 50%",
      quickPresets: "快速选择数量:",
      benchmarks: "东非行业参考基准:",
      marginWholesale: "20% 大宗批发分销",
      marginRetail: "35% 连锁超市/零售门店",
      marginBoutique: "50% 精品服装专卖店",
      discardAdvantageTitle: "0% 废弃损耗的核心优势:",
      discardAdvantageText:
        "不同于二手旧衣包中 20%–35% 的资金直接变成无法出售的破布垃圾，Utrust Clothing Tanzania Limited 的每一件成衣均 100% 具备货架销售状态。",
      returnsPill: "回报预估模型 (TZS)",
      factoryDirectTag: "工厂直供价",
      grossProfitLabel: "预计总毛利润 (TZS)",
      grossReturnOn: "总毛利回报（基于采购量）",
      orderSizeLabel: "大宗采购批量",
      basePriceLabel: "工厂基础出厂单价",
      factoryCostLabel: "工厂生产总成本",
      retailRevenueLabel: "预计终端零售总额",
      dispatchLeadLabel: "工厂承诺装运周期",
      lockPricingBtn: "锁定批量采购梯度价",
      escrowNote: "支持信用证 (L/C) 及银行保函担保交易，支持 TZS 或 USD 结算",
    },
    qa: {
      badge: "严谨质量检验体系",
      titlePrefix: "Utrust",
      titleMain: "质量控制体系与权威认证",
      subtitle:
        "Utrust Clothing Tanzania Limited 严格执行东非共同体 (EAC) 原产地规范与国际出口品质标准。",
      cards: [
        {
          title: "ISO 9001:2024 质量体系认证",
          tagline: "全流程质量管控体系",
          description:
            "工厂实施全闭环作业审计，涵盖从原棉进厂、纺纱织布、电脑裁床、精工缝制到整烫包装的全程批次追溯。",
          highlights: ["每批次唯一批号追溯", "标准化作业规程 SOP", "每季度接受第三方权威外审"],
        },
        {
          title: "OEKO-TEX® Standard 100",
          tagline: "生态化学品安全保障",
          description:
            "所有织物与环保活性染料经权威检测，100% 不含致癌芳香胺、甲醛、重金属及有害邻苯二甲酸酯类物质。",
          highlights: ["亲肤防过敏安全", "环保活性染色工艺", "工业废水零有害残留达标排放"],
        },
        {
          title: "工厂自建纺织实验室",
          tagline: "物理与耐受力极限测试",
          description:
            "达累斯萨拉姆工厂内设专属理化检测实验室，对每批布料测试拉伸撕裂强度、耐汗/光照色牢度及水洗缩水率。",
          highlights: ["50次以上家庭水洗不掉色", "缩水率严格控制在 3% 以内", "国际顶破强力测试认证"],
        },
        {
          title: "100% 逐件全检标准",
          tagline: "AQL 1.5 国际外销验货规范",
          description:
            "每件成衣出厂前必须在真空吸尘透光检验台上由持证品控专员逐一检查，再行高温蒸汽定型与独立防潮封装。",
          highlights: ["杜绝二手残次品混入风险", "独立防伪条码全覆盖", "高精度金属验针器逐件排查"],
        },
      ],
      certificateBanner: "提供官方出厂检验报告与实验室检测单",
      certificateSub: "每个生产合同均随附完整原产地证明、第三方检验报告及色卡对色小样。",
      certificateBtn: "索取质量认证文件包",
    },
    onboarding: {
      badge: "大宗客户合作",
      titlePrefix: "Utrust",
      titleMain: "直接对接工厂 B2B 合作流程",
      subtitle:
        "即刻开立 Utrust Clothing Tanzania Limited 商业大宗采购账户，或申请寄送实物面料色卡样品盒至您在达累斯萨拉姆、内罗毕或坎帕拉的办公室。",
      advantagesTitle: "大宗批发账户尊享权益",
      perks: [
        {
          title: "48小时内顺丰/专递样品盒:",
          desc: "包含当前大货生产样衣、走线做工实样及全部标准色号卡。",
        },
        {
          title: "配备专属大客户经理:",
          desc: "一对一跟进专属版型开发、领标定制打样与排产船期调度。",
        },
        {
          title: "支持实地审厂验资:",
          desc: "诚邀莅临达累斯萨拉姆工业区现代化生产车间进行透明考察。",
        },
        {
          title: "灵活区域结算机制:",
          desc: "集装箱订单支持银行信用证 (L/C)、保函及双币种 (TZS/USD) 结算。",
        },
      ],
      preferWhatsApp: "更习惯即时通讯沟通？",
      whatsAppDesc:
        "直接通过 WhatsApp 与我们的东非资深销售工程师沟通现货库存、定制周期及整柜集装箱海关清关事宜。",
      whatsAppBtn: "通过 WhatsApp 直接交谈 (+255 761644444)",
      formTitle: "大宗采购申请与实物样品索取",
      formSub: "请填写以下企业信息，我们将在 24 小时内向您提供大宗批发价格表并安排实物样品发货。",
      nameLabel: "联系人全名 *",
      namePlaceholder: "例如：Juma Rashid / 张先生",
      emailLabel: "企业工作邮箱 *",
      emailPlaceholder: "info@yourcompany.co.tz",
      companyLabel: "公司名称 / 批发品牌 *",
      companyPlaceholder: "例如：Kilimo Retail Group",
      phoneLabel: "联系电话 / WhatsApp *",
      phonePlaceholder: "+255 7XX XXX XXX",
      volumeLabel: "预估月度采购量 (件) *",
      volumeOptions: [
        { val: "500-2500", label: "500 – 2,500 件 (试单 / 精品专卖店档位)" },
        { val: "2500-10000", label: "2,500 – 10,000 件 (大型商业批发分销商)" },
        { val: "10000-50000", label: "10,000 – 50,000 件 (区域连锁超市 / 百货品牌)" },
        { val: "50000+", label: "50,000+ 件 (全国性品牌 / 整柜大宗集装箱)" },
      ],
      interestLabel: "重点意向产品品类 (可多选)",
      interestOptions: [
        "精梳纯棉圆领 T 恤 (160–200 GSM)",
        "珠地网眼翻领 POLO 衫 (220–250 GSM)",
        "高克重抓绒连帽卫衣 (280–320 GSM)",
        "OEM 贴牌代工 / 自主品牌专属定制",
      ],
      notesLabel: "特殊工艺要求或交期指定",
      notesPlaceholder:
        "请注明所需 Pantone 潘通色号、领标规格、目的交货港口或预定期限...",
      submitBtn: "提交大宗采购申请",
      successTitle: "合作申请已成功提交！",
      successDesc:
        "Utrust Clothing Tanzania Limited 的高级商务客户总监将在 24 个工作小时内与您对接，您的实物样品盒申请已进入寄送排单。",
      resetBtn: "提交另一份咨询",
    },
    gallery: {
      badge: "真实自营现代化工厂量产实拍",
      titlePrefix: "工业制造品质",
      titleMain: "成衣系列与工厂实景图库",
      subtitle:
        "坦桑尼亚达累斯萨拉姆工厂全套量产成衣实景高清实拍。从 100% 精梳纯棉平角内裤，到高弹速干运动网眼、专属字母提花弹力腰带以及外贸精品硬盒零售礼盒包装。",
      filterAll: "全部图库",
      filterCotton: "纯棉基础系列",
      filterAthletic: "运动与印花",
      filterPackaging: "精品礼盒与外包装",
      filterOem: "贴牌大宗定制",
      zoomHint: "点击任意图片可查看高清细节与大图画廊",
      specsLabel: "工厂生产与工艺规格",
      orderSampleBtn: "咨询大宗批发",
      closeLightbox: "关闭画廊",
      prevPhoto: "上一张",
      nextPhoto: "下一张",
      photoCounter: "照片",
      items: [
        {
          id: "cotton-blanks-hero",
          category: "cotton",
          title: "Everyday Comfort™ 100% 精梳纯棉平角内裤",
          tag: "经典纯棉基础款",
          description:
            "工厂主力单面精梳纯棉平角内裤系列，涵盖8款长青纯色与经典格纹印花，经过预缩水定型处理，亲肤透气不缩水。",
          specs: [
            "100% 坦桑尼亚原生精梳纯棉",
            "160-180 GSM 紧密针织面料",
            "预缩水工艺处理（缩水率<3%）",
            "8款经典常青纯色及英伦格纹",
          ],
          image: "/gallery/cotton-blanks-hero.jpg",
        },
        {
          id: "gift-box-teal",
          category: "packaging",
          title: "外销精品 6条装礼品展示礼盒",
          tag: "高端零售精品包装",
          description:
            "专为品牌零售专柜与高端商超设计的硬盒礼盒包装方案，烫金工艺配丝绸拉带，大幅提升终端陈列质感与溢价能力。",
          specs: [
            "高强韧抗压精品硬纸盒结构",
            "祖母绿与烫金高档工艺搭配",
            "独立卷卷分隔内衬槽设计",
            "支持外销专属条形码与防伪吊牌",
          ],
          image: "/gallery/gift-box-teal.jpg",
        },
        {
          id: "athletic-mesh",
          category: "athletic",
          title: "高透气速干运动网眼平角短裤",
          tag: "速干透气运动系列",
          description:
            "专为东非炎热气候与运动健身场景研发的高密度微孔透气网眼，吸湿排汗，快速速干不闷热。",
          specs: [
            "聚酯氨纶高弹微孔透气网眼",
            "高效导湿快干工艺处理",
            "3D立体承托无感U凸囊袋",
            "高弹力四针六线无缝拼缝",
          ],
          image: "/gallery/athletic-mesh.jpg",
        },
        {
          id: "tropical-prints",
          category: "athletic",
          title: "热带海岛风情印花与度假花卉系列",
          tag: "度假风情数码印花",
          description:
            "采用高保真环保活性数码印花技术，热带花卉与海岛风情图案细腻生动，久洗耐晒不褪色。",
          specs: [
            "环保认证活性数码精细印染",
            "色牢度达国际 4.5 级以上标准",
            "通过 OEKO-TEX 无害亲肤染料标准",
            "支持 12 种以上当季流行花色定制定做",
          ],
          image: "/gallery/tropical-prints.jpg",
        },
        {
          id: "jacquard-briefs",
          category: "oem",
          title: "专属提花弹力提腰定制平角平脚裤",
          tag: "提花织唛专属定制",
          description:
            "高弹耐磨无压迫感提花织带腰头，支持大宗定制品牌专属英文与图腾织标，反复机洗不卷边、不松弛。",
          specs: [
            "35mm 高弹力防卷边加宽腰带",
            "支持大宗个性化品牌字母提花",
            "双层加固防摩擦立体底裆",
            "四向高弹棉莫代尔混纺亲肤面料",
          ],
          image: "/gallery/jacquard-briefs.jpg",
        },
        {
          id: "graphic-prints",
          category: "athletic",
          title: "潮流波普几何与豹纹动物纹系列",
          tag: "潮流先锋图案系列",
          description:
            "融合都市迷彩、经典斑马纹与豹纹等潮流元素，直击年轻消费群体，是快消专营店的热销爆款。",
          specs: [
            "视觉冲击力强劲的潮流印花工艺",
            "重点受力接缝多道加固缝线",
            "表层精细磨毛柔顺触感处理",
            "耐热带高温高湿汗液测试",
          ],
          image: "/gallery/graphic-prints.jpg",
        },
        {
          id: "oem-packaging",
          category: "packaging",
          title: "OEM / ODM 专属贴牌与集装箱大宗出口包装",
          tag: "工厂源头贴牌大宗出口",
          description:
            "为跨国商超与大型分销商提供一站式贴牌代工：专属洗水唛、定制吊牌、独立防尘袋与抗摔外贸纸箱。",
          specs: [
            "全套企业私有品牌 (OEM/ODM) 代工",
            "出口专用 5 层加厚耐压瓦楞外箱",
            "单条独立自封袋与展示吊盒可选",
            "全套符合 SADC / EAC 关税协定证书",
          ],
          image: "/gallery/oem-packaging.jpg",
        },
        {
          id: "catalog-triptych-1",
          category: "cotton",
          title: "达累斯萨拉姆工厂夏季全品类生产总汇",
          tag: "自营工厂大宗产能",
          description:
            "全景展示从原生精梳纯棉基础款，到速干运动网眼、再到精品礼盒套装的完整流水线生产成果。",
          specs: [
            "月度规模化产能达 280 万件",
            "ISO 9001:2024 国际全流程质量管理",
            "达累斯萨拉姆原厂直供批发价格",
            "彻底告别二手衣服高残次与损耗",
          ],
          image: "/gallery/catalog-triptych-1.jpg",
        },
        {
          id: "catalog-triptych-2",
          category: "oem",
          title: "东非大宗外销成套内衣与礼盒工程方案",
          tag: "外销批发成套方案",
          description:
            "针对东非全境、卡里亚库 (Kariakoo) 商圈及周边国家批发商定制的成套装运与定制礼品方案。",
          specs: [
            "标准化欧码/非码全尺码覆盖 (S-4XL)",
            "每批次面料染色电脑对色零色差",
            "直供卡里亚库商圈与港口货柜专线",
            "灵活友好的阶梯起订量 (MOQ)",
          ],
          image: "/gallery/catalog-triptych-2.jpg",
        },
      ],
    },
    footer: {
      bio: "是东非领先的现代化工业服装制造核心企业。我们以品质可靠、工厂直供、资质齐全的全新本土成衣，全面取代充满不确定性的二手旧衣包 (Mitumba)。",
      madeInTz: "坦桑尼亚制造 · 工业骄傲 🇹🇿",
      navTitle: "网站导航",
      complianceTitle: "合规与出口认证",
      plantTitle: "达累斯萨拉姆生产基地",
      plantAddress: "Plot 42/B, Industrial Area, Dar es Salaam, Tanzania",
      rights: "版权所有，保留一切权利。",
      badgeEnterprise: "B2B 规模化工业成衣制造",
      badgeZeroWaste: "杜绝二手碎布损耗",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      try {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get("lang") as Language;
        if (urlLang && (urlLang === "en" || urlLang === "sw" || urlLang === "zh")) {
          return urlLang;
        }
        const saved = localStorage.getItem("utrust_lang") as Language;
        if (saved && (saved === "en" || saved === "sw" || saved === "zh")) {
          return saved;
        }
      } catch {
        // Ignore storage errors in private browsing
      }
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("utrust_lang", lang);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
