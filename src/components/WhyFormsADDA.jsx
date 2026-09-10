import React from "react";

const trustCards = [
  {
    icon: "fa-solid fa-bullseye",
    title: "CAT Focused",
    description:
      "Designed specifically for CAT preparation with focused Quantitative Ability and VARC coverage.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Trend & Topic Based",
    description:
      "Built around important concepts, previous-year trends and high-priority topics for revision.",
  },
  {
    icon: "fa-solid fa-book-open-reader",
    title: "Revision Friendly",
    description:
      "Structured digital material designed to help CAT aspirants revise important concepts efficiently.",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Instant Digital Access",
    description:
      "Get the preparation PDF digitally with convenient access after purchase.",
  },
];

export default function WhyFormsADDA() {
  return (
    <section className="px-4 sm:px-6 py-8 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-[#dde4e6] bg-gradient-to-br from-[#f8fbfc] via-white to-[#f0f4f5] p-6 sm:p-8 shadow-[0_4px_20px_rgba(46,68,71,0.06)]">
          {/* Subtle decorative shapes */}
          <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#468e91]/5 pointer-events-none" />
          <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-[#f38e3e]/5 pointer-events-none" />

          <div className="relative">
            {/* Section heading */}
            <div className="text-center mb-6">
              <div className="section-label justify-center mb-2">
                <i className="fa-solid fa-shield-check" /> Trusted Resource
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1e3235] leading-snug">
                Why Students Choose FormsADDA
              </h2>
            </div>

            {/* 4 trust cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
              {trustCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#dde4e6] hover:border-[#468e91] p-4 flex flex-col gap-2.5 text-left shadow-sm transition-all hover:shadow-md"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#e6f0f1] border border-[#b4d0d1] flex items-center justify-center text-[#008190] flex-shrink-0">
                    <i className={`${card.icon} text-base`} />
                  </div>
                  <h3 className="text-sm font-bold text-[#1e3235] leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#4a6468] leading-relaxed m-0">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Supporting lines */}
            <div className="text-center space-y-1">
              <p className="text-xs sm:text-sm font-medium text-[#4a6468]">
                An independent FormsADDA preparation resource created to support structured CAT revision.
              </p>
              <p className="text-[11px] text-[#8fa5a9]">
                Not affiliated with or endorsed by IIMs or the official CAT examination authorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
