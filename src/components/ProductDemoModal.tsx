import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Calendar, Send, Sparkles, Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { PROPOSED_PRODUCTS } from '../data/companyData';
import { ProductItem } from '../types';
import { dispatchEmailEnquiry, generateMailtoUrl, COMPANY_OFFICIAL_EMAIL, formatEmailBody } from '../utils/emailEnquiry';

interface ProductDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: ProductItem | null;
}

export const ProductDemoModal: React.FC<ProductDemoModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    role: 'Founder / CEO',
    productId: preselectedProduct ? preselectedProduct.id : 'product-solarcare',
    teamSize: '10–50 Employees',
    useCaseNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const currentProduct = PROPOSED_PRODUCTS.find(p => p.id === formData.productId) || PROPOSED_PRODUCTS[0];

  const currentPayload = {
    type: 'product_demo' as const,
    subject: `Product Demo Request: ${currentProduct.name}`,
    senderName: formData.fullName,
    senderEmail: formData.workEmail,
    companyName: formData.company,
    role: formData.role,
    serviceOrProduct: `${currentProduct.name} (${currentProduct.stage})`,
    timeline: 'Live Sandbox & Demo Walkthrough',
    notes: formData.useCaseNotes,
    extraDetails: {
      'Team Size': formData.teamSize,
      'Product Category': currentProduct.category
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.workEmail || !formData.company) {
      setErrorMessage('Please fill in your name, corporate email, and company.');
      return;
    }
    if (!formData.workEmail.includes('@') || !formData.workEmail.includes('.')) {
      setErrorMessage('Please provide a valid corporate email address.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Dispatch email enquiry
    dispatchEmailEnquiry(currentPayload);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyDetails = () => {
    const text = formatEmailBody(currentPayload);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#0B111E] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          aria-label="Close demo modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 bg-cyan-950/80 border border-cyan-500/50 rounded-full flex items-center justify-center mx-auto text-cyan-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              Demo Enquiry Dispatched to Email
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-cyan-400 font-semibold">{formData.fullName}</span>. Your demo booking has been routed to our product specialists at <span className="text-white font-mono font-semibold underline">{COMPANY_OFFICIAL_EMAIL}</span>.
            </p>

            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-1.5">
              <div className="text-slate-400">
                <span className="font-medium text-slate-200">Selected Solution:</span> {currentProduct.name} ({currentProduct.stage})
              </div>
              <div className="text-slate-400">
                <span className="font-medium text-slate-200">Organization:</span> {formData.company} ({formData.teamSize})
              </div>
              <div className="text-emerald-400 flex items-center gap-1.5 pt-1">
                <Shield className="w-3.5 h-3.5" />
                <span>Sandbox Demo Environment Provisioned</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={generateMailtoUrl(currentPayload)}
                className="px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm shadow-cyan-500/20"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Mail Client</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                type="button"
                onClick={handleCopyDetails}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs rounded-lg border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                <span>{copied ? 'Copied Details!' : 'Copy Email Summary'}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2.5 bg-transparent hover:bg-slate-800 text-slate-400 hover:text-white font-medium text-xs rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Proprietary Software Demonstration</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Request a Live Demo & Sandbox
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Experience Sangel Softwares' SaaS products built for solar operations, coaching institutes, field maintenance, and enterprise AI.
            </p>

            {errorMessage && (
              <div className="mt-4 p-3 bg-red-950/60 border border-red-800 rounded-lg text-xs text-red-200">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              
              {/* Product Selection Dropdown */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Select Product of Interest *
                </label>
                <select
                  value={formData.productId}
                  onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {PROPOSED_PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.name} — {prod.tagline} ({prod.stage})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="name@enterprise.com"
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Company / Institute Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Surya Solar O&M / Apex Academy"
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Executive Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Founder / CEO">Founder / CEO / Director</option>
                    <option value="COO / Head of Operations">COO / Head of Operations</option>
                    <option value="CTO / Head of IT">CTO / Head of IT</option>
                    <option value="Institute Principal / Admin">Institute Principal / Admin</option>
                    <option value="Project / Solar O&M Manager">Project / Solar O&M Manager</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Specific Requirements / Current Operational Challenges
                </label>
                <textarea
                  rows={3}
                  value={formData.useCaseNotes}
                  onChange={(e) => setFormData({ ...formData, useCaseNotes: e.target.value })}
                  placeholder="Tell us about your team size, number of sites/students, or current software you are looking to replace..."
                  className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Free 14-day sandbox access included.</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/2 sm:w-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-1/2 sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span>Scheduling...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Confirm Demo Request</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
