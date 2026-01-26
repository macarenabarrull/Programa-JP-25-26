import React from 'react';
import { SlideData, SLIDES } from '../constants';
import { CheckCircle2, ArrowRight, Users, Target, BookOpen, TrendingUp, Calendar, GraduationCap, Clock, Download, FileText, Presentation, Mail, BarChart3, PieChart, Briefcase, DollarSign, Zap, Layers, Compass, Flag, Heart, Sparkles, BrainCircuit, PencilRuler, Search, ClipboardCheck, FileSignature, Rocket } from 'lucide-react';
import pptxgen from "pptxgenjs";
import { motion } from "framer-motion";

interface SlideProps {
  data: SlideData;
  onPrint?: () => void;
  onDownloadPPTX?: () => void;
}

// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: "spring", stiffness: 200, damping: 20 } }
};

// --- Reusable "Deep Glass" Card Component ---
const GlassCard: React.FC<{ children?: React.ReactNode, className?: string, hover?: boolean }> = ({ children, className = "", hover = false }) => (
    <div className={`
        bg-white/30 backdrop-blur-xl backdrop-saturate-150 
        border border-white/40 rounded-2xl md:rounded-3xl
        shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]
        ${hover ? 'transition-all duration-300 hover:bg-white/40 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(192,132,252,0.2)] hover:border-white/60' : ''}
        ${className}
    `}>
        {children}
    </div>
);

