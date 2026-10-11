import React, { useState } from 'react';
import { OPEN_ROLES } from '../data/companyData';
import { JobOpening } from '../types';
import { Briefcase, MapPin, Clock, ArrowRight, ShieldCheck, Cpu, Code2, Users } from 'lucide-react';

interface CareersPageProps {
  onApplyJob: (job: JobOpening) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onApplyJob }) => {
  const [selectedDept, setSelectedDept] = useState('all');

  const departments = [
    { id: 'all', name: 'All Open Positions' },
    { id: 'AI & Innovation Labs', name: 'AI & Innovation' },
    { id: 'BFSI & FinTech Engineering', name: 'BFSI & FinTech' },
    { id: 'Core Software Engineering', name: 'Core Software' },
    { id: 'Enterprise Cloud Modernization', name: 'Cloud & DevOps' },
    { id: 'Quality Engineering', name: 'Quality Engineering' }
  ];

  const filteredRoles = selectedDept === 'all'
    ? OPEN_ROLES
    : OPEN_ROLES.filter(r => r.department === selectedDept);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* 1. Header */}
      <section className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Engineering Culture & Careers</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>We're Hiring</span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          Build Mission-Critical Software and Shape Enterprise AI
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          At Sangel Softwares, we build technology that powers financial transactions, factory floors, and healthcare networks. We look for software craftsmen and systems thinkers who care deeply about code elegance, low-latency performance, and continuous learning.
        </p>
      </section>

      {/* 2. Values & Culture Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2">
          <Code2 className="w-5 h-5 text-cyan-400" />
          <h3 className="font-display text-base font-bold text-white">
            Engineering Craftsmanship
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            We value clean architecture, automated test suites, and readable code over hasty shortcuts and technical debt.
          </p>
        </div>

        <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2">
          <Cpu className="w-5 h-5 text-cyan-400" />
          <h3 className="font-display text-base font-bold text-white">
            AI-First Upskilling
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Every engineer receives access to compute budgets, private LLMs, and formal certification programs in cloud and machine learning.
          </p>
        </div>

        <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2">
          <Users className="w-5 h-5 text-cyan-400" />
          <h3 className="font-display text-base font-bold text-white">
            Autonomous Ownership
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            No bureaucratic layers. Senior engineers interface directly with technical stakeholders and make architectural decisions.
          </p>
        </div>

        <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2">
          <ShieldCheck className="w-5 h-5 text-cyan-400" />
          <h3 className="font-display text-base font-bold text-white">
            Competitive Total Rewards
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Top-tier market compensation, comprehensive family health coverage, hybrid flexibility, and performance bonuses.
          </p>
        </div>
      </section>

      {/* 3. Open Roles Filter & Listing */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Open Engineering Positions
          </h2>
          <span className="text-xs text-slate-400">
            {filteredRoles.length} positions available
          </span>
        </div>

        {/* Department Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 border-b border-slate-800 scrollbar-none">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedDept === dept.id
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/80 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Roles List */}
        <div className="space-y-4">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="text-cyan-400 font-semibold">{role.department}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {role.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{role.experience}</span>
                  <span aria-hidden="true">·</span>
                  <span>{role.type}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-white">
                  {role.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {role.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {role.requirements.map((req, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-xs bg-slate-800 text-slate-300 rounded">
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex items-center">
                <button
                  onClick={() => onApplyJob(role)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
                >
                  <span>Apply for Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Spontaneous Application */}
      <section className="p-8 rounded-2xl bg-[#080C14] border border-slate-800 text-center space-y-3">
        <h3 className="font-display text-xl font-bold text-white">
          Don't see an exact match for your specialty?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
          We are always eager to meet outstanding distributed systems engineers, Kafka specialists, and AI researchers. Send your resume to our talent team.
        </p>
        <div className="pt-2">
          <a
            href="mailto:careers@sangelsoftwares.com"
            className="inline-block px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg border border-slate-700 transition-colors"
          >
            Email careers@sangelsoftwares.com
          </a>
        </div>
      </section>

    </div>
  );
};
