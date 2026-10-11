import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { Mail, Phone, MapPin, Globe, Shield, Send, CheckCircle2, Calendar, Clock } from 'lucide-react';

interface ContactPageProps {
  openConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ openConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'CTO / Engineering Leader',
    service: 'AI & Generative AI Solutions',
    timeline: 'Within 30 Days',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* 1. Header */}
      <section className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Executive Engagement & Inquiries</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Contact Sangel Softwares</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Initiate Your Enterprise Transformation Dialogue
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Connect directly with our Principal Architects and Delivery Directors. Whether you have an immediate RFQ/RFP, require pod augmentation, or wish to explore an architectural audit.
        </p>
      </section>

      {/* 2. Main Grid: Form + Consultation Callout & Regional Hubs */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-9 shadow-xl">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-cyan-950/80 border border-cyan-500/50 rounded-full flex items-center justify-center mx-auto text-cyan-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                Inquiry Successfully Logged
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. A senior technology partner from Sangel Softwares has received your brief and will respond within 4 business hours with an NDA and initial architectural review.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-2xl font-bold text-white tracking-tight">
                  Direct Architecture Inquiry
                </h2>
                <span className="text-xs text-slate-400">Guaranteed response &lt; 4 hours</span>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 bg-red-950/60 border border-red-800 rounded-lg text-xs text-red-200">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sanjay Verma"
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@enterprise.com"
                      className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Global Financial"
                      className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Executive Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="CTO / Engineering Leader">CTO / Engineering Leader</option>
                      <option value="CIO / Head of IT">CIO / Head of IT</option>
                      <option value="COO / Operations VP">COO / Operations VP</option>
                      <option value="Founder / CEO">Founder / CEO</option>
                      <option value="Enterprise Architect">Enterprise Architect</option>
                      <option value="Procurement / Vendor Manager">Procurement / Vendor Manager</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Primary Service Focus
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Deployment Horizon
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Immediate (< 15 Days)">Immediate (&lt; 15 Days)</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="Next Quarter (60–90 Days)">Next Quarter (60–90 Days)</option>
                      <option value="Strategic Exploration">Strategic Exploration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    System Architecture / Engagement Overview
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current tech stack, pain points, or target milestone requirements..."
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Shield className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Non-Disclosure Protocol active.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Dispatch Architecture Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Sidebar Info & Discovery Call Booking */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Schedule Call Card */}
          <div className="bg-gradient-to-br from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-900/60 rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>Prefer Direct Calendar Booking?</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Schedule a 30-Minute Video Discovery Call
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Pick a convenient time slot with our Solutions Architecture lead to review feasibility and architectural scope.
            </p>
            <button
              onClick={openConsultation}
              className="w-full py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20"
            >
              Open Interactive Calendar
            </button>
          </div>

          {/* Regional Hubs & Contact Details */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5">
            <h3 className="font-display text-lg font-bold text-white">
              Corporate & Delivery Network
            </h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">India Engineering Centers</div>
                  <div className="text-slate-400 mt-0.5">
                    Bengaluru (AI & Cloud R&D) · Mumbai (BFSI Executive Hub) · Pune · Delhi NCR · Hyderabad · Ahmedabad · Jaipur
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Global Client Representation</div>
                  <div className="text-slate-400 mt-0.5">
                    United States · United Kingdom · Middle East · Singapore · Australia
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Direct Email Routing</div>
                  <div className="text-slate-400 mt-0.5">
                    contact@sangelsoftwares.com · solutions@sangelsoftwares.com
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};
