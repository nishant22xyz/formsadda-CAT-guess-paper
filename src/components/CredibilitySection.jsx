import React from "react";
import { credibilityPoints } from "../data/guessPaper";

export default function CredibilitySection() {
  return (
    <section id="credibility" className="py-20 sm:py-24 bg-white border-b border-[#dde4e6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label justify-center">
            <i className="fa-solid fa-shield-halved"></i> Genuine Expectations
          </div>
          <h2 className="section-title">How Reliable Is a Guess Paper?</h2>
          <p className="section-sub max-w-2xl mx-auto">
            We value your trust above all else. Here is an honest, unembellished look at why this preparation resource is effective and how to use it responsibly.
          </p>
        </div>

        {/* 6 Value Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {credibilityPoints.map((point, idx) => (
            <div
              key={idx}
              className="fa-card p-6 rounded-xl border border-[#dde4e6] bg-[#f7fafb] text-left flex items-start gap-4 hover:border-[#468e91] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#e6f0f1] border border-[#b4d0d1] flex items-center justify-center text-[#008190] text-lg flex-shrink-0">
                <i className={point.icon}></i>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1e3235] mb-1.5">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4a6468] leading-relaxed m-0">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Disclaimer Callout */}
        <div className="max-w-3xl mx-auto bg-[#fff8f0] border-2 border-[#f38e3e]/40 rounded-2xl p-6 sm:p-8 text-left shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f38e3e]/15 border border-[#f38e3e]/40 flex items-center justify-center text-[#f38e3e] text-2xl flex-shrink-0 mt-0.5">
              <i className="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1e3235] mb-2 flex items-center gap-2">
                <span>Important Academic Notice</span>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#f38e3e] text-white">
                  Must Read
                </span>
              </h3>
              <p className="text-sm text-[#4a6468] leading-relaxed mb-3">
                This is an independent CAT preparation resource created by FormsADDA. It is not an official CAT question paper and is not affiliated with or endorsed by IIMs. No guarantee is made that any particular question will appear in CAT 2027.
              </p>
              <p className="text-xs sm:text-sm text-[#2e4447] font-semibold leading-relaxed m-0">
                Use this resource to assess your concept readiness, optimize revision speed, and practice high-priority question formats across Quantitative Ability and VARC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
