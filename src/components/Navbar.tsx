import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Package, 
  Sun, 
  GraduationCap, 
  Wrench, 
  Briefcase, 
  LayoutDashboard, 
  Bot, 
  FileText,
  Mail,
  MessageSquare,
  Globe,
  Code,
  ShieldCheck
} from 'lucide-react';
import { SERVICE_CATEGORIES, PROPOSED_PRODUCTS } from '../data/companyData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openConsultation: (serviceContext?: string) => void;
  openCalculator: () => void;
  onSelectCategory?: (categoryId: string) => void;
  onSelectProduct?: (productId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  openConsultation,
  openCalculator,
  onSelectCategory,
  onSelectProduct
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const productsDropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services', hasDropdown: 'services' },
    { id: 'products', label: 'Products', hasDropdown: 'products' },
    { id: 'industries', label: 'Industries' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact Us' }
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(target)) {
        setServicesDropdownOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(target)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveTab('services');
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
    setServicesDropdownOpen(false);
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (productId: string) => {
    setActiveTab('products');
    if (onSelectProduct) {
      onSelectProduct(productId);
    }
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getProductIcon = (id: string) => {
    switch (id) {
      case 'product-solarcare': return <Sun className="w-4 h-4 text-amber-400" />;
      case 'product-instituteone': return <GraduationCap className="w-4 h-4 text-cyan-400" />;
      case 'product-fieldops': return <Wrench className="w-4 h-4 text-emerald-400" />;
      case 'product-businessone': return <Briefcase className="w-4 h-4 text-blue-400" />;
      case 'product-onepmo': return <LayoutDashboard className="w-4 h-4 text-purple-400" />;
      case 'product-oneai': return <Bot className="w-4 h-4 text-cyan-400" />;
      case 'product-docai': return <FileText className="w-4 h-4 text-teal-400" />;
      default: return <Package className="w-4 h-4 text-cyan-400" />;
    }
  };

  const getStageBadge = (stage: string) => {
    switch (stage) {
      case 'Available':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50';
      case 'Beta':
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50';
      case 'Pilot':
        return 'bg-amber-950/80 text-amber-300 border-amber-500/50';
      default:
        return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080C14]/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus-visible:outline-none"
        >
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors whitespace-nowrap">
            Sangel Softwares
          </span>
        </button>

        {/* Zone 2: Navigation Links with Services & Products Dropdowns */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;

            // 1. SERVICES DROPDOWN (4 Core Service Segments)
            if (link.hasDropdown === 'services') {
              return (
                <div key={link.id} className="relative" ref={servicesDropdownRef}>
                  <button
                    onClick={() => {
                      setServicesDropdownOpen(!servicesDropdownOpen);
                      setProductsDropdownOpen(false);
                    }}
                    onMouseEnter={() => {
                      setServicesDropdownOpen(true);
                      setProductsDropdownOpen(false);
                    }}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap py-1 cursor-pointer ${
                      isActive || servicesDropdownOpen
                        ? 'text-cyan-400'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
                    )}
                  </button>

                  {/* Services Mega Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[760px] bg-[#0B111E] border border-slate-700/90 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-3.5 z-50"
                    >
                      <div className="col-span-2 pb-3 mb-1 border-b border-slate-800 flex items-center justify-between">
                        <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>4 Core Service Segments</span>
                        </div>
                        <button
                          onClick={() => handleNavClick('services')}
                          className="text-xs text-slate-400 hover:text-cyan-400 font-medium transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>Explore All Services</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* 01. Project Management & Delivery */}
                      <button
                        onClick={() => handleCategoryClick('cat-project-mgmt')}
                        className="text-left p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/90 transition-colors group cursor-pointer border border-slate-800/80 hover:border-cyan-500/50 flex flex-col justify-between"
                      >
                        <div>
                          <div className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold border border-slate-700">01</span>
                            <span className="truncate">Project Management & Delivery</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                            Agile PMO, Scrum delivery governance, TPM roadmaps & rapid turnaround pods.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2.5">
                          {['Agile PMO', 'TPM Delivery', 'Project Turnaround', 'Delivery Pods'].map((tag) => (
                            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </button>

                      {/* 02. Design & Development */}
                      <button
                        onClick={() => handleCategoryClick('cat-design-dev')}
                        className="text-left p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/90 transition-colors group cursor-pointer border border-slate-800/80 hover:border-cyan-500/50 flex flex-col justify-between"
                      >
                        <div>
                          <div className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold border border-slate-700">02</span>
                            <span className="truncate">Design & Development</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                            Corporate websites, bespoke enterprise web/mobile apps, private AI & automated QA testing.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2.5">
                          {['Corporate Websites', 'Enterprise Apps', 'Mobile Apps', 'AI & GenAI', 'ERP', 'QA Testing'].map((tag) => (
                            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </button>

                      {/* 03. Branding & Digital Marketing (Highlighting Email Marketing & WhatsApp Marketing) */}
                      <button
                        onClick={() => handleCategoryClick('cat-branding-marketing')}
                        className="text-left p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/90 transition-colors group cursor-pointer border border-slate-800/80 hover:border-cyan-500/50 flex flex-col justify-between"
                      >
                        <div>
                          <div className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold border border-slate-700">03</span>
                            <span className="truncate">Branding & Digital Marketing</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                            Brand identity, UI/UX, ethical SEO, SMO, Google Ads, Email Marketing & WhatsApp messaging.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2.5">
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 font-semibold flex items-center gap-1">
                            <Mail className="w-2.5 h-2.5" /> Email Marketing
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 font-semibold flex items-center gap-1">
                            <MessageSquare className="w-2.5 h-2.5" /> WhatsApp Marketing
                          </span>
                          {['Brand Strategy', 'Technical SEO', 'Organic SMO', 'Performance Ads'].map((tag) => (
                            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </button>

                      {/* 04. Domain, Hosting & Infra.. */}
                      <button
                        onClick={() => handleCategoryClick('cat-domain-infra')}
                        className="text-left p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/90 transition-colors group cursor-pointer border border-slate-800/80 hover:border-cyan-500/50 flex flex-col justify-between"
                      >
                        <div>
                          <div className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold border border-slate-700">04</span>
                            <span className="truncate">Domain, Hosting & Infra..</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                            Domain registration (.com/.in), NVMe Cloud VPS, M365/Google business email & AWS DevOps.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2.5">
                          {['Domain & DNS', 'Cloud VPS Hosting', 'Business Email', 'DevOps & AWS'].map((tag) => (
                            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </button>

                      <div className="col-span-2 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                        <span className="text-slate-400">
                          Looking for custom delivery pods or high-volume messaging?
                        </span>
                        <button
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            openConsultation('Custom Architecture Consultation');
                          }}
                          className="text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                        >
                          Speak to Senior Delivery Director →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // 2. SEPARATE PRODUCTS DROPDOWN
            if (link.hasDropdown === 'products') {
              return (
                <div key={link.id} className="relative" ref={productsDropdownRef}>
                  <button
                    onClick={() => {
                      setProductsDropdownOpen(!productsDropdownOpen);
                      setServicesDropdownOpen(false);
                    }}
                    onMouseEnter={() => {
                      setProductsDropdownOpen(true);
                      setServicesDropdownOpen(false);
                    }}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap py-1 cursor-pointer ${
                      isActive || productsDropdownOpen
                        ? 'text-cyan-400'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
                    )}
                  </button>

                  {/* Products Mega Dropdown Menu */}
                  {productsDropdownOpen && (
                    <div
                      onMouseLeave={() => setProductsDropdownOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-[#0B111E] border border-slate-700/90 rounded-2xl shadow-2xl p-6 z-50 space-y-4"
                    >
                      <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
                        <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                          <Package className="w-3.5 h-3.5" />
                          <span>Proprietary Software Products</span>
                        </div>
                        <button
                          onClick={() => handleNavClick('products')}
                          className="text-xs text-slate-400 hover:text-cyan-400 font-medium transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>Explore All Products ({PROPOSED_PRODUCTS.length})</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        {PROPOSED_PRODUCTS.map((prod) => (
                          <button
                            key={prod.id}
                            onClick={() => handleProductClick(prod.id)}
                            className="text-left p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/90 transition-colors group cursor-pointer border border-slate-800/80 hover:border-cyan-500/50 flex items-start gap-3"
                          >
                            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                              {getProductIcon(prod.id)}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-1">
                                <span className="font-semibold text-sm text-white group-hover:text-cyan-300 truncate">
                                  {prod.name}
                                </span>
                                <span className={`text-[10px] px-1.5 py-0.2 rounded-full border ${getStageBadge(prod.stage)} shrink-0`}>
                                  {prod.stage}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                                {prod.tagline}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                        <span className="text-slate-400">
                          Need a private sandbox demo or custom module evaluation?
                        </span>
                        <button
                          onClick={() => {
                            setProductsDropdownOpen(false);
                            handleNavClick('products');
                          }}
                          className="text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                        >
                          Request Live Sandbox Demo →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // Standard Navigation Links
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors whitespace-nowrap py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => openConsultation()}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm shadow-cyan-500/20 transition-all hover:shadow-cyan-500/30 whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Get a Free Consultation</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B111E] border-b border-slate-800 px-5 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 text-left text-sm font-medium rounded-md transition-colors ${
                  activeTab === link.id
                    ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/50'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* 4 Core Service Segments in Mobile */}
          <div className="pt-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>4 Core Service Segments:</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="text-left text-xs text-slate-300 hover:text-cyan-400 py-2.5 px-3 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/60 flex items-center justify-between"
                >
                  <span className="font-medium text-white">{cat.name}</span>
                  <span className="text-[10px] text-cyan-400 font-mono font-bold">({cat.code})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Separate Products in Mobile */}
          <div className="pt-2 border-t border-slate-800">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-cyan-400" />
              <span>Proprietary Software Products:</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {PROPOSED_PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => handleProductClick(prod.id)}
                  className="text-left text-xs text-slate-300 hover:text-cyan-400 py-2 px-3 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/60 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    {getProductIcon(prod.id)}
                    <span className="font-medium text-white">{prod.name}</span>
                  </div>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full border ${getStageBadge(prod.stage)}`}>
                    {prod.stage}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm shadow-cyan-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Get a Free Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
