import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/companyData';
import { ASSETS } from '../data/assets';
import { PortfolioProject } from '../types';
import { ArrowRight, CheckCircle2, Clock, Layers, TrendingUp, Building2 } from 'lucide-react';

interface PortfolioPageProps {
  openConsultation: (projectName?: string) => void;
  onRequestDemo: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ openConsultation, onRequestDemo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Software Products & CleanTech', 'Software Products & EdTech', 'Custom Software & FinTech', 'Branding, SEO & Web Design'];

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  const getProjectPhoto = (id: string) => {
    switch (id) {
      case 'portfolio-solar-clean': return ASSETS.solarField;
      case 'portfolio-institute-erp': return ASSETS.instituteEdtech;
      case 'portfolio-fintech-core': return ASSETS.bfsiFintech;
      case 'portfolio-brand-seo': return ASSETS.webCreative;
      default: return ASSETS.cloudArchitecture;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* 1. Header */}
      <section className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Client Proof & Project Delivery</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Verified Deployments</span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          Portfolio & Case Studies: Engineering Outcomes That Matter
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Explore how Sangel Softwares delivers measurable business transformation across clean technology, educational operations, enterprise software engineering, manufacturing, branding, and cloud infrastructure.
        </p>

        {/* Category Filters */}
        <div className="pt-2 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-500 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All Case Studies' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Portfolio Cards */}
      <section className="space-y-12">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Visual Photo Column */}
            <div className="lg:col-span-5 relative bg-slate-950 min-h-[280px]">
              <img
                src={getProjectPhoto(project.id)}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/90" />
              
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                <span className="px-3 py-1 bg-black/80 backdrop-blur-md rounded text-[11px] font-semibold text-cyan-400 uppercase tracking-wider border border-slate-800">
                  {project.clientIndustry}
                </span>
                <span className="px-3 py-0.5 bg-slate-900/80 rounded text-[10px] text-slate-300 font-mono">
                  {project.duration}
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-9 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs font-mono text-cyan-400 font-medium">
                  {project.category}
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  {project.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {project.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                    <span className="font-semibold text-slate-200">The Challenge:</span>
                    <p className="text-slate-400">{project.challenge}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                    <span className="font-semibold text-cyan-300">Sangel Engineering Solution:</span>
                    <p className="text-slate-400">{project.solution}</p>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="pt-2 border-t border-slate-800 grid grid-cols-3 gap-3">
                  {project.impactMetrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="font-display text-lg sm:text-xl font-extrabold text-cyan-400 font-mono">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Action Button */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-xs font-mono bg-slate-800 text-slate-300 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openConsultation(project.title)}
                  className="shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* 3. Call to Action Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-cyan-900/60 rounded-2xl p-8 sm:p-12 text-center space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Have an Ambitious Project or Operational Challenge?
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          From solar cleaning management and institutional ERPs to high-throughput financial architectures, our team brings battle-tested delivery rigor.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => openConsultation()}
            className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20"
          >
            Get a Free Consultation
          </button>
          <button
            onClick={onRequestDemo}
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Request Product Demo
          </button>
        </div>
      </section>

    </div>
  );
};
