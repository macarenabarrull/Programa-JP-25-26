
import React from 'react';
import { SlideData } from '../constants';
import { Users, BookOpen, Target, Calendar } from 'lucide-react';

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

  if (!cover || !objectives || !profile || !timeline || !granos || !capital || !mentoring) {
    return <div>Error: Falta información para generar el reporte.</div>;
  }

  return (
    <div className="w-full bg-white text-slate-900 font-sans text-[10px] leading-tight selection:bg-none">
      
      {/* HEADER */}
      <div className="flex justify-between items-end mb-4 border-b-2 border-slate-900 pb-2">
        <div>
           <p className="text-[9px] text-slate-500 font-medium mb-0.5 uppercase tracking-wider">{today}</p>
           <h2 className="text-xs font-bold text-slate-700 uppercase tracking-widest">Reporte de Gestión</h2>
        </div>
        <div className="text-right">
            <div className="text-2xl font-black uppercase tracking-tighter leading-none text-slate-900">PROGRAMA JP</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Talentos 2026-2027 | fyo</div>
        </div>
      </div>
      
      {/* 1. RESUMEN ESTRATÉGICO */}
      <div className="mb-5">
        <h3 className="text-[11px] font-black uppercase mb-2 pb-0.5 border-b border-slate-300 text-slate-800 flex items-center gap-1">
            <Target size={12} /> 1. Estrategia y Perfil
        </h3>
        
        <div className="grid grid-cols-2 gap-6">
            {/* Left: Objetivos */}
            <div>
                <div className="mb-2">
                    <h4 className="font-bold text-[10px] uppercase text-slate-500 mb-0.5">Objetivo Principal</h4>
                    <p className="font-semibold text-slate-800 leading-snug text-[10px] border-l-2 border-fuchsia-500 pl-2">
                        {objectives.content.mainGoal}
                    </p>
                </div>
                <div>
                     <h4 className="font-bold text-[10px] uppercase text-slate-500 mb-1">Pilares del Programa</h4>
                     <div className="flex flex-wrap gap-1.5">
                        {objectives.content.pillars.map((p: string, i: number) => (
                            <span key={i} className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[9px] font-medium text-slate-700">
                                {p}
                            </span>
                        ))}
                     </div>
                </div>
            </div>

            {/* Right: Perfil */}
            <div>
                <h4 className="font-bold text-[10px] uppercase text-slate-500 mb-1">Perfil del Candidato</h4>
                <p className="text-slate-700 mb-1.5 italic text-[10px]">{profile.content.description}</p>
                <ul className="space-y-1">
                    {profile.content.bullets.map((b: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                            <span className="mt-0.5 w-1 h-1 bg-slate-800 rounded-full shrink-0"></span>
                            <span className="text-slate-700 leading-snug text-[9px]">{b}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>

      {/* 2. CRONOGRAMA */}
      <div className="mb-5">
        <h3 className="text-[11px] font-black uppercase mb-2 pb-0.5 border-b border-slate-300 text-slate-800 flex items-center gap-1">
            <Calendar size={12} /> 2. Cronograma de Implementación
        </h3>
        <table className="w-full text-left border-collapse text-[9px]">
            <thead>
                <tr className="border-b border-slate-800 bg-slate-50">
                    <th className="py-1 px-1.5 w-[15%] font-bold uppercase text-slate-700">Mes</th>
                    <th className="py-1 px-1.5 w-[25%] font-bold uppercase text-slate-700">Etapa</th>
                    <th className="py-1 px-1.5 font-bold uppercase text-slate-700">Detalle Operativo</th>
                </tr>
            </thead>
            <tbody>
                {timeline.content.map((item: any, idx: number) => (
                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="py-1 px-1.5 font-bold text-slate-800">{item.month}</td>
                        <td className="py-1 px-1.5 font-semibold text-slate-700">{item.title}</td>
                        <td className="py-1 px-1.5 text-slate-600">{item.details}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>

      {/* 3. ESTRUCTURA OPERATIVA */}
      <div className="mb-5">
         <h3 className="text-[11px] font-black uppercase mb-2 pb-0.5 border-b border-slate-300 text-slate-800 flex items-center gap-1">
            <Users size={12} /> 3. Estructura y Asignaciones
         </h3>
         
         <div className="grid grid-cols-2 gap-4">
            {/* Granos */}
            <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                <div className="flex justify-between items-center mb-1.5 border-b border-slate-200 pb-1">
                    <h4 className="font-bold text-[10px] text-slate-800 uppercase">Mesa de Granos</h4>
                    <span className="bg-slate-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">6 VACANTES</span>
                </div>
                <p className="text-[9px] text-slate-600 mb-2 leading-tight text-justify">
                    {granos.content.description} Se prioriza la visión integral de la cadena de valor mediante rotaciones técnicas.
                </p>
                <div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase block mb-1">Áreas de Inmersión:</span>
                    <div className="flex flex-wrap gap-1">
                        {granos.content.stats.map((s: any) => (
                            <span key={s.label} className="text-[8px] font-semibold border border-slate-300 px-1 py-0.5 bg-white text-slate-700 rounded-sm">
                                {s.value}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Capital */}
            <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                <div className="flex justify-between items-center mb-1.5 border-b border-slate-200 pb-1">
                    <h4 className="font-bold text-[10px] text-slate-800 uppercase">fyoCapital</h4>
                    <span className="bg-slate-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">4 VACANTES</span>
                </div>
                <p className="text-[9px] text-slate-600 mb-2 leading-tight text-justify">
                    {capital.content.description} El esquema de rotación mensual asegura profundidad técnica en instrumentos financieros.
                </p>
                <div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase block mb-1">Rotaciones Clave:</span>
                    <div className="flex flex-wrap gap-1">
                         {capital.content.stats.map((s: any) => (
                            <span key={s.label} className="text-[8px] font-semibold border border-slate-300 px-1 py-0.5 bg-white text-slate-700 rounded-sm">
                                {s.value}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* 4. FORMACIÓN TÉCNICA (Academy) */}
      <div className="mb-5">
         <h3 className="text-[11px] font-black uppercase mb-2 pb-0.5 border-b border-slate-300 text-slate-800 flex items-center gap-1">
             <BookOpen size={12} /> 4. Programa de Capacitación (BackOffice Academy)
         </h3>
         
         <div className="bg-white border border-slate-200 p-2.5 rounded">
            <div className="flex gap-4 mb-2 text-[9px] text-slate-600 border-b border-slate-100 pb-1">
                <span className="flex items-center gap-1"><span className="font-bold text-slate-800">Frecuencia:</span> 2 Módulos Semanales</span>
                <span className="flex items-center gap-1"><span className="font-bold text-slate-800">Evaluación:</span> Examen Mensual</span>
                <span className="flex items-center gap-1"><span className="font-bold text-slate-800">Horario:</span> Viernes 14-18hs</span>
            </div>
            
            <div className="grid grid-cols-4 gap-y-1 gap-x-2">
                {academy && academy.content.topics && academy.content.topics.map((topic: string, i: number) => (
                    <div key={i} className="flex items-center gap-1.5">
                        <div className="w-1 h-1 bg-fuchsia-600 rounded-full shrink-0"></div>
                        <span className="text-[9px] font-medium text-slate-700 truncate">{topic}</span>
                    </div>
                ))}
            </div>
         </div>
      </div>

      {/* 5. EQUIPO DE MENTORES */}
      <div className="mb-0">
        <h3 className="text-[11px] font-black uppercase mb-2 pb-0.5 border-b border-slate-300 text-slate-800">5. Referentes y Mentores</h3>
        
        <div className="grid grid-cols-3 gap-3">
            <div className="border border-slate-200 rounded p-2 bg-slate-50/50">
                <div className="font-bold text-[9px] text-slate-900 border-b border-slate-300 pb-1 mb-1 uppercase text-center">Mesa Granos</div>
                <ul className="text-[9px] text-slate-600 space-y-0.5 text-center">
                    {mentoring.content.granosMentors.map((m: string) => <li key={m}>{m}</li>)}
                </ul>
            </div>
            <div className="border border-slate-200 rounded p-2 bg-slate-50/50">
                <div className="font-bold text-[9px] text-slate-900 border-b border-slate-300 pb-1 mb-1 uppercase text-center">fyoCapital</div>
                <ul className="text-[9px] text-slate-600 space-y-0.5 text-center">
                    {mentoring.content.capitalMentors.map((m: string) => <li key={m}>{m}</li>)}
                </ul>
            </div>
            <div className="border border-slate-200 rounded p-2 bg-slate-50/50">
                <div className="font-bold text-[9px] text-slate-900 border-b border-slate-300 pb-1 mb-1 uppercase text-center">Consultoría</div>
                <ul className="text-[9px] text-slate-600 space-y-0.5 text-center">
                    {mentoring.content.consultoriaMentors.map((m: string) => <li key={m}>{m}</li>)}
                </ul>
            </div>
        </div>

        <div className="mt-3 py-2 border-t border-slate-200 flex justify-between items-center text-[9px] text-slate-500">
            <div>
                <span className="font-bold text-slate-700 mr-2">DINÁMICA:</span>
                {mentoring.content.considerations.join(' • ')}
            </div>
            <div className="italic">Documento interno confidencial</div>
        </div>
      </div>

    </div>
  );
};
