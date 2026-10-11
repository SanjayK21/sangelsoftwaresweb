import React, { useState } from 'react';
import { JobOpening } from '../types';
import { X, CheckCircle2, Upload, Briefcase, MapPin, Send } from 'lucide-react';

interface JobApplicationModalProps {
  job: JobOpening | null;
  onClose: () => void;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ job, onClose }) => {
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    experienceYears: '4–6 Years',
    coverNote: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#0B111E] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          aria-label="Close application modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-cyan-950/80 border border-cyan-500/50 rounded-full flex items-center justify-center mx-auto text-cyan-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              Application Received
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-cyan-400 font-semibold">{applicant.name}</span>. Our engineering recruitment panel has received your profile for <span className="text-white font-medium">{job.title}</span>. We will review your GitHub/LinkedIn and reach out within 3 business days.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{job.department}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400 normal-case flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {job.location}
              </span>
            </div>

            <h2 className="font-display text-2xl font-bold text-white tracking-tight">
              Apply for {job.title}
            </h2>
            <p className="mt-1 text-xs text-slate-300">
              Join Sangel Softwares' engineering team. We prioritize technical craftsmanship, high code standards, and domain depth.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicant.name}
                    onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicant.email}
                    onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    LinkedIn Profile *
                  </label>
                  <input
                    type="url"
                    required
                    value={applicant.linkedin}
                    onChange={(e) => setApplicant({ ...applicant, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    GitHub / Portfolio Link
                  </label>
                  <input
                    type="url"
                    value={applicant.github}
                    onChange={(e) => setApplicant({ ...applicant, github: e.target.value })}
                    placeholder="https://github.com/username"
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Years of Relevant Experience
                </label>
                <select
                  value={applicant.experienceYears}
                  onChange={(e) => setApplicant({ ...applicant, experienceYears: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="2–4 Years">2–4 Years</option>
                  <option value="4–6 Years">4–6 Years</option>
                  <option value="7–10 Years">7–10 Years</option>
                  <option value="10+ Years">10+ Years (Architect / Lead)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Brief Technical Highlights / Why Sangel Softwares
                </label>
                <textarea
                  rows={3}
                  value={applicant.coverNote}
                  onChange={(e) => setApplicant({ ...applicant, coverNote: e.target.value })}
                  placeholder="Share details on your key architectural projects, systems you have built, or open-source work..."
                  className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span>Submitting Profile...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
