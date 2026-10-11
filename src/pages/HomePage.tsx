import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA, SERVICE_VERTICALS, TRANSFORMATION_LIFECYCLE, CASE_STUDIES, PRODUCTS_ROADMAP } from '../data/companyData';
import { ASSETS } from '../data/assets';
import { HeroSlider } from '../components/HeroSlider';
import { ServiceItem, CaseStudy } from '../types';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  TrendingUp, 
  Zap, 
  Building2, 
  Globe2, 
  Calculator,
  ChevronRight,
  Terminal,
  Server
} from 'lucide-react';

interface HomePageProps {
  onSelectService: (service: ServiceItem) => void;
  openConsultation: (serviceName?: string) => void;
  openCalculator: () => void;
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectService,
  openConsultation,
  openCalculator,
  setActiveTab
}) => {
  const [activeVertical, setActiveVertical] = useState('all');
  const [activeLifecycleIndex, setActiveLifecycleIndex] = useState(0);
  const [heroPreviewIndex, setHeroPreviewIndex] = useState(0);

  const heroPreviews = [
    { title: "AI Transformation Hub", sub: "Enterprise Operations & R&D", image: ASSETS.heroTransformation },
    { title: "BFSI & FinTech Lab", sub: "Core Banking & Underwriting", image: ASSETS.bfsiFintech },
    { title: "Smart Manufacturing", sub: "Industry 4.0 & Shop Floor ERP", image: ASSETS.manufacturingSmart },
    { title: "Cybersecurity SOC", sub: "Zero-Trust & VAPT Operations", image: ASSETS.cybersecuritySoc }
  ];

  const currentHeroPreview = heroPreviews[heroPreviewIndex];

  const filteredServices = activeVertical === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.verticalId === activeVertical);

  const activeLifecycle = TRANSFORMATION_LIFECYCLE[activeLifecycleIndex];

  return (
    <div className="space-y-24 md:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-glow pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Unboxed clean metadata kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <span>Enterprise Technology Partner</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>AI-Enabled Delivery</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>BFSI Domain Rigor</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
                Engineering Digital Transformation with AI & Enterprise Rigor
              </h1>

              {/* Positioning statement */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {COMPANY_INFO.positioning}
              </p>

              {/* Differentiator callout note */}
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl border-l-2 border-cyan-400 pl-3 py-0.5">
                {COMPANY_INFO.differentiator}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openConsultation()}
                  className="flex items-center gap-2 px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
                >
                  <span>Book Architecture Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={openCalculator}
                  className="flex items-center gap-2 px-5 py-3 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Calculator className="w-4 h-4 text-cyan-400" />
                  <span>Estimate Project Scope</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-3 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  Explore 15 Services →
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>ISO 27001 & RBI Ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Production AI & Agentic Pipelines</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span>India Delivery Centers + Global Scalability</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Asset with Fail-Safe Scrim & Interactive Practice Selector */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl group">
                <img
                  src={currentHeroPreview.image}
                  alt={currentHeroPreview.title}
                  className="w-full aspect-[16/10] sm:aspect-[16/11] object-cover transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Measured Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Sangel Engineering Practice
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mt-1">
                    {currentHeroPreview.title}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {currentHeroPreview.sub}
                  </div>
                </div>
              </div>

              {/* Quick photo selector strip */}
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl">
                {heroPreviews.map((preview, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setHeroPreviewIndex(idx)}
                    className={`py-1 px-1.5 rounded-lg text-center transition-all cursor-pointer ${
                      heroPreviewIndex === idx
                        ? 'bg-cyan-950 border border-cyan-500 text-cyan-300 shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <div className="text-[10px] font-mono font-bold leading-none">0{idx + 1}</div>
                    <div className="text-[11px] font-medium truncate mt-0.5">{preview.title.split(' ')[0]}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS & QUANTITATIVE RIGOR BAR */}
      <section className="border-y border-slate-800/80 bg-[#070B13]/90 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-cyan-400 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 DYNAMIC ENTERPRISE SHOWCASE CAROUSEL SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <span>Specialized Engineering Environments</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Interactive Operational Tour</span>
          </div>
          <span className="text-xs text-slate-400">
            Auto-cycling 5 Core Practice Visuals
          </span>
        </div>
        <HeroSlider
          onSlideAction={(target) => {
            setActiveTab(target);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          openConsultation={openConsultation}
          openCalculator={openCalculator}
        />
      </section>

      {/* 3. CORE DIFFERENTIATORS / WHY SANGEL SOFTWARES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Enterprise Differentiator
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Why Enterprise Leaders Partner with Sangel Softwares
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We are not a generic outsourced dev shop. We act as a trusted strategic technology partner combining high-touch senior delivery governance with cost-effective India engineering execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-7 space-y-3 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              Senior Delivery Leadership
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every project is led by hands-on Principal Architects and Delivery Directors with 12+ years of enterprise experience. Zero junior handoffs or unmonitored subcontracting.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-7 space-y-3 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              Deep BFSI & FinTech Domain
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Deep specialization in banking rails, NPCI/UPI integration, automated loan origination (LOS), fraud detection, and stringent RBI data localization frameworks.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-7 space-y-3 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              AI-Augmented Engineering Pods
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our engineering squads leverage internal AI accelerators for automated unit testing, synthetic data generation, and rapid scaffolding—delivering up to 40% faster sprint cycles.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-7 space-y-3 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              Legacy Modernization Specialists
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Proven methodologies for safely decomposing brittle monolithic legacy codebases into containerized, cloud-native microservices with zero downtime cutover.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-7 space-y-3 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              Cost-Effective India Delivery
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Strategic engineering centers in Bengaluru, Mumbai, Pune, and Delhi NCR offering 45–55% cost efficiencies while maintaining strict Western working hour overlap.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-7 space-y-3 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              Flexible Long-Term Engagement
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From dedicated agile pods and fixed-scope milestone projects to 24/7 SLA managed support and rapid talent augmentation in under 5 business days.
            </p>
          </div>

        </div>
      </section>

      {/* 4. SERVICES EXPLORER (All 15 Services across 8 Verticals) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Complete Capabilities Suite
            </div>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              15 Specialized Service Verticals
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              End-to-end technology capability from architectural audit to production deployment and 24/7 enterprise managed operations.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>View Full Service Architecture Hub</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 border-b border-slate-800 scrollbar-none">
          {SERVICE_VERTICALS.map((vertical) => (
            <button
              key={vertical.id}
              onClick={() => setActiveVertical(vertical.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeVertical === vertical.id
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/80 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {vertical.name}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.slice(0, 9).map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-200 group cursor-pointer"
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

                {/* Tech tags preview */}
                <div className="pt-2 flex flex-wrap gap-1">
                  {service.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-xs font-mono bg-slate-800/80 text-slate-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 group-hover:text-white transition-colors">
                  Inspect Architecture & Outcomes
                </span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length > 9 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Explore Remaining Services in Hub ({filteredServices.length - 9} more)
            </button>
          </div>
        )}
      </section>

      {/* 5. SPOTLIGHT: BFSI & FINTECH SPECIALIZATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-[#0B1220] to-[#0A1628] border border-cyan-900/60 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/80 border border-cyan-500/40 rounded-full text-xs font-semibold text-cyan-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Specialized Domain Practice</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                BFSI & FinTech Engineering Core
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Financial institutions cannot afford architectural failure. We engineer core transaction engines, automated loan origination platforms (LOS), and instant underwriting engines built to meet the strictest RBI, ISO 27001, and PCI-DSS mandates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 pt-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Sub-4-minute digital loan underwriting and verification</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Real-time fraud anomaly streaming with Apache Kafka</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>NPCI, UPI 2.0, IMPS, and BBPS payment integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>RBI Data Localization and ISO 27001 audit readiness</span>
                </div>
              </div>

              <div className="pt-3 flex items-center gap-4">
                <button
                  onClick={() => openConsultation('BFSI & FinTech Technology Services')}
                  className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
                >
                  Schedule BFSI Architecture Review
                </button>
                <button
                  onClick={() => {
                    setActiveTab('industries');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Explore Industry Use Cases →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-xl bg-slate-900">
                <img
                  src={ASSETS.bfsiFintech}
                  alt="Sangel Softwares BFSI Technology Operations"
                  className="w-full aspect-[16/10] object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="p-4 bg-slate-950/90 border-t border-slate-800">
                  <div className="text-xs font-mono text-cyan-400">
                    BENCHMARK: SUB-100MS LATENCY
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Event-driven distributed ledger integration for high-concurrency banking portals.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. THE 7-STAGE TRANSFORMATION LIFECYCLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Delivery Methodology
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            The 7-Stage Digital Transformation Lifecycle
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our disciplined, repeatable governance framework minimizes operational disruption while modernizing critical enterprise software.
          </p>
        </div>

        {/* Stepper Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
          {TRANSFORMATION_LIFECYCLE.map((stage, idx) => {
            const isCurrent = activeLifecycleIndex === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveLifecycleIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-cyan-950/80 border-cyan-500 text-white shadow-md shadow-cyan-950/50'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-mono text-xs text-cyan-400 font-bold">
                  {stage.step}.
                </div>
                <div className="font-display text-sm font-bold mt-0.5 text-white">
                  {stage.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
                <span>STAGE {activeLifecycle.step} OF 07</span>
                <span aria-hidden="true" className="text-slate-600">/</span>
                <span className="text-slate-300 font-sans uppercase">{activeLifecycle.tagline}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {activeLifecycle.step}. {activeLifecycle.name}: {activeLifecycle.tagline}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeLifecycle.desc}
              </p>

              <div className="pt-2">
                <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Stage Deliverables & Verification:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {activeLifecycle.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#080C14] border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-4 h-4" />
                <span>Governance & Verification Gate</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                No stage advances without mutual sign-off from both Client Enterprise Architecture and Sangel Softwares Delivery Directors.
              </p>
              <div className="p-3 bg-slate-900 rounded-lg text-xs font-mono text-slate-300 border border-slate-800 space-y-1">
                <div>✓ Security & Architecture Audit: Verified</div>
                <div>✓ Automated Regression Guard: Passed</div>
                <div>✓ Production Continuity: Guaranteed 99.98%</div>
              </div>
              <button
                onClick={() => openConsultation(`Transformation Stage ${activeLifecycle.name}`)}
                className="w-full py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Inquire on Stage {activeLifecycle.step} Roadmap
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 7. PROVEN IMPACT & CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Verified Enterprise Impact
            </div>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Transforming Real-World Operations
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              Real business outcomes achieved for startups, manufacturing enterprises, and financial institutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs) => {
            const caseImages: Record<string, string> = {
              'cs-fintech-core': ASSETS.bfsiFintech,
              'cs-manufacturing-erp': ASSETS.manufacturingSmart,
              'cs-healthcare-rag': ASSETS.healthcareDigital
            };
            const cardPhoto = caseImages[cs.id] || ASSETS.cloudArchitecture;

            return (
              <div
                key={cs.id}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors group"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/8] overflow-hidden bg-slate-950">
                  <img
                    src={cardPhoto}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/75 backdrop-blur-sm rounded text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                    {cs.clientIndustry}
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-display text-xl font-bold text-white leading-snug">
                      {cs.title}
                    </h3>
                    
                    <div className="space-y-2 text-xs text-slate-300">
                      <p>
                        <span className="font-semibold text-slate-200">Challenge: </span>
                        {cs.challenge}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-200">Solution: </span>
                        {cs.solution}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="pt-2 border-t border-slate-800/80 space-y-2">
                      {cs.metrics.map((m, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">{m.label}</span>
                          <span className="font-bold text-cyan-400 font-mono">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-800/80">
                    <div className="text-xs text-slate-400 font-medium mb-1.5">Technologies Deployed:</div>
                    <div className="flex flex-wrap gap-1">
                      {cs.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-xs font-mono bg-slate-800 text-slate-300 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. PRODUCTS & FUTURE-READY ACCELERATORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-800 bg-[#070B13] rounded-2xl p-8 sm:p-12">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Innovation Labs & Proprietary Accelerators
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Next-Generation SaaS & AI Platforms
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              In addition to custom engineering, Sangel Softwares incubates proprietary accelerators that compress development timelines for clients by 60%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS_ROADMAP.map((product, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cyan-400 font-mono font-medium">{product.category}</span>
                  <span className="text-slate-400 text-xs">{product.stage}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {product.description}
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {product.highlights.map((h, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 rounded">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LEAD CAPTURE & CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-900/80 rounded-2xl p-8 sm:p-14 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/80 border border-cyan-500/40 rounded-full text-xs font-semibold text-cyan-300">
            <span>Executive Engagement</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight text-balance">
            Start Your Enterprise Transformation Journey Today
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need a dedicated senior engineering pod, legacy core modernization, or enterprise AI adoption, Sangel Softwares provides disciplined governance, top-tier talent, and predictable delivery.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openConsultation()}
              className="px-7 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-sm rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
            >
              Schedule Architecture Briefing
            </button>
            <button
              onClick={openCalculator}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-lg border border-slate-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Open Scope Estimator
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
