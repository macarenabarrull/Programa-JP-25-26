import React, { ReactNode, useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Maximize, Minimize, Keyboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideLayoutProps {
  children: ReactNode;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  title?: string;
  subtitle?: string;
  direction?: number;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  children, 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev,
  title,
  subtitle,
  direction = 0
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(true);
  
  // Swipe Logic
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
        onNext();
    }
    if (isRightSwipe && currentSlide > 0) {
        onPrev();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    // Hide shortcuts toast after 4 seconds
    const timer = setTimeout(() => setShowShortcuts(false), 4000);

    return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
        clearTimeout(timer);
    }
  }, []);

  // Animation Variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      filter: 'blur(8px)',
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      filter: 'blur(8px)',
    }),
  };

  return (
    <div 
        className="h-screen w-full flex flex-col relative bg-[#f8f7ff] text-slate-800 overflow-hidden selection:bg-fuchsia-200 selection:text-fuchsia-900 print:h-auto print:overflow-visible"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
    >
      {/* --- AURORA BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full bg-[#f8f7ff] overflow-hidden -z-10 print:hidden">
          {/* Animated Blobs */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          
          {/* Large Static Gradients for depth */}
          <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-gradient-to-b from-purple-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-t from-fuchsia-100/40 to-transparent rounded-full blur-[80px] pointer-events-none" />
          
          {/* Grain Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      </div>

      {/* Top Progress Bar - Glowing */}
      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 z-50 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(217,70,239,0.5)] print:hidden" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }} />

      {/* Header - Deep Glass */}
      <header className="flex-none px-6 py-4 md:px-10 flex justify-between items-center z-20 print:hidden h-20 transition-all">
        <div className="flex items-center gap-4 p-2 pr-4 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 shadow-sm">
          {/* Fyo Logo */}
          <div className="font-black text-xl md:text-2xl tracking-tighter flex items-center gap-1 pl-2">
            <span className="text-slate-900">fyo</span>
            <span className="text-fuchsia-500 drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]">.</span>
          </div>
          <div className="h-6 w-px bg-slate-300/50 mx-1"></div>
          <div className="flex flex-col leading-none">
             <span className="text-[10px] md:text-[11px] font-bold tracking-widest text-fuchsia-800 uppercase">Programa JP</span>
             <span className="text-[10px] md:text-[11px] text-slate-500 font-medium">2025 / 2026</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 md:gap-4">
            <button 
              onClick={toggleFullscreen}
              className="p-2 text-slate-500 hover:text-fuchsia-600 transition-colors rounded-xl hover:bg-white/40 backdrop-blur-sm border border-transparent hover:border-white/40"
              title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
            >
              {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
             <span className="text-slate-500 font-mono text-xs md:text-sm bg-white/30 backdrop-blur-md border border-white/40 px-3 py-1.5 rounded-xl shadow-sm">{currentSlide + 1} / {totalSlides}</span>
        </div>
      </header>

      {/* Content Area - Increased Top Padding */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-16 pt-20 md:pt-24 relative z-10 flex flex-col justify-center print:block print:max-w-none print:px-0 min-h-0">
        <AnimatePresence mode="wait" custom={direction}>
            <motion.div
                key={currentSlide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 200, damping: 25 },
                    opacity: { duration: 0.3 }
                }}
                className="w-full h-full flex flex-col justify-center"
            >
                {title && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="mb-6 md:mb-10 print:mb-4 shrink-0"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tighter leading-[0.9] drop-shadow-sm">
                        {title}
                        <span className="text-fuchsia-500 inline-block animate-pulse">.</span>
                        </h1>
                        {subtitle && (
                            <div className="flex items-center gap-3 mt-3">
                                <div className="h-px w-8 bg-fuchsia-400"></div>
                                <p className="text-slate-600 text-lg md:text-xl font-light tracking-wide">
                                    {subtitle}
                                </p>
                            </div>
                        )}
                    </motion.div>
                )}
                <div className="w-full h-full flex flex-col justify-center print:block overflow-y-auto md:overflow-visible py-2 custom-scrollbar">
                    {children}
                </div>
            </motion.div>
        </AnimatePresence>
      </main>

      {/* Shortcuts Toast - Deep Glass */}
      <AnimatePresence>
        {showShortcuts && (
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="absolute bottom-24 right-8 z-50 bg-slate-900/80 text-white px-5 py-3 rounded-2xl shadow-2xl shadow-slate-900/20 flex items-center gap-4 backdrop-blur-xl border border-white/10 pointer-events-none print:hidden"
            >
                <Keyboard size={20} className="text-fuchsia-400" />
                <div className="text-sm font-medium tracking-wide">
                    Usa <span className="font-mono bg-white/10 border border-white/20 px-2 py-0.5 rounded text-xs mx-1">←</span> <span className="font-mono bg-white/10 border border-white/20 px-2 py-0.5 rounded text-xs mx-1">→</span> para navegar
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* Footer / Navigation Controls */}
      <footer className="flex-none px-6 py-4 md:px-10 md:py-8 flex justify-between items-center z-20 print:hidden h-24">
        {/* Pagination Dots */}
        <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => { /* logic to jump could go here */ }}
                    className={`h-1.5 rounded-full transition-all duration-500 ease-out
                        ${idx === currentSlide 
                            ? 'w-10 bg-gradient-to-r from-fuchsia-500 to-purple-500 shadow-[0_0_12px_rgba(217,70,239,0.6)]' 
                            : 'w-2 bg-slate-300 hover:bg-fuchsia-200'}`}
                />
            ))}
        </div>

        {/* Navigation Buttons - Glass & Glow */}
        <div className="flex items-center gap-4">
            <button 
            onClick={onPrev}
            disabled={currentSlide === 0}
            className="group p-4 rounded-full border border-white/50 bg-white/30 backdrop-blur-md hover:bg-white/60 hover:border-white disabled:opacity-30 disabled:hover:bg-transparent transition-all shadow-sm active:scale-95"
            >
            <ChevronLeft size={20} className="text-slate-600 group-hover:text-purple-600 transition-colors" />
            </button>

            <button 
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="group p-4 rounded-full border border-fuchsia-300/50 bg-white/40 backdrop-blur-md hover:bg-fuchsia-500 hover:border-fuchsia-500 disabled:opacity-30 disabled:hover:bg-transparent transition-all shadow-[0_8px_20px_-6px_rgba(217,70,239,0.3)] hover:shadow-[0_8px_25px_-4px_rgba(217,70,239,0.5)] active:scale-95"
            >
            <ChevronRight size={20} className="text-fuchsia-600 group-hover:text-white transition-colors" />
            </button>
        </div>
      </footer>
    </div>
  );
};