// 1. Cover Slide - Updated for "Aurora" impact
export const CoverSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <motion.div 
        className="flex flex-col justify-center items-start h-full pl-0 md:pl-8 relative z-10"
        initial="hidden" animate="show" variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-fuchsia-200/50 bg-white/40 backdrop-blur-md text-fuchsia-700 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
        </span>
        @fyoonline
      </motion.div>
      
      <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-slate-900 mb-6 leading-[0.85] drop-shadow-sm">
        PROGRAMA<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 animate-gradient-x">JP 2026</span>
        <span className="text-fuchsia-400">.</span>
      </motion.h1>
      
      <motion.p variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl text-slate-600 font-light max-w-2xl border-l-4 border-fuchsia-400/50 pl-6 my-6 md:my-8 leading-normal tracking-wide">
        {data.subtitle}
      </motion.p>
      
      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 w-full max-w-3xl">
        {data.content.tags.map((tag: string, idx: number) => (
          <motion.div variants={itemVariants} key={idx} className="flex items-center gap-3 p-4 bg-white/40 border border-white/50 rounded-xl hover:bg-white/60 transition-all shadow-sm backdrop-blur-sm group cursor-default">
            <div className="h-2 w-2 rounded-full bg-purple-300 group-hover:bg-fuchsia-500 transition-colors shadow-[0_0_8px_rgba(192,132,252,0.4)]" />
            <span className="text-slate-700 font-medium group-hover:text-slate-900 text-sm md:text-base tracking-wide">{tag}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

// 2. Objectives Slide - COMPACT DESIGN TO FIT SCREEN
export const ObjectivesSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <motion.div className="flex flex-col h-full gap-6 md:gap-8 justify-center" initial="hidden" animate="show" variants={containerVariants}>
      {/* Top Statement */}
      <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto pt-2 md:pt-0">
        <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight mb-4">
            {data.content.mainGoal.split("12 Jóvenes Profesionales")[0]}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600">12 Jóvenes Profesionales</span>
            {data.content.mainGoal.split("12 Jóvenes Profesionales")[1]}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
            {data.content.pillars.map((pillar: string, idx: number) => (
                <span key={idx} className="px-3 py-1.5 rounded-full bg-white/50 border border-white/60 text-slate-600 text-sm font-medium shadow-sm flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-fuchsia-500" />
                    {pillar}
                </span>
            ))}
        </div>
      </motion.div>

      {/* Cards Grid - Reduced padding */}
      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {data.content.stats.map((stat: any, idx: number) => {
            const Icon = stat.icon;
            return (
                <motion.div variants={itemVariants} key={idx} className="h-full">
                    <GlassCard hover className={`h-full p-6 flex flex-col items-center text-center relative overflow-hidden group border-t-4 ${stat.border.replace('border', 'border-t')}`}>
                        {/* Background Decor */}
                        <div className={`absolute top-0 left-0 w-full h-20 ${stat.bg} opacity-50 rounded-b-[50%] -translate-y-12 group-hover:translate-y-[-10%] transition-transform duration-500`}></div>
                        
                        <div className={`relative z-10 w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4 ${stat.color} group-hover:scale-110 transition-transform`}>
                            <Icon size={28} />
                        </div>
                        
                        <h3 className="relative z-10 text-base font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</h3>
                        <div className={`relative z-10 text-4xl md:text-5xl font-black tracking-tighter ${stat.color} drop-shadow-sm`}>
                            {stat.value.split(" ")[0]}
                            <span className="text-base font-bold ml-1 text-slate-400">JP</span>
                        </div>
                    </GlassCard>
                </motion.div>
            )
        })}
      </motion.div>
    </motion.div>
  );
};


// 3. Info Slide (Redesigned Right Column) + 7. Info Slide (Redesigned Stats)
export const InfoSlide: React.FC<SlideProps> = ({ data }) => {
  // Slide 3 Styles
  const featureStyles = [
    { icon: Flag, color: 'text-fuchsia-600', bg: 'bg-fuchsia-100', border: 'border-fuchsia-200' },
    { icon: Users, color: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-200' },
    { icon: BrainCircuit, color: 'text-violet-600', bg: 'bg-violet-100', border: 'border-violet-200' },
    { icon: Heart, color: 'text-rose-500', bg: 'bg-rose-100', border: 'border-rose-200' }
  ];

  // Slide 7 Styles (Stats/Areas)
  const statStyles = [
    { color: 'text-cyan-600', bg: 'bg-cyan-100', border: 'border-cyan-200', ring: 'ring-cyan-50' },
    { color: 'text-indigo-600', bg: 'bg-indigo-100', border: 'border-indigo-200', ring: 'ring-indigo-50' },
    { color: 'text-pink-600', bg: 'bg-pink-100', border: 'border-pink-200', ring: 'ring-pink-50' },
    { color: 'text-orange-600', bg: 'bg-orange-100', border: 'border-orange-200', ring: 'ring-orange-50' },
    { color: 'text-emerald-600', bg: 'bg-emerald-100', border: 'border-emerald-200', ring: 'ring-emerald-50' }, // Added 5th style
  ];

  return (
    <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 h-full items-center" initial="hidden" animate="show" variants={containerVariants}>
      <div className="lg:col-span-8 space-y-6 lg:space-y-8 print:space-y-4">
        {/* Adjusted Font Size: Smaller as requested */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl lg:text-2xl text-slate-700 font-light leading-relaxed tracking-wide">
          {data.content.description}
        </motion.p>
        
        {data.content.bullets && (
            <motion.div variants={containerVariants} className="space-y-3 mt-6 print:mt-4 print:gap-y-2">
                {data.content.bullets.map((item: string, idx: number) => (
                    <motion.div variants={itemVariants} key={idx} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/40 transition-colors border border-transparent hover:border-white/50 group print:py-2">
                        <div className="mt-1 p-1 bg-fuchsia-50 rounded-full group-hover:bg-fuchsia-100 transition-colors">
                             <CheckCircle2 className="text-fuchsia-500 shrink-0" size={16} />
                        </div>
                        {/* Smaller font for bullets too */}
                        <span className="text-slate-600 text-sm md:text-base group-hover:text-slate-900 transition-colors print:text-base">{item}</span>
                    </motion.div>
                ))}
            </motion.div>
        )}
      </div>

      {/* Redesigned Right Column */}
      <motion.div variants={containerVariants} className="lg:col-span-4 flex flex-col gap-4">
        
        {/* Slide 7 & 5: Stats / Areas - Redesigned Premium Cards */}
        {data.content.stats && (
            <div className={`grid gap-3 ${data.content.stats.length > 4 ? 'grid-cols-1' : 'grid-cols-1'}`}>
                {data.content.stats.map((stat: any, idx: number) => {
                    const Icon = stat.icon;
                    const style = statStyles[idx % statStyles.length];
                    // Compact padding if many items
                    const paddingClass = data.content.stats.length > 4 ? 'p-3' : 'p-4'; 
                    return (
                        <motion.div variants={itemVariants} key={`stat-${idx}`}>
                            <div className={`${paddingClass} rounded-2xl bg-white/50 border ${style.border} flex items-center justify-between group hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-md`}>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.label}</span>
                                    <span className={`text-base md:text-lg font-bold ${style.color} leading-tight`}>
                                        {stat.value}
                                    </span>
                                </div>
                                <div className={`h-10 w-10 rounded-xl ${style.bg} flex items-center justify-center ${style.color} shadow-sm group-hover:rotate-6 transition-transform`}>
                                    <Icon size={20} />
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        )}

        {/* Slide 3: The 4 Value Props - Premium Cards VERTICAL STACK LARGER */}
        {data.content.valueProp && (
             <motion.div variants={containerVariants} className="flex flex-col gap-5">
                {data.content.valueProp.map((vp: any, idx: number) => {
                    const style = featureStyles[idx % featureStyles.length];
                    const Icon = style.icon;
                    return (
                        <motion.div variants={itemVariants} key={idx} className="w-full">
                            {/* Larger padding (p-5), larger spacing to make them 'agrandados' */}
                            <div className={`
                                w-full p-5 rounded-2xl border ${style.border} bg-white/40 backdrop-blur-md 
                                flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md
                            `}>
                                <div className={`w-12 h-12 shrink-0 rounded-full ${style.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <Icon size={24} className={style.color} />
                                </div>
                                <div>
                                     <span className={`block font-black text-lg ${style.color}`}>{vp.title}</span>
                                     <span className="text-slate-500 text-xs md:text-sm font-medium leading-snug block">{vp.text}</span>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
             </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

// 4. Timeline Slide - Fixed Overlap & Redesigned Premium
export const TimelineSlide: React.FC<SlideProps> = ({ data }) => {
  const stepStyles = [
    { icon: PencilRuler, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100', accent: 'bg-indigo-500' },
    { icon: Search, color: 'text-fuchsia-600', bg: 'bg-fuchsia-50', border: 'border-fuchsia-100', accent: 'bg-fuchsia-500' },
    { icon: ClipboardCheck, color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100', accent: 'bg-violet-500' },
    { icon: FileSignature, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100', accent: 'bg-rose-500' },
    { icon: Rocket, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', accent: 'bg-emerald-500' },
  ];

  return (
    <motion.div className="h-full flex items-center print:items-start" initial="hidden" animate="show" variants={containerVariants}>
        <div className="w-full relative py-8 mt-8 md:mt-12 print:mt-8 print:py-4">
            {/* Horizontal Line with Glow */}
            <motion.div variants={itemVariants} className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-200 via-fuchsia-400 to-emerald-200 rounded-full -translate-y-1/2 hidden md:block shadow-[0_0_15px_rgba(217,70,239,0.4)] opacity-50" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 print:gap-2">
                {data.content.map((item: any, idx: number) => {
                    const style = stepStyles[idx % stepStyles.length];
                    const Icon = style.icon;
                    return (
                    <motion.div variants={itemVariants} key={idx} className="relative group">
                        {/* Dot - Glowing Orb */}
                        <div className={`hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border ${style.border} items-center justify-center z-10 shadow-lg transition-transform group-hover:scale-125`}>
                            <div className={`w-3 h-3 rounded-full ${style.accent}`}></div>
                        </div>
                        
                        {/* Card - Premium Design */}
                        <div className={`md:absolute md:left-0 md:w-full px-2 ${idx % 2 === 0 ? 'md:bottom-16' : 'md:top-16'}`}>
                            <div className={`
                                h-full p-4 rounded-2xl bg-white/60 backdrop-blur-xl border ${style.border} 
                                shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1
                                relative overflow-hidden flex flex-col justify-between
                            `}>
                                {/* Top Decoration Bar */}
                                <div className={`absolute top-0 left-0 w-full h-1 ${style.accent} opacity-50`}></div>
                                
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${style.bg} ${style.color}`}>
                                            {item.month}
                                        </span>
                                        <Icon size={14} className={`${style.color} opacity-60`} />
                                    </div>
                                    <h3 className="text-sm font-bold text-slate-800 leading-tight mb-2">{item.title}</h3>
                                </div>
                                <p className="text-slate-500 text-[10px] font-medium leading-relaxed border-t border-slate-100 pt-2">{item.details}</p>
                            </div>
                            
                            {/* Connecting Line */}
                             <div className={`hidden md:block absolute left-1/2 w-px bg-gradient-to-b from-slate-300 to-transparent -translate-x-1/2 h-16 
                                ${idx % 2 === 0 ? 'bottom-0 translate-y-full' : 'top-0 -translate-y-full rotate-180'}`} 
                             />
                        </div>
                    </motion.div>
                )})}
            </div>
        </div>
    </motion.div>
  );
};

// 5. Grid Slide - Refined Glass & Colors
export const GridSlide: React.FC<SlideProps> = ({ data }) => {
  const gridStyles = [
    { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', iconBg: 'bg-amber-100' }, // Mañana
    { color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', iconBg: 'bg-blue-100' }, // Almuerzo
    { color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100', iconBg: 'bg-purple-100' }, // Tarde
    { color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', iconBg: 'bg-emerald-100' }, // Mentores
  ];

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" initial="hidden" animate="show" variants={containerVariants}>
      {data.content.items.map((item: any, idx: number) => {
        const Icon = item.icon;
        const style = gridStyles[idx % gridStyles.length];

        return (
            <motion.div variants={itemVariants} key={idx}>
                <div className={`
                    relative p-8 rounded-3xl overflow-hidden group h-full
                    bg-white/40 backdrop-blur-xl border ${style.border}
                    hover:bg-white/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/5
                `}>
                    {/* Background Soft Blob */}
                    <div className={`absolute -right-12 -top-12 w-48 h-48 ${style.iconBg} rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-700`} />
                    
                    <div className="relative z-10 flex flex-col h-full items-start">
                        <div className={`w-14 h-14 rounded-2xl ${style.bg} border ${style.border} flex items-center justify-center mb-6 ${style.color} shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                            <Icon size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                        <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            </motion.div>
        );
      })}
    </motion.div>
  );
};

// 6. Table Slide (Granos) - Centered and Balanced
export const TableGranosSlide: React.FC<SlideProps> = () => {
  const months = ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5'];
  const areas = ['Insumos', 'Análisis', 'Consultoría', 'Logística', 'Intel. y Des. Com.'];
  const matrix = [
    [1, 2, 3, 4, null],
    [null, 1, 2, 3, 4],
    [4, null, 1, 2, 3],
    [3, 4, null, 1, 2],
    [2, 3, 4, null, 1],
  ];

  return (
    <motion.div className="w-full flex flex-col items-center justify-center" initial="hidden" animate="show" variants={containerVariants}>
      <motion.div variants={itemVariants} className="w-full max-w-5xl">
        <GlassCard className="overflow-hidden">
            <table className="w-full text-left border-collapse">
            <thead>
                <tr>
                <th className="p-3 md:p-5 bg-purple-50/50 text-slate-400 font-bold text-xs uppercase tracking-widest border-b border-purple-100">Período</th>
                {areas.map((area, i) => (
                    <th key={i} className="p-3 md:p-5 text-slate-700 font-bold text-xs md:text-sm border-b border-purple-100 border-l border-purple-100/50 text-center tracking-tight">{area}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {months.map((month, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-white/30 transition-colors group">
                    <td className="p-3 md:p-5 font-mono text-slate-500 text-xs md:text-sm border-b border-purple-50 bg-purple-50/20 group-hover:text-fuchsia-600 font-medium">{month}</td>
                    {matrix[rowIndex].map((group, colIndex) => (
                    <td key={colIndex} className="p-2 md:p-3 border-b border-purple-50 border-l border-purple-50 text-center relative">
                        {group ? (
                        <div className={`mx-auto w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-xs md:text-sm font-bold shadow-lg transition-all hover:scale-110 hover:-translate-y-1 text-white border border-white/20
                            ${group === 1 ? 'bg-indigo-500 shadow-indigo-500/30' : ''}
                            ${group === 2 ? 'bg-fuchsia-500 shadow-fuchsia-500/30' : ''}
                            ${group === 3 ? 'bg-purple-600 shadow-purple-600/30' : ''}
                            ${group === 4 ? 'bg-rose-500 shadow-rose-500/30' : ''}
                        `}>
                            G{group}
                        </div>
                        ) : (
                        <div className="w-1.5 h-1.5 bg-purple-100 rounded-full mx-auto" />
                        )}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>
        </GlassCard>
      </motion.div>
      
      <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-6 justify-center">
          <LegendItem color="bg-indigo-500" label="Grupo 1 (JP 1-2)" />
          <LegendItem color="bg-fuchsia-500" label="Grupo 2 (JP 3-4)" />
          <LegendItem color="bg-purple-600" label="Grupo 3 (JP 5-6)" />
          <LegendItem color="bg-rose-500" label="Grupo 4 (JP 7-8)" />
      </motion.div>
    </motion.div>
  );
};

const LegendItem = ({ color, label }: { color: string, label: string }) => (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/40 border border-white/50 shadow-sm backdrop-blur-sm">
        <span className={`w-3 h-3 rounded-full ${color} shadow-[0_0_8px_currentColor]`}></span>
        <span className="text-slate-600 text-xs font-bold uppercase tracking-wide">{label}</span>
    </div>
)

// 7. Table Slide (Capital)
export const TableCapitalSlide: React.FC<SlideProps> = () => {
    const data = [
        { month: '1', jp1: 'Finanzas (FP)', jp2: 'BackOffice fyoCapital', jp3: 'Análisis de Mercado', jp4: 'Operadores' },
        { month: '2', jp1: 'BackOffice fyoCapital', jp2: 'Análisis de Mercado', jp3: 'Operadores', jp4: 'Finanzas (FP)' },
        { month: '3', jp1: 'Análisis de Mercado', jp2: 'Operadores', jp3: 'Finanzas (FP)', jp4: 'BackOffice fyoCapital' },
        { month: '4', jp1: 'Operadores', jp2: 'Finanzas (FP)', jp3: 'BackOffice fyoCapital', jp4: 'Análisis de Mercado' },
    ];

    return (
        <motion.div className="w-full flex flex-col items-center justify-center" initial="hidden" animate="show" variants={containerVariants}>
            <motion.div variants={itemVariants} className="w-full max-w-5xl">
                <GlassCard className="overflow-hidden">
                    <div className="grid grid-cols-5 bg-purple-50/50 border-b border-purple-100 text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <div className="p-3 md:p-5">Mes</div>
                        <div className="p-3 md:p-5 text-fuchsia-600 text-center">JP 1</div>
                        <div className="p-3 md:p-5 text-fuchsia-600 text-center">JP 2</div>
                        <div className="p-3 md:p-5 text-fuchsia-600 text-center">JP 3</div>
                        <div className="p-3 md:p-5 text-fuchsia-600 text-center">JP 4</div>
                    </div>
                    {data.map((row, idx) => (
                        <div key={idx} className="grid grid-cols-5 border-b border-purple-50 hover:bg-white/30 transition-colors text-xs md:text-sm group">
                            <div className="p-3 md:p-5 font-mono text-slate-500 flex items-center bg-purple-50/20 font-bold group-hover:text-fuchsia-700">{row.month}</div>
                            <div className="p-3 md:p-4 text-slate-700 flex items-center justify-center border-l border-purple-50 text-center">{row.jp1}</div>
                            <div className="p-3 md:p-4 text-slate-700 flex items-center justify-center border-l border-purple-50 text-center">{row.jp2}</div>
                            <div className="p-3 md:p-4 text-slate-700 flex items-center justify-center border-l border-purple-50 text-center">{row.jp3}</div>
                            <div className="p-3 md:p-4 text-slate-700 flex items-center justify-center border-l border-purple-50 text-center">{row.jp4}</div>
                        </div>
                    ))}
                </GlassCard>
            </motion.div>
            <motion.p variants={itemVariants} className="mt-6 text-center text-slate-400 text-sm font-medium tracking-wide">Rotación Full-Time mensual por área</motion.p>
        </motion.div>
    );
};

// 8. New Mentoring Slide (Adjusted size and added "Sugerencias")
export const MentoringSplitSlide: React.FC<SlideProps> = ({ data }) => {
    return (
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 h-full" initial="hidden" animate="show" variants={containerVariants}>
            {/* Left Col: Lists of Mentors - Larger Box */}
            <motion.div variants={containerVariants} className="flex flex-col justify-center gap-4">
                 {/* Granos */}
                 <motion.div variants={itemVariants}>
                    <GlassCard hover className="p-5 md:p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></span>
                                Mentores Granos
                            </h3>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white/50 px-2 py-1 rounded-md border border-white/60">Sugerencias</span>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {data.content.granosMentors.map((m: string, i: number) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 group">
                                    <div className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-green-500 transition-colors"></div>
                                    <span className="text-lg font-medium group-hover:text-slate-900 transition-colors">{m}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                 </motion.div>

                 {/* Capital */}
                 <motion.div variants={itemVariants}>
                    <GlassCard hover className="p-5 md:p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]"></span>
                                Mentores fyoCapital
                            </h3>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white/50 px-2 py-1 rounded-md border border-white/60">Sugerencias</span>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {data.content.capitalMentors.map((m: string, i: number) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 group">
                                    <div className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></div>
                                    <span className="text-lg font-medium group-hover:text-slate-900 transition-colors">{m}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                 </motion.div>

                 {/* Consultoria - New */}
                 <motion.div variants={itemVariants}>
                    <GlassCard hover className="p-5 md:p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]"></span>
                                Mentores Consultoría
                            </h3>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white/50 px-2 py-1 rounded-md border border-white/60">Sugerencias</span>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {data.content.consultoriaMentors?.map((m: string, i: number) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 group">
                                    <div className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-purple-500 transition-colors"></div>
                                    <span className="text-lg font-medium group-hover:text-slate-900 transition-colors">{m}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                 </motion.div>
            </motion.div>

            {/* Right Col: Considerations */}
            <motion.div variants={itemVariants} className="h-full">
                <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 p-8 md:p-12 rounded-3xl border border-white/20 flex flex-col justify-center h-full text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <div className="mb-8 flex items-center gap-5">
                            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 text-white shadow-lg">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Consideraciones del Rol</h3>
                        </div>
                        
                        <p className="text-purple-100 mb-8 leading-relaxed text-lg font-light">
                            El rol del mentor es clave para facilitar la inmersión cultural y técnica del JP, brindando guía estratégica más allá del día a día.
                        </p>

                        <div className="flex flex-col gap-5">
                            {data.content.considerations.map((item: string, i: number) => (
                                <div key={i} className="p-4 bg-white/10 rounded-xl border border-white/10 flex items-center gap-4 hover:bg-white/20 transition-colors">
                                    <CheckCircle2 size={24} className="text-fuchsia-200" />
                                    <span className="font-medium text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// 9. New Academy Slide - COMPLETE REDESIGN (Vertical Layout, Clean framing)
export const AcademySplitSlide: React.FC<SlideProps> = ({ data }) => {
    // If using new data structure from constants, prioritize it. 
    // Fallback to manual list if not present, but based on request we use the new content.
    const topics = data.content.topics || ['Circuitos Administrativos', 'Herramientas de Gestión'];

    return (
        <motion.div className="flex flex-col h-full gap-6 md:gap-8 justify-center max-w-6xl mx-auto" initial="hidden" animate="show" variants={containerVariants}>
            
            {/* Top Cards Row */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <motion.div variants={itemVariants}>
                    <GlassCard hover className="p-4 flex flex-row md:flex-col items-center gap-3 text-center md:justify-center">
                        <div className="p-2 bg-fuchsia-50 rounded-2xl text-fuchsia-600 shrink-0">
                             <Calendar size={24} />
                        </div>
                        <div className="text-left md:text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Cuándo</span>
                            <span className="text-lg md:text-xl font-bold text-slate-900">Viernes 14-18hs</span>
                        </div>
                    </GlassCard>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <GlassCard hover className="p-4 flex flex-row md:flex-col items-center gap-3 text-center md:justify-center">
                        <div className="p-2 bg-purple-50 rounded-2xl text-purple-600 shrink-0">
                             <GraduationCap size={24} />
                        </div>
                        <div className="text-left md:text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Frecuencia</span>
                            <span className="text-lg md:text-xl font-bold text-slate-900">2 Módulos / Sem</span>
                        </div>
                    </GlassCard>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <GlassCard hover className="p-4 flex flex-row md:flex-col items-center gap-3 text-center md:justify-center">
                        <div className="p-2 bg-indigo-50 rounded-2xl text-indigo-600 shrink-0">
                             <BarChart3 size={24} />
                        </div>
                        <div className="text-left md:text-center">
                             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Evaluación</span>
                             <span className="text-lg md:text-xl font-bold text-slate-900">Examen Mensual</span>
                        </div>
                    </GlassCard>
                </motion.div>
            </motion.div>

            {/* Bottom Content Area */}
            <motion.div variants={itemVariants} className="flex-1">
                <GlassCard className="h-full p-6 relative overflow-hidden flex flex-col justify-center">
                     {/* Decor */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-purple-100/60 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none blur-3xl" />

                    <div className="relative z-10 w-full">
                        <div className="mb-4 border-b border-purple-100 pb-3">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Contenidos del Programa</h3>
                             <p className="text-base text-slate-600 leading-relaxed font-light max-w-4xl">
                                Espacio de formación técnica intensiva diseñado para nivelar conocimientos y profundizar en la operatoria.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                            {topics.map((item: string, i: number) => (
                                <div key={i} className="flex items-center gap-2 p-2 rounded-lg border border-purple-50 bg-white/50 hover:bg-white hover:scale-[1.02] transition-all hover:border-fuchsia-200 shadow-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_4px_rgba(217,70,239,0.5)] shrink-0"></div>
                                    <span className="text-slate-800 font-bold text-xs md:text-sm leading-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </GlassCard>
            </motion.div>
        </motion.div>
    );
};

// 10. Closing Slide - Premium Finish
export const ClosingSlide: React.FC<SlideProps> = ({ data, onPrint }) => {
    // Fallback for contact structure if not updated in constants for some reason
    const contacts = data.content.contacts || (data.content.contact ? [data.content.contact] : []);

    return (
        <motion.div className="flex flex-col justify-center items-center h-full text-center relative" initial="hidden" animate="show" variants={containerVariants}>
            <motion.div variants={itemVariants} className="mb-12 relative z-10">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-900 mb-8 leading-tight drop-shadow-sm">
                    ¡Muchas gracias!
                </h1>
                <p className="text-2xl lg:text-3xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                    {data.subtitle}
                </p>
            </motion.div>

            <motion.div variants={containerVariants} className="relative z-10 flex flex-col items-center gap-10">
                 {/* Contact Cards */}
                 <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
                    {contacts.map((contact: any, idx: number) => (
                        <GlassCard key={idx} hover className="px-10 py-5 flex items-center gap-6 rounded-full group">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-fuchsia-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/30 group-hover:scale-110 transition-transform">
                                <Mail size={20} />
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-0.5">{contact.role}</div>
                                <a href={`mailto:${contact.email}`} className="text-xl font-bold text-slate-900 hover:text-fuchsia-600 transition-colors">
                                    {contact.email}
                                </a>
                            </div>
                        </GlassCard>
                    ))}
                 </motion.div>

                 {/* Actions */}
                 <motion.div variants={itemVariants} className="flex gap-4 no-print mt-4">
                    <button 
                        onClick={onPrint}
                        className="flex items-center gap-2 px-6 py-3 bg-white/50 border border-white/60 rounded-xl hover:bg-white hover:scale-105 transition-all font-bold text-slate-600 shadow-sm backdrop-blur-sm text-sm"
                    >
                        <FileText size={18} />
                        Descargar PDF
                    </button>
                 </motion.div>
            </motion.div>
        </motion.div>
    )
}