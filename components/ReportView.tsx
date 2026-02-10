
import React from 'react';
import { SlideData } from '../constants';
import { Users, BookOpen, Target, Calendar, Layers, ArrowRight } from 'lucide-react';

interface ReportViewProps {
  slides: SlideData[];
}

export const ReportView: React.FC<ReportViewProps> = ({ slides }) => {
  const findSlide = (id: string) => slides.find(s => s.id === id);

  const cover = findSlide('cover');
  const objectives = findSlide('intro');
  const profile = findSlide('profile');
  const timeline = findSlide('timeline');
  const granos = findSlide('training-granos');
  const capital = findSlide('rotations-capital');
  const academy = findSlide('academy-split');
  const mentoring = findSlide('mentoring-split');

  const today = new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' });

  if (!cover || !objectives || !profile || !timeline || !granos || !capital || !mentoring || !academy) {
    return <div>Error: Falta información para generar el reporte.</div>;
  }

  // Helper for Consultoria logic
  const consultoriaCount = objectives.content.stats.find((s:any) => s.label === 'Consultoría')?.value || '2 JP';

  return (
    <div className="w-full bg-white text-slate-900 font-sans text-[10px] leading-tight selection:bg-none p-8 max-w-[210mm] mx-auto">
      
      {/* HEADER */}
      <div className="flex justify-between items-end mb-6 border-b-2 border-slate-900 pb-4">
        <div>
           <p className="text-[10px] text-slate-500 font-medium mb-1 uppercase tracking-wider">{today}</p>
           <h2 className="text-sm font-bold text-slate-700 uppercase tracking-widest">Reporte de Gestión</h2>
        </div>
        <div className="text-right">
            <div className="text-3xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-1">PROGRAMA JP</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Talentos 2026-2027 | fyo</div>
        </div>
      </div>
      
      {/* INTRO: 3 PROGRAMAS EN 1 */}
      <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-200">
         <div className="flex items-start gap-4">
            <div className="flex-1">
                <h3 className="text-sm font-black uppercase text-slate-900 mb-2 flex items-center gap-2">
                    <Target size={14} className="text-fuchsia-600"/> Visión Estratégica: 3 Perfiles, 1 Ecosistema
                </h3>
                <p className="text-[11px] text-slate-700 leading-relaxed text-justify mb-2">
                    {objectives.content.mainGoal} El programa se estructura para potenciar tres perfiles de negocio distintos, 
                    unificando la excelencia en la formación base pero especializando la experiencia práctica.
                </p>
                <div className="flex gap-4 mt-2">
                    <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-green-700 uppercase">Mesa de Granos (6 JP)</span>
                    <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-blue-700 uppercase">fyoCapital (4 JP)</span>
                    <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-purple-700 uppercase">Consultoría (2 JP)</span>
                </div>
            </div>
            <div className="w-1/3 border-l border-slate-200 pl-4">
                <h4 className="font-bold text-[10px] uppercase text-slate-500 mb-1">Perfil General Buscado</h4>
                <ul className="space-y-1">
                    {profile.content.bullets.slice(0, 3).map((b: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                            <span className="mt-1 w-1 h-1 bg-fuchsia-500 rounded-full shrink-0"></span>
                            <span className="text-slate-600 leading-snug text-[9px]">{b}</span>
                        </li>
                    ))}
                </ul>
            </div>
         </div>
      </div>

      {/* SECTION 1: LO QUE COINCIDE (COMMON GROUND) */}
      <div className="mb-8">
        <h3 className="text-xs font-black uppercase mb-4 pb-1 border-b border-slate-300 text-slate-800 flex items-center gap-2">
            <Layers size={14} /> Núcleo Común: Roadmap & Formación
        </h3>
        
        <div className="grid grid-cols-2 gap-8">
            {/* Timeline */}
            <div>
                <h4 className="font-bold text-[10px] uppercase text-slate-500 mb-3 flex items-center gap-1">
                    <Calendar size={12} /> Cronograma Unificado
                </h4>
                <div className="relative border-l border-slate-200 ml-1.5 space-y-4">
                    {timeline.content.map((item: any, idx: number) => (
                        <div key={idx} className="relative pl-4">
                            <div className="absolute -left-1 top-1.5 w-2 h-2 rounded-full bg-slate-300 border-2 border-white"></div>
                            <span className="text-[9px] font-black uppercase text-fuchsia-600 block mb-0.5">{item.month}</span>
                            <span className="text-[10px] font-bold text-slate-800 block">{item.title}</span>
                            <span className="text-[9px] text-slate-500 leading-tight block">{item.details}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Academy */}
            <div>
                 <h4 className="font-bold text-[10px] uppercase text-slate-500 mb-3 flex items-center gap-1">
                    <BookOpen size={12} /> Capacitación BackOffice (Transversal)
                </h4>
                <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                    <p className="text-[9px] text-slate-600 mb-3 italic">
                        Formación técnica intensiva niveladora para los 12 JPs, independientemente de su asignación.
                    </p>
                    <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 mb-3">
                        {academy.content.topics.slice(0, 10).map((topic: string, i: number) => ( 
                             <div key={i} className="flex items-center gap-1.5">
                                <div className="w-1 h-1 bg-slate-400 rounded-full shrink-0"></div>
                                <span className="text-[9px] font-medium text-slate-700 truncate">{topic}</span>
                            </div>
                        ))}
                        <div className="text-[9px] text-slate-400 italic pl-2.5">+ 6 módulos adicionales...</div>
                    </div>
                    <div className="flex gap-2 text-[8px] font-bold text-slate-500 uppercase border-t border-slate-100 pt-2">
                        <span className="px-2 py-0.5 bg-slate-100 rounded">Viernes 14-18hs</span>
                        <span className="px-2 py-0.5 bg-slate-100 rounded">Examen Mensual</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* SECTION 2: LO QUE SE DIFERENCIA (SPECIFIC TRACKS) */}
      <div>
         <h3 className="text-xs font-black uppercase mb-4 pb-1 border-b border-slate-300 text-slate-800 flex items-center gap-2">
            <Users size={14} /> Especialización: 3 Tracks de Carrera
         </h3>

         <div className="grid grid-cols-3 gap-4">
            
            {/* TRACK 1: GRANOS */}
            <div className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-50 p-2 border-b border-green-100 flex justify-between items-center">
                    <h4 className="font-bold text-[10px] text-green-800 uppercase">1. Mesa de Granos</h4>
                    <span className="bg-green-200 text-green-800 text-[8px] font-bold px-1.5 py-0.5 rounded-full">6 JP</span>
                </div>
                <div className="p-3">
                    <div className="mb-3">
                        <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">Estructura</p>
                        <p className="text-[9px] text-slate-700 leading-snug">
                            <strong>Full-Time Comercial</strong> + 1 semana rotativa mensual en áreas de soporte.
                        </p>
                    </div>
                    <div className="mb-3">
                         <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">Rotaciones (Soporte)</p>
                         <ul className="text-[9px] text-slate-600 space-y-0.5">
                            {granos.content.stats.map((s:any) => (
                                <li key={s.value} className="flex items-center gap-1">
                                    <ArrowRight size={8} className="text-green-400" /> {s.value}
                                </li>
                            ))}
                         </ul>
                    </div>
                    <div>
                        <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">Mentores</p>
                        <p className="text-[9px] text-slate-600 leading-snug">
                            {mentoring.content.granosMentors.join(', ')}.
                        </p>
                    </div>
                </div>
            </div>

            {/* TRACK 2: CAPITAL */}
            <div className="border border-blue-200 rounded-xl overflow-hidden">
                <div className="bg-blue-50 p-2 border-b border-blue-100 flex justify-between items-center">
                    <h4 className="font-bold text-[10px] text-blue-800 uppercase">2. fyoCapital</h4>
                    <span className="bg-blue-200 text-blue-800 text-[8px] font-bold px-1.5 py-0.5 rounded-full">4 JP</span>
                </div>
                 <div className="p-3">
                    <div className="mb-3">
                        <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">Estructura</p>
                        <p className="text-[9px] text-slate-700 leading-snug">
                            <strong>Rotación Full-Time</strong> mensual por cada unidad de negocio financiera.
                        </p>
                    </div>
                    <div className="mb-3">
                         <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">Áreas de Rotación</p>
                         <ul className="text-[9px] text-slate-600 space-y-0.5">
                            {capital.content.stats.map((s:any) => (
                                <li key={s.value} className="flex items-center gap-1">
                                    <ArrowRight size={8} className="text-blue-400" /> {s.value}
                                </li>
                            ))}
                         </ul>
                    </div>
                    <div>
                        <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">Mentores</p>
                        <p className="text-[9px] text-slate-600 leading-snug">
                            {mentoring.content.capitalMentors.join(', ')}.
                        </p>
                    </div>
                </div>
            </div>

            {/* TRACK 3: CONSULTORIA */}
            <div className="border border-purple-200 rounded-xl overflow-hidden">
                <div className="bg-purple-50 p-2 border-b border-purple-100 flex justify-between items-center">
                    <h4 className="font-bold text-[10px] text-purple-800 uppercase">3. Consultoría</h4>
                    <span className="bg-purple-200 text-purple-800 text-[8px] font-bold px-1.5 py-0.5 rounded-full">{consultoriaCount}</span>
                </div>
                 <div className="p-3">
                    <div className="mb-3">
                        <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">Estructura</p>
                        <p className="text-[9px] text-slate-700 leading-snug">
                            <strong>Full-Time Consultoría</strong> + Rotaciones de soporte (Misma dinámica que Granos).
                        </p>
                    </div>
                    <div className="mb-3">
                         <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">Foco</p>
                         <p className="text-[9px] text-slate-600">
                             Asesoramiento comercial, análisis de mercado y estrategias de cobertura.
                         </p>
                    </div>
                    <div>
                        <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">Mentores</p>
                        <p className="text-[9px] text-slate-600 leading-snug">
                            {mentoring.content.consultoriaMentors.join(', ')}.
                        </p>
                    </div>
                </div>
            </div>

         </div>
      </div>

    </div>
  );
};
