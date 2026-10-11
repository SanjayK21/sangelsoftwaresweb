import React from 'react';
import { InsightArticle } from '../types';
import { X, Clock, Calendar, User, ArrowRight, Share2 } from 'lucide-react';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onConsultationRequest: (topic: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onConsultationRequest
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-[#0B111E] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-9 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Meta */}
        <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-wider">
          <span>{article.category}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400 normal-case font-normal">{article.readTime}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400 normal-case font-normal">{article.publishDate}</span>
        </div>

        {/* Title */}
        <h1 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        {/* Author */}
        <div className="mt-4 flex items-center gap-3 pb-5 border-b border-slate-800">
          <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 font-semibold text-xs">
            {article.author.name.charAt(0)}
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-200">
              {article.author.name}
            </div>
            <div className="text-xs text-slate-400">
              {article.author.role} · Sangel Softwares
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-cyan-100/90 leading-relaxed font-medium">
          {article.summary}
        </div>

        {/* Key Takeaways */}
        <div className="mt-6 bg-[#080C14] rounded-xl p-5 border border-slate-800">
          <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
            Core Architectural Insights
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono mt-0.5">0{idx + 1}.</span>
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className="mt-6 space-y-4 text-sm text-slate-300 leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer Action */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Discuss implementation strategy with Sangel Softwares engineering leads.
          </div>
          <button
            onClick={() => {
              onClose();
              onConsultationRequest(article.title);
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
          >
            <span>Request Deep-Dive Architecture Briefing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
