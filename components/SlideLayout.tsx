import React, { ReactNode, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Maximize, Minimize } from 'lucide-react';

interface SlideLayoutProps {
  children: ReactNode;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  title?: string;
  subtitle?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  children, 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev,
  title,
  subtitle
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

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
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col relative bg-[#f5f3ff] text-slate-800 overflow-hidden selection:bg-purple-200 selection:text-purple-900 print:h-auto print:overflow-visible">
      {/* Dynamic Background: Light Lilac Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0abfc] via-[#e879f9] to-[#c084fc] opacity-10 print:hidden" />
      
      {/* Soft Glowing Orbs (Light Mode) */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply print:hidden" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-fuchsia-400/20 rounded-full blur-[80px] pointer-events-none mix-blend-multiply print:hidden" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 pointer-events-none mix-blend-soft-light print:hidden"></div>

      {/* Header */}
      <header className="flex-none px-8 py-6 flex justify-between items-center z-10 border-b border-purple-200/50 bg-white/40 backdrop-blur-md print:hidden">
        <div className="flex items-center gap-4">
          {/* Fyo Logo Placeholder / Brand Name */}
          <div className="font-black text-2xl tracking-tighter flex items-center gap-1">
            <span className="text-slate-800">fyo</span>
            <span className="text-fuchsia-600">.</span>
          </div>
          <div className="h-6 w-px bg-purple-200 mx-2"></div>
          <div className="flex flex-col">
             <span className="text-xs font-bold tracking-widest text-purple-700 uppercase">Programa JP</span>
             <span className="text-xs text-slate-500">2026 / 2027</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
            <button 
              onClick={toggleFullscreen}
              className="p-2 text-slate-500 hover:text-fuchsia-600 transition-colors"
              title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
            >
              {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
             <span className="text-slate-500 font-mono text-sm">{currentSlide + 1} / {totalSlides}</span>
        </div>
      </header>

      {/* Content Area */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center print:block print:max-w-none print:px-0">
        {title && (
            <div className="mb-8 md:mb-12 animate-fade-in-down print:mb-4">
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                  {title}
                  <span className="text-fuchsia-500">.</span>
                </h1>
                {subtitle && (
                    <p className="text-slate-600 text-lg md:text-xl mt-2 font-light max-w-3xl border-l-2 border-fuchsia-400 pl-4">
                        {subtitle}
                    </p>
                )}
            </div>
        )}
        <div className="animate-fade-in-up w-full h-full flex flex-col justify-center print:block">
            {children}
        </div>
      </main>

      {/* Footer / Navigation Controls */}
      <footer className="flex-none p-6 md:p-8 flex justify-between items-center z-10 print:hidden">
        <div className="flex gap-1.5">
            {Array.from({ length: totalSlides }).map((_, idx) => (
                <div 
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-12 bg-fuchsia-500 shadow-lg shadow-fuchsia-500/30' : 'w-3 bg-purple-200'}`}
                />
            ))}
        </div>

        <div className="flex items-center gap-4">
            <button 
            onClick={onPrev}
            disabled={currentSlide === 0}
            className="group p-4 rounded-full border border-purple-100 bg-white/50 hover:bg-white hover:border-purple-200 disabled:opacity-30 disabled:hover:bg-transparent transition-all shadow-sm"
            >
            <ChevronLeft size={20} className="text-slate-600 group-hover:text-purple-600 transition-colors" />
            </button>

            <button 
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="group p-4 rounded-full border border-fuchsia-200 bg-fuchsia-100/50 hover:bg-fuchsia-500 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-all shadow-[0_4px_15px_rgba(217,70,239,0.2)] hover:shadow-[0_4px_20px_rgba(217,70,239,0.4)]"
            >
            <ChevronRight size={20} className="text-fuchsia-600 group-hover:text-white transition-colors" />
            </button>
        </div>
      </footer>
    </div>
  );
};