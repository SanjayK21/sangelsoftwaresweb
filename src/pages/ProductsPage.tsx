import React, { useState, useEffect } from 'react';
import { PROPOSED_PRODUCTS } from '../data/companyData';
import { ASSETS } from '../data/assets';
import { ProductItem } from '../types';
import { Sparkles, ArrowRight, CheckCircle2, Users, Layers, ExternalLink, ShieldCheck, Sun, GraduationCap, Wrench, Briefcase, Bot, FileText, LayoutDashboard, Monitor } from 'lucide-react';

interface ProductsPageProps {
  onRequestDemo: (product: ProductItem) => void;
  openConsultation: (context?: string) => void;
  selectedProductId?: string;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onRequestDemo, openConsultation, selectedProductId }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'clean-tech' | 'ed-tech' | 'enterprise' | 'ai'>('all');
  const [highlightedId, setHighlightedId] = useState<string | null>(selectedProductId || null);

  useEffect(() => {
    if (selectedProductId && selectedProductId !== 'all') {
      setSelectedFilter('all');
      setHighlightedId(selectedProductId);
      setTimeout(() => {
        const el = document.getElementById(selectedProductId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [selectedProductId]);

  const filteredProducts = PROPOSED_PRODUCTS.filter((prod) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'clean-tech') return prod.id === 'product-solarcare';
    if (selectedFilter === 'ed-tech') return prod.id === 'product-instituteone';
    if (selectedFilter === 'enterprise') return ['product-fieldops', 'product-businessone', 'product-onepmo'].includes(prod.id);
    if (selectedFilter === 'ai') return ['product-oneai', 'product-docai'].includes(prod.id);
    return true;
  });

  const getProductImage = (id: string) => {
    switch (id) {
      case 'product-solarcare': return ASSETS.solarField;
      case 'product-instituteone': return ASSETS.instituteEdtech;
      case 'product-fieldops': return ASSETS.manufacturingSmart;
      case 'product-businessone': return ASSETS.saasProducts;
      case 'product-onepmo': return ASSETS.corporateBoardroom;
      case 'product-oneai': return ASSETS.aiEngineering;
      case 'product-docai': return ASSETS.heroTransformation;
      default: return ASSETS.saasProducts;
    }
  };

  const getStageBadgeColor = (stage: ProductItem['stage']) => {
    switch (stage) {
      case 'Available':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50';
      case 'Beta':
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50';
      case 'Pilot':
        return 'bg-amber-950/80 text-amber-300 border-amber-500/50';
      case 'Coming Soon':
        return 'bg-slate-800 text-slate-400 border-slate-700';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getProductIcon = (id: string) => {
    switch (id) {
      case 'product-solarcare': return <Sun className="w-5 h-5 text-amber-400" />;
      case 'product-instituteone': return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'product-fieldops': return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 'product-businessone': return <Briefcase className="w-5 h-5 text-blue-400" />;
      case 'product-onepmo': return <LayoutDashboard className="w-5 h-5 text-purple-400" />;
      case 'product-oneai': return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'product-docai': return <FileText className="w-5 h-5 text-teal-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* 1. Page Header */}
      <section className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Proprietary Software Products</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Vertical SaaS & Industry Engines</span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          Purpose-Built Software Products for Solar, Education, Field Ops & Enterprise AI
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          In addition to custom engineering, Sangel Softwares designs and builds specialized SaaS products that solve deep operational pain points in specific industries. Each product is engineered with enterprise reliability, field-tested workflows, and transparent development stages.
        </p>

        {/* Filter Tabs */}
        <div className="pt-2 flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Products (7)' },
            { id: 'clean-tech', label: 'Solar & CleanTech' },
            { id: 'ed-tech', label: 'Education & Coaching' },
            { id: 'enterprise', label: 'Field Ops & Business' },
            { id: 'ai', label: 'Enterprise AI & DocAI' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors border cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-500 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Flagship Products Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            id={product.id}
            className={`bg-slate-900/60 border rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-lg ${
              highlightedId === product.id 
                ? 'border-cyan-400 ring-2 ring-cyan-500/30 bg-slate-900/90 shadow-cyan-500/10' 
                : 'border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="space-y-4">
              
              {/* Product Card Top Bar */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    {getProductIcon(product.id)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-medium text-slate-400">{product.category}</span>
                    <h3 className="font-display text-2xl font-bold text-white tracking-tight leading-tight">
                      {product.name}
                    </h3>
                  </div>
                </div>

                <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${getStageBadgeColor(product.stage)} shrink-0`}>
                  {product.stage}
                </span>
              </div>

              {/* Tagline & Description */}
              <p className="text-xs sm:text-sm font-semibold text-cyan-300">
                {product.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {product.description}
              </p>

              {/* Modules Strip */}
              <div className="pt-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Integrated Product Modules:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.modules.map((mod, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 text-xs bg-slate-800/80 border border-slate-700/60 text-slate-300 rounded"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Key Capabilities:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {product.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Audience */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Target Customers:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.targetAudience.map((aud, idx) => (
                    <span key={idx} className="text-xs text-slate-400">
                      • {aud}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* CTA Footer */}
            <div className="pt-5 border-t border-slate-800 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                {product.stage === 'Available' ? 'Ready for deployment & pilot' : 'Private preview & sandbox access'}
              </span>

              <button
                onClick={() => onRequestDemo(product)}
                className="flex items-center gap-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Co-Innovation & Enterprise Customization Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-cyan-900/60 rounded-2xl p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              Bespoke Product Engineering
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Need a Custom Product Tailored to Your Specific Business Model?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              Can't find an exact off-the-shelf fit? Sangel Softwares also engineers custom SaaS platforms, customer self-service portals, and proprietary industry solutions from scratch with 100% intellectual property ownership transferred to you.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => openConsultation('Custom Product Engineering')}
                className="px-6 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20"
              >
                Discuss Custom SaaS Scope
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#080C14] border border-slate-800 rounded-xl p-5 text-xs text-slate-300 space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-2">
              Sangel Product Commitments:
            </div>
            <p>✓ 100% Code & Database Sovereignty</p>
            <p>✓ Dedicated VPC or On-Premise Deployment</p>
            <p>✓ Zero Dependency on Proprietary Lock-In</p>
            <p>✓ Tier-1 SLA and 24/7 Security Patching</p>
          </div>
        </div>
      </section>

    </div>
  );
};
