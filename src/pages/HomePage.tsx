import React, { useState } from 'react';
import { 
  COMPANY_INFO, 
  SERVICES_DATA, 
  SERVICE_CATEGORIES, 
  PROPOSED_PRODUCTS, 
  TARGET_INDUSTRIES, 
  PORTFOLIO_PROJECTS, 
  TRANSFORMATION_LIFECYCLE, 
  INSIGHTS_ARTICLES 
} from '../data/companyData';
import { ASSETS } from '../data/assets';
import { HeroSlider } from '../components/HeroSlider';
import { DomainInquiryTool } from '../components/DomainInquiryTool';
import { ServiceItem, ProductItem } from '../types';
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
  Server, 
  Sun, 
  GraduationCap, 
  Palette, 
  Share2, 
  Sparkles, 
  Bot, 
  Calendar,
  Mail,
  MessageSquare
} from 'lucide-react';

interface HomePageProps {
  onSelectService: (service: ServiceItem) => void;
  openConsultation: (serviceName?: string) => void;
  openCalculator: () => void;
  setActiveTab: (tab: string) => void;
  onRequestDemo: (product?: ProductItem) => void;
  onSelectCategory?: (categoryId: string) => void;
  onSelectProduct?: (productId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectService,
  openConsultation,
  openCalculator,
  setActiveTab,
  onRequestDemo,
  onSelectCategory,
  onSelectProduct
}) => {
  const [activeVertical, setActiveVertical] = useState('all');
  const [activeLifecycleIndex, setActiveLifecycleIndex] = useState(0);
  const [heroPreviewIndex, setHeroPreviewIndex] = useState(0);

  const heroPreviews = [
    { title: "Project & Delivery Governance", sub: "Agile PMO, TPM & Project Recovery", image: ASSETS.corporateBoardroom },
    { title: "Design & Development", sub: "Enterprise Software, Web, Mobile & AI", image: ASSETS.heroTransformation },
    { title: "Branding & Digital Marketing", sub: "Corporate Identity, Technical SEO & SMO", image: ASSETS.webCreative },
    { title: "Domain, Hosting & Infra..", sub: "Cloud VPS, Domains, Email & DevOps", image: ASSETS.cloudDatacenter },
    { title: "Proprietary Software Products", sub: "SolarCare & InstituteOne SaaS", image: ASSETS.saasProducts }
  ];

  const currentHeroPreview = heroPreviews[heroPreviewIndex];

  const filteredServices = activeVertical === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.verticalId === activeVertical);

  const activeLifecycle = TRANSFORMATION_LIFECYCLE[activeLifecycleIndex];

  // Featured products spotlight
  const solarCare = PROPOSED_PRODUCTS.find(p => p.id === 'product-solarcare') || PROPOSED_PRODUCTS[0];
  const instituteOne = PROPOSED_PRODUCTS.find(p => p.id === 'product-instituteone') || PROPOSED_PRODUCTS[1];

  return (
    <div className="space-y-24 md:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
        {/* Tech Grid Backdrop */}
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-glow pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Clean unboxed metadata kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <span>Technology</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Creativity</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Intelligence</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Growth</span>
              </div>

              {/* Main Headline - Minimised, attractive executive typography */}
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug text-balance">
                AI-Powered Software, Digital Solutions & Business Growth
              </h1>

              {/* Company Introduction & Value Proposition */}
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
                  <Calendar className="w-4 h-4" />
                  <span>Get a Free Consultation</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 px-5 py-3 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Explore Our Products</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-3 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  Explore 4 Service Segments →
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>ISO 27001 & Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Private GenAI & Agentic Workflows</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span>India Delivery Centers + Global Scalability</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Asset with Interactive Preview Selector */}
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
                  <div className="text-sm sm:text-base font-bold text-white mt-1">
                    {currentHeroPreview.title}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {currentHeroPreview.sub}
                  </div>
                </div>
              </div>

              {/* Quick photo selector strip */}
              <div className="grid grid-cols-5 gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl">
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

      {/* 2. DYNAMIC ENTERPRISE SHOWCASE CAROUSEL SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <span>Specialized Engineering Environments</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Interactive Operational Tour</span>
          </div>
          <span className="text-xs text-slate-400">
            Interactive Showcase across Core Offerings
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

      {/* 3. CORE SERVICE CATEGORIES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              End-to-End Capabilities
            </div>
            <h2 className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              4 Core Service Segments
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              From enterprise project management & delivery governance to full-stack design & development, brand strategy with digital marketing, and mission-critical cloud infrastructure.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Explore All 4 Service Segments</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                if (onSelectCategory) {
                  onSelectCategory(cat.id);
                } else {
                  setActiveTab('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/60 text-left transition-all hover:bg-slate-800/60 group cursor-pointer flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-cyan-400 font-bold px-2 py-0.5 rounded bg-slate-800/80 inline-block border border-slate-700/60">
                    SEGMENT {cat.code}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {cat.servicesCount} Services
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 mt-3">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {cat.shortDesc}
                </p>

                {/* Segment-specific highlights */}
                {cat.id === 'cat-branding-marketing' && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 flex items-center gap-1 font-semibold">
                      <Mail className="w-2.5 h-2.5" /> Email Marketing
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 flex items-center gap-1 font-semibold">
                      <MessageSquare className="w-2.5 h-2.5" /> WhatsApp Marketing
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      SEO & Ads
                    </span>
                  </div>
                )}
                {cat.id === 'cat-project-mgmt' && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      Agile PMO
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      TPM Programs
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      Project Recovery
                    </span>
                  </div>
                )}
                {cat.id === 'cat-design-dev' && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      Web & Apps
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      Enterprise AI
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      QA Automation
                    </span>
                  </div>
                )}
                {cat.id === 'cat-domain-infra' && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      Domains (.com/.in)
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      Cloud VPS
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      Business Email
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300 group-hover:text-cyan-400">
                <span>Open {cat.name}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SPOTLIGHT (SOLARCARE & INSTITUTEONE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Proprietary Software Products</span>
            </div>
            <h2 className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Featured Software Products: SolarCare & InstituteOne
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              Purpose-built SaaS engines designed to eliminate spreadsheet bottlenecks in renewable solar operations and educational coaching campuses.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>View All 7 Proprietary Products</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Product 1: SolarCare */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-950/60 border border-amber-600/40 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400">CLEANTECH SAAS</span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">{solarCare.name}</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/50">
                  {solarCare.stage}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-cyan-300">
                {solarCare.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {solarCare.description}
              </p>

              <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                {solarCare.keyFeatures.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400">Tested across 180+ MW solar installations</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectProduct) onSelectProduct(solarCare.id);
                    else setActiveTab('products');
                  }}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
                <button
                  type="button"
                  onClick={() => onRequestDemo(solarCare)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Product 2: InstituteOne */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-600/40 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400">EDTECH SAAS</span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">{instituteOne.name}</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/50">
                  {instituteOne.stage}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-cyan-300">
                {instituteOne.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {instituteOne.description}
              </p>

              <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                {instituteOne.keyFeatures.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400">Deployed across coaching & university centers</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectProduct) onSelectProduct(instituteOne.id);
                    else setActiveTab('products');
                  }}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
                <button
                  type="button"
                  onClick={() => onRequestDemo(instituteOne)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. DOMAIN, HOSTING & DIGITAL INFRASTRUCTURE TOOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DomainInquiryTool 
          onSuccessInquiry={(details) => openConsultation(details)} 
        />
      </section>

      {/* 6. BRANDING, EMAIL & WHATSAPP MARKETING SERVICES HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-[#0C1220] to-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Palette className="w-4 h-4" />
                <span>Branding & Digital Marketing Practice</span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Brand Strategy, SEO, Email & WhatsApp Marketing
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Great software requires strong market presence. We design distinctive corporate identities, execute technical SEO, automate high-conversion Email marketing drip funnels, and manage targeted WhatsApp promotional messaging campaigns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Logo design, brand guidelines & pitch decks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Technical SEO, schema markup & Core Web Vitals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Email Marketing: Klaviyo, Sendgrid & newsletter automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp Business API: promotional broadcasts & alerts</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => openConsultation('Branding & SEO Growth Strategy')}
                  className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20"
                >
                  Schedule Branding & SEO Consultation
                </button>
                <button
                  onClick={() => {
                    setActiveTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  View Branding Packages →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
                <img
                  src={ASSETS.corporateBoardroom}
                  alt="Sangel Creative Branding & Growth Studio"
                  className="w-full aspect-[16/10] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-xs">
                  <div className="text-cyan-400 font-mono font-medium">B2B GROWTH COMMITMENT</div>
                  <div className="text-slate-300 mt-1">
                    Zero fake ranking promises. Pure data-backed technical SEO and authoritative brand positioning.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. TARGET INDUSTRIES SERVED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Industry Depth
            </div>
            <h2 className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Specialized Solutions for Every Sector
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              From solar operations contractors and coaching academies to commercial banks, manufacturers, and international buyers.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('industries');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Explore All Industry Blueprints</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TARGET_INDUSTRIES.slice(0, 8).map((ind) => (
            <button
              key={ind.id}
              onClick={() => {
                setActiveTab('industries');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/60 text-left transition-all hover:bg-slate-800/60 group cursor-pointer"
            >
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Practice
              </div>
              <h3 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 mt-1">
                {ind.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                {ind.headline}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* 8. PROVEN CASE STUDIES & PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Verified Project Experience
            </div>
            <h2 className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Transforming Real-World Operations
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              Concrete outcomes achieved for solar contractors, coaching campuses, financial institutions, and manufacturing scaleups.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>View Full Portfolio</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.slice(0, 3).map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors group shadow-lg"
            >
              <div className="space-y-4 p-6 sm:p-7">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    {proj.clientIndustry}
                  </span>
                  <span className="text-slate-400">{proj.duration}</span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {proj.summary}
                </p>

                {/* Metrics */}
                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  {proj.impactMetrics.map((m, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">{m.label}</span>
                      <span className="font-bold text-cyan-400 font-mono">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4">
                <button
                  onClick={() => openConsultation(proj.title)}
                  className="w-full pt-3 flex items-center justify-between text-xs text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  <span>Explore Case Study Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. DELIVERY APPROACH & QUALITY COMMITMENTS (7-STAGE LIFECYCLE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Delivery Governance
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight text-balance">
            The 7-Stage Digital Transformation Lifecycle
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our disciplined, repeatable governance framework minimizes operational disruption while modernizing critical business software.
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

              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
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
                <div>✓ Architecture & Security Audit: Verified</div>
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

      {/* 10. INSIGHTS & LATEST ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Thought Leadership & Guides
            </div>
            <h2 className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Latest Insights from Our Engineering Architects
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              Practical guides on solar cleaning SaaS, coaching institute automation, enterprise AI agents, and ethical B2B SEO.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('insights');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Read All Articles</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INSIGHTS_ARTICLES.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => {
                setActiveTab('insights');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors cursor-pointer group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                  <span>{article.category}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-slate-400 normal-case">{article.readTime}</span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>By {article.author.name}</span>
                <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">Read →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. LEAD GENERATION CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-900/80 rounded-2xl p-8 sm:p-14 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/80 border border-cyan-500/40 rounded-full text-xs font-semibold text-cyan-300">
            <span>Get Started with Sangel Softwares</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl font-bold text-white tracking-tight max-w-2xl mx-auto leading-snug text-balance">
            Ready to Build, Modernize and Scale Your Business?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need domain & cloud hosting, a high-converting website, custom AI agents, Sangel SolarCare/InstituteOne software, or a dedicated senior engineering pod.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openConsultation()}
              className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
            >
              Get a Free Consultation
            </button>
            <button
              onClick={() => onRequestDemo()}
              className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm rounded-lg border border-slate-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Request a Product Demo
            </button>
            <button
              onClick={() => openConsultation()}
              className="px-4 py-3 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Contact Engineering Team →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
