import React, { useState, useEffect } from 'react';
import { SERVICES_DATA, SERVICE_CATEGORIES, ENGAGEMENT_MODELS } from '../data/companyData';
import { ServiceItem } from '../types';
import { DomainInquiryTool } from '../components/DomainInquiryTool';
import { 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Calculator, 
  ShieldCheck, 
  Globe, 
  Palette, 
  TrendingUp, 
  Share2, 
  Server, 
  Bot, 
  Smartphone, 
  FileCheck2, 
  Sparkles,
  FolderKanban,
  Kanban,
  Target,
  Clock,
  Mail,
  MessageSquare
} from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  openConsultation: (serviceName?: string) => void;
  openCalculator: () => void;
  initialCategory?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  openConsultation,
  openCalculator,
  initialCategory
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.verticalId === selectedCategory;
    const matchesQuery = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-20">
      
      {/* 1. Header & Search */}
      <section className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Complete Service Catalogue</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>4 Core Service Segments</span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          Enterprise Technology, AI, Cloud & Digital Growth Solutions
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          From enterprise project management & delivery governance to full-stack web and mobile development, private AI automation, branding, SEO, and cloud infrastructure.
        </p>

        {/* Search & Action Controls */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by practice name, tech (PMO, React, AI, SEO, Cloud, VPS), or outcome..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
          <button
            onClick={() => openConsultation()}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm shadow-cyan-500/20"
          >
            <span>Get a Free Consultation</span>
          </button>
        </div>
      </section>

      {/* 2. Interactive Domain & Infrastructure Tool */}
      <section>
        <DomainInquiryTool 
          onSuccessInquiry={(details) => openConsultation(details)} 
        />
      </section>

      {/* 3. 14 Categories Filter Strip */}
      <section className="space-y-8">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 border-b border-slate-800 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/80 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            All 4 Service Segments
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/80 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span className="font-mono text-[10px] text-cyan-400 font-bold">{cat.code}.</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="p-12 text-center bg-slate-900/50 rounded-2xl border border-slate-800">
            <p className="text-sm text-slate-400">No services match your query "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
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
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-200 group cursor-pointer shadow-md"
                onClick={() => onSelectService(service)}
              >
                <div className="space-y-3">
                  <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                    {service.verticalName}
                  </div>
                  <h2 className="font-display text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h2>
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
                    Inspect Architecture & Deliverables
                  </span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Deep-Dive Section: Branding & Creative Design (Section 3.F) */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Palette className="w-4 h-4" />
            <span>Dedicated Creative Studio</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
            Branding, Corporate Identity & UI/UX Design
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Position your business as a market leader with distinctive brand systems. We build complete brand identities, investor pitch decks, corporate presentations, and intuitive application design systems tailored for startups, SMEs, and established enterprises.
          </p>
        </div>

        {/* Branding Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#080C14] border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400 font-bold">PACKAGE 01</div>
              <h3 className="font-display text-xl font-bold text-white">Startup Brand Launch</h3>
              <p className="text-xs text-slate-400">Essential brand assets to establish market credibility and pitch investors.</p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li>✓ Primary & secondary logo variations</li>
                <li>✓ Brand color palette & typography guide</li>
                <li>✓ Business card, email signature & letterhead</li>
                <li>✓ Investor pitch deck template (15 slides)</li>
                <li>✓ Social media avatar & banner kit</li>
              </ul>
            </div>
            <button
              onClick={() => openConsultation('Startup Brand Launch Package')}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Inquire on Startup Brand
            </button>
          </div>

          <div className="p-6 rounded-xl bg-[#080C14] border border-cyan-800/60 space-y-4 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400 font-bold">PACKAGE 02 — MOST POPULAR</div>
              <h3 className="font-display text-xl font-bold text-white">SME Corporate Identity & Web</h3>
              <p className="text-xs text-slate-400">Comprehensive corporate identity overhaul paired with UI/UX design.</p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li>✓ Complete brand guidelines & positioning book</li>
                <li>✓ Company profile brochure (PDF & print ready)</li>
                <li>✓ Figma UI/UX design system for web & mobile</li>
                <li>✓ Marketing collaterals, flyers & roll-up banners</li>
                <li>✓ Packaging & product branding graphics</li>
              </ul>
            </div>
            <button
              onClick={() => openConsultation('SME Corporate Identity Package')}
              className="w-full py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Inquire on SME Identity
            </button>
          </div>

          <div className="p-6 rounded-xl bg-[#080C14] border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400 font-bold">PACKAGE 03</div>
              <h3 className="font-display text-xl font-bold text-white">Enterprise Brand Refresh</h3>
              <p className="text-xs text-slate-400">Full-scale corporate rebranding, sub-brand architecture & design systems.</p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li>✓ Comprehensive multi-product brand hierarchy</li>
                <li>✓ Design token library for enterprise engineering</li>
                <li>✓ Executive presentation suites & annual reports</li>
                <li>✓ Trade show booth & environmental branding</li>
                <li>✓ Dedicated Senior Art Director oversight</li>
              </ul>
            </div>
            <button
              onClick={() => openConsultation('Enterprise Brand Refresh Package')}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Inquire on Enterprise Brand
            </button>
          </div>
        </div>
      </section>

      {/* 5. Deep-Dive Section: Search Engine Optimization & SMO (Sections 3.G & 3.H) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* SEO Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 sm:p-9 space-y-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <TrendingUp className="w-4 h-4" />
            <span>Ethical Search Optimization</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white tracking-tight">
            Technical & On-Page SEO That Converts
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We never promise fake "guaranteed #1 rankings". Instead, our technical engineers fix website architecture, Core Web Vitals, Schema.org structured data, and keyword mappings to deliver sustainable organic search traffic.
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Technical audits: XML sitemaps, robots.txt, canonical URLs & redirects</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Core Web Vitals speed optimization (LCP &lt; 2.5s, CLS &lt; 0.1)</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Schema.org JSON-LD (Organization, Service, FAQ, Product, Article)</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Google Business Profile & Local Citation Optimization</span>
            </div>
          </div>

          <div className="pt-3">
            <button
              onClick={() => openConsultation('SEO Audit & Retainer')}
              className="w-full sm:w-auto px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Request Free Technical SEO Audit
            </button>
          </div>
        </div>

        {/* SMO & Digital Marketing Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 sm:p-9 space-y-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Share2 className="w-4 h-4" />
            <span>Social & Lead Generation</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white tracking-tight">
            SMO, LinkedIn B2B & Growth Marketing
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Build authority across professional networks. We clearly distinguish organic community management from paid advertising, ensuring transparent reporting and zero hidden markups.
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>LinkedIn Company Page optimization & executive thought leadership</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Monthly social content calendar with custom branded creatives</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>B2B lead generation funnels with dedicated landing page optimization</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Paid Google Ads & Social Ads managed with 100% budget transparency</span>
            </div>
          </div>

          <div className="pt-3">
            <button
              onClick={() => openConsultation('SMO & Digital Marketing Strategy')}
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              Schedule Growth Marketing Review
            </button>
          </div>
        </div>

      </section>

      {/* 5.2 Deep-Dive Section: Email Marketing & WhatsApp Promotional Messaging */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Mail className="w-4 h-4" />
            <span>High-Conversion Outbound & Lifecycle Channels</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Segment 03 Practice</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
            Email Marketing & WhatsApp / Promotional Messaging Automation
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Direct-to-consumer and B2B engagement engines. We combine compliant Meta WhatsApp Business API broadcasts, automated chatbots, and responsive HTML email nurturing funnels to turn cold lists into qualified sales opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Marketing Card */}
          <div className="bg-[#080C14] border border-slate-800 rounded-xl p-6 space-y-4 hover:border-cyan-500/50 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  99%+ Deliverability
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Email Marketing & Automated Drip Sequences
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Automated lifecycle onboarding, re-engagement drip campaigns, custom responsive newsletter design, and dedicated IP warmup with SPF, DKIM, and DMARC DNS authentication.
              </p>
              <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Custom responsive HTML newsletters & mobile templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Automated multi-stage drip sequences & lead scoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Zero-spam blacklisting with authenticated SPF/DKIM records</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => openConsultation('Email Marketing & Automated Drip Campaigns')}
              className="mt-4 px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-cyan-500/20"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Inquire on Email Marketing Funnels</span>
            </button>
          </div>

          {/* WhatsApp / Promotional Message Marketing Card */}
          <div className="bg-[#080C14] border border-slate-800 rounded-xl p-6 space-y-4 hover:border-emerald-500/50 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Meta Official API
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                WhatsApp & Promotional Message Marketing
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Official Meta WhatsApp Business API integration, verified Green Tick advisory, high-CTR interactive message broadcasts, bulk SMS/RCS promo channels, and 24/7 conversational chatbots.
              </p>
              <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Official WhatsApp Business API & Green Tick verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Up to 98% open rate broadcasts with interactive CTA buttons</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>24/7 automated conversational lead capture bots</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => openConsultation('WhatsApp & Promotional Message Marketing')}
              className="mt-4 px-4 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-emerald-500/20"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inquire on WhatsApp Promotional Marketing</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5.5 Deep-Dive Section: Enterprise Project Management & Delivery Governance (Section 3.M) */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <FolderKanban className="w-4 h-4" />
            <span>Practice Spotlight: Segment 01</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Project Management & Delivery Governance</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
            Enterprise Project Management: Bringing Predictability to Complex Software Delivery
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Software engineering without disciplined delivery governance leads to runaway budgets, missed market windows, and accumulated technical debt. Sangel Softwares embeds experienced Delivery Directors, Technical Program Managers (TPMs), and Agile PMO leads who instill transparent sprint cadences, proactive RAID risk mitigation, and predictable release execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Agile PMO */}
          <div className="bg-[#080C14] border border-slate-800 rounded-xl p-6 space-y-4 hover:border-cyan-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center">
              <Kanban className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Enterprise Agile PMO & Sprint Governance
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Full-lifecycle Scrum, Kanban, and SAFe frameworks. We set up structured bi-weekly sprints, story point estimation, automated Jira/Linear burn-up telemetry, and executive steering committee dashboards.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>≥ 94% sprint commitment achievement rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Real-time RAID register with risk scoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Jira / Azure DevOps workflow automation</span>
              </div>
            </div>
            <button
              onClick={() => openConsultation('Enterprise Agile PMO Setup')}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer pt-1"
            >
              <span>Explore PMO Setup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Technical Program Management */}
          <div className="bg-[#080C14] border border-slate-800 rounded-xl p-6 space-y-4 hover:border-cyan-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-800/60 flex items-center justify-center">
              <Layers className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Technical Program Management (TPM)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Bridge deep technical architecture with cross-functional business stakeholders. We orchestrate multi-vendor releases, manage complex API dependencies, and enforce rigorous deployment cutovers.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Multi-vendor engineering pod alignment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Cross-system critical path dependency tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Zero-downtime cutover & rollback runbooks</span>
              </div>
            </div>
            <button
              onClick={() => openConsultation('Technical Program Management (TPM)')}
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer pt-1"
            >
              <span>Engage Lead TPM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Project Recovery & Turnaround */}
          <div className="bg-[#080C14] border border-slate-800 rounded-xl p-6 space-y-4 hover:border-cyan-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/60 flex items-center justify-center">
              <Target className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Project Recovery & Delivery Turnaround
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rapid response for delayed, over-budget, or troubled software builds. We conduct an intensive 10-day diagnostic of codebase health and backlog viability to unblock teams and restore delivery cadence.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>10-day rapid diagnostic codebase & scope audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>MoSCoW re-baselining to protect critical deadlines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Restores shipping momentum within 21 business days</span>
              </div>
            </div>
            <button
              onClick={() => openConsultation('Project Recovery & Turnaround Audit')}
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer pt-1"
            >
              <span>Request Turnaround Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
          <div className="text-xs text-slate-400">
            Need a fractional Delivery Director or Agile PMO for an upcoming multi-quarter initiative?
          </div>
          <button
            onClick={() => openConsultation('Project Management & Delivery Governance')}
            className="px-6 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
          >
            Speak to Principal Delivery Director →
          </button>
        </div>
      </section>

      {/* 6. Commercial Engagement Structures */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Commercial Models
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
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

    </div>
  );
};
