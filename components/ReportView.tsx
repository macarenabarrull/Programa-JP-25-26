
import React from 'react';
import { SlideData } from '../constants';

interface ReportViewProps {
  slides: SlideData[];
}

export const ReportView: React.FC<ReportViewProps> = ({ slides }) => {
  // Helper to find data by ID
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

  if (!cover || !objectives || !profile || !timeline || !granos || !capital || !mentoring) {
    return <div>Error: Falta información para generar el reporte.</div>;
  }

  return (
    // Removed max-w constraint to let @page margins control width, preventing landscape switch
    <div className="w-full bg-white text-slate-900 font-sans text-[10px] leading-tight">
      
      {/* HEADER COMPACT */}
      <div className="flex justify-between items-end mb-4 border-b-2 border-slate-900 pb-2">
        <div>
           <p className="text-[10px] text-slate-400 font-mono mb-0.5">{today}</p>
           <h2 className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Reporte Ejecutivo</h2>
        </div>
        <div className="text-right">
            <div className="text-2xl font-black uppercase tracking-tighter leading-none">PROGRAMA JP</div>
            <div className="text-xs font-bold text-slate-500 uppercase">2026-2027 | fyo</div>
        </div>
      </div>
      
      {/* SECTION 1: RESUMEN EJECUTIVO (Compact Grid) */}
      <div className="mb-6">
        <h3 className="text-xs font-black uppercase mb-3 pb-1 border-b border-slate-300">1. Resumen Ejecutivo</h3>
        
        <div className="grid grid-cols-2 gap-8">
            {/* Objetivos */}
            <div>
                <h4 className="font-bold text-[10px] uppercase text-slate-500 mb-1">Objetivo</h4>
                <p className="font-medium mb-2 leading-snug">{objectives.content.mainGoal}</p>
                <ul className="flex gap-2 text-[10px] text-slate-600 font-medium">
                    {objectives.content.pillars.map((p: string, i: number) => (
                        <li key={i} className="flex items-center gap-1 bg-slate-100 px-1.5 py-0.5 rounded">
                           <span className="w-1 h-1 bg-slate-400 rounded-full"></span> {p}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Perfil */}
            <div>
                <h4 className="font-bold text-[10px] uppercase text-slate-500 mb-1">Perfil</h4>
                <p className="text-slate-700 mb-1.5 leading-snug">{profile.content.description}</p>
                <ul className="space-y-0.5">
                    {profile.content.bullets.slice(0,3).map((b: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                            <span className="mt-1 w-0.5 h-0.5 bg-slate-400 rounded-full shrink-0"></span>
                            <span className="text-slate-600 leading-none">{b}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>

      {/* SECTION 2: CRONOGRAMA (Very Compact Table) */}
      <div className="mb-6">
        <h3 className="text-xs font-black uppercase mb-3 pb-1 border-b border-slate-300">2. Cronograma</h3>
        
        <table className="w-full text-left border-collapse text-[10px]">
            <thead>
                <tr className="border-b border-slate-800 bg-slate-50">
                    <th className="py-1 px-1 w-1/6 font-bold uppercase">Mes</th>
                    <th className="py-1 px-1 w-1/5 font-bold uppercase">Etapa</th>
                    <th className="py-1 px-1 font-bold uppercase">Detalle</th>
                </tr>
            </thead>
            <tbody>
                {timeline.content.map((item: any, idx: number) => (
                    <tr key={idx} className="border-b border-slate-100">
                        <td className="py-1.5 px-1 font-bold">{item.month}</td>
                        <td className="py-1.5 px-1 font-medium text-slate-800">{item.title}</td>
                        <td className="py-1.5 px-1 text-slate-500">{item.details}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>

      {/* SECTION 3: ESTRUCTURA (Compact Boxes) */}
      <div className="mb-6">
         <h3 className="text-xs font-black uppercase mb-3 pb-1 border-b border-slate-300">3. Estructura y Áreas</h3>
         
         <div className="grid grid-cols-2 gap-6 mb-3">
            <div className="p-3 border border-slate-200 bg-slate-50/50">
                <div className="flex justify-between items-center mb-1.5">
                    <h4 className="font-bold text-xs">Mesa de Granos</h4>
                    <span className="bg-slate-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">6 JP</span>
                </div>
                <p className="text-[10px] text-slate-500 mb-2 leading-tight">{granos.content.description}</p>
                <div className="flex flex-wrap gap-1">
                    {granos.content.stats.map((s: any) => (
                        <span key={s.label} className="text-[9px] font-medium border border-slate-300 px-1.5 py-0.5 bg-white text-slate-700">
                            {s.value}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-3 border border-slate-200 bg-slate-50/50">
                <div className="flex justify-between items-center mb-1.5">
                    <h4 className="font-bold text-xs">fyoCapital</h4>
                    <span className="bg-slate-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">4 JP</span>
                </div>
                <p className="text-[10px] text-slate-500 mb-2 leading-tight">{capital.content.description}</p>
                 <div className="flex flex-wrap gap-1">
                    {capital.content.stats.map((s: any) => (
                        <span key={s.label} className="text-[9px] font-medium border border-slate-300 px-1.5 py-0.5 bg-white text-slate-700">
                            {s.value}
                        </span>
                    ))}
                </div>
            </div>
         </div>
         
         {academy && academy.content.topics && (
             <div className="mt-2 text-[10px] text-slate-500 bg-slate-50 p-2 border border-slate-100 rounded flex gap-2 items-start">
                 <span className="font-bold text-slate-700 uppercase shrink-0">Capacitación BackOffice:</span>
                 <span className="leading-tight">{academy.content.topics.slice(0, 16).join(' • ')}</span>
             </div>
         )}
      </div>

      {/* SECTION 4: MENTORES (Multi-col list) */}
      <div className="mb-0">
        <h3 className="text-xs font-black uppercase mb-3 pb-1 border-b border-slate-300">4. Mentores</h3>
        
        <div className="grid grid-cols-3 gap-4 text-[10px]">
            <div className="bg-slate-50/30 p-2 border border-slate-100">
                <div className="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-1">GRANOS</div>
                <ul className="space-y-0.5 text-slate-600">
                    {mentoring.content.granosMentors.map((m: string) => <li key={m}>{m}</li>)}
                </ul>
            </div>
            <div className="bg-slate-50/30 p-2 border border-slate-100">
                <div className="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-1">CAPITAL</div>
                <ul className="space-y-0.5 text-slate-600">
                    {mentoring.content.capitalMentors.map((m: string) => <li key={m}>{m}</li>)}
                </ul>
            </div>
            <div className="bg-slate-50/30 p-2 border border-slate-100">
                <div className="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-1">CONSULTORÍA</div>
                <ul className="space-y-0.5 text-slate-600">
                    {mentoring.content.consultoriaMentors.map((m: string) => <li key={m}>{m}</li>)}
                </ul>
            </div>
        </div>
        
        <div className="mt-3 pt-2 border-t border-slate-200 flex gap-2 text-[9px] text-slate-400">
            <span className="font-bold text-slate-600">NOTA:</span>
            <span>{mentoring.content.considerations.join(' • ')}</span>
        </div>
      </div>

    </div>
  );
};
