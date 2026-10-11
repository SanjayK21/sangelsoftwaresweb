import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Shield, Clock, Send, Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { dispatchEmailEnquiry, generateMailtoUrl, COMPANY_OFFICIAL_EMAIL, formatEmailBody } from '../utils/emailEnquiry';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  initialNotes?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  initialNotes = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    role: 'CTO / VP Engineering',
    service: preselectedService || 'Enterprise Project Management & Agile PMO',
    timezone: 'Asia/Kolkata (IST)',
    preferredTime: 'Next Available (Within 24 Hours)',
    notes: initialNotes || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const currentPayload = {
    type: 'consultation' as const,
    subject: `Consultation Booking: ${formData.service}`,
    senderName: formData.fullName,
    senderEmail: formData.workEmail,
    companyName: formData.company,
    role: formData.role,
    serviceOrProduct: formData.service,
    timeline: `${formData.preferredTime} (${formData.timezone})`,
    notes: formData.notes
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.workEmail || !formData.fullName || !formData.company) {
      setErrorMessage('Please fill in your name, work email, and company.');
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
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 bg-cyan-950/80 border border-cyan-500/50 rounded-full flex items-center justify-center mx-auto text-cyan-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              Consultation Enquiry Sent to Email
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-cyan-400 font-semibold">{formData.fullName}</span>. Your consultation request has been routed to our executive engineering inbox at <span className="text-white font-mono font-semibold underline">{COMPANY_OFFICIAL_EMAIL}</span>.
            </p>

            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="text-slate-400">
                <span className="font-medium text-slate-200">Selected Practice:</span> {formData.service}
              </div>
              <div className="text-slate-400">
                <span className="font-medium text-slate-200">Window:</span> {formData.preferredTime} ({formData.timezone})
              </div>
              <div className="text-emerald-400 flex items-center gap-1.5 pt-1">
                <Shield className="w-3.5 h-3.5" />
                <span>NDA & Confidentiality Protocol Protected</span>
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
              <Calendar className="w-4 h-4" />
              <span>CXO Architecture Discovery Session</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Book a Technical Consultation
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Speak directly with our senior technology architects. No sales pressure — focused entirely on system feasibility, legacy de-risking, and delivery roadmaps.
            </p>

            {errorMessage && (
              <div className="mt-4 p-3 bg-red-950/60 border border-red-800 rounded-lg text-xs text-red-200">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                    Your Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="CTO / VP Engineering">CTO / VP Engineering</option>
                    <option value="CIO / Head of IT">CIO / Head of IT</option>
                    <option value="COO / Operations Head">COO / Operations Head</option>
                    <option value="Product Leader / VP Product">Product Leader / VP Product</option>
                    <option value="Founder / CEO">Founder / CEO</option>
                    <option value="Enterprise Architect">Enterprise Architect</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Service Area of Interest
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
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Next Available (Within 24 Hours)">Next Available (Within 24 Hours)</option>
                    <option value="Morning Slot (10:00 AM - 1:00 PM IST)">Morning Slot (10:00 AM - 1:00 PM IST)</option>
                    <option value="Afternoon Slot (2:00 PM - 5:00 PM IST)">Afternoon Slot (2:00 PM - 5:00 PM IST)</option>
                    <option value="Evening Slot / US Overlap (6:00 PM - 9:00 PM IST)">Evening Slot / US Overlap (6:00 PM - 9:00 PM IST)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Brief Technical Objective / Context
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Outline key system bottlenecks, planned migration targets, or talent requirements..."
                  className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Strict mutual NDA honored automatically.</span>
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
                        <span>Confirm Consultation</span>
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
