import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Mail, Phone, Globe, Shield, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openConsultation: () => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openConsultation, onSelectCategory }) => {
  const handleCategoryNav = (categoryId: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    } else {
      setActiveTab('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05080F] border-t border-slate-800 text-slate-400 text-sm">
      {/* Top Banner / Consultation Callout */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-900/60 via-cyan-950/20 to-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              Ready to engineer your next digital leap?
            </h3>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed">
              Connect with Sangel Softwares' senior engineering leadership to evaluate your legacy architecture, explore AI enablement, or scale dedicated pods.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={openConsultation}
              className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm shadow-cyan-500/20"
            >
              Schedule Architecture Briefing
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg border border-slate-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Direct Inquiry
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-display text-xl font-bold text-white tracking-tight">
              Sangel Softwares
            </span>
            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              Sangel Softwares Pvt. Ltd. is an enterprise IT services and software product company specializing in Project Management & Delivery Governance, Full-Stack Design & Development, Branding & Digital Marketing, and Domain, Hosting & Digital Infrastructure.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>contact@sangelsoftwares.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>www.sangelsoftwares.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>ISO 27001 & Enterprise Security Ready Architecture</span>
              </div>
            </div>
          </div>

          {/* Column 2: 4 Core Service Segments */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              4 Core Service Segments
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleCategoryNav('cat-project-mgmt')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  01. Project Management & Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('cat-design-dev')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  02. Design & Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('cat-branding-marketing')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  03. Branding & Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('cat-domain-infra')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  04. Domain, Hosting & Infra..
                </button>
              </li>
              <li className="pt-1.5 border-t border-slate-800/80">
                <button
                  onClick={() => handleCategoryNav('cat-branding-marketing')}
                  className="hover:text-cyan-400 text-cyan-300/90 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>→ Email Marketing Sequences</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('cat-branding-marketing')}
                  className="hover:text-emerald-400 text-emerald-300/90 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>→ WhatsApp Promotional Marketing</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Industry Verticals
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { setActiveTab('industries'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  BFSI & FinTech
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('industries'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Manufacturing & Industry 4.0
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('industries'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Healthcare & Life Sciences
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('industries'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Retail & Omnichannel Commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('industries'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Logistics & Cold-Chain Transit
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('industries'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Higher Education & EdTech
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Corporate & Hubs */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Delivery Network
            </div>
            <div className="text-xs space-y-1.5 text-slate-400">
              <p className="text-slate-200 font-medium">India Engineering Centers:</p>
              <p>Bengaluru · Mumbai · Pune</p>
              <p>Delhi NCR · Hyderabad</p>
              <p>Ahmedabad · Jaipur</p>
              <div className="pt-2">
                <p className="text-slate-200 font-medium">Global Representation:</p>
                <p>USA · UK · Middle East · Singapore · Australia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Sangel Softwares Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Enterprise Delivery</span>
            <span aria-hidden="true">·</span>
            <span>AI-Augmented Engineering</span>
            <span aria-hidden="true">·</span>
            <span>Zero-Defect Governance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
