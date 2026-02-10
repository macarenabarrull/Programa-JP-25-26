import React from 'react';
import { SlideData } from '../constants';
import { Users, BookOpen, Target, Calendar, Layers, ArrowRight, BrainCircuit, DollarSign, Briefcase } from 'lucide-react';

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
    return <div className="p-12 text-center text-red-600 font-bold">Error: Datos incompletos para el reporte.</div>;
  }

  const today = new Date().toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
  const getStats = (slide: any) => slide?.content?.stats || [];
  const getMentors = (key: string) => mentoring?.content?.[key] || [];

  return (
    <div className="w-full bg-white text-slate-800 font-sans text-[11px] leading-relaxed print:p-0">
        
      {/* --- PAGE 1 --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-12 relative flex flex-col justify-between bg-white print:w-full print:max-w-none print:min-h-screen">
        
        {/* PROFESSIONAL HEADER */}
        <header className="flex justify-between items-end mb-8 border-b-2 border-slate-900 pb-4">
            <div>
                <p className="text-[10px] text-slate-500 font-bold mb-1 uppercase tracking-wider">{today}</p>
                <h2 className="text-sm font-bold text-slate-600 uppercase tracking-widest">Reporte de Gestión</h2>
            </div>
            <div className="text-right">
                <div className="text-4xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-1">PROGRAMA JP</div>
                <div className="text-xs font-bold text-fuchsia-600 uppercase tracking-wide">Talentos 2026-2027 | fyo</div>
            </div>
        </header>

        {/* Content P1 */}
        <div className="flex-1">
            
            {/* 1. Executive Summary */}
            <section className="mb-10">
                 <div className="flex items-baseline gap-2 mb-3 border-b border-slate-200 pb-2">
                    <Target size={14} className="text-fuchsia-600 translate-y-0.5" /> 
                    <h3 className="text-xs font-black text-slate-900 uppercase tracking-wide">Visión & Objetivos</h3>
                 </div>
                 <div className="flex gap-8">
                    <p className="flex-1 text-justify text-slate-700 font-medium">
                        {objectives.content.mainGoal} El programa está diseñado para identificar, formar y potenciar a la próxima generación de líderes comerciales, integrándolos en un ecosistema de aprendizaje práctico y mentoría estratégica.
                    </p>
                    <div className="w-1/3 flex flex-col gap-2">
                         {objectives.content.stats.map((s: any, i: number) => (
                             <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-1">
                                 <span className="text-[10px] font-bold text-slate-500 uppercase">{s.label}</span>
                                 <span className="font-black text-slate-900">{s.value}</span>
                             </div>
                         ))}
                    </div>
                 </div>
            </section>

            <div className="grid grid-cols-2 gap-10">
                {/* 2. Timeline (Clean List) */}
                <section>
                    <div className="flex items-baseline gap-2 mb-4 border-b border-slate-200 pb-2">
                        <Calendar size={14} className="text-fuchsia-600 translate-y-0.5" /> 
                        <h3 className="text-xs font-black text-slate-900 uppercase tracking-wide">Roadmap 2026</h3>
                    </div>
                    <div className="relative border-l border-slate-300 ml-1.5 space-y-5">
                        {timeline.content.map((t: any, i: number) => (
                            <div key={i} className="relative pl-5">
                                <div className="absolute -left-[3px] top-1.5 w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                                <span className="text-[10px] font-black uppercase text-fuchsia-600 block mb-0.5">{t.month}</span>
                                <span className="text-sm font-bold text-slate-900 block leading-tight">{t.title}</span>
                                <span className="text-[10px] text-slate-500 block mt-0.5">{t.details}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Academy & Profile */}
                <div className="space-y-8">
                    <section>
                        <div className="flex items-baseline gap-2 mb-3 border-b border-slate-200 pb-2">
                            <Users size={14} className="text-fuchsia-600 translate-y-0.5" /> 
                            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wide">Perfil del Postulante</h3>
                        </div>
                        <ul className="space-y-2">
                            {profile.content.bullets.slice(0, 3).map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-[10px] text-slate-700">
                                    <span className="mt-1.5 w-1 h-1 bg-fuchsia-500 rounded-full shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <div className="flex items-baseline gap-2 mb-3 border-b border-slate-200 pb-2">
                            <BookOpen size={14} className="text-fuchsia-600 translate-y-0.5" /> 
                            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wide">Academy (Transversal)</h3>
                        </div>
                        <div className="bg-slate-50 p-4 border-l-4 border-fuchsia-500">
                             <p className="text-[10px] text-slate-500 mb-2 italic flex justify-between">
                                <span>Viernes 14-18hs</span>
                                <span>Evaluación Mensual</span>
                             </p>
                             <div className="flex flex-wrap gap-x-3 gap-y-1">
                                {academy.content.topics.slice(0, 12).map((topic: string, i: number) => (
                                    <span key={i} className="text-[10px] font-medium text-slate-700">• {topic}</span>
                                ))}
                                <span className="text-[10px] text-slate-400 italic">+ otros módulos técnicos.</span>
                             </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>

        {/* PROFESSIONAL FOOTER */}
        <footer className="mt-auto pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-400">
            <div className="font-bold text-slate-500 uppercase">Talento & Cultura</div>
            <div>Documento Confidencial</div>
            <div>Página 1 de 2</div>
        </footer>
      </div>

      <div className="print:break-before-page"></div>

      {/* --- PAGE 2 --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-12 relative flex flex-col bg-white print:w-full print:max-w-none print:min-h-screen">
         
         <header className="mb-10">
             <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">Tracks de Especialización</h2>
             <div className="h-1 w-20 bg-fuchsia-600 mb-4"></div>
             <p className="text-slate-500 max-w-2xl">
                 El programa bifurca la experiencia práctica en tres caminos especializados, manteniendo el núcleo de formación común pero adaptando las rotaciones y mentorías al perfil de negocio.
             </p>
         </header>

         <div className="flex-1 space-y-8">
            
            {/* 1. GRANOS */}
            <div className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-600 text-white p-1.5 rounded">
                        <Users size={16} />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 uppercase">Mesa de Granos</h3>
                    <div className="ml-auto px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider border border-green-100">6 Vacantes</div>
                </div>
                
                <div className="flex gap-6 border-l-4 border-green-500 pl-6 py-1">
                    <div className="flex-1">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-1">Dinámica</h4>
                        <p className="text-slate-800 text-justify mb-3">{granos.content.description}</p>
                        <div className="grid grid-cols-2 gap-y-1">
                             {getStats(granos).map((s:any, i:number) => (
                                <div key={i} className="flex items-center gap-2 text-[10px]">
                                    <ArrowRight size={10} className="text-green-500" />
                                    <span className="font-bold text-slate-700">{s.label}:</span>
                                    <span className="text-slate-600">{s.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/3 bg-slate-50 p-3">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2">Mentores</h4>
                        <div className="text-[10px] font-medium text-slate-700 leading-snug">
                             {getMentors('granosMentors').join(', ')}.
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. CAPITAL */}
            <div className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-600 text-white p-1.5 rounded">
                        <DollarSign size={16} />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 uppercase">fyoCapital</h3>
                    <div className="ml-auto px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider border border-blue-100">4 Vacantes</div>
                </div>
                
                <div className="flex gap-6 border-l-4 border-blue-500 pl-6 py-1">
                    <div className="flex-1">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-1">Dinámica</h4>
                        <p className="text-slate-800 text-justify mb-3">{capital.content.description}</p>
                        <div className="grid grid-cols-2 gap-y-1">
                             {getStats(capital).map((s:any, i:number) => (
                                <div key={i} className="flex items-center gap-2 text-[10px]">
                                    <ArrowRight size={10} className="text-blue-500" />
                                    <span className="font-bold text-slate-700">{s.label}:</span>
                                    <span className="text-slate-600">{s.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/3 bg-slate-50 p-3">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2">Mentores</h4>
                        <div className="text-[10px] font-medium text-slate-700 leading-snug">
                             {getMentors('capitalMentors').join(', ')}.
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. CONSULTORIA */}
            <div className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-600 text-white p-1.5 rounded">
                        <Briefcase size={16} />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 uppercase">Consultoría</h3>
                    <div className="ml-auto px-3 py-1 bg-purple-50 text-purple-700 text-[10px] font-bold uppercase tracking-wider border border-purple-100">2 Vacantes</div>
                </div>
                
                <div className="flex gap-6 border-l-4 border-purple-500 pl-6 py-1">
                    <div className="flex-1">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-1">Enfoque</h4>
                        <p className="text-slate-800 text-justify mb-3">
                            Asignación Full-Time en Consultoría con rotaciones de soporte técnico (Insumos, Logística, Análisis, IDC).
                        </p>
                        <div className="flex items-center gap-2 text-[10px] text-purple-700 bg-purple-50 p-2 border-l-2 border-purple-200">
                             <BrainCircuit size={12} />
                             <span className="font-bold">Foco Estratégico:</span> Análisis de mercado y asesoramiento comercial.
                        </div>
                    </div>
                    <div className="w-1/3 bg-slate-50 p-3">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2">Mentores</h4>
                        <div className="text-[10px] font-medium text-slate-700 leading-snug">
                             {getMentors('consultoriaMentors').join(', ')}.
                        </div>
                    </div>
                </div>
            </div>

         </div>

         {/* PROFESSIONAL FOOTER */}
         <footer className="mt-auto pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-400">
            <div className="font-bold text-slate-500 uppercase">Talento & Cultura</div>
            <div>talentos@fyo.com</div>
            <div>Página 2 de 2</div>
         </footer>
      </div>
    </div>
  );
};
