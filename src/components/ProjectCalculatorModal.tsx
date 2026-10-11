import React, { useState } from 'react';
import { X, Calculator, Check, ArrowRight, ShieldCheck, Cpu, Clock, Users } from 'lucide-react';

interface ProjectCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToConsultation: (details: string) => void;
}

export const ProjectCalculatorModal: React.FC<ProjectCalculatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToConsultation
}) => {
  const [projectGoal, setProjectGoal] = useState('ai-genai');
  const [industry, setIndustry] = useState('bfsi');
  const [scopeSize, setScopeSize] = useState('medium');
  const [timelineSpeed, setTimelineSpeed] = useState('standard');
  const [submittedBrief, setSubmittedBrief] = useState(false);

  if (!isOpen) return null;

  const goalMap: Record<string, { title: string; sprintEstimate: string; podRec: string }> = {
    'custom-software': {
      title: 'Bespoke Enterprise Software Platform',
      sprintEstimate: '6 - 12 Sprints (12 - 24 Weeks)',
      podRec: 'Dedicated Pod: 1 Lead Architect, 3 Senior Full-Stack Engineers, 1 QA Automation Lead'
    },
    'ai-genai': {
      title: 'Enterprise AI & Agentic Workflow System',
      sprintEstimate: '4 - 8 Sprints (8 - 16 Weeks)',
      podRec: 'Specialized AI Squad: 1 Principal AI/ML Engineer, 2 Python/FastAPI Backend Engineers, 1 Data Pipeline Engineer'
    },
    'legacy-modernization': {
      title: 'Legacy Monolith to Cloud Microservices Modernization',
      sprintEstimate: '8 - 16 Sprints (16 - 32 Weeks)',
      podRec: 'Modernization Pod: 1 Cloud Enterprise Architect, 4 Senior Backend/Microservices Engineers, 1 DevOps Engineer'
    },
    'erp-implementation': {
      title: 'Enterprise ERP & Operations Integration',
      sprintEstimate: '6 - 14 Sprints (12 - 28 Weeks)',
      podRec: 'ERP Squad: 1 ERP Domain Consultant, 3 Python/PostgreSQL Developers, 1 QA Engineer'
    },
    'resource-augmentation': {
      title: 'Rapid Engineering Talent Augmentation',
      sprintEstimate: 'Immediate Deployment (< 5 Business Days)',
      podRec: 'Pre-vetted Senior Engineers matching your specific stack (Go, React, Java, Python)'
    },
    'managed-services': {
      title: '24/7 Application Maintenance & Cloud SLAs',
      sprintEstimate: 'Continuous SLA Coverage (15-min response)',
      podRec: 'Managed Support Roster: 24/7 Monitoring, Tier 2/3 On-call Engineers, Monthly FinOps Tuning'
    }
  };

  const selectedGoalData = goalMap[projectGoal] || goalMap['custom-software'];

  const handleExportOrBook = () => {
    const summary = `Project Scope: ${selectedGoalData.title} | Sector: ${industry.toUpperCase()} | Sizing: ${scopeSize} | Timeline: ${timelineSpeed}`;
    onClose();
    onProceedToConsultation(summary);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-[#0B111E] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          aria-label="Close Scope Calculator"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
          <Calculator className="w-4 h-4" />
          <span>Interactive CXO Planning Tool</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Project Scope & Engagement Estimator
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-300">
          Configure your strategic requirements to generate a recommended engineering team structure, delivery timeframe, and governance model.
        </p>

        {/* Configuration Selectors */}
        <div className="mt-6 space-y-5">
          
          {/* Step 1: Project Objective */}
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-2">
              1. What is your primary strategic initiative?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'ai-genai', label: 'AI & Generative AI' },
                { id: 'custom-software', label: 'Custom Enterprise App' },
                { id: 'legacy-modernization', label: 'Legacy Modernization' },
                { id: 'erp-implementation', label: 'ERP & Operations' },
                { id: 'resource-augmentation', label: 'IT Talent Augmentation' },
                { id: 'managed-services', label: '24/7 Managed Services' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setProjectGoal(opt.id)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors border cursor-pointer ${
                    projectGoal === opt.id
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200 shadow-sm'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Target Industry */}
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-2">
              2. Industry & Regulatory Domain
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[
                { id: 'bfsi', label: 'BFSI / FinTech' },
                { id: 'manufacturing', label: 'Manufacturing' },
                { id: 'healthcare', label: 'Healthcare' },
                { id: 'retail', label: 'Retail & Commerce' },
                { id: 'logistics', label: 'Logistics' },
                { id: 'enterprise', label: 'SaaS / Other' }
              ].map((ind) => (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setIndustry(ind.id)}
                  className={`px-2.5 py-1.5 text-xs font-medium rounded-lg text-center transition-colors border cursor-pointer ${
                    industry === ind.id
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {ind.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Scope & Pod Size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-2">
                3. Scope Magnitude & Sizing
              </label>
              <div className="flex gap-2">
                {[
                  { id: 'lean', label: 'Lean Pod (2–3 Eng)' },
                  { id: 'medium', label: 'Core Pod (4–6 Eng)' },
                  { id: 'large', label: 'Scale Pod (8+ Eng)' }
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setScopeSize(s.id)}
                    className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-lg text-center border cursor-pointer ${
                      scopeSize === s.id
                        ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-2">
                4. Deployment Urgency
              </label>
              <div className="flex gap-2">
                {[
                  { id: 'standard', label: 'Standard Delivery' },
                  { id: 'accelerated', label: 'Accelerated Sprint' }
                ].map((u) => (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => setTimelineSpeed(u.id)}
                    className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-lg text-center border cursor-pointer ${
                      timelineSpeed === u.id
                        ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {u.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Recommendation Panel */}
        <div className="mt-6 p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/30 rounded-xl border border-cyan-900/50">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Recommended Architecture & Delivery Model
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Target Timeline:</span>
              </div>
              <div className="text-white font-semibold mt-0.5">
                {selectedGoalData.sprintEstimate}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Governance & Sovereignty:</span>
              </div>
              <div className="text-white font-semibold mt-0.5">
                100% Code IP Ownership + ISO/SOC2 Compliance
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>Suggested Pod Composition:</span>
              </div>
              <div className="text-cyan-100 font-medium mt-0.5">
                {selectedGoalData.podRec}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="text-emerald-400 font-medium">
              Estimated 45%–55% Cost Efficiency vs. Western / Metro in-house hiring
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleExportOrBook}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
          >
            <span>Proceed to Formal Architecture Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
