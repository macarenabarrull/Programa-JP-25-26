
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
    <div className="w-full max-w-[1100px] mx-auto bg-white text-slate-900 p-8 font-sans">
      
      {/* HEADER */}
      <div className="flex justify-between items-end mb-6">
        <div>
           <p className="text-xs text-slate-400 font-mono mb-1">{today}</p>
           <h2 className="text-sm font-bold text-slate-500 tracking-widest uppercase">Reporte Oficial</h2>
        </div>
        <div className="text-right">
            <div className="text-3xl font-black uppercase tracking-tighter leading-none">PROGRAMA JP</div>
            <div className="text-lg font-bold text-slate-500 uppercase">2026-2027 | fyo</div>
        </div>
      </div>
      
      {/* THICK DIVIDER */}
      <div className="w-full h-2 bg-slate-900 mb-10"></div>

      {/* SECTION 1: RESUMEN EJECUTIVO */}
      <div className="mb-12">
        <h3 className="text-xl font-black uppercase mb-6 pb-2 border-b border-slate-300">1. Resumen Ejecutivo</h3>
        
        <div className="grid grid-cols-2 gap-10">
            {/* Objetivos */}
            <div>
                <h4 className="font-bold text-sm uppercase text-slate-500 mb-2">Objetivo Principal</h4>
                <p className="text-base font-medium mb-4 leading-relaxed">{objectives.content.mainGoal}</p>
                
                <h4 className="font-bold text-sm uppercase text-slate-500 mb-2">Pilares Estratégicos</h4>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    {objectives.content.pillars.map((p: string, i: number) => (
                        <li key={i}>{p}</li>
                    ))}
                </ul>
            </div>

            {/* Perfil */}
            <div>
                <h4 className="font-bold text-sm uppercase text-slate-500 mb-2">Perfil Buscado</h4>
                <p className="text-sm text-slate-700 mb-3">{profile.content.description}</p>
                <ul className="space-y-2">
                    {profile.content.bullets.map((b: string, i: number) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                            <span className="text-slate-700">{b}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>

      {/* SECTION 2: CRONOGRAMA (TABLE LIKE REFERENCE) */}
      <div className="mb-12">
        <h3 className="text-xl font-black uppercase mb-6 pb-2 border-b border-slate-300">2. Cronograma de Implementación</h3>
        
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b-2 border-slate-900">
                    <th className="py-3 pr-4 w-1/6 font-bold uppercase text-xs tracking-wider">Mes</th>
                    <th className="py-3 pr-4 w-1/4 font-bold uppercase text-xs tracking-wider">Etapa</th>
                    <th className="py-3 font-bold uppercase text-xs tracking-wider">Detalle</th>
                </tr>
            </thead>
            <tbody>
                {timeline.content.map((item: any, idx: number) => (
                    <tr key={idx} className="border-b border-slate-200">
                        <td className="py-3 pr-4 font-bold text-sm">{item.month}</td>
                        <td className="py-3 pr-4 font-medium text-sm">{item.title}</td>
                        <td className="py-3 text-sm text-slate-600">{item.details}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>

      {/* SECTION 3: ESTRUCTURA (GRID) */}
      <div className="mb-12">
         <h3 className="text-xl font-black uppercase mb-6 pb-2 border-b border-slate-300">3. Estructura y Áreas</h3>
         
         <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="p-5 border border-slate-200 bg-slate-50">
                <div className="flex justify-between items-center mb-3">
                    <h4 className="font-black text-lg">Mesa de Granos</h4>
                    <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">6 JP</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">{granos.content.description}</p>
                <div className="flex flex-wrap gap-2">
                    {granos.content.stats.map((s: any) => (
                        <span key={s.label} className="text-xs font-medium border border-slate-300 px-2 py-1 bg-white text-slate-700">
                            {s.value}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-5 border border-slate-200 bg-slate-50">
                <div className="flex justify-between items-center mb-3">
                    <h4 className="font-black text-lg">fyoCapital</h4>
                    <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">4 JP</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">{capital.content.description}</p>
                 <div className="flex flex-wrap gap-2">
                    {capital.content.stats.map((s: any) => (
                        <span key={s.label} className="text-xs font-medium border border-slate-300 px-2 py-1 bg-white text-slate-700">
                            {s.value}
                        </span>
                    ))}
                </div>
            </div>
         </div>
         
         {academy && academy.content.topics && (
             <div className="mt-4">
                 <h4 className="font-bold text-sm uppercase text-slate-500 mb-2">Temario Capacitación BackOffice</h4>
                 <p className="text-xs text-slate-600 leading-relaxed">
                     {academy.content.topics.join(' • ')}
                 </p>
             </div>
         )}
      </div>

      {/* SECTION 4: MENTORES (COLUMNS) */}
      <div className="mb-8">
        <h3 className="text-xl font-black uppercase mb-6 pb-2 border-b border-slate-300">4. Equipo de Mentores</h3>
        
        <div className="grid grid-cols-3 gap-8 text-sm">
            <div>
                <div className="font-bold border-b border-slate-900 pb-1 mb-2">GRANOS</div>
                <ul className="space-y-1">
                    {mentoring.content.granosMentors.map((m: string) => <li key={m}>{m}</li>)}
                </ul>
            </div>
            <div>
                <div className="font-bold border-b border-slate-900 pb-1 mb-2">CAPITAL</div>
                <ul className="space-y-1">
                    {mentoring.content.capitalMentors.map((m: string) => <li key={m}>{m}</li>)}
                </ul>
            </div>
            <div>
                <div className="font-bold border-b border-slate-900 pb-1 mb-2">CONSULTORÍA</div>
                <ul className="space-y-1">
                    {mentoring.content.consultoriaMentors.map((m: string) => <li key={m}>{m}</li>)}
                </ul>
            </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-200 flex gap-4 text-xs text-slate-500">
            <span className="font-bold text-slate-900">CONSIDERACIONES:</span>
            <span>{mentoring.content.considerations.join('  /  ')}</span>
        </div>
      </div>

    </div>
  );
};
