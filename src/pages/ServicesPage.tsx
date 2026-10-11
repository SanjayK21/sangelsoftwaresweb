import React, { useState } from 'react';
import { SERVICES_DATA, SERVICE_VERTICALS, ENGAGEMENT_MODELS } from '../data/companyData';
import { ServiceItem } from '../types';
import { Search, ArrowRight, CheckCircle2, Cpu, Layers, Calculator, ShieldCheck } from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  openConsultation: (serviceName?: string) => void;
  openCalculator: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  openConsultation,
  openCalculator
}) => {
  const [selectedVertical, setSelectedVertical] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesVertical = selectedVertical === 'all' || service.verticalId === selectedVertical;
    const matchesQuery = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesVertical && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-20">
      
      {/* 1. Header & Search */}
      <section className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Enterprise Services & Capabilities</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>15 Disciplines</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Comprehensive Software, AI & Digital Transformation Practices
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          From full-stack custom engineering and cloud modernization to specialized BFSI architectures, enterprise ERP, and flexible resource augmentation pods.
        </p>

        {/* Search & Filter Controls */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by service name, technology (e.g. React, Python, Kafka, ERP), or outcome..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
          <button
            onClick={openCalculator}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>Scope Estimator</span>
          </button>
        </div>
      </section>

      {/* 2. Verticals Tabs Filter */}
      <section className="space-y-8">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 border-b border-slate-800 scrollbar-none">
          {SERVICE_VERTICALS.map((vertical) => (
            <button
              key={vertical.id}
              onClick={() => setSelectedVertical(vertical.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedVertical === vertical.id
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/80 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {vertical.name}
            </button>
          ))}
        </div>

        {/* Services List */}
        {filteredServices.length === 0 ? (
          <div className="p-12 text-center bg-slate-900/50 rounded-2xl border border-slate-800">
            <p className="text-sm text-slate-400">No services match your query "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedVertical('all'); }}
              className="mt-3 text-xs text-cyan-400 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-200 group cursor-pointer"
                onClick={() => onSelectService(service)}
              >
                <div className="space-y-3">
                  <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                    {service.verticalName}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 space-y-1.5 text-xs text-slate-300">
                    {service.keyDeliverables.slice(0, 2).map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{deliv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="pt-2 flex flex-wrap gap-1">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-mono bg-slate-800/80 text-slate-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-mono bg-slate-800/80 text-slate-400 rounded">
                        +{service.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    View Architecture Specs
                  </span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Engagement Models Comparison Section */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Commercial Models
          </div>
          <h2 className="font-display text-3xl font-bold text-white tracking-tight">
            Flexible Enterprise Engagement Structures
          </h2>
          <p className="text-sm text-slate-300">
            Tailored to match your project governance, procurement guidelines, and engineering tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGAGEMENT_MODELS.map((model) => (
            <div
              key={model.id}
              className="bg-[#080C14] border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <h3 className="font-display text-lg font-bold text-white">
                  {model.name}
                </h3>
                <div className="p-2.5 bg-slate-900/80 border border-slate-800 rounded-lg text-xs space-y-1">
                  <div className="text-slate-400">
                    <span className="font-medium text-slate-200">Billing:</span> {model.billingModel}
                  </div>
                  <div className="text-slate-400">
                    <span className="font-medium text-slate-200">SLA:</span> {model.slaCommitment}
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {model.bestFor}
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                  {model.features.slice(0, 3).map((f, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => openConsultation(model.name)}
                  className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Inquire on this Model
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Consultation CTA */}
      <section className="bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-900/80 rounded-2xl p-8 sm:p-12 text-center space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Need an Architectural Assessment for Your System?
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Schedule a direct technical discovery call with our Senior Solutions Architects. We sign strict mutual NDAs prior to reviewing code or architectures.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => openConsultation()}
            className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20"
          >
            Book Technical Briefing
          </button>
          <button
            onClick={openCalculator}
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Calculate Sizing & Pod Sizing
          </button>
        </div>
      </section>

    </div>
  );
};
