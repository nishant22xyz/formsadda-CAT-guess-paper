import React from "react";

export default function StudentTrustBanner() {
  const trustPoints = [
    {
      icon: "fa-solid fa-bullseye",
      title: "CAT Focused",
      desc: "Quantitative Ability + VARC preparation areas",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Concept-Oriented",
      desc: "High-priority concepts & standard question patterns",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Instant Digital Access",
      desc: "Downloadable searchable PDF immediately after checkout",
    },
  ];

  const subjects = [
    { label: "Quantitative Ability", icon: "📐", color: "bg-[#008190]/10 text-[#008190] border-[#008190]/25" },
    { label: "VARC", icon: "📖", color: "bg-[#f38e3e]/10 text-[#d9742a] border-[#f38e3e]/30" },
    { label: "CAT 2027 Prep", icon: "🎯", color: "bg-[#2e4447]/10 text-[#2e4447] border-[#2e4447]/20" },
  ];

  return (
    <section className="px-4 sm:px-6 pt-6 pb-2 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-[#dde4e6] bg-gradient-to-br from-[#f8fbfc] via-white to-[#f4f9f9] p-5 sm:p-7 shadow-[0_4px_20px_rgba(46,68,71,0.06)] hover:border-[#b4d0d1] transition-all">
          {/* Subtle background decorative shapes */}
          <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#008190]/5 pointer-events-none"></div>
          <div className="absolute top-0 right-1/4 w-24 h-24 rounded-full bg-[#f38e3e]/5 pointer-events-none"></div>

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Left: Main Trust Headline & Info */}
            <div className="flex-1 text-left">
              {/* Trust Badge & Educational Subject Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#008190] text-white shadow-sm">
                  <i className="fa-solid fa-shield-check text-xs"></i>
                  Aspirant Resource
                </span>

                {subjects.map((sub, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold border ${sub.color}`}
                  >
                    <span>{sub.icon}</span>
                    <span>{sub.label}</span>
                  </span>
                ))}
              </div>

              {/* Main Headline */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#008190] tracking-tight">
                  CAT 2027
                </span>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1e3235] leading-snug">
                  Structured preparation resources by <span className="text-[#f38e3e]">FormsADDA Academic</span>
                </h2>
              </div>

              <p className="mt-1.5 text-xs sm:text-sm text-[#4a6468] max-w-2xl leading-relaxed">
                Empowering CAT aspirants across India with structured, concept-driven revision material crafted by expert faculty.
              </p>
            </div>

            {/* Right: 3 Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0 lg:max-w-[540px] w-full">
              {trustPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-[#dde4e6] hover:border-[#008190]/40 shadow-sm flex flex-col justify-between transition-all"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-[#e6f0f1] flex items-center justify-center text-[#008190] text-xs shrink-0">
                      <i className={pt.icon}></i>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#1e3235] leading-tight">
                      {pt.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-[#6b7f82] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
