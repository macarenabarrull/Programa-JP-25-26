import React from 'react';
import { SlideData } from '../constants';
import { Users, BookOpen, Target, Calendar, Layers, ArrowRight, BrainCircuit, TrendingUp, DollarSign, Briefcase } from 'lucide-react';

interface ReportViewProps {
  slides: SlideData[];
}

export const ReportView: React.FC<ReportViewProps> = ({ slides }) => {
  const findSlide = (id: string) => slides.find(s => s.id === id);

  const objectives = findSlide('intro');
  const profile = findSlide('profile');
  const timeline = findSlide('timeline');
  const granos = findSlide('training-granos');
  const capital = findSlide('rotations-capital');
  const academy = findSlide('academy-split');
  const mentoring = findSlide('mentoring-split');

  if (!objectives || !profile || !timeline || !granos || !capital || !mentoring || !academy) {
    return <div className="p-8 text-center text-red-600">Faltan datos para generar el reporte.</div>;
  }

  const today = new Date().toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });

  // Helper for Consultoria logic if not explicit in constants
  const consultoriaCount = objectives.content.stats.find((s:any) => s.label === 'Consultoría')?.value || '2 JP';

  return (
    <div className="w-full max-w-[210mm] mx-auto bg-white text-slate-900 font-sans selection:bg-fuchsia-100 p-8 md:p-12 print:p-0 print:max-w-none">
      
      {/* --- PAGE 1 --- */}
      <div className="flex flex-col min-h-[1050px] relative print:h-auto print:block">
        
        {/* Header */}
        <header className="flex justify-between items-end border-b-4 border-fuchsia-600 pb-6 mb-8">
            <div>
                <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">
                    PROGRAMA JP <span className="text-fuchsia-600">2026</span>
                </h1>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    Talentos Comerciales & Financieros
                </p>
            </div>
            <div className="text-right">
                <div className="text-3xl font-bold text-slate-900 tracking-tight">fyo.</div>
                <div className="text-xs font-medium text-slate-400 mt-1">{today}</div>
            </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-8">
                <div className="flex-1">
                    <h2 className="text-sm font-black uppercase text-slate-400 mb-3 tracking-widest flex items-center gap-2">
                        <Target size={16} className="text-fuchsia-500"/> Visión del Programa
                    </h2>
                    <p className="text-slate-800 text-sm leading-relaxed text-justify font-medium">
                        {objectives.content.mainGoal} Buscamos potenciar el ecosistema de negocios integrando perfiles con alta capacidad de aprendizaje y visión comercial.
                    </p>
                </div>
                <div className="w-px bg-slate-200"></div>
                <div className="w-1/3 space-y-2">
                    {objectives.content.stats.map((s: any, i: number) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                            <span className="font-bold text-slate-600">{s.label}</span>
                            <span className={`font-black px-2 py-0.5 rounded ${s.bg} ${s.color} text-xs`}>{s.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Profile & Roadmap Row */}
        <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Profile */}
            <section>
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Users size={18} className="text-slate-400"/> Perfil Buscado
                </h2>
                <ul className="space-y-3">
                    {profile.content.bullets.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-snug">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-fuchsia-500 shrink-0"></div>
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Timeline */}
            <section>
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Calendar size={18} className="text-slate-400"/> Cronograma
                </h2>
                <div className="space-y-4 pl-2 border-l-2 border-slate-100">
                    {timeline.content.map((t: any, i: number) => (
                        <div key={i} className="relative pl-4">
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-slate-300"></div>
                            <div className="flex flex-col">
                                <span className="text-xs font-black uppercase text-fuchsia-600">{t.month}</span>
                                <span className="text-sm font-bold text-slate-800">{t.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        {/* Academy / Core */}
        <section className="flex-1">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                <BookOpen size={18} className="text-slate-400"/> Formación Común (Academy)
            </h2>
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <p className="text-sm text-slate-600 mb-4 italic">
                    Espacio de nivelación técnica transversal a todos los perfiles (Viernes 14-18hs).
                </p>
                <div className="flex flex-wrap gap-2">
                    {academy.content.topics.map((topic: string, i: number) => (
                        <span key={i} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-xs font-medium text-slate-700">
                            {topic}
                        </span>
                    ))}
                </div>
            </div>
        </section>

        {/* Footer Page 1 */}
        <div className="mt-auto pt-6 border-t border-slate-200 flex justify-between text-xs text-slate-400 print:hidden">
            <span>Página 1 de 2</span>
            <span>Documento Confidencial</span>
        </div>
      </div>

      <div className="print:block h-8 hidden"></div> {/* Spacer for screen view */}
      <div className="print:break-before-page"></div>

      {/* --- PAGE 2 --- */}
      <div className="flex flex-col min-h-[1050px] relative print:h-auto print:block pt-8 print:pt-0">
        
        <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
            <Layers className="text-fuchsia-600" /> Tracks de Especialización
        </h2>

        <div className="space-y-6">
            
            {/* Granos */}
            <div className="border border-green-200 bg-green-50/30 rounded-2xl p-6 break-inside-avoid">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-green-800">Mesa de Granos</h3>
                        <p className="text-sm text-green-700 font-medium">6 Vacantes | Perfil Comercial</p>
                    </div>
                    <div className="p-2 bg-white rounded-lg shadow-sm text-green-600">
                        <Users size={20} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-xs font-black uppercase text-green-900/50 mb-2">Dinámica</h4>
                        <p className="text-sm text-slate-700 mb-3">
                            {granos.content.description}
                        </p>
                        <ul className="text-sm space-y-1">
                            {granos.content.stats.map((s: any, i:number) => (
                                <li key={i} className="flex items-center gap-2">
                                    <ArrowRight size={12} className="text-green-500"/>
                                    <span className="text-slate-800 font-medium">{s.label}: {s.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-black uppercase text-green-900/50 mb-2">Mentores</h4>
                        <div className="flex flex-wrap gap-2">
                            {mentoring.content.granosMentors.map((m:string, i:number) => (
                                <span key={i} className="px-2 py-1 bg-white border border-green-100 text-green-800 text-xs font-bold rounded shadow-sm">
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Capital */}
            <div className="border border-blue-200 bg-blue-50/30 rounded-2xl p-6 break-inside-avoid">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-blue-800">fyoCapital</h3>
                        <p className="text-sm text-blue-700 font-medium">4 Vacantes | Perfil Financiero</p>
                    </div>
                    <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                        <DollarSign size={20} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-xs font-black uppercase text-blue-900/50 mb-2">Dinámica</h4>
                        <p className="text-sm text-slate-700 mb-3">
                            {capital.content.description}
                        </p>
                        <ul className="text-sm space-y-1">
                            {capital.content.stats.map((s: any, i:number) => (
                                <li key={i} className="flex items-center gap-2">
                                    <ArrowRight size={12} className="text-blue-500"/>
                                    <span className="text-slate-800 font-medium">{s.label}: {s.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-black uppercase text-blue-900/50 mb-2">Mentores</h4>
                        <div className="flex flex-wrap gap-2">
                            {mentoring.content.capitalMentors.map((m:string, i:number) => (
                                <span key={i} className="px-2 py-1 bg-white border border-blue-100 text-blue-800 text-xs font-bold rounded shadow-sm">
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Consultoria */}
             <div className="border border-purple-200 bg-purple-50/30 rounded-2xl p-6 break-inside-avoid">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-purple-800">Consultoría</h3>
                        <p className="text-sm text-purple-700 font-medium">{consultoriaCount} | Perfil Analítico</p>
                    </div>
                    <div className="p-2 bg-white rounded-lg shadow-sm text-purple-600">
                        <Briefcase size={20} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-xs font-black uppercase text-purple-900/50 mb-2">Dinámica</h4>
                        <p className="text-sm text-slate-700 mb-3">
                            Full-time en Consultoría con rotaciones de soporte similares a la Mesa de Granos. Foco en asesoramiento y estrategia.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xs font-black uppercase text-purple-900/50 mb-2">Mentores</h4>
                        <div className="flex flex-wrap gap-2">
                            {mentoring.content.consultoriaMentors.map((m:string, i:number) => (
                                <span key={i} className="px-2 py-1 bg-white border border-purple-100 text-purple-800 text-xs font-bold rounded shadow-sm">
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Closing Contact */}
        <div className="mt-auto pt-8 flex items-center justify-between border-t-2 border-slate-900">
             <div>
                <h4 className="font-bold text-slate-900 text-sm">Talento & Cultura</h4>
                <p className="text-slate-500 text-xs">talentos@fyo.com</p>
             </div>
             <div className="text-right text-xs text-slate-400 print:hidden">
                Página 2 de 2
            </div>
        </div>

      </div>

    </div>
  );
};
