
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
    exploreCollection: string;
    beOurPartner: string;
  };
  header: {
    announcementDirect: string;
    announcementTransit: string;
    aboutUs: string;
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
  about: {
    badge: string;
    titlePrefix: string;
    titleMain: string;
    subtitle: string;
    stats: Array<{
      value: string;
      label: string;
      detail: string;
    }>;
    pillarsTitle: string;
    pillarsSubtitle: string;
    vision: {
      tag: string;
      title: string;
      statement: string;
      desc: string;
    };
    mission: {
      tag: string;
      title: string;
      statement: string;
      desc: string;
    };
    value: {
      tag: string;
      title: string;
      statement: string;
      desc: string;
    };
    belief: {
      tag: string;
      title: string;
      statement: string;
      desc: string;
    };
    processBadge: string;
    processTitle: string;
    processSubtitle: string;
    processSteps: Array<{
      step: string;
      name: string;
      headline: string;
      description: string;
      specs: string[];
    }>;
    dealerBannerTitle: string;
    dealerBannerSub: string;
    dealerBannerQuote: string;
    dealerBannerBtn: string;
    galleryBadge: string;
    galleryTitle: string;
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
    sliderLabel: string;
    sliderSub: string;
    presetPrefix: string;
    mitumbaTag: string;
    mitumbaTitle: string;
    mitumbaPriceNote: string;
    mitumbaLifespan: string;
    mitumbaReplacement: string;
    mitumbaSpendLabel: string;
    mitumbaCons: string[];
    utrustTag: string;
    utrustTitle: string;
    utrustPriceNote: string;
    utrustLifespan: string;
    utrustReplacement: string;
    utrustSpendLabel: string;
    utrustPros: string[];
    savingsBadge: string;
    savingsHeadline: string;
    savingsSub: string;
    retailerNote: string;
    retailerBtn: string;
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
    showroomDispatch: string;
    swapGuarantee: string;
    whatsAppPreFill: string;
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
      exploreCollection: "Explore Ready-Made Collection",
      beOurPartner: "Be Our Partner (Wholesale & Retail) →",
    },
    header: {
      announcementDirect: "Direct from Dar es Salaam Factory",
      announcementTransit: "EAC Duty-Free Transit Certified",
      aboutUs: "About Us",
      mitumbaVsUtrust: "Mitumba vs Utrust",
      gallery: "Our Collection",
      factorySpecs: "Factory Specs",
      profitCalc: "Where to Buy",
      qualityAssurance: "Quality Promise",
      wholesaleAccounts: "Shop Partners",
      unitsPerHr: "🇹🇿 50+ Local Craftsmen • Kigamboni",
    },
    hero: {
      badge: "🇹🇿 PROUDLY TANZANIAN MADE • BRAND-NEW EXPORT QUALITY",
      isoBadge: "ISO 9001:2024",
      headlineStart: "Proudly Tanzanian Made.",
      headlineHighlight: "Brand-New Export Quality.",
      headlineEnd: "",
      subheadline:
        "Operating in Kigamboni for over 2 years, Utrust empowers 50+ local Tanzanian textile workers with state-of-the-art sewing machinery. Discover premium front-pattern round neck t-shirts and comfort-fit boxer briefs crafted for Dar’s tropical heat—wash-tested, colorfast, and ready for immediate delivery.",
      turnaroundTitle: "50+ Local Craftsmen",
      turnaroundSub: "Empowering Tanzanian workers right in Kigamboni",
      inspectionTitle: "State-of-the-Art Sewing",
      inspectionSub: "Computerized multi-needle precision stitching",
      automationTitle: "Export Quality, Ready Stock",
      automationSub: "Front-printed tees & boxer briefs ready in warehouse",
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
      quarterlyAdvisory: "Kariakoo Showroom Dispatch: Ready-made wholesale cartons available for same-day delivery or upcountry bus dispatch.",
      reserveButton: "Explore Partner Program",
    },
    about: {
      badge: "🏭 20 YEARS HERITAGE • US$3M MANUFACTURING BASE",
      titlePrefix: "Made in Tanzania.",
      titleMain: "Engineered for East Africa & Global Export.",
      subtitle:
        "Utrust Clothing boasts 20 years of valuable industry experience in garment raw materials and accessories. Operating a modern US$3M textile manufacturing base on a 5-acre industrial footprint in Kigamboni, Dar es Salaam, we directly employ 650 local craftsmen and technicians with a targeted annual capacity of 50 million units.",
      stats: [
        {
          value: "20+",
          label: "Years Manufacturing Experience",
          detail: "Two decades mastering garment raw materials and modern textile production",
        },
        {
          value: "US$3M",
          label: "Initial Capital Investment",
          detail: "State-of-the-art cutting, knitting, dyeing, and sewing technology",
        },
        {
          value: "5 Acres",
          label: "Kigamboni Industrial Site",
          detail: "Phase 1: 3,000 m² of modern eco-conscious production floor space",
        },
        {
          value: "650",
          label: "Direct Local Jobs Created",
          detail: "Empowering young, creative, and highly skilled Tanzanian professionals",
        },
        {
          value: "50M",
          label: "Target Annual Capacity (Units)",
          detail: "Underwear, boxer briefs, plain tees, bras & knitted apparel for all ages",
        },
      ],
      pillarsTitle: "The Four Pillars of Utrust",
      pillarsSubtitle:
        "Our daily operations, corporate culture, and customer relationships are guided by four unshakeable principles established on our executive factory floor.",
      vision: {
        tag: "OUR VISION",
        title: "Industry Leadership",
        statement: "To be the best practitioner in the production and distribution of garments and textile products.",
        desc: "Setting the benchmark for textile quality, operational efficiency, and ethical manufacturing across East and Central Africa.",
      },
      mission: {
        tag: "OUR MISSION",
        title: "Local Value Addition",
        statement: "To provide value addition to locally manufactured textile products.",
        desc: "Transforming rich local Tanzanian cotton into premium finished apparel, keeping industrial wealth and skills within our nation.",
      },
      value: {
        tag: "OUR VALUE",
        title: "Dedicated People & Modernized Dealers",
        statement: "Through our dedicated, competent, professional, motivated organization, modernized and experienced dealers / personnel.",
        desc: "At the core of our organization lies an unwavering commitment to excellence, driven by people and principles that serve as the foundation for sustainable growth and long-term success.",
      },
      belief: {
        tag: "OUR BELIEF",
        title: "Everlasting Dealer Experience",
        statement: "Constantly striving to leave our dealers an everlasting positive experience.",
        desc: "At the heart of our business lies an unwavering commitment to building meaningful and lasting relationships. We believe that our success is deeply intertwined with the satisfaction and prosperity of those who partner with us.",
      },
      processBadge: "🏭 VERTICAL MANUFACTURING EXCELLENCE",
      processTitle: "The 6-Stage Textile Production Process",
      processSubtitle:
        "From raw Tanzanian cotton fiber to boxed, export-ready garments — every stage is executed with strict quality control under one roof in Kigamboni.",
      processSteps: [
        {
          step: "01",
          name: "Fiber Extraction & Preparation",
          headline: "Combed Tanzanian Cotton Selection",
          description:
            "High-grade local cotton fibers are carefully selected, cleaned, and opened to eliminate impurities and prepare for spinning.",
          specs: ["100% Combed Tanzanian Cotton", "Impurity Free", "Uniform Fiber Length"],
        },
        {
          step: "02",
          name: "Spinning",
          headline: "Ring-Spun High-Tensile Yarn",
          description:
            "Precision automated ring-spinning frames convert raw fiber bobbins into high-tensile, knot-free combed cotton yarn.",
          specs: ["High-Tensile Combed Yarn", "Anti-Pilling Count", "Zero-Knot Precision"],
        },
        {
          step: "03",
          name: "Weaving & Knitting",
          headline: "High-Gauge Circular & Flatbed Knitting",
          description:
            "Advanced circular knitting machinery produces ultra-soft, breathable single jersey (180–200 GSM), honeycomb pique, and stretch rib fabrics.",
          specs: ["180–200 GSM Jersey & Pique", "Micro-Ribbed Elasticity", "Breathable Structure"],
        },
        {
          step: "04",
          name: "Dyeing",
          headline: "Eco-Friendly Reactive Vat Dyeing",
          description:
            "Automated pressurized industrial dyeing tanks infuse deep, colorfast reactive dyes that withstand 50+ commercial washes without bleeding.",
          specs: ["Grade 4+ Colorfastness", "Eco-Friendly Reactive Dyes", "Zero Color Bleed"],
        },
        {
          step: "05",
          name: "Finishing Treatments",
          headline: "Precision Cutting & JUKI Stitching",
          description:
            "CAD precision fabric cutting paired with multi-needle overlock and twin-needle hem stitching by trained Tanzanian seamstresses.",
          specs: ["JUKI Industrial Sewing", "Anti-Chafe Flatlock Seams", "Reinforced Stress Points"],
        },
        {
          step: "06",
          name: "Quality Control & Packaging",
          headline: "100% Lightbox Inspection & Boxing",
          description:
            "Every single unit undergoes illuminated lightbox scrutiny for micro-flaws, dimensional shrinkage testing, and sealed 3-pack retail packaging.",
          specs: ["100% Lightbox Inspection", "Under 3% Shrinkage Guarantee", "120-Pack Master Carton"],
        },
      ],
      dealerBannerTitle: "A Partnership Beyond Transactions",
      dealerBannerSub:
        "We believe our factory's success is directly intertwined with the profitability and prosperity of our wholesale distributors, shopkeepers, and regional export dealers.",
      dealerBannerQuote:
        "“Constantly striving to leave our dealers an everlasting positive experience — one that goes beyond transactions and resonates as the foundation of trust, reliability, and shared growth.”",
      dealerBannerBtn: "Apply for Wholesale Dealership",
      galleryBadge: "📸 FACTORY & SHOWROOM VERIFICATION",
      galleryTitle: "Official Boardroom & Production Panels",
    },
    comparison: {
      badge: "Honest Everyday Comparison",
      titleStart: "Used Clothes (Mitumba) vs.",
      titleVs: "vs.",
      titleEnd: "Fresh Utrust Cotton",
      subtitle:
        "We have all seen secondhand clothes stalls around town. But why pay your hard-earned money for clothes worn by someone else that stretch out and fade after two washes? Here is why brand-new local quality feels so much better.",
      colCriteria: "What Matters to You",
      colMitumba: "Used Clothes (Mitumba)",
      colUtrust: "Utrust Brand-New",
      criteria: {
        hygiene: {
          title: "Cleanliness & Skin Hygiene",
          sub: "What touches your skin every single day",
          mitumba: "Worn by strangers. Chemical fumigation residues and risk of skin irritation.",
          utrust: "100% Brand-new, factory-sealed in clean packaging. Soft, fresh and skin-safe.",
        },
        consistency: {
          title: "Fit & Collar Shape",
          sub: "How the clothes look on you after washing",
          mitumba: "Collars curl and bacon after 2 washes; random sizing from unknown brands.",
          utrust: "True East African sizing (M to 3XL). Double-stitched collars that hold their shape.",
        },
        customization: {
          title: "Fabric Breathability & Feel",
          sub: "Comfort during Dar es Salaam's 32°C humid heat",
          mitumba: "Worn-out fibers and scratchy synthetics that trap heat and body odor.",
          utrust: "Ultra-breathable 100% combed cotton & airy performance mesh.",
        },
        supply: {
          title: "Durability in the Wash",
          sub: "How long each piece actually lasts",
          mitumba: "Already halfway through its life. Fades, thins, and tears in 2–3 months.",
          utrust: "Tested for 50+ washes with zero color bleeding. Lasts a full year of daily wear.",
        },
        accountability: {
          title: "Proudly Tanzanian Made (50+ Jobs)",
          sub: "Where your hard-earned money actually goes",
          mitumba: "Foreign used discards sent overseas; capital leaves Tanzania without building local skills.",
          utrust: "Proudly made in Kigamboni, employing 50+ local Tanzanians using state-of-the-art sewing machinery.",
        },
        tariffs: {
          title: "Real Value for Your Money",
          sub: "What you spend over 12 months",
          mitumba: "Seems cheap at first, but buying replacements 3–4 times a year drains your wallet.",
          utrust: "Honest factory-direct price for fresh clothes that last. Save money in the long run.",
        },
      },
      bannerTitle: "Tired of spending money on clothes that fade in a week?",
      bannerSub: "Switch to fresh, brand-new Utrust cotton basics made right here in Dar es Salaam.",
      bannerBtn: "How to Get Utrust Clothes ↓",
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
      badge: "Smart Savings Comparison",
      titlePrefix: "Honest Math:",
      titleMain: "Used Mitumba vs. Brand-New Utrust",
      subtitle:
        "Secondhand clothes feel cheap on the day you buy them. But after a few washes in soapy water, when the neck sags and the color bleeds, you end up buying again and again. See what you really spend in a year.",
      sliderLabel: "How many basic shirts or underwear pieces do you wear / rotate in a week?",
      sliderSub: "Slide to compare your real annual spending",
      presetPrefix: "Quick select:",
      mitumbaTag: "The Secondhand Gamble",
      mitumbaTitle: "Buying Used Clothes (Mitumba)",
      mitumbaPriceNote: "Avg. TZS 10,000 per used piece",
      mitumbaLifespan: "Lasts 2–3 months before collar sags or fabric tears",
      mitumbaReplacement: "Needs 3–4 replacements per piece every year",
      mitumbaSpendLabel: "Estimated Annual Spend:",
      mitumbaCons: [
        "Unwashed past with chemical disinfectant odor",
        "Wavy 'bacon' collars and loose waistbands after a few washes",
        "Constant hassle of shopping to replace worn-out clothes",
      ],
      utrustTag: "Fresh Local Quality",
      utrustTitle: "Wearing Utrust Combed Cotton",
      utrustPriceNote: "Fair direct price (Avg. TZS 12,000 per fresh piece)",
      utrustLifespan: "Guaranteed 12+ months (tested over 50+ washes)",
      utrustReplacement: "1 single pack lasts you the entire year",
      utrustSpendLabel: "Estimated Annual Spend:",
      utrustPros: [
        "100% Brand-new, factory-sealed & skin-safe",
        "True East African fit with collars and waistbands that don't sag",
        "Breathable combed cotton built specifically for Dar's heat",
      ],
      savingsBadge: "Real Money Saved in Your Pocket",
      savingsHeadline: "You Save Up To",
      savingsSub: "Every year — while looking fresh, confident, and sharp every single day.",
      retailerNote: "Do you run a clothing stall or shop? We offer wholesale partner pricing.",
      retailerBtn: "View Retailer & Wholesaler Portal →",
    },
    qa: {
      badge: "Local Craft & Export Standards",
      titlePrefix: "Utrust",
      titleMain: "Factory Standards & Local Craftsmanship",
      subtitle:
        "Over 2 years of quality textile production in Kigamboni, combining 50+ skilled Tanzanian hands with state-of-the-art sewing machinery to deliver brand-new export quality clothes.",
      cards: [
        {
          title: "50+ Local Tanzanian Craftsmen",
          tagline: "Empowering Local Employment",
          description:
            "For over 2 years in Kigamboni, our plant has created 50+ specialized manufacturing jobs for local Tanzanian workers, combining skilled hands with modern textile technology.",
          highlights: ["50+ Local Tanzanian jobs", "Fair-wage community empowerment", "Over 2 years local heritage"],
        },
        {
          title: "State-of-the-Art Sewing Machinery",
          tagline: "Precision Industrial Stitching",
          description:
            "Equipped with advanced computerized sewing stations, multi-needle overlock units, and twin-needle hemmers to ensure collars and seams never sag or unravel.",
          highlights: ["Computerized multi-thread stitching", "Reinforced collar bar-tacking", "High-tensile seam strength (>220N)"],
        },
        {
          title: "Front-Pattern Prints & Combed Cotton",
          tagline: "Wash-Tested Colorfastness",
          description:
            "High-definition front graphic prints paired with breathable combed virgin cotton. Tested over 50+ domestic washes with zero cracking, peeling, or color bleed in Dar’s heat.",
          highlights: ["Non-crack elastomeric prints", "100% Breathable combed cotton", "50+ Washes color guarantee"],
        },
        {
          title: "Brand-New Export Quality & Clean Packs",
          tagline: "100% Factory-Fresh Guarantee",
          description:
            "Every round-neck tee and boxer brief is individually inspected, steam-pressed, and factory-sealed in hygienic packaging—beating unhygienic mitumba every single time.",
          highlights: ["Zero second-hand risk", "Factory-sealed individual polybags", "EAC export & local standards compliant"],
        },
      ],
      certificateBanner: "Proudly Tanzanian Made • Ready Stock in Warehouse",
      certificateSub: "Front-pattern round-neck tees and comfort boxer briefs ready for immediate wholesale dispatch.",
      certificateBtn: "Explore Partner Program Below ↓",
    },
    onboarding: {
      badge: "BE OUR PARTNER (DISTRIBUTION & RETAIL)",
      titlePrefix: "Utrust Partner Network:",
      titleMain: "Wholesale & Retail Partner Program",
      subtitle:
        "Direct factory wholesale for Kariakoo wholesalers, regional retail dukas, and upcountry distributors. Enjoy low-barrier trial orders, strict showroom price protection, and a 14-day size/color swap guarantee.",
      advantagesTitle: "3 Partner Guarantees for Kariakoo & Regional Retailers",
      perks: [
        {
          title: "Low 1-Carton Trial Order & Showroom Price Shield:",
          desc: "Start with just 1 carton / box (120 packs of 3 pcs = 360 pcs total) across basics, activewear, and underwear. Our Kariakoo showroom is strictly for wholesale dispatch—we never undercut your retail price to walk-in consumers.",
        },
        {
          title: "14-Day Fast-Mover Size & Color Swap Guarantee:",
          desc: "Zero deadstock risk. If certain sizes or colors move slower in your neighborhood, swap unopened packs or cartons 1-for-1 directly at our Kariakoo showroom.",
        },
        {
          title: "Free Duka Merchandising Kit & Same-Day Bus Dispatch:",
          desc: "Orders of 2+ cartons receive a free hanging display rack and weather-resistant storefront stockist sticker. Orders paid by 2:00 PM are dispatched same-day to Mbezi Luis / Kariakoo bus offices (Shabiby, Saratoga, Dar Express, Kilimanjaro).",
        },
        {
          title: "Direct Lipa Namba & WhatsApp Ordering:",
          desc: "Zero credit risk, transparent factory-direct pricing, and instant dispatch waybill photos sent directly to your WhatsApp.",
        },
      ],
      preferWhatsApp: "Kariakoo Wholesale WhatsApp Direct",
      whatsAppDesc:
        "Chat with our Kariakoo showroom sales manager for instant carton pricing, stock availability, and immediate shop delivery.",
      whatsAppBtn: "Chat on WhatsApp (+255 761644444)",
      formTitle: "Partner Registration & Wholesale Catalog",
      formSub: "Submit your shop details to receive our official Factory-Direct Wholesale Price List (120 packs of 3 pcs/carton) and qualify for the 14-Day Size Swap Program.",
      nameLabel: "Full Name *",
      namePlaceholder: "e.g. Juma Rashid",
      emailLabel: "Email (Optional)",
      emailPlaceholder: "juma@store.co.tz",
      companyLabel: "Shop / Business Name *",
      companyPlaceholder: "e.g. Kariakoo Fashion Hub / Sinza Boutique",
      phoneLabel: "Phone / WhatsApp Number *",
      phonePlaceholder: "+255 7XX XXX XXX",
      volumeLabel: "Initial Order Tier *",
      volumeOptions: [
        { val: "1-carton", label: "1 Carton / Box (120 Packs of 3 pcs = 360 pcs MOQ)" },
        { val: "2-5-cartons", label: "2 – 5 Cartons (Retail Shop / Boutique Tier)" },
        { val: "10-25-cartons", label: "10 – 25 Cartons (Wholesale Stockist Tier)" },
        { val: "50-plus-cartons", label: "50+ Cartons / Container (Regional Distributor & Export)" },
      ],
      interestLabel: "Product Interests (Select all that apply)",
      interestOptions: [
        "Combed Cotton Blanks & T-Shirts",
        "Men's Boxer Briefs (Jacquard Elastic)",
        "Athletic Breathable Mesh Shorts",
        "Tropical & Graphic Printed Lines",
      ],
      notesLabel: "Your Location / Delivery Preference",
      notesPlaceholder: "e.g. Kariakoo Congo Street stall, or Upcountry Bus parcel to Mwanza...",
      submitBtn: "Apply to Become a Partner",
      successTitle: "Partner Application Received!",
      successDesc:
        "Our Kariakoo sales representative will contact you via WhatsApp within 2 hours with our official Wholesale Price List and arrange your sample kit.",
      resetBtn: "Submit Another Application",
      showroomDispatch: "Kariakoo Showroom Dispatch",
      swapGuarantee: "14-Day Size/Color Swap",
      whatsAppPreFill: "Hello Utrust Clothing Kariakoo, I am interested in becoming a wholesale partner and receiving the price catalog.",
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
      exploreCollection: "Tazama Bidhaa Zetu",
      beOurPartner: "Kuwa Wakala / Muuzaji wa Jumla →",
    },
    header: {
      announcementDirect: "Moja kwa Moja Kutoka Kiwanda cha Dar es Salaam",
      announcementTransit: "Imethibitishwa Usafirishaji Bila Ushuru EAC",
      aboutUs: "Kuhusu Sisi",
      mitumbaVsUtrust: "Mitumba vs Utrust",
      gallery: "Nguo Zetu",
      factorySpecs: "Uwezo wa Kiwanda",
      profitCalc: "Jinsi ya Kununua",
      qualityAssurance: "Ahadi ya Ubora",
      wholesaleAccounts: "Kuwa Wakala",
      unitsPerHr: "🇹🇿 Ajira 50+ • Kiwanda cha Kigamboni",
    },
    hero: {
      badge: "🇹🇿 BIDHAA HALISI ZA KITANZANIA KWA FAHARI • UBORA MPYA WA KIMATAIFA (EXPORT QUALITY)",
      isoBadge: "ISO 9001:2024",
      headlineStart: "Zimetengenezwa Tanzania kwa Fahari.",
      headlineHighlight: "Ubora Mpya wa Kimataifa.",
      headlineEnd: "",
      subheadline:
        "Tukizalisha kiwandani Kigamboni kwa zaidi ya miaka 2, Utrust inatoa ajira kwa Watanzania zaidi ya 50 wanaotumia mashine za kisasa kabisa za kushona nguo. Furahia tisheti za 'round neck' zenye michoro maridadi mbele na nguo za ndani (boxer briefs) zisizopauka wala kulegea—mpya kabisa zenye ubora wa kimataifa kwa bei rafiki.",
      turnaroundTitle: "Ajira 50+ za Watanzania",
      turnaroundSub: "Kiwanda chetu cha Kigamboni kimeajiri wazawa 50+",
      inspectionTitle: "Mashine za Kisasa za Kushona",
      inspectionSub: "Mishono imara isiyofumuka na kola zisizolegea",
      automationTitle: "Ubora Mpya, Mizigo Ipo Ghala",
      automationSub: "Tisheti za 'round neck' na boxer briefs zipo ghalani",
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
      quarterlyAdvisory: "Showroom ya Kariakoo: Mzigo wa jumla upo tayari kwa usafirishaji wa haraka dukani au kwenye mabasi ya mikoani.",
      reserveButton: "Fursa ya Kuwa Wakala",
    },
    about: {
      badge: "🏭 UZOEFU WA MIAKA 20 • KIWANDA CHA DOLA MILIONI 3",
      titlePrefix: "Imetengenezwa Tanzania.",
      titleMain: "Imebuniwa kwa Ajili ya Afrika Mashariki na Soko la Kimataifa.",
      subtitle:
        "Utrust Clothing inajivunia uzoefu wa thamani wa miaka 20 katika uzalishaji wa malighafi na vifaa vya nguo. Tukiwa na kiwanda cha kisasa cha dola milioni 3 kwenye eneo la ekari 5 Kigamboni, Dar es Salaam, tunaajiri moja kwa moja mafundi na wataalamu 650 wa Kitanzania na lengo la kuzalisha vipande milioni 50 kwa mwaka.",
      stats: [
        {
          value: "20+",
          label: "Miaka ya Uzoefu wa Utengenezaji",
          detail: "Miongo miwili ya utaalamu katika malighafi na uzalishaji wa nguo",
        },
        {
          value: "US$3M",
          label: "Uwekezaji wa Mtaji wa Awali",
          detail: "Mitambo ya kisasa ya kukata, kushona, kupaka rangi na kufunga",
        },
        {
          value: "Ekari 5",
          label: "Eneo la Kiwanda Kigamboni",
          detail: "Awamu ya 1: Eneo la kisasa la uzalishaji la mita za mraba 3,000",
        },
        {
          value: "650",
          label: "Ajira za Moja kwa Moja",
          detail: "Kuwezesha vijana wabunifu na wataalamu wenye ujuzi wa Kitanzania",
        },
        {
          value: "Milioni 50",
          label: "Lengo la Uzalishaji kwa Mwaka (Vipande)",
          detail: "Boksa, tisheti, sidiria, na nguo za ndani kwa rika zote",
        },
      ],
      pillarsTitle: "Nguzo Nne Kuu za Utrust",
      pillarsSubtitle:
        "Uendeshaji wetu wa kila siku na utamaduni wetu wa kikazi unaongozwa na misingi minne imara iliyowekwa kiwandani kwetu.",
      vision: {
        tag: "MAONO YETU",
        title: "Uongozi wa Sekta",
        statement: "Kuwa watendaji bora zaidi katika uzalishaji na usambazaji wa nguo na bidhaa za nguo.",
        desc: "Kuweka kiwango cha juu cha ubora wa nguo, ufanisi wa uendeshaji, na uzalishaji wa maadili Afrika Mashariki na Kati.",
      },
      mission: {
        tag: "DHAMIRA YETU",
        title: "Kuongeza Thamani ya Ndani",
        statement: "Kutoa ongezeko la thamani kwa bidhaa za nguo zinazotengenezwa nchini.",
        desc: "Kubadilisha pamba bora ya Kitanzania kuwa nguo safi za kiwango cha juu, kubakiza utajiri na ujuzi nchini mwetu.",
      },
      value: {
        tag: "THAMANI YETU",
        title: "Watu Waliojitolea na Mawakala wa Kisasa",
        statement: "Kupitia shirika letu lililojitolea, lenye uwezo, weledi na ari, pamoja na mawakala na watendaji wenye uzoefu wa kisasa.",
        desc: "Msingi wa shirika letu upo kwenye kujitolea kwa ubora usiotetereka unaoongozwa na watu wenye weledi na misingi thabiti kwa ukuaji endelevu.",
      },
      belief: {
        tag: "IMANI YETU",
        title: "Uzoefu Chanya wa Kudumu kwa Mawakala",
        statement: "Kujitahidi daima kuwaachia mawakala wetu uzoefu chanya na wa kudumu.",
        desc: "Moyo wa biashara yetu umejikita katika kujenga uhusiano wa kudumu na wenye maana na mawakala wetu; mafanikio yetu yameunganishwa na ustawi wao.",
      },
      processBadge: "🏭 UBORA WA UZALISHAJI WA NDANI",
      processTitle: "Mchakato wa Uzalishaji wa Nguo wa Hatua 6",
      processSubtitle:
        "Kutoka pamba ghafi ya Kitanzania hadi nguo zilizofungwa tayari kusafirishwa — kila hatua inathibitishwa na udhibiti madhubuti wa ubora Kigamboni.",
      processSteps: [
        {
          step: "01",
          name: "Uchimbaji na Maandalizi ya Nyuzi",
          headline: "Uchaguzi wa Pamba Safi ya Kitanzania",
          description:
            "Nyuzi za pamba za daraja la juu huchaguliwa, kusafishwa na kuandaliwa kwa ajili ya kusokota bila uchafu.",
          specs: ["100% Pamba ya Kitanzania", "Bila Takataka", "Urefu Sawa wa Nyuzi"],
        },
        {
          step: "02",
          name: "Usokotaji",
          headline: "Uzi Imara wa Kusokotwa",
          description:
            "Mitambo ya kisasa inabadilisha nyuzi za pamba kuwa uzi imara, usio na vifungo tayari kwa ufumaji bora.",
          specs: ["Uzi Imara wa Pamba", "Haichubuki", "Usahihi wa Hali ya Juu"],
        },
        {
          step: "03",
          name: "Ufumaji",
          headline: "Ufumaji wa Kisasa wa Vitambaa",
          description:
            "Mitambo ya mviringo huzalisha vitambaa laini vinavyopumua (GSM 180–200), pique ya vishikizo na vitambaa vya kunyumbuka.",
          specs: ["GSM 180–200", "Unyumbulifu Imara", "Kitambaa Kinachopumua"],
        },
        {
          step: "04",
          name: "Upakaji Rangi",
          headline: "Upakaji Rangi Usiofifia wa Mazingira",
          description:
            "Mashine maalum huweka rangi imara inayodumu hata baada ya kufua zaidi ya mara 50 bila kupauka.",
          specs: ["Daraja la 4+ la Kudumu", "Rangi Salama za Mazingira", "Haitoi Rangi Majini"],
        },
        {
          step: "05",
          name: "Ukamilishaji na Ushonaji",
          headline: "Ukataji wa Kisasa na Ushonaji wa JUKI",
          description:
            "Ukataji wa kompyuta unaoendana na ushonaji thabiti wa mashine za JUKI unaofanywa na mafundi stadi wa Kitanzania.",
          specs: ["Mashine za JUKI", "Mishono Laini Isiyowasha", "Mishono Imara ya Kudumu"],
        },
        {
          step: "06",
          name: "Udhibiti wa Ubora na Ufungashaji",
          headline: "Ukaguzi wa 100% wa Meza za Nuru",
          description:
            "Kila kipande kinakaguliwa kwenye meza maalum zenye mwanga kuzuia kasoro, na kufungwa kwenye boksi za pakiti 3.",
          specs: ["Ukaguzi wa 100% wa Nuru", "Kipimo cha Kutonywea chini ya 3%", "Boksi Kuu ya Pakiti 120"],
        },
      ],
      dealerBannerTitle: "Ushirikiano Zaidi ya Biashara ya Kawaida",
      dealerBannerSub:
        "Tunaamini kuwa mafanikio ya kiwanda chetu yamefungamana moja kwa moja na faida ya mawakala, wenye maduka, na wafanyabiashara wa kikanda.",
      dealerBannerQuote:
        "“Kujitahidi daima kuwaachia mawakala wetu uzoefu chanya na wa kudumu — unaovuka shughuli za kawaida na kuwa msingi wa uaminifu, uthabiti, na ukuaji wa pamoja.”",
      dealerBannerBtn: "Jiunge na Mtandao wa Mawakala wa Jumla",
      galleryBadge: "📸 UTHIBITISHO WA KIWANDA NA OFISI",
      galleryTitle: "Mbao Rasmi za Bodi na Maonyesho ya Uzalishaji",
    },
    comparison: {
      badge: "Ukweli wa Wazi Kila Siku",
      titleStart: "Nguo za Mtumba dhidi ya",
      titleVs: "dhidi ya",
      titleEnd: "Nguo Mpya za Utrust",
      subtitle:
        "Sote tunajua mitumba ilivyojaa Dar es Salaam. Lakini kwa nini utoe pesa yako uliyotolea jasho kununua nguo iliyovaliwa na mtu usiyemjua, inayolegea shingo na kupauka ukifua mara mbili? Tazama tofauti ya kweli ya nguo mpya za pamba safi.",
      colCriteria: "Vitu Muhimu Kwako",
      colMitumba: "Nguo za Mtumba (Used)",
      colUtrust: "Utrust Mpya Kabisa",
      criteria: {
        hygiene: {
          title: "Usafi na Afya ya Ngozi Yako",
          sub: "Kitu kinachogusa ngozi yako siku nzima",
          mitumba: "Zimevaliwa na mtu usiyemjua. Zina harufu ya dawa za moshi na hatari ya kuwasha ngozi.",
          utrust: "Mpya 100%, zimefungwa ndani ya boksi safi kiwandani. Laini na salama kabisa kwa ngozi.",
        },
        consistency: {
          title: "Shingo na Muundo wa Nguo",
          sub: "Muonekano wako ukishaifua nguo",
          mitumba: "Shingo inalegea ('bacon collar') na mpira unalegea baada ya kufuliwa mara mbili tu.",
          utrust: "Vipimo halisi vya Kitanzania (M hadi 3XL). Mshono imara shingoni usiolegea wala kubana.",
        },
        customization: {
          title: "Kupitisha Hewa Kwenye Joto",
          sub: "Raha wakati wa joto kali la Dar es Salaam",
          mitumba: "Vitambaa vilivyochakaa vinavyobana jasho na kuleta harufu mbaya mwilini.",
          utrust: "Pamba safi ya 'combed cotton' inayopumua vizuri na kukufanya uwe na hewa safi siku nzima.",
        },
        supply: {
          title: "Kudumu Kwenye Sabuni",
          sub: "Muda ambao nguo inabaki nzuri",
          mitumba: "Inakaribia mwisho wa maisha yake. Inapauka, inachanika na kuwa fagio ndani ya miezi 2–3.",
          utrust: "Imepimwa kufuliwa mara 50+ bila kupauka rangi. Inadumu zaidi ya mwaka mzima.",
        },
        accountability: {
          title: "Zimetengenezwa Tanzania kwa Fahari (Ajira 50+)",
          sub: "Pesa yako ya jasho inaenda wapi",
          mitumba: "Mavazi chakavu ya nje yanayomalizikia kuwa takataka nchini bila kukuza ujuzi wala viwanda vyetu.",
          utrust: "Zimetengenezwa Kigamboni kwa fahari, zikitoa ajira kwa Watanzania 50+ kwa mashine za kisasa za kushona.",
        },
        tariffs: {
          title: "Thamani ya Pesa Yako",
          sub: "Gharama yako kwa mwaka mzima",
          mitumba: "Inaonekana nafuu lakini kununua nguo mpya mara 3–4 kwa mwaka kunamaliza pesa zako.",
          utrust: "Bei rafiki ya moja kwa moja ya kiwandani kwa nguo inayodumu. Unaokoa pesa mfukoni.",
        },
      },
      bannerTitle: "Umechoka kutumia pesa kwenye nguo zinazopauka baada ya wiki moja?",
      bannerSub: "Badilika sasa, vaa nguo mpya za pamba safi za Utrust zilizotengenezwa hapa hapa Dar es Salaam.",
      bannerBtn: "Jinsi ya Kupata Nguo Zetu ↓",
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
      badge: "Ulinganifu wa Bei na Thamani",
      titlePrefix: "Hesabu Halisi:",
      titleMain: "Mitumba dhidi ya Nguo Mpya za Utrust",
      subtitle:
        "Nguo ya mtumba inaonekana nafuu siku unayoinunua. Lakini ukishaifua mara mbili kwenye sabuni, shingo ikilegea na rangi ikipauka, unalazimika kununua tena na tena. Tazama kiasi unachotumia kwa mwaka mzima.",
      sliderLabel: "Unazungusha tisheti au nguo za ndani ngapi kwa wiki?",
      sliderSub: "Sogeza upate hesabu ya kiasi unachookoa kwa mwaka",
      presetPrefix: "Chagua haraka:",
      mitumbaTag: "Bahati Nasibu ya Mtumba",
      mitumbaTitle: "Kununua Mitumba (Used Clothes)",
      mitumbaPriceNote: "Wastani wa TZS 10,000 kwa kila nguo ya mtumba",
      mitumbaLifespan: "Inadumu miezi 2–3 kabla haijalega au kupauka",
      mitumbaReplacement: "Unalazimika kubadilisha mara 3–4 kwa mwaka",
      mitumbaSpendLabel: "Gharama ya Mwaka Mzima:",
      mitumbaCons: [
        "Imevaliwa na mtu usiyemjua na ina harufu ya dawa za moshi",
        "Shingo inalegea ('bacon collar') na mpira unakatika mapema",
        "Gharama za mara kwa mara kurudi sokoni kubadilisha nguo chakavu",
      ],
      utrustTag: "Ubora Halisi wa Nyumbani",
      utrustTitle: "Kuvaa Nguo Mpya za Utrust",
      utrustPriceNote: "Bei rafiki ya kiwandani (Wastani TZS 12,000 kwa nguo mpya)",
      utrustLifespan: "Inadumu miezi 12+ (inastahimili kufuliwa mara 50+)",
      utrustReplacement: "Nguo moja mpya inakutosha mwaka mzima",
      utrustSpendLabel: "Gharama ya Mwaka Mzima:",
      utrustPros: [
        "Mpya 100%, imefungwa kwenye boksi na ni salama kwa ngozi",
        "Kipimo halisi cha Kitanzania; shingo na mpira havilegei",
        "Pamba halisi inayopitisha hewa kwenye joto la Dar es Salaam",
      ],
      savingsBadge: "Pesa Halisi Unayobaki Nayo Mfukoni",
      savingsHeadline: "Unaokoa Hadi",
      savingsSub: "Kila mwaka — huku ukivaa nguo mpya, nadhifu na yenye heshima kila siku.",
      retailerNote: "Je, unamiliki duka au meza ya nguo? Tuna bei maalum za jumla kwa wafanyabiashara.",
      retailerBtn: "Angalia Fursa za Mawakala na Maduka →",
    },
    qa: {
      badge: "Uzalishaji wa Ndani & Viwango vya Kimataifa",
      titlePrefix: "Utrust",
      titleMain: "Viwango vya Kiwanda & Ajira za Nyumbani",
      subtitle:
        "Zaidi ya miaka 2 ya uzalishaji bora wa nguo kiwandani Kigamboni, tukichanganya mikono ya Watanzania hodari 50+ na mashine za kisasa za kushona kutoa nguo mpya zenye ubora wa kimataifa.",
      cards: [
        {
          title: "Ajira 50+ za Watanzania",
          tagline: "Kukuza Ajira za Ndani ya Nchi",
          description:
            "Kwa zaidi ya miaka 2 tukiwa Kigamboni, kiwanda chetu kimezalisha ajira 50+ za kudumu kwa Watanzania, kikijenga wataalamu wa nguo na kuinua jamii zetu.",
          highlights: ["Ajira 50+ za Watanzania", "Uwezeshaji wa jamii kwa mishahara mizuri", "Miaka 2+ ya uzoefu wa kiwanda"],
        },
        {
          title: "Mashine za Kisasa za Kushona",
          tagline: "Mishono ya Kiwango cha Juu cha Kompyuta",
          description:
            "Kiwanda chetu kina mitambo ya kisasa kabisa ya kushona ya kompyuta ('overlock' na sindano pacha) inayohakikisha kola hailegei wala seams hazifumuki.",
          highlights: ["Mashine za kisasa za kompyuta", "Mishono iliyoimarishwa ya kola", "Nguvu kubwa ya mishono (>220N)"],
        },
        {
          title: "Michoro ya Mbele & Pamba Laini",
          tagline: "Rangi Zisizopauka Kwenye Sabuni",
          description:
            "Tisheti zetu za 'round neck' zina michoro maridadi mbele iliyotengenezwa kwa rangi imara zisizobanduka wala kupasuka, zikivumilia kufuliwa 50+ kwenye jua la Dar.",
          highlights: ["Michoro imara isiyobanduka", "Pamba safi 100% inayopumua", "Dhamana ya kutopauka kufuliwa 50+"],
        },
        {
          title: "Ubora Mpya wa Kimataifa & Usafi",
          tagline: "Mpya Kabisa Kutoka Kiwandani",
          description:
            "Kila tisheti na boxer brief inakaguliwa vizuri, kupigwa pasi ya mvuke na kufungwa kwenye nailoni safi ya kiwandani—ikiwa mpya kabisa bila uchafu wa mtumba.",
          highlights: ["Salama na haina uchafu wa mtumba", "Vifungashio safi vya nailoni", "Viwango vya usafirishaji vya EAC na kimataifa"],
        },
      ],
      certificateBanner: "Zimetengenezwa Tanzania kwa Fahari • Mizigo Ipo Ghalani",
      certificateSub: "Tisheti za 'round neck' zenye michoro na boxer briefs zipo tayari kwa ajili ya usafirishaji wa jumla.",
      certificateBtn: "Angalia Fursa za Mawakala Hapa Chini ↓",
    },
    onboarding: {
      badge: "KUWA WAKALA (JUMLA NA REJAREJA)",
      titlePrefix: "Mtandao wa Mawakala wa Utrust:",
      titleMain: "Uuzaji wa Jumla na Rejareja",
      subtitle:
        "Fursa ya moja kwa moja kutoka kiwandani kwa wafanyabiashara wa Kariakoo, maduka ya mikoani, na wauzaji wa rejareja. Pata kianzio cha chini, ulinzi wa bei, na dhamana ya siku 14 ya kubadilisha size na rangi.",
      advantagesTitle: "Dhamana 3 Muhimu kwa Wafanyabiashara wa Nguo",
      perks: [
        {
          title: "Kianzio cha Katoni 1 tu & Ulinzi Mkali wa Bei:",
          desc: "Anza na katoni/box 1 tu (packs 120 zenye pcs 3 = jumla pcs 360). Showroom yetu ya Kariakoo inauza jumla tu—hatutashusha bei kwa mteja mmoja mmoja ili kulinda faida ya duka lako.",
        },
        {
          title: "Dhamana ya Siku 14 ya Kubadilisha Size na Rangi:",
          desc: "Hakuna mzigo unaolala (deadstock). Kama saizi au rangi fulani inachelewa kutoka dukani kwako, leta packs au katoni ambazo hazijafunguliwa ofisini Kariakoo na uzibadilishe 1-kwa-1.",
        },
        {
          title: "Vifaa vya Duka Bure & Kusafirisha Basi Siku Hiyo Hiyo:",
          desc: "Oda ya katoni 2+ inapewa stendi ya kutundikia nguo na kibandiko rasmi cha duka 'Wakala wa UTRUST'. Oda zinazolipiwa kabla ya saa 8:00 mchana zinasafirishwa siku hiyo hiyo kupitia mabasi ya Mbezi Luis (Shabiby, Saratoga, Dar Express n.k).",
        },
        {
          title: "Malipo ya Lipa Namba & WhatsApp Moja kwa Moja:",
          desc: "Bei wazi ya kiwandani bila madalali, na picha ya risiti ya mzigo wa basi inatumwa moja kwa moja kwenye WhatsApp yako.",
        },
      ],
      preferWhatsApp: "Mawasiliano ya Haraka WhatsApp Kariakoo",
      whatsAppDesc:
        "Ongea moja kwa moja na msimamizi wetu wa mauzo Kariakoo kupitia WhatsApp kwa bei za sasa za katoni na uletewe mzigo dukani kwako.",
      whatsAppBtn: "Wasiliana WhatsApp (+255 761644444)",
      formTitle: "Fomu ya Kujiunga Kama Wakala / Muuzaji",
      formSub: "Jaza taarifa zako fupi ili upate Orodha Rasmi ya Bei za Kiwandani (packs 120 zenye pcs 3/katoni) na ufaidike na Mpango wa Kubadilisha Saizi.",
      nameLabel: "Jina Kamili *",
      namePlaceholder: "mfano: Juma Rashid",
      emailLabel: "Barua Pepe (Si lazima)",
      emailPlaceholder: "juma@duka.co.tz",
      companyLabel: "Jina la Duka au Biashara *",
      companyPlaceholder: "mfano: Duka la Nguo Kariakoo / Sinza Boutique",
      phoneLabel: "Nambari ya Simu / WhatsApp *",
      phonePlaceholder: "+255 7XX XXX XXX",
      volumeLabel: "Kiwango cha Kuanzia *",
      volumeOptions: [
        { val: "1-carton", label: "Katoni/Box 1 (Packs 120 × Pcs 3 = Pcs 360 MOQ)" },
        { val: "2-5-cartons", label: "Katoni 2 – 5 (Maduka ya Rejareja / Boutique)" },
        { val: "10-25-cartons", label: "Katoni 10 – 25 (Wafanyabiashara wa Jumla)" },
        { val: "50-plus-cartons", label: "Katoni 50+ / Kontena (Wasambazaji Wakuu & Export)" },
      ],
      interestLabel: "Aina ya Nguo Unazohitaji (Chagua zinazokufaa)",
      interestOptions: [
        "Tisheti za Pamba Halisi (Combed Cotton)",
        "Nguo za Ndani za Wanaume (Boxer Briefs zenye mpira imara)",
        "Kaptula za Mazoezi zenye Matundu (Athletic Mesh)",
        "Nguo Zenye Michoro ya Kisasa (Tropical & Graphic Prints)",
      ],
      notesLabel: "Mahali Lilipo Duka Lako au Jina la Basi la Mkoani",
      notesPlaceholder: "mfano: Kariakoo mtaa wa Congo, au mzigo utumwe Mwanza kwa basi la Shabiby...",
      submitBtn: "Tuma Maombi ya Kuwa Wakala",
      successTitle: "Maombi Yako Yamepokelewa!",
      successDesc:
        "Mwakilishi wetu wa mauzo Kariakoo atawasiliana nawe kupitia WhatsApp ndani ya saa 2 kukutumia bei za jumla na kukuletea sampuli.",
      resetBtn: "Tuma Maombi Mengine",
      showroomDispatch: "Mzigo Kutoka Showroom Kariakoo",
      swapGuarantee: "Kubadilisha Saizi/Rangi Siku 14",
      whatsAppPreFill: "Habari Utrust Kariakoo, Ninahitaji kujiunga kama muuzaji wa jumla na kuomba orodha ya bei za dazeni.",
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
      tagline: "坦桑尼亚本土自营现代化制衣工厂",
      tzs: "TZS (坦桑尼亚先令)",
      darEsSalaam: "坦桑尼亚 · 达累斯萨拉姆",
      units: "件",
      pcs: "件",
      days: "天",
      requestQuote: "获取大宗批发报价",
      viewSpecs: "查阅生产技术规格",
      b2bPortal: "B2B企业门户",
      activeProduction: "高产能生产中",
      exploreCollection: "探索现货系列",
      beOurPartner: "成为分销/零售合作伙伴 →",
    },
    header: {
      announcementDirect: "达累斯萨拉姆自营大型现代化服装工厂直发",
      announcementTransit: "东非共同体 (EAC) 原产地免关税认证",
      aboutUs: "关于我们",
      mitumbaVsUtrust: "二手旧衣对比",
      gallery: "精选产品系列",
      factorySpecs: "工厂设备与工艺",
      profitCalc: "如何购买",
      qualityAssurance: "品质保障体系",
      wholesaleAccounts: "分销合作",
      unitsPerHr: "🇹🇿 50+ 本地员工 • 吉甘博尼工厂直发",
    },
    hero: {
      badge: "🇹🇿 坦桑尼亚本土骄傲智造 • 全新出口级外销品质",
      isoBadge: "ISO 9001:2024认证",
      headlineStart: "坦桑尼亚本土骄傲智造。",
      headlineHighlight: "全新出口级外销品质。",
      headlineEnd: "",
      subheadline:
        "在达累斯萨拉姆吉甘博尼自主稳定运营逾2年，Utrust引进全套现代化精密缝纫及加工设备，为本地创造50余个专业纺织就业岗位。现货直供前胸时尚印花圆领T恤与高弹透气平角内裤（Boxer Briefs），耐洗不褪色，适应炎热气候，品质完胜二手旧衣。",
      turnaroundTitle: "50+ 本地技术工匠",
      turnaroundSub: "吉甘博尼自营工厂深度带动本地产业就业",
      inspectionTitle: "现代化精密缝纫设备",
      inspectionSub: "全套高精机缝走线，领口与腰筋久穿不垮",
      automationTitle: "出口级全新现货直发",
      automationSub: "印花圆领T恤与平角内裤仓储充足即刻发货",
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
      quarterlyAdvisory: "卡里亚库展厅现货：成箱现货可当天送达档口，或当天送达长途客运班车站（发往姆万扎/阿鲁沙等）。",
      reserveButton: "申请合作分销计划",
    },
    about: {
      badge: "🏭 20年制造传承 • 300万美元工业基地",
      titlePrefix: "坦桑尼亚制造。",
      titleMain: "立足东非，辐射全球的高品质纺织标杆。",
      subtitle:
        "Utrust Clothing（优创服饰）在服装原材料及辅料领域拥有20年深厚经验。我们在达累斯萨拉姆基甘博尼（Kigamboni）占地5英亩的工业园区投资300万美元建设现代化纺织基地，第一期建筑面积达3,000平方米，直接创造650个本土就业岗位，年设计产能目标达5,000万件。",
      stats: [
        {
          value: "20+",
          label: "年纺织服装制造经验",
          detail: "深耕服装原材料、面料辅料与现代化成衣制造二十载",
        },
        {
          value: "300万+",
          label: "美元一期项目总投资",
          detail: "引进高精密自动化裁床、织造、环保染色与JUKI成衣生产线",
        },
        {
          value: "5英亩",
          label: "基甘博尼工业园区面积",
          detail: "一期3,000平方米现代化生产车间与高标准绿色厂房",
        },
        {
          value: "650",
          label: "直接创造本土就业岗位",
          detail: "赋能年轻、有创意、高技术水准的坦桑尼亚技术工人与管理团队",
        },
        {
          value: "5,000万",
          label: "件年设计生产产能",
          detail: "涵盖全年龄段平纹T恤、内裤、文胸、吊带衫等针织全品类服饰",
        },
      ],
      pillarsTitle: "Utrust 四大企业核心支柱",
      pillarsSubtitle:
        "设立于展厅与董事会议室的核心理念，是我们每天运营与发展的最高准则。",
      vision: {
        tag: "企业愿景 (VISION)",
        title: "行业领跑者",
        statement: "成为服装及纺织品生产与分销领域的最佳实践者。",
        desc: "在东非与中非树立纺织品品质、生产效率和绿色制造的行业新标杆。",
      },
      mission: {
        tag: "企业使命 (MISSION)",
        title: "提升本土产业附加值",
        statement: "为坦桑尼亚本土制造的纺织产品提供高附加值。",
        desc: "将优质坦桑尼亚棉花就地深加工为高端成衣，把产业财富、技术与就业扎根在本土。",
      },
      value: {
        tag: "核心价值观 (VALUE)",
        title: "敬业团队与现代化经销商",
        statement: "依托我们敬业、胜任、专业、充满活力的团队，以及现代化、经验丰富的经销商网络与合作伙伴。",
        desc: "我们坚信公司的力量不仅来自优质产品，更源于指引日常运营的人才与原则，为可持续发展奠定基石。",
      },
      belief: {
        tag: "企业信念 (BELIEF)",
        title: "让经销商享有恒久的卓越体验",
        statement: "始终致力于为我们的经销商创造持久且积极的合作体验。",
        desc: "商业的核心在于建立长久而有意义的伙伴关系。我们的成功与经销商伙伴的繁荣息息相关，合作超越简单买卖，筑牢信任与共赢。",
      },
      processBadge: "🏭 全流程垂直一体化制造",
      processTitle: "六步全产业链纺织工艺",
      processSubtitle:
        "从坦桑尼亚优质天然棉原纤维到包装出厂的出口级成衣——每一个环节均在同一园区严格把控。",
      processSteps: [
        {
          step: "01",
          name: "纤维提取与准备",
          headline: "严选坦桑尼亚精梳天然原棉",
          description:
            "精选本土长绒棉花原纤维，经过开清棉与除杂工序，确保原纤维纯净均一。",
          specs: ["100% 坦桑尼亚精梳棉", "深度去除杂质", "纤维长度均匀一致"],
        },
        {
          step: "02",
          name: "纺纱工艺",
          headline: "高强力环锭精梳纺纱",
          description:
            "高精密自动化环锭纺纱设备将棉纤维加工为高强力、低毛羽、抗起球的精梳棉纱线筒子。",
          specs: ["高强力精梳纱线", "抗起球工艺", "无结头精密卷绕"],
        },
        {
          step: "03",
          name: "织造工艺",
          headline: "大圆机高密平纹与罗纹织造",
          description:
            "现代化针织大圆机精准编织透气单面汗布（180–200 GSM）、蜂巢珠地网眼及高弹氨纶面料。",
          specs: ["180–200 GSM 重磅汗布", "微罗纹领口弹性", "亲肤透气微孔"],
        },
        {
          step: "04",
          name: "染色处理",
          headline: "高温高压环保活性染色",
          description:
            "封闭式加压环保染色机采用活性环保染料，达到4级以上色牢度，历经50次专业洗涤不褪色。",
          specs: ["4级以上国际色牢度", "环保无毒活性染料", "下水零掉色零晕染"],
        },
        {
          step: "05",
          name: "后整理与车缝",
          headline: "CAD立体裁剪与JUKI多针车缝",
          description:
            "CAD自动化精准裁床配合专业JUKI工业缝纫机，由熟练车工进行四线包缝与双针锁边。",
          specs: ["JUKI重工级缝纫机", "平整防磨皮走线", "受力点全套结加固"],
        },
        {
          step: "06",
          name: "品质检验与包装",
          headline: "100% 灯箱全检与外贸包装",
          description:
            "每件成衣均在强光透光灯箱下由品检员100%全检，经预缩测试后进行3件装精美盒装与整箱打包。",
          specs: ["100% 强光灯箱品检", "缩水率低于3%出厂标准", "120包一箱国际箱规"],
        },
      ],
      dealerBannerTitle: "超越单纯买卖的长期事业共赢",
      dealerBannerSub:
        "我们坚信工厂的持续发展直接取决于批发分销商、店铺店主及跨境出口商的盈利能力。",
      dealerBannerQuote:
        "“始终致力于为我们的经销商创造持久且积极的合作体验——超越简单的买卖交易，成为信任、可靠与共同繁荣的基石。”",
      dealerBannerBtn: "申请成为批发经销商",
      galleryBadge: "📸 真实工厂与展厅实景核验",
      galleryTitle: "官方展厅与车间实景看板",
    },
    comparison: {
      badge: "日常真实对比",
      titleStart: "二手进口旧衣 (Mitumba) vs.",
      titleVs: "对比",
      titleEnd: "Utrust 本地全新纯棉",
      subtitle:
        "在达市的大街小巷大家常见二手旧衣。但何必把辛苦赚来的钱，花在别人穿过、洗两水就领口松垮褪色的旧衣上？看看本地全新正品成衣如何带给您每天的体面、舒适与健康。",
      colCriteria: "关乎日常穿着的核心维度",
      colMitumba: "进口二手旧衣 (Mitumba)",
      colUtrust: "Utrust 本地全新纯棉",
      criteria: {
        hygiene: {
          title: "洁净卫生与贴身安全",
          sub: "每天24小时直接接触皮肤的贴身感受",
          mitumba: "他人穿过且附带强烈化学熏蒸气味，存在皮肤发痒及过敏隐患。",
          utrust: "100% 全新出厂独立密封盒装，柔软舒适，亲肤安全无异味。",
        },
        consistency: {
          title: "领口耐洗与版型挺括度",
          sub: "洗涤数次后的衣服外观与体面度",
          mitumba: "水洗两次领口卷曲松垮（荷叶边），尺码随机不可控。",
          utrust: "契合东非本土体型的合身剪裁（M至3XL）。加固双针领口久洗不懈。",
        },
        customization: {
          title: "高温高湿下的吸汗透气性",
          sub: "达市32°C以上炎热潮湿天气下的真实体感",
          mitumba: "纤维老化板结、劣质化纤闷汗发臭，身体黏腻不适。",
          utrust: "高透气 100% 精梳纯棉与排汗微孔网眼，全天干爽透气。",
        },
        supply: {
          title: "耐洗寿命与穿着周期",
          sub: "单件衣服能经受几次常规肥皂手洗",
          mitumba: "早已处于使用寿命末期，2–3个月即破洞、起毛或褪色变旧抹布。",
          utrust: "耐洗测试达50次以上不褪色，稳定陪伴您日常穿着一整年以上。",
        },
        accountability: {
          title: "坦桑尼亚本土骄傲智造 (50+本地就业)",
          sub: "您消费的每一先令支持了谁",
          mitumba: "海外淘汰废弃旧衣，资金流失且无法沉淀本土工业技能。",
          utrust: "吉甘博尼自营工厂扎根2年，带动50+本地纺织工匠，引进现代化先进缝纫机械。",
        },
        tariffs: {
          title: "一年算下来的真实花费",
          sub: "12个月持续支出的经济账",
          mitumba: "单件看似便宜，但一年内频繁买3–4次替换破损旧衣，实际花费惊人。",
          utrust: "实在出厂平价，一件高品质成衣稳穿一整年，真正为您装满钱包。",
        },
      },
      bannerTitle: "厌倦了把钱花在一周就褪色变形的旧衣服上？",
      bannerSub: "全面换穿 Utrust 达累斯萨拉姆本地智造的高透气精梳纯棉成衣。",
      bannerBtn: "查阅购买与提货指南 ↓",
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
      badge: "大众性价比真实测算",
      titlePrefix: "算笔明白账：",
      titleMain: "二手旧衣（Mitumba）与 Utrust 全新成衣",
      subtitle:
        "二手旧衣买的时候看似便宜，但几经洗涤领口松垮变形、颜色泛白褪色后，只能频繁重新掏钱购买。算算一年下来，哪种方式真正为您省钱。",
      sliderLabel: "您每周日常轮换穿着几件基础T恤或内衣？",
      sliderSub: "拖动滑块即可直观对比整年真实开销",
      presetPrefix: "快速选择：",
      mitumbaTag: "二手翻新盲盒",
      mitumbaTitle: "购买进口二手旧衣（Mitumba）",
      mitumbaPriceNote: "单件二手旧衣均价约 10,000 TZS",
      mitumbaLifespan: "洗涤2–3次即变形起毛，寿命仅2–3个月",
      mitumbaReplacement: "一年需重复购买并报废 3–4 次",
      mitumbaSpendLabel: "预计全年在旧衣上的总支出：",
      mitumbaCons: [
        "他人穿过且附带强烈化学熏蒸残留气味",
        "洗涤后领口呈荷叶边松垮，腰筋失去弹性",
        "反复频繁前往市场采购旧衣填补破损",
      ],
      utrustTag: "本地精工正品",
      utrustTitle: "穿着 Utrust 全新精梳纯棉成衣",
      utrustPriceNote: "本地出厂亲民平价（全新单件约 12,000 TZS）",
      utrustLifespan: "耐洗测试达50次以上，经久穿着1年以上",
      utrustReplacement: "一次购足，全年轻松从容轮换",
      utrustSpendLabel: "预计全年品质穿着总支出：",
      utrustPros: [
        "100%出厂全新密封独立包装，亲肤健康无过敏风险",
        "契合东非本土合身版型，领口腰筋久洗不懈",
        "专为达市高温潮湿气候研发，吸汗透气全天清爽",
      ],
      savingsBadge: "实实在在装进钱包的年度结余",
      savingsHeadline: "每年直接省下多达",
      savingsSub: "每年节省大笔开支，同时每天穿着全新高品质正品成衣。",
      retailerNote: "如果您是卡里亚库批发商或服装店主，我们提供专属批发底价政策。",
      retailerBtn: "进入分销批发与档口专区 →",
    },
    qa: {
      badge: "本土精工 & 出口级标准",
      titlePrefix: "Utrust",
      titleMain: "工厂制造标准与本土工匠精神",
      subtitle:
        "扎根吉甘博尼自主生产逾2年，将50余位本地技术工匠与全套现代化精密缝纫设备相结合，严格执行东非共同体 (EAC) 原产地规范与国际出口品质标准。",
      cards: [
        {
          title: "50+ 本地专业技术工匠",
          tagline: "深度带动本土产业就业",
          description:
            "工厂在吉甘博尼稳定运营2年多，为达市培养了50余名专业熟练纺织工人，以公平待遇促进本地家庭与社区繁荣发展。",
          highlights: ["50+ 本地专业制造岗位", "赋能社区与稳定薪资", "2年+ 扎实本地工厂底蕴"],
        },
        {
          title: "现代化高精密缝纫设备",
          tagline: "电脑自动化精密车缝",
          description:
            "全套引进工业级电脑缝纫工作站、多针包缝机及双针压边机，确保圆领领口紧实不松垮、侧缝双道加固不脱线。",
          highlights: ["全电脑精密多道车线", "领口防松垮套结加固", "高强度接缝抗拉力 (>220N)"],
        },
        {
          title: "前胸时尚印花与精梳纯棉",
          tagline: "高温耐洗不脱胶不褪色",
          description:
            "前胸高清时尚图案印花结合高支透气精梳原生棉，经受50次以上家庭手洗测试，不起球、不爆裂脱胶、不泛白褪色。",
          highlights: ["高弹环保防裂印花工艺", "100% 透气精梳纯棉面料", "50+ 次洗涤保色承诺"],
        },
        {
          title: "100% 崭新出口级品质与密封包装",
          tagline: "原厂全新正品卫生保障",
          description:
            "每一件圆领T恤与平角内裤均经专员全检、高温蒸汽定型，并封装于原厂独立防潮袋内，彻底告别二手旧衣的卫生隐患。",
          highlights: ["零二手衣卫生风险", "原厂全新独立密封封装", "东非免税原产地与外销标准认证"],
        },
      ],
      certificateBanner: "坦桑尼亚本土骄傲智造 • 仓库现货充足",
      certificateSub: "前胸印花圆领T恤与平角内裤（Boxer Briefs）大宗现货随时供应卡里亚库档口及长途客运发货。",
      certificateBtn: "查看分销与批发合作方案 ↓",
    },
    onboarding: {
      badge: "成为合作伙伴（分销与批发）",
      titlePrefix: "Utrust 合作分销网络：",
      titleMain: "卡里亚库批发商与零售商合作方案",
      subtitle:
        "吉甘博尼工厂直供卡里亚库档口、达市社区服装精品店及外地长途客运分销商。低起订门槛、严格展厅控价保护、14天尺码/颜色免费调换保障。",
      advantagesTitle: "保障卡里亚库与零售档口利益的 3 大核心政策",
      perks: [
        {
          title: "1 箱起订低门槛试销 & 展厅控价保护：",
          desc: "仅需 1 原厂箱（每箱 120 包，每包 3 件，整箱共 360 件）即可启动试销。卡里亚库展厅严格专供批发与提货，绝不向零售散客低价零售，坚决维护合作档口利润空间。",
        },
        {
          title: "14 天畅销款尺码/颜色免费对调保障：",
          desc: "彻底消除滞销与库存死货风险。若某些尺码或颜色在您门店动销较慢，未开封独立包装或整箱 14 天内可在卡里亚库展厅 1:1 免费调换。",
        },
        {
          title: "赠送陈列展架与门头贴纸 & 当天客运班车发货：",
          desc: "订购 2 箱以上赠送品牌陈列挂架与官方授权店防水门头贴纸。下午 2 点前通过 Lipa Namba 付款订单，当天直达 Mbezi Luis 各大客运班车（Shabiby、Saratoga、Dar Express 等），微信/WhatsApp 实时发送托运单据。",
        },
        {
          title: "现款现货透明出厂价 & WhatsApp 即时跟进：",
          desc: "无垫资坏账风险，出厂底价直达，发货进度实时更新。",
        },
      ],
      preferWhatsApp: "卡里亚库批发销售热线 WhatsApp",
      whatsAppDesc:
        "直接联系卡里亚库展厅销售主管，即时获取原厂整箱批发底价表、现货库存并安排送货到档口。",
      whatsAppBtn: "通过 WhatsApp 直接咨询 (+255 761644444)",
      formTitle: "合作商登记与批发价格表索取",
      formSub: "提交您的门店信息，我们将立即发送官方原厂批发底价表（每箱120包/360件）并安排样品体验。",
      nameLabel: "联系人全名 *",
      namePlaceholder: "例如：Juma Rashid / 王先生",
      emailLabel: "邮箱（选填）",
      emailPlaceholder: "info@yourstore.co.tz",
      companyLabel: "门店/档口或企业全称 *",
      companyPlaceholder: "例如：卡里亚库 Congo 街档口 / 精品服装店",
      phoneLabel: "联系电话 / WhatsApp 号码 *",
      phonePlaceholder: "+255 7XX XXX XXX",
      volumeLabel: "首批订购规模 *",
      volumeOptions: [
        { val: "1-carton", label: "1 箱起订（每箱120包，每包3件，整箱共360件）" },
        { val: "2-5-cartons", label: "2 – 5 箱（零售精品店进货档）" },
        { val: "10-25-cartons", label: "10 – 25 箱（卡里亚库核心批发商档）" },
        { val: "50-plus-cartons", label: "50+ 箱 / 整柜直发（跨国贸易及区域总代理）" },
      ],
      interestLabel: "意向采购品类（可多选）",
      interestOptions: [
        "精梳纯棉圆领及基础款 T 恤",
        "提花加固高弹腰筋男士平角内裤 (Boxer Briefs)",
        "高透气微孔运动短裤 (Athletic Mesh)",
        "热带度假风与街头印花系列 (Tropical & Graphic Prints)",
      ],
      notesLabel: "您的档口地址 / 外地客运班车要求",
      notesPlaceholder: "例如：卡里亚库 Congo 街档口送货，或发往姆万扎 (Mwanza) 的 Shabiby 客运托运...",
      submitBtn: "提交合作申请",
      successTitle: "合作商申请已提交！",
      successDesc:
        "卡里亚库展厅销售主管将在 2 小时内通过 WhatsApp 发送完整批发底价表并安排样品配送。",
      resetBtn: "提交另一份申请",
      showroomDispatch: "卡里亚库展厅现货直发",
      swapGuarantee: "14天未开封整打免费对调",
      whatsAppPreFill: "您好 Utrust 卡里亚库展厅，我想了解服装批发合作并索取每打出厂批发价格表。",
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
      plantAddress: "坦桑尼亚达累斯萨拉姆吉甘博尼工业区 Lingato 街 24804 号",
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

export function LanguageProvider({
  children,
  defaultLanguage,
}: {
  children: React.ReactNode;
  defaultLanguage?: Language;
}) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (defaultLanguage) {
      return defaultLanguage;
    }
    if (typeof window !== "undefined") {
      try {
        const pathname = window.location.pathname;
        if (pathname === "/sw" || pathname.startsWith("/sw/")) return "sw";
        if (pathname === "/zh" || pathname.startsWith("/zh/")) return "zh";
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
