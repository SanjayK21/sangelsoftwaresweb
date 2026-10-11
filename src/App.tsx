/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ProductsPage } from './pages/ProductsPage';
import { CareersPage } from './pages/CareersPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';

import { ServiceModal } from './components/ServiceModal';
import { ProjectCalculatorModal } from './components/ProjectCalculatorModal';
import { ConsultationModal } from './components/ConsultationModal';
import { ArticleModal } from './components/ArticleModal';
import { JobApplicationModal } from './components/JobApplicationModal';

import { ServiceItem, InsightArticle, JobOpening } from './types';
import { Calendar, Calculator } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Modals state
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationServiceContext, setConsultationServiceContext] = useState('');
  const [consultationInitialNotes, setConsultationInitialNotes] = useState('');
  
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleOpenConsultation = (serviceName?: string, notes?: string) => {
    setConsultationServiceContext(serviceName || '');
    setConsultationInitialNotes(notes || '');
    setIsConsultationOpen(true);
  };

  const handleProceedFromCalculator = (briefSummary: string) => {
    setIsConsultationOpen(true);
    setConsultationInitialNotes(briefSummary);
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white relative">
      
      {/* Top Navigation conforming to Top Bar Contract */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openConsultation={() => handleOpenConsultation()}
        openCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onSelectService={(service) => setSelectedService(service)}
            openConsultation={(service) => handleOpenConsultation(service)}
            openCalculator={() => setIsCalculatorOpen(true)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            openConsultation={() => handleOpenConsultation()}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage
            onSelectService={(service) => setSelectedService(service)}
            openConsultation={(service) => handleOpenConsultation(service)}
            openCalculator={() => setIsCalculatorOpen(true)}
          />
        )}

        {activeTab === 'industries' && (
          <IndustriesPage
            openConsultation={(industry) => handleOpenConsultation(industry ? `${industry} Practice` : undefined)}
          />
        )}

        {activeTab === 'products' && (
          <ProductsPage
            openConsultation={(product) => handleOpenConsultation(product)}
          />
        )}

        {activeTab === 'careers' && (
          <CareersPage
            onApplyJob={(job) => setSelectedJob(job)}
          />
        )}

        {activeTab === 'insights' && (
          <InsightsPage
            onReadArticle={(article) => setSelectedArticle(article)}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage
            openConsultation={() => handleOpenConsultation()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        openConsultation={() => handleOpenConsultation()}
      />

      {/* Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookConsultation={(serviceName) => handleOpenConsultation(serviceName)}
      />

      <ProjectCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onProceedToConsultation={handleProceedFromCalculator}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedService={consultationServiceContext}
        initialNotes={consultationInitialNotes}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onConsultationRequest={(topic) => handleOpenConsultation(topic)}
      />

      <JobApplicationModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />

      {/* Floating Action Trigger (Compact and compliant with 15% mobile sticky cap) */}
      <aside aria-label="Quick Actions" className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsCalculatorOpen(true)}
          className="hidden md:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-full shadow-lg transition-colors cursor-pointer"
        >
          <Calculator className="w-3.5 h-3.5 text-cyan-400" />
          <span>Scope Estimator</span>
        </button>
        <button
          onClick={() => handleOpenConsultation()}
          className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-full shadow-lg shadow-cyan-500/25 transition-transform hover:scale-105 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Schedule Briefing</span>
        </button>
      </aside>

    </div>
  );
}
