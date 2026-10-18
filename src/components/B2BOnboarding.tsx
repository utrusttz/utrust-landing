
import { useState } from "react";
import { Send, MessageCircle, CheckCircle2, AlertCircle, Building2, MapPin, ShieldCheck, RefreshCw } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function B2BOnboarding() {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    volume: "3-dozens",
    interests: [] as string[],
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleInterestToggle = (item: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter((i) => i !== item)
        : [...prev.interests, item],
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const nameErr =
      language === "sw"
        ? "Tafadhali weka jina lako kamili"
        : language === "zh"
        ? "请输入联系人姓名"
        : "Full name is required";
    const compErr =
      language === "sw"
        ? "Tafadhali weka jina la duka au biashara"
        : language === "zh"
        ? "请输入门店或档口名称"
        : "Shop / Business name is required";
    const phoneErr =
      language === "sw"
        ? "Tafadhali weka nambari ya simu au WhatsApp"
        : language === "zh"
        ? "请输入联系电话或 WhatsApp 号码"
        : "Phone or WhatsApp number is required";

    if (!form.name.trim()) newErrors.name = nameErr;
    if (!form.company.trim()) newErrors.company = compErr;
    if (!form.phone.trim()) newErrors.phone = phoneErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      console.log("Wholesale inquiry submitted:", form);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      company: "",
      phone: "",
      volume: "3-dozens",
      interests: [],
      notes: "",
    });
    setErrors({});
  };

  return (
    <section id="partner" className="relative py-20 md:py-28 bg-white border-b border-slate-200">
      {/* Anchor alias for existing onboarding links */}
      <div id="onboarding" className="absolute -top-24 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-950 border border-orange-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="h-3.5 w-3.5 text-[#d46f24]" />
            {t.onboarding.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            <span className="font-brand font-bold text-[#d46f24]">{t.onboarding.titlePrefix}</span> {t.onboarding.titleMain}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t.onboarding.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Factory Advantages & Fast WhatsApp desk (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">
                {t.onboarding.advantagesTitle}
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                {t.onboarding.perks.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-md bg-orange-100 text-[#d46f24] mt-0.5 shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">{perk.title} </span>
                      <span>{perk.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp Callout Card */}
              <div className="pt-6 border-t border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">
                  {t.onboarding.preferWhatsApp}
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  {t.onboarding.whatsAppDesc}
                </p>
                <a
                  href="https://wa.me/255761644444?text=Hello%20Utrust%20Clothing%20Kariakoo%2C%20I%20am%20interested%20in%20becoming%20a%20wholesale%2Fretail%20partner%20and%20receiving%20the%20price%20catalog."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20b859] active:bg-[#1caa52] text-white px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.onboarding.whatsAppBtn}</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Micro Info */}
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#d46f24]" />
                <span>Kariakoo Showroom Dispatch</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-[#d46f24]" />
                <span>14-Day Size/Color Swap</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in-50">
                <div className="h-16 w-16 bg-orange-100 text-[#d46f24] rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {t.onboarding.successTitle}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {t.onboarding.successDesc}
                </p>
                <div className="pt-6">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    <span>{t.onboarding.resetBtn}</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {t.onboarding.formTitle}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {t.onboarding.formSub}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5 font-mono">
                      {t.onboarding.nameLabel}
                    </label>
                    <input
                      name="name"
                      placeholder={t.onboarding.namePlaceholder}
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border ${
                        errors.name ? "border-rose-500 bg-rose-50/20" : "border-slate-300"
                      } rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#d46f24] focus:ring-3 focus:ring-orange-500/15 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5 font-mono">
                      {t.onboarding.emailLabel}
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder={t.onboarding.emailPlaceholder}
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border ${
                        errors.email ? "border-rose-500 bg-rose-50/20" : "border-slate-300"
                      } rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#d46f24] focus:ring-3 focus:ring-orange-500/15 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5 font-mono">
                      {t.onboarding.companyLabel}
                    </label>
                    <input
                      name="company"
                      placeholder={t.onboarding.companyPlaceholder}
                      value={form.company}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border ${
                        errors.company ? "border-rose-500 bg-rose-50/20" : "border-slate-300"
                      } rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#d46f24] focus:ring-3 focus:ring-orange-500/15 transition-all`}
                    />
                    {errors.company && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5 font-mono">
                      {t.onboarding.phoneLabel}
                    </label>
                    <input
                      name="phone"
                      placeholder={t.onboarding.phonePlaceholder}
                      value={form.phone}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border ${
                        errors.phone ? "border-rose-500 bg-rose-50/20" : "border-slate-300"
                      } rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#d46f24] focus:ring-3 focus:ring-orange-500/15 transition-all`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Monthly Volume */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5 font-mono">
                    {t.onboarding.volumeLabel}
                  </label>
                  <select
                    name="volume"
                    value={form.volume}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-[#d46f24] focus:ring-3 focus:ring-orange-500/15 transition-all"
                  >
                    {t.onboarding.volumeOptions.map((opt) => (
                      <option key={opt.val} value={opt.val}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Product Interest Checkboxes */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2 font-mono">
                    {t.onboarding.interestLabel}
                  </label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {t.onboarding.interestOptions.map((item, idx) => {
                      const isSelected = form.interests.includes(item);
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => handleInterestToggle(item)}
                          className={`text-left text-xs p-3 rounded-xl border transition-all flex items-center gap-2.5 cursor-pointer ${
                            isSelected
                              ? "bg-orange-50 border-[#d46f24] text-orange-950 font-semibold"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <div
                            className={`h-4 w-4 rounded border flex items-center justify-center shrink-0 ${
                              isSelected ? "bg-[#d46f24] border-[#d46f24] text-white" : "border-slate-300 bg-white"
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="h-3.5 w-3.5" />}
                          </div>
                          <span>{item}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5 font-mono">
                    {t.onboarding.notesLabel}
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder={t.onboarding.notesPlaceholder}
                    value={form.notes}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#d46f24] focus:ring-3 focus:ring-orange-500/15 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#d46f24] hover:bg-[#b85816] active:bg-[#9a450e] text-white font-bold py-4 rounded-xl text-base transition-all shadow-md shadow-orange-700/20 hover:shadow-lg hover:shadow-orange-700/30 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>{t.onboarding.submitBtn}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
