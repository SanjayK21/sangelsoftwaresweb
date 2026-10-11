import React, { useState } from 'react';
import { INSIGHTS_ARTICLES } from '../data/companyData';
import { InsightArticle } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, Search, CheckCircle2, Send } from 'lucide-react';

interface InsightsPageProps {
  onReadArticle: (article: InsightArticle) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onReadArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const categories = ['all', 'BFSI Technology', 'AI & Innovation', 'Strategy & Governance', 'Cloud & DevOps'];

  const filteredArticles = INSIGHTS_ARTICLES.filter((article) => {
    const matchesCat = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesQuery = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscriberEmail.includes('@')) {
      setEmailSubscribed(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <section className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Enterprise Insights & Research</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Thought Leadership</span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          Architectural Perspectives on AI, Cloud & Enterprise Modernization
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Deep-dive analyses authored by Sangel Softwares' Principal Architects on enterprise system engineering, agentic AI workflows, and digital infrastructure governance.
        </p>

        {/* Filter & Search */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search architecture insights and whitepapers..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/80 shadow-sm'
                    : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                {cat === 'all' ? 'All Insights' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between space-y-5 hover:border-slate-700 transition-colors cursor-pointer group"
            onClick={() => onReadArticle(article)}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                <span>{article.category}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-400 normal-case font-normal">{article.readTime}</span>
              </div>

              <h2 className="font-display text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                {article.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {article.summary}
              </p>

              <div className="pt-2 border-t border-slate-800/80 space-y-1 text-xs text-slate-400">
                <div className="font-medium text-slate-300">Key takeaway preview:</div>
                <div className="text-slate-300 line-clamp-2">
                  • {article.keyTakeaways[0]}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <div className="text-slate-400">
                By <span className="text-slate-200 font-medium">{article.author.name}</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Executive Briefing Subscription */}
      <section className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-cyan-900/60">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Subscribe to Sangel Architecture Briefings
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Monthly technical digests curated for CIOs, CTOs, and Engineering Leaders. No sales hype — pure architectural teardowns and regulatory updates.
          </p>

          {emailSubscribed ? (
            <div className="p-4 bg-cyan-950/80 border border-cyan-500 rounded-xl text-xs text-cyan-300 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>You have been subscribed to Sangel Technical Briefings.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 pt-2">
              <input
                type="email"
                required
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                placeholder="Enter corporate email address..."
                className="w-full sm:flex-1 px-4 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-sm shadow-cyan-500/20"
              >
                Join Technical Network
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
