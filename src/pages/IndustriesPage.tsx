import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data/companyData';
import { ASSETS } from '../data/assets';
import { IndustryItem } from '../types';
import { ShieldCheck, CheckCircle2, ArrowRight, Building, Award, Cpu } from 'lucide-react';

interface IndustriesPageProps {
  openConsultation: (industryName?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ openConsultation }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState('bfsi');

  const selectedIndustry = INDUSTRIES_DATA.find(i => i.id === selectedIndustryId) || INDUSTRIES_DATA[0];

  const industryImages: Record<string, string> = {
    bfsi: ASSETS.bfsiFintech,
    manufacturing: ASSETS.manufacturingSmart,
    healthcare: ASSETS.healthcareDigital,
    retail: ASSETS.heroTransformation,
    logistics: ASSETS.cloudArchitecture,
    education: ASSETS.corporateBoardroom
  };

  const currentPhoto = industryImages[selectedIndustry.id] || ASSETS.bfsiFintech;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* 1. Header */}
      <section className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Target Industry Practices</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Domain Depth</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Specialized Engineering for Regulated & High-Throughput Sectors
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Generic software often fails in mission-critical environments. Sangel Softwares combines deep domain fluency with modern cloud and AI architectures to guarantee compliance, zero data loss, and sub-second performance.
        </p>
      </section>

      {/* 2. Interactive Industry Switcher */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-slate-800 scrollbar-none">
          {INDUSTRIES_DATA.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndustryId(industry.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedIndustryId === industry.id
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/80 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        {/* Selected Industry Detail View */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8">
          
          {/* Industry Banner Photo */}
          <div className="relative rounded-xl overflow-hidden border border-slate-700/80 aspect-[16/6] sm:aspect-[16/5] bg-slate-950">
            <img
              src={currentPhoto}
              alt={`${selectedIndustry.name} Operations`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                {selectedIndustry.name} Infrastructure & Engineering
              </div>
              <div className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
                {selectedIndustry.headline}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                {selectedIndustry.name} Practice Overview
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                {selectedIndustry.headline}
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {selectedIndustry.description}
              </p>
            </div>

            <button
              onClick={() => openConsultation(selectedIndustry.name)}
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm shadow-cyan-500/20"
            >
              <span>Consult on {selectedIndustry.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Solutions & Compliance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Engineered Solutions for {selectedIndustry.name}</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                {selectedIndustry.keySolutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#080C14] border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Mandatory Regulatory & Security Standards</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.regulatoryCompliance.map((reg, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs font-mono bg-emerald-950/40 text-emerald-300 border border-emerald-800/40 rounded-lg"
                    >
                      ✓ {reg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case Snippet */}
              <div className="p-5 rounded-xl bg-slate-950 border border-cyan-900/50 space-y-3">
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Representative Engagement Impact
                </div>
                <div className="text-xs font-bold text-white">
                  Client Profile: {selectedIndustry.caseSnippet.clientType}
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <p><span className="text-slate-400">Challenge: </span>{selectedIndustry.caseSnippet.challenge}</p>
                  <p><span className="text-slate-400">Architecture: </span>{selectedIndustry.caseSnippet.solution}</p>
                  <p className="text-emerald-400 font-semibold pt-1">
                    Outcome: {selectedIndustry.caseSnippet.impact}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. All Industries Grid */}
      <section className="space-y-6">
        <h3 className="font-display text-2xl font-bold text-white">
          All Target Sectors & Strategic Verticals
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              onClick={() => setSelectedIndustryId(ind.id)}
              className={`p-6 rounded-xl border transition-all cursor-pointer ${
                selectedIndustryId === ind.id
                  ? 'bg-slate-900 border-cyan-500 shadow-md'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Industry Practice
              </div>
              <h4 className="font-display text-xl font-bold text-white mt-1">
                {ind.name}
              </h4>
              <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                {ind.headline}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>View practice blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
