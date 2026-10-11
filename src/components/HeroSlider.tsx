import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES, SlideItem } from '../data/assets';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface HeroSliderProps {
  onSlideAction: (target: string) => void;
  openConsultation: (topic?: string) => void;
  openCalculator: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onSlideAction,
  openConsultation,
  openCalculator
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const currentSlide: SlideItem = HERO_SLIDES[currentSlideIndex];

  // Auto-rotation timer
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = window.setInterval(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlideIndex]);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleActionClick = (slide: SlideItem) => {
    if (slide.actionTarget === 'consultation') {
      openConsultation(slide.category);
    } else {
      onSlideAction(slide.actionTarget);
    }
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0B111E] shadow-2xl group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Enterprise Practice Showcase Carousel"
    >
      {/* Background Visual Carousel Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/8.5] w-full overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.headline}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />

              {/* Measured High-Contrast Scrim for WCAG AA compliance */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/75 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/90 via-[#080C14]/40 to-transparent" />
            </div>
          );
        })}

        {/* Slide Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 lg:p-12 max-w-4xl">
          
          {/* Category kicker */}
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-cyan-400 mb-1.5">
            <span className="px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-800/60 backdrop-blur-sm">{currentSlide.category}</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-300 font-mono text-[11px] normal-case">
              0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>

          {/* Slide Headline - minimised, attractive, refined typography */}
          <h2 className="font-display text-lg sm:text-2xl lg:text-2xl font-bold text-white tracking-normal leading-snug max-w-2xl text-balance drop-shadow-sm">
            {currentSlide.headline}
          </h2>

          {/* Slide Subtext */}
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300/90 max-w-xl leading-relaxed">
            {currentSlide.subtext}
          </p>

          {/* Quantified Metric Badge & Action Controls */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {currentSlide.metricValue && (
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-xs backdrop-blur-sm">
                <span className="text-slate-400 font-normal">{currentSlide.metricLabel}:</span>
                <span className="text-cyan-300 font-semibold font-mono">{currentSlide.metricValue}</span>
              </div>
            )}

            <button
              onClick={() => handleActionClick(currentSlide)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
            >
              <span>{currentSlide.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Carousel Direction Navigation Buttons */}
        <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
          
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors cursor-pointer"
            aria-label={isPaused ? 'Resume auto-slideshow' : 'Pause auto-slideshow'}
          >
            {isPaused ? <Play className="w-4 h-4 text-cyan-400" /> : <Pause className="w-4 h-4 text-slate-300" />}
          </button>

          <button
            onClick={handlePrev}
            className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Progress & Slide Thumbnails Strip */}
      <div className="bg-[#070B13] border-t border-slate-800/80 p-2 sm:p-3">
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-1.5">
          {HERO_SLIDES.map((slide, idx) => {
            const isSelected = idx === currentSlideIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`text-left p-1.5 sm:p-2 rounded-lg transition-all border cursor-pointer relative group/thumb overflow-hidden ${
                  isSelected
                    ? 'bg-cyan-950/90 border-cyan-400 shadow-md ring-1 ring-cyan-400/30'
                    : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 opacity-65 hover:opacity-100 hover:bg-slate-850'
                }`}
                title={slide.headline}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[9px] font-medium ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`}>
                    0{idx + 1}
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </div>
                <div className={`text-[10px] sm:text-[11px] font-medium truncate mt-0.5 ${isSelected ? 'text-white font-semibold' : 'text-slate-300'}`}>
                  {slide.category.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
