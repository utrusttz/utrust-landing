import React from "react";
import { LanguageProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CORRIDORS, type CountryCorridor } from "@/components/FactorySpecsTable";

export default function CountryCorridorApp({ corridor }: { corridor: CountryCorridor }) {
  const whatsappWholesaleLink = `https://wa.me/255761644444?text=${encodeURIComponent(
    `Hello Utrust! I am a wholesale buyer in ${corridor.country} (${corridor.city}). I want to inquire about factory-direct export cartons of plain t-shirts and boxer briefs with ${corridor.tariff}.`
  )}`;

  return (
    <LanguageProvider defaultLanguage="en">
      <Header />

      <main>
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-slate-600">
            <a href="/" className="hover:text-[#d46f24] font-medium">Home</a>
            <span>/</span>
            <a href="/#factory-specs" className="hover:text-[#d46f24] font-medium">Regional Export Corridors</a>
            <span>/</span>
            <span className="text-slate-950 font-bold">{corridor.country}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d46f24_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-950/80 border border-orange-700/60 px-3.5 py-1.5 rounded-full text-xs font-semibold text-orange-400 uppercase tracking-wider mb-6">
              <span>{corridor.flag}</span>
              <span>Direct Sourcing Corridor: Dar es Salaam &rarr; {corridor.city}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Import Factory-Direct Tanzanian Cotton Clothes to <span className="text-[#d46f24]">{corridor.country}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
              Why wait 60 days for maritime shipping containers from Asia? Utrust manufactures 20,000+ units daily in Dar es Salaam, delivering brand-new 180–200 GSM heavyweight cotton t-shirts, boxer briefs, and polo shirts to <strong className="text-white">{corridor.city}</strong> in just <strong className="text-emerald-400">{corridor.transitTime}</strong> with <strong className="text-emerald-400">{corridor.tariff}</strong>.
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 text-left">
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                <div className="text-[11px] font-mono uppercase text-slate-400">Import Duty</div>
                <div className="text-lg sm:text-xl font-bold text-emerald-400 mt-1">0% Duty-Free</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Under {corridor.protocol.split(' ')[0]}</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                <div className="text-[11px] font-mono uppercase text-slate-400">Transit Time</div>
                <div className="text-lg sm:text-xl font-bold text-white mt-1">{corridor.transitTime}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Direct Paved Highway</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                <div className="text-[11px] font-mono uppercase text-slate-400">Border Gateway</div>
                <div className="text-sm font-bold text-white mt-1 truncate" title={corridor.border}>{corridor.border.split('(')[0]}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Fast-Track Customs</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                <div className="text-[11px] font-mono uppercase text-slate-400">Wholesale MOQ</div>
                <div className="text-lg sm:text-xl font-bold text-[#d46f24] mt-1">1 Master Carton</div>
                <div className="text-[11px] text-slate-500 mt-0.5">3 to 4 Dozens</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappWholesaleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#d46f24] hover:bg-[#b85816] active:bg-[#9a450e] text-white px-8 py-4 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg shadow-orange-700/25"
              >
                <span>Request {corridor.country} Wholesale Export Quotation</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="https://wa.me/255761644444?text=Hello%20Utrust!%20Please%20send%20sample%20pack%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 px-6 py-4 rounded-xl font-semibold text-sm transition-all"
              >
                <span>Order Touch & Feel Sample Pack</span>
              </a>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Cross-Border Trade */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Why Importers in {corridor.country} Choose Utrust
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Strategic geographical advantage, zero import tariffs, and pure East African cotton quality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-2xs">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg mb-4">
                  💰
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">Save 25% Import Duty</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Garments from China or Turkey face steep customs tariffs entering {corridor.country}. Utrust garments qualify for 100% duty-free entry under {corridor.protocol}.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-2xs">
                <div className="h-10 w-10 rounded-xl bg-orange-100 text-[#d46f24] flex items-center justify-center font-bold text-lg mb-4">
                  ⚡
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">{corridor.transitTime} Land Delivery</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Eliminate 2-month shipping lead times. Stock arrives in {corridor.city} via scheduled bonded freight trucks or passenger courier buses in just days.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-2xs">
                <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-lg mb-4">
                  📦
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">Low Minimum Order (1 Carton)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Test your local boutique or stall demand without risking tens of thousands of dollars. Wholesale pricing starts at just 1 carton (3 to 4 dozens).
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-2xs">
                <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-lg mb-4">
                  🏷️
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">100% Tanzanian Cotton</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  180–200 GSM ring-spun combed cotton. High breathability for tropical heat, non-sag collar ribbing, and 50+ wash durability with zero color fade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Logistics & Customs Documentation Matrix */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d46f24] uppercase tracking-wider font-mono mb-2">
                <span>📋 Trade Documentation & Border Protocol</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Clearance Roadmap for {corridor.country} Importers
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                We handle the export paperwork so your cargo sails through border control smoothly.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Official Certificate of Origin</div>
                      <div className="text-xs text-slate-600 mt-0.5">Certified by Tanzania authorities proving 100% East African manufacturing for 0% duty entry.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Export Commercial Invoice</div>
                      <div className="text-xs text-slate-600 mt-0.5">Itemized wholesale invoicing formatted for {corridor.country} revenue and customs clearing agents.</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Heavy-Duty 5-Ply Export Cartons</div>
                      <div className="text-xs text-slate-600 mt-0.5">Moisture-proof banded strapping engineered to protect garments during long-distance overland transit.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Real-Time Transit Waybill Proof</div>
                      <div className="text-xs text-slate-600 mt-0.5">Photographic waybill confirmation sent to your WhatsApp immediately upon vehicle departure from Dar es Salaam.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-orange-50/50 p-4 rounded-xl border border-orange-200/50">
                <div className="text-xs text-slate-700">
                  <span className="font-bold text-slate-950">Border Crossing:</span> {corridor.border} <br />
                  <span className="font-bold text-slate-950">Target Destination:</span> {corridor.city}, {corridor.country}
                </div>
                <a
                  href={whatsappWholesaleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#d46f24] hover:bg-[#b85816] text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-colors shrink-0 whitespace-nowrap"
                >
                  <span>Chat with Export Desk</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Corridor FAQs */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Frequently Asked Questions — Sourcing from {corridor.country}
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-950 text-base mb-2">
                  How do I pay for my wholesale order from {corridor.country}?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We accept International USD Bank Wire Transfers (TT), regional mobile money transfers, and local agent cash collection in Dar es Salaam. Proforma Invoices are issued with full corporate bank coordinates.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-950 text-base mb-2">
                  Can I visit your factory and showroom before placing a bulk container order?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Yes, Karibu! Buyers from {corridor.country} regularly visit our commercial showroom on the 2nd Floor of Nasra Tower in Kariakoo and tour our modern Kigamboni factory. We can arrange local airport or hotel pickup in Dar es Salaam for visiting delegations.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-950 text-base mb-2">
                  Do you offer custom branding and private labels for {corridor.country} retail chains?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Yes. In addition to supplying blank t-shirts and pre-packaged boxer briefs, our factory provides full OEM custom services including neck label printing, custom screen printing, DTF transfers, and custom retail packaging for institutional clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Other Neighboring Corridors */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold">Explore Other Regional Export Corridors</h3>
                <p className="text-xs text-slate-400 mt-1">Utrust delivers factory-direct cotton garments to all neighboring nations of Tanzania.</p>
              </div>
              <a href="/#factory-specs" className="text-xs font-semibold text-orange-400 hover:text-white transition-colors">
                View Full Specs Table &rarr;
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-xs">
              {CORRIDORS.filter((c) => c.slug !== corridor.slug).map((c) => (
                <a
                  key={c.slug}
                  href={`/export/${c.slug}/`}
                  className="p-3 rounded-xl bg-slate-800/80 hover:bg-[#d46f24] border border-slate-700 hover:border-orange-500 transition-all flex flex-col gap-1 group"
                >
                  <span className="text-base">{c.flag}</span>
                  <span className="font-bold text-white group-hover:text-white truncate">{c.country}</span>
                  <span className="text-[10px] text-slate-400 group-hover:text-orange-100">{c.transitTime}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </LanguageProvider>
  );
}
