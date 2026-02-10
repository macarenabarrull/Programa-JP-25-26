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

  // Helper to get stats safely
  const getStats = (slide: any) => slide?.content?.stats || [];
  const getMentors = (key: string) => mentoring?.content?.[key] || [];

  return (
    <div className="w-full bg-white text-slate-800 font-sans print:p-0">
        
      {/* --- PAGE 1 --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-12 relative flex flex-col justify-between bg-white print:w-full print:max-w-none print:min-h-screen">
        
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-6 mb-8 flex justify-between items-end">
            <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none mb-2">Programa JP <span className="text-fuchsia-600">26/27</span></h1>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Reporte Ejecutivo | Talento & Cultura</p>
            </div>
            <div className="text-right">
                <div className="text-2xl font-bold text-slate-900">fyo<span className="text-fuchsia-600">.</span></div>
                <div className="text-[10px] font-medium text-slate-400 mt-1">{today}</div>
            </div>
        </header>

        {/* Content P1 */}
        <div className="flex-1 space-y-10">
            
            {/* Vision & KPIs */}
            <section className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-fuchsia-600 border border-slate-100"><Target size={20} /></div>
                    <div>
                        <h2 className="text-sm font-black uppercase text-slate-800 mb-1">Objetivo del Programa</h2>
                        <p className="text-sm text-slate-600 leading-relaxed text-justify">{objectives.content.mainGoal}</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-4">
                    {objectives.content.stats.map((s: any, i: number) => (
                        <div key={i} className="text-center">
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{s.label}</span>
                            <span className={`inline-block px-3 py-1 rounded text-sm font-black ${s.bg} ${s.color}`}>{s.value}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section>
                <h2 className="text-sm font-black uppercase text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Calendar size={16} /> Roadmap 2026
                </h2>
                <div className="relative border-l-2 border-slate-200 ml-2 space-y-5 py-2">
                    {timeline.content.map((t: any, i: number) => (
                        <div key={i} className="relative pl-6">
                            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-400"></div>
                            <div className="grid grid-cols-[80px_1fr] gap-4 items-baseline">
                                <span className="text-xs font-black uppercase text-fuchsia-600">{t.month}</span>
                                <div>
                                    <span className="text-xs font-bold text-slate-900 block">{t.title}</span>
                                    <span className="text-[10px] text-slate-500 leading-tight block mt-0.5">{t.details}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Academy */}
            <section>
                <h2 className="text-sm font-black uppercase text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                    <BookOpen size={16} /> Academy (Formación Transversal)
                </h2>
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex justify-between items-center mb-4 text-xs">
                        <span className="font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded">Viernes 14-18hs</span>
                        <span className="text-slate-500 italic">Nivelación técnica para todos los perfiles</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                         {academy.content.topics.slice(0, 16).map((topic: string, i: number) => (
                             <span key={i} className="text-[10px] px-2 py-1 bg-slate-50 border border-slate-100 rounded text-slate-600 font-medium">
                                 {topic}
                             </span>
                         ))}
                    </div>
                </div>
            </section>

        </div>

        {/* Footer P1 */}
        <div className="mt-8 pt-4 border-t border-slate-200 text-[10px] text-slate-400 flex justify-between print:hidden">
            <span>Página 1 de 2</span>
            <span>Uso interno exclusivo</span>
        </div>
      </div>

      <div className="print:break-before-page"></div>

      {/* --- PAGE 2 --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-12 relative flex flex-col bg-white print:w-full print:max-w-none print:min-h-screen">
         
         <header className="mb-8">
             <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-3">
                <Layers className="text-fuchsia-600" /> Tracks de Especialización
             </h2>
             <p className="text-xs text-slate-500 mt-1 pl-9">Detalle de asignaciones, rotaciones y mentores por perfil.</p>
         </header>

         <div className="flex-1 space-y-6">
            
            {/* 1. GRANOS */}
            <div className="border border-green-200 rounded-xl overflow-hidden shadow-sm break-inside-avoid">
                <div className="bg-green-50 px-5 py-3 border-b border-green-100 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Users size={16} className="text-green-700"/>
                        <h3 className="text-sm font-black text-green-900 uppercase">Mesa de Granos</h3>
                    </div>
                    <span className="text-[10px] font-bold bg-white text-green-700 px-2 py-0.5 rounded border border-green-200">6 Vacantes</span>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-[10px] font-bold uppercase text-slate-400 mb-2">Dinámica & Rotaciones</h4>
                        <p className="text-xs text-slate-700 mb-3 leading-relaxed">
                            {granos.content.description}
                        </p>
                        <div className="space-y-1">
                            {getStats(granos).map((s:any, i:number) => (
                                <div key={i} className="flex items-center gap-2 text-xs">
                                    <ArrowRight size={10} className="text-green-400" />
                                    <span className="font-bold text-slate-700">{s.label}:</span>
                                    <span className="text-slate-600">{s.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold uppercase text-slate-400 mb-2">Equipo de Mentores</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {getMentors('granosMentors').map((m:string, i:number) => (
                                <span key={i} className="px-2 py-1 bg-white border border-slate-100 rounded text-[10px] font-medium text-slate-700 shadow-sm">
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. CAPITAL */}
            <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm break-inside-avoid">
                <div className="bg-blue-50 px-5 py-3 border-b border-blue-100 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <DollarSign size={16} className="text-blue-700"/>
                        <h3 className="text-sm font-black text-blue-900 uppercase">fyoCapital</h3>
                    </div>
                    <span className="text-[10px] font-bold bg-white text-blue-700 px-2 py-0.5 rounded border border-blue-200">4 Vacantes</span>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-[10px] font-bold uppercase text-slate-400 mb-2">Dinámica & Rotaciones</h4>
                        <p className="text-xs text-slate-700 mb-3 leading-relaxed">
                            {capital.content.description}
                        </p>
                        <div className="space-y-1">
                            {getStats(capital).map((s:any, i:number) => (
                                <div key={i} className="flex items-center gap-2 text-xs">
                                    <ArrowRight size={10} className="text-blue-400" />
                                    <span className="font-bold text-slate-700">{s.label}:</span>
                                    <span className="text-slate-600">{s.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold uppercase text-slate-400 mb-2">Equipo de Mentores</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {getMentors('capitalMentors').map((m:string, i:number) => (
                                <span key={i} className="px-2 py-1 bg-white border border-slate-100 rounded text-[10px] font-medium text-slate-700 shadow-sm">
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. CONSULTORIA */}
            <div className="border border-purple-200 rounded-xl overflow-hidden shadow-sm break-inside-avoid">
                <div className="bg-purple-50 px-5 py-3 border-b border-purple-100 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-purple-700"/>
                        <h3 className="text-sm font-black text-purple-900 uppercase">Consultoría</h3>
                    </div>
                    <span className="text-[10px] font-bold bg-white text-purple-700 px-2 py-0.5 rounded border border-purple-200">2 Vacantes</span>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-[10px] font-bold uppercase text-slate-400 mb-2">Dinámica & Enfoque</h4>
                        <p className="text-xs text-slate-700 mb-2 leading-relaxed">
                            Asignación Full-Time en Consultoría con rotaciones de soporte técnico (Insumos, Logística, Análisis, IDC).
                        </p>
                        <div className="mt-2 flex items-center gap-2 text-xs bg-purple-50/50 p-2 rounded border border-purple-100">
                             <BrainCircuit size={14} className="text-purple-500" />
                             <span className="text-purple-900 font-medium">Foco: Estrategia Comercial y Análisis.</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold uppercase text-slate-400 mb-2">Equipo de Mentores</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {getMentors('consultoriaMentors').map((m:string, i:number) => (
                                <span key={i} className="px-2 py-1 bg-white border border-slate-100 rounded text-[10px] font-medium text-slate-700 shadow-sm">
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

         </div>

         {/* Footer P2 */}
         <div className="mt-8 pt-4 border-t border-slate-900 flex justify-between items-end">
            <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase">Talento & Cultura</h4>
                <p className="text-xs text-slate-500">talentos@fyo.com</p>
            </div>
            <div className="text-[10px] text-slate-400 print:hidden">
                Página 2 de 2
            </div>
         </div>
      </div>
    </div>
  );
};
