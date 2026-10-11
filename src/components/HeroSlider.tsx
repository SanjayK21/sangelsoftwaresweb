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
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <span>{currentSlide.category}</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-300 font-mono normal-case">
              0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>

          {/* Slide Headline */}
          <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {currentSlide.headline}
          </h2>

          {/* Slide Subtext */}
          <p className="mt-2 text-xs sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {currentSlide.subtext}
          </p>

          {/* Quantified Metric Badge & Action Controls */}
          <div className="mt-5 flex flex-wrap items-center gap-4">
            {currentSlide.metricValue && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-xs">
                <span className="text-slate-400 font-medium">{currentSlide.metricLabel}:</span>
                <span className="text-cyan-400 font-bold font-mono">{currentSlide.metricValue}</span>
              </div>
            )}

            <button
              onClick={() => handleActionClick(currentSlide)}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap"
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
      <div className="bg-[#070B13] border-t border-slate-800/80 p-3 sm:p-4 grid grid-cols-5 gap-2">
        {HERO_SLIDES.map((slide, idx) => {
          const isSelected = idx === currentSlideIndex;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`text-left p-2 rounded-lg transition-all border cursor-pointer ${
                isSelected
                  ? 'bg-cyan-950/80 border-cyan-500 shadow-sm'
                  : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="font-mono text-[10px] text-cyan-400 font-bold">
                0{idx + 1}.
              </div>
              <div className="font-semibold text-white text-xs truncate mt-0.5">
                {slide.category.split(' ')[0]}
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
