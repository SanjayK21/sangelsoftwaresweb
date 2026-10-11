import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, Cpu, Layers, TrendingUp, ArrowRight } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookConsultation: (serviceName?: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookConsultation
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-[#0B111E] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            {service.verticalName}
          </div>
          <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {service.title}
          </h2>
          <p className="mt-2 text-sm text-cyan-100/90 leading-relaxed font-medium">
            {service.tagline}
          </p>
        </div>

        {/* Overview */}
        <div className="mt-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-5">
          {service.description}
        </div>

        {/* Deliverables & Business Outcomes Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider mb-3">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Key Architectural Deliverables</span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {service.keyDeliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider mb-3">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Measurable Business Impact</span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {service.businessOutcomes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technology Stack & Target Sectors */}
        <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400 font-medium mb-1.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Core Technology Stack:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3 pt-2 sm:pt-0">
            <button
              onClick={() => {
                onClose();
                onBookConsultation(service.title);
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
            >
              <span>Consult on this Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
