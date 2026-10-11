import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ASSETS } from '../data/assets';
import { Target, Compass, Award, Shield, Users, Globe, Building2, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  openConsultation: () => void;
  setActiveTab: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ openConsultation, setActiveTab }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-20">
      
      {/* 1. Header & Vision Statement */}
      <section className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>About Sangel Softwares</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Corporate Overview</span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          A Technology Partner Built for Enterprise Transformation & AI Scale
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed">
          {COMPANY_INFO.positioning}
        </p>

        {/* Corporate Vision Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-cyan-800/60 shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Target className="w-4 h-4" />
            <span>Our Corporate Vision</span>
          </div>
          <p className="font-display text-xl sm:text-2xl text-white font-bold leading-relaxed">
            "{COMPANY_INFO.vision}"
          </p>
        </div>
      </section>

      {/* 2. Visual & Leadership Philosophy */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            The Sangel Differentiator
          </div>
          <h2 className="font-display text-3xl font-bold text-white tracking-tight">
            Bridging Senior Enterprise Delivery with Modern AI Execution
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Many software providers either offer low-cost junior development lacking architectural governance, or charge exorbitant strategy fees without pragmatic execution. Sangel Softwares was established to eliminate this compromise.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            By embedding senior Delivery Directors, seasoned cloud architects, and dedicated AI practitioners directly into client initiatives, we ensure that every line of code meets strict ISO 27001 standards, regulatory compliance, and long-term maintainability.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
              <div className="font-display text-2xl font-bold text-cyan-400">100%</div>
              <div className="text-xs font-semibold text-white mt-1">Code & IP Ownership</div>
              <div className="text-xs text-slate-400 mt-0.5">Full repository sovereignty transferred to client.</div>
            </div>
            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
              <div className="font-display text-2xl font-bold text-cyan-400">&lt; 5 Days</div>
              <div className="text-xs font-semibold text-white mt-1">Pod Onboarding Speed</div>
              <div className="text-xs text-slate-400 mt-0.5">Pre-screened senior engineers ready to ship.</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
            <img
              src={ASSETS.aiEngineering}
              alt="Sangel Softwares Engineering Practice"
              className="w-full aspect-[16/10] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs text-slate-300">
              <span className="font-semibold text-white">Engineering Governance: </span>
              Continuous integration, automated quality gates, and peer-reviewed pull requests.
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 8 Mission Pillars */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Strategic Objectives
          </div>
          <h2 className="font-display text-3xl font-bold text-white tracking-tight">
            Our 8 Mission Pillars
          </h2>
          <p className="text-sm text-slate-300">
            How we translate technology investments into demonstrable commercial velocity and operational stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMPANY_INFO.missionPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 space-y-2.5 hover:border-slate-700 transition-colors"
            >
              <div className="font-mono text-xs font-bold text-cyan-400">
                0{idx + 1}.
              </div>
              <h3 className="font-display text-base font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Corporate Growth Narrative (Phases 1 - 4) */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Roadmap & Evolution
          </div>
          <h2 className="font-display text-3xl font-bold text-white tracking-tight">
            Our Enterprise Growth Narrative
          </h2>
          <p className="text-sm text-slate-300">
            From premier custom software engineering to recurring managed services, proprietary SaaS platforms, and enterprise AI automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.growthNarrative.map((item, idx) => (
            <div key={idx} className="relative p-5 bg-[#080C14] rounded-xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-cyan-400">
                {item.phase}
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.focus}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Pan-India Delivery Hubs & Global Expansion */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Geographic Footprint
          </div>
          <h2 className="font-display text-3xl font-bold text-white tracking-tight">
            India Engineering Centers & Global Scalability
          </h2>
          <p className="text-sm text-slate-300">
            Operating from India's premier technology corridors with direct client representation in key global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* India Hubs */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>Phase 1: India Engineering Delivery Centers</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {COMPANY_INFO.locations.indiaHubs.map((hub, idx) => (
                <div key={idx} className="p-3 bg-[#080C14] rounded-lg border border-slate-800">
                  <div className="font-semibold text-white text-xs flex items-center justify-between">
                    <span>{hub.city}</span>
                    <span className="text-slate-400 text-[11px]">{hub.state}</span>
                  </div>
                  <div className="text-xs text-cyan-400 mt-1">
                    {hub.role}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Representation */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="relative aspect-[16/7] overflow-hidden bg-slate-950">
              <img
                src={ASSETS.corporateBoardroom}
                alt="Sangel Softwares Global Executive Briefings"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-4 text-xs font-semibold text-cyan-400">
                Executive Briefing Network
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Phase 2: Global Client Representation</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                We provide time-zone aligned delivery and on-the-ground technical discovery for international enterprises.
              </p>

              <div className="space-y-2 pt-1">
                {COMPANY_INFO.locations.globalExpansion.map((g, idx) => (
                  <div key={idx} className="p-2.5 bg-[#080C14] rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">{g.country}</span>
                    <span className="text-slate-400">{g.regions}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-900/80 rounded-2xl p-8 sm:p-12 text-center space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Partner with a Technology Firm That Puts Engineering First
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Contact our leadership team to discuss your enterprise requirements or request client references.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={openConsultation}
            className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20"
          >
            Schedule Leadership Briefing
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Direct Inquiry
          </button>
        </div>
      </section>

    </div>
  );
};
