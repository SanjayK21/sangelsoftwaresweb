import React from 'react';
import { PRODUCTS_ROADMAP } from '../data/companyData';
import { ASSETS } from '../data/assets';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Database, CheckCircle2 } from 'lucide-react';

interface ProductsPageProps {
  openConsultation: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ openConsultation }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <section className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Innovation Labs & Intellectual Property</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Product Roadmap</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Proprietary SaaS & AI Accelerators
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          In alignment with our Phase 3 and Phase 4 growth milestones, Sangel Softwares incubates specialized SaaS products and autonomous AI platforms designed to resolve structural bottlenecks in BFSI, supply chain operations, and enterprise software maintenance.
        </p>
      </section>

      {/* Product Roadmap Cards */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS_ROADMAP.map((product, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between space-y-6 hover:border-cyan-500/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {product.category}
                  </span>
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                    {product.stage}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white">
                  {product.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {product.description}
                </p>

                <div className="pt-2 space-y-2 border-t border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-200">
                    Key Architectural Capabilities:
                  </div>
                  {product.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => openConsultation(product.name)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-cyan-400 hover:text-slate-950 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  <span>Request Early-Access Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cloud & AI Lab Architecture */}
      <section className="bg-gradient-to-r from-slate-900 via-[#0B1322] to-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              Co-Innovation Model
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Enterprise Pilot & Co-Development Partnerships
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We partner with forward-thinking enterprises, mid-market manufacturers, and regional financial institutions to co-innovate industry-specific accelerators. Pilot partners receive preferential licensing and bespoke tailoring to their enterprise data schemas.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => openConsultation('Pilot & Co-Innovation Program')}
                className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20"
              >
                Join Enterprise Pilot Program
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#080C14] border border-slate-800 rounded-xl p-6 space-y-3 text-xs text-slate-300">
            <div className="font-semibold text-white uppercase tracking-wider text-xs">
              Pilot Partner Privileges:
            </div>
            <p>✓ 100% white-label rights and dedicated tenant sandbox</p>
            <p>✓ Custom API connectors to your current legacy core</p>
            <p>✓ Dedicated senior engineering lead assigned for integration</p>
            <p>✓ Lifetime preferred SLA terms and tier-1 maintenance support</p>
          </div>
        </div>
      </section>

    </div>
  );
};
