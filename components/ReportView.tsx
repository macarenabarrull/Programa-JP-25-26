import React from 'react';
import { SlideData } from '../constants';
import { Users, BookOpen, Target, Calendar, Layers, ArrowRight, BrainCircuit, DollarSign, Briefcase, Mail } from 'lucide-react';

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
  const closing = findSlide('closing');

  if (!objectives || !profile || !timeline || !granos || !capital || !mentoring || !academy || !closing) {
    return <div className="p-12 text-center text-red-600 font-bold">Error: Datos incompletos para el reporte.</div>;
  }

  const consultoriaCount = objectives.content.stats.find((s:any) => s.label === 'Consultoría')?.value || '2 JP';

  // Helper to ensure we don't use english in dates if possible
  const monthMap: Record<string, string> = {
      'Enero': 'Enero', 'Febrero': 'Febrero', 'Mar-Abr': 'Marzo-Abril', 'Abril': 'Abril', 'Mayo': 'Mayo'
  };

  const Header = ({ continuation = false }) => (
    <header className="mb-8 border-b-2 border-slate-900 pb-2">
        <div className="flex justify-between items-end">
            <div>
                <h3 className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                    REPORTE EJECUTIVO {continuation && <span className="text-slate-400">| CONTINUACIÓN</span>}
                </h3>
                <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-none">
                    PROGRAMA JP 25-26
                </h1>
            </div>
            <div className="text-right">
                <div className="text-5xl font-black text-slate-200 tracking-tighter leading-none">fyo<span className="text-fuchsia-600">.</span></div>
                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">TALENTO Y CULTURA</div>
            </div>
        </div>
    </header>
  );

  const Footer = ({ page }: { page: number }) => (
    <footer className="mt-auto pt-4 flex justify-between items-center text-[9px] text-slate-400 border-t border-slate-200">
        <div className="font-bold">PROGRAMA JP 25-26</div>
        <div>Uso Interno | Página {page}/2</div>
    </footer>
  );

  return (
    <div className="w-full bg-white text-slate-800 font-sans text-[11px] leading-relaxed print:p-0">
        
      {/* --- PAGE 1 --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-[1.5cm] relative flex flex-col bg-white print:w-full print:max-w-none print:min-h-screen">
        <Header />
        
        {/* 01. CONTEXTO */}
        <section className="mb-8">
            <h2 className="text-sm font-black text-slate-900 uppercase mb-2 flex items-center gap-2">
                <span className="text-fuchsia-600">01.</span> OBJETIVOS Y ALCANCE
            </h2>
            <div className="bg-slate-50 p-4 border-l-4 border-slate-900 mb-4">
                 <p className="text-slate-700 font-medium italic">
                    "{objectives.content.mainGoal}"
                 </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="p-3 border border-slate-200 rounded bg-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Users size={14} className="text-green-600"/>
                        <h3 className="font-bold text-slate-900 uppercase text-[10px]">Mesa de Granos</h3>
                    </div>
                    <span className="text-lg font-black text-slate-900 block">{objectives.content.stats[0].value}</span>
                </div>

                <div className="p-3 border border-slate-200 rounded bg-white">
                    <div className="flex items-center gap-2 mb-2">
                        <DollarSign size={14} className="text-blue-600"/>
                        <h3 className="font-bold text-slate-900 uppercase text-[10px]">fyoCapital</h3>
                    </div>
                    <span className="text-lg font-black text-slate-900 block">{objectives.content.stats[1].value}</span>
                </div>

                <div className="p-3 border border-slate-200 rounded bg-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={14} className="text-purple-600"/>
                        <h3 className="font-bold text-slate-900 uppercase text-[10px]">Consultoría</h3>
                    </div>
                    <span className="text-lg font-black text-slate-900 block">{consultoriaCount}</span>
                </div>
            </div>
        </section>

        {/* 02. PERFIL */}
        <section className="mb-8">
            <h2 className="text-sm font-black text-slate-900 uppercase mb-3 flex items-center gap-2">
                <span className="text-fuchsia-600">02.</span> PERFIL DEL CANDIDATO
            </h2>
            
            <div className="flex gap-6">
                <div className="w-1/3 bg-fuchsia-50 p-4 rounded-sm border border-fuchsia-100">
                    <h3 className="text-fuchsia-900 font-bold uppercase text-[10px] mb-2">Requisitos Clave</h3>
                    <ul className="space-y-2">
                        {profile.content.bullets.map((b: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-fuchsia-900 text-[10px] leading-tight">
                                <span className="text-fuchsia-500 mt-0.5">•</span> {b}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1">
                    <h3 className="font-bold text-slate-900 uppercase text-[10px] mb-2 border-b border-slate-200 pb-1">Propuesta de Valor</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {profile.content.valueProp.map((vp: any, i: number) => (
                             <div key={i}>
                                <span className="font-bold text-slate-800 text-[10px] uppercase block">{vp.title}</span>
                                <span className="text-slate-600 text-[10px]">{vp.text}</span>
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 03. CRONOGRAMA */}
        <section className="flex-1">
             <h2 className="text-sm font-black text-slate-900 uppercase mb-3 flex items-center gap-2">
                <span className="text-fuchsia-600">03.</span> CRONOGRAMA DE ETAPAS
            </h2>
            
            <div className="space-y-3">
                {timeline.content.map((item: any, i: number) => (
                    <div key={i} className="flex items-start gap-4 pb-3 border-b border-slate-100 last:border-0">
                        <div className="w-6 h-6 bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center rounded shrink-0">
                            {i + 1}
                        </div>
                        <div className="grid grid-cols-[100px_1fr] gap-4 w-full">
                             <div className="font-bold text-fuchsia-600 uppercase text-[10px] pt-0.5">{monthMap[item.month] || item.month}</div>
                             <div>
                                <h4 className="font-bold text-slate-900 text-[10px] uppercase mb-0.5">{item.title}</h4>
                                <p className="text-slate-500 text-[10px]">{item.details}</p>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <Footer page={1} />
      </div>

      <div className="print:break-before-page"></div>

      {/* --- PAGE 2 --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-[1.5cm] relative flex flex-col bg-white print:w-full print:max-w-none print:min-h-screen">
        <Header continuation />

        {/* 04. CAPACITACIONES (Full List) */}
        <section className="mb-8">
             <h2 className="text-sm font-black text-slate-900 uppercase mb-3 flex items-center gap-2">
                <span className="text-fuchsia-600">04.</span> CAPACITACIONES BACKOFFICE
            </h2>
            
            <div className="border border-slate-200 rounded-sm">
                <div className="bg-slate-50 p-3 border-b border-slate-200 flex justify-between items-center">
                    <div className="text-[10px] font-bold text-slate-600 uppercase">Formación Transversal (Viernes 14-18hs)</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Evaluación Mensual</div>
                </div>
                <div className="p-4 bg-white">
                    <div className="grid grid-cols-4 gap-y-2 gap-x-4">
                        {academy.content.topics.map((t: string, i: number) => (
                            <div key={i} className="flex items-start gap-1.5">
                                <div className="w-1 h-1 bg-fuchsia-500 rounded-full mt-1.5 shrink-0"></div>
                                <span className="text-[9px] text-slate-700 font-medium leading-tight">{t}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 05. DETALLE AREAS */}
        <section className="mb-8">
            <h2 className="text-sm font-black text-slate-900 uppercase mb-3 flex items-center gap-2">
                <span className="text-fuchsia-600">05.</span> ÁREAS DE ESPECIALIZACIÓN
            </h2>

            <div className="grid grid-cols-1 gap-4">
                {/* Granos */}
                <div className="border border-slate-200 p-4 rounded bg-white">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
                        <h3 className="text-green-700 font-bold uppercase text-[10px]">Mesa de Granos</h3>
                        <span className="text-[9px] font-bold text-slate-400">6 VACANTES</span>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr] gap-6">
                        <div>
                             <span className="text-[9px] font-bold text-slate-900 uppercase block mb-1">Dinámica</span>
                             <p className="text-[10px] text-slate-600 mb-2">{granos.content.description}</p>
                             <ul className="text-[9px] text-slate-500 space-y-0.5">
                                {granos.content.bullets.map((b:string, i:number) => <li key={i}>- {b}</li>)}
                             </ul>
                        </div>
                        <div>
                             <span className="text-[9px] font-bold text-slate-900 uppercase block mb-1">Mentores Asignados</span>
                             <div className="flex flex-wrap gap-1">
                                {mentoring.content.granosMentors.map((m:string, i:number) => (
                                    <span key={i} className="px-1.5 py-0.5 bg-green-50 text-green-800 text-[9px] font-medium rounded border border-green-100">{m}</span>
                                ))}
                             </div>
                        </div>
                    </div>
                </div>

                {/* Capital */}
                <div className="border border-slate-200 p-4 rounded bg-white">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
                        <h3 className="text-blue-700 font-bold uppercase text-[10px]">fyoCapital</h3>
                        <span className="text-[9px] font-bold text-slate-400">4 VACANTES</span>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr] gap-6">
                         <div>
                             <span className="text-[9px] font-bold text-slate-900 uppercase block mb-1">Dinámica</span>
                             <p className="text-[10px] text-slate-600 mb-2">{capital.content.description}</p>
                             <ul className="text-[9px] text-slate-500 space-y-0.5">
                                {capital.content.bullets.map((b:string, i:number) => <li key={i}>- {b}</li>)}
                             </ul>
                        </div>
                        <div>
                             <span className="text-[9px] font-bold text-slate-900 uppercase block mb-1">Mentores Asignados</span>
                             <div className="flex flex-wrap gap-1">
                                {mentoring.content.capitalMentors.map((m:string, i:number) => (
                                    <span key={i} className="px-1.5 py-0.5 bg-blue-50 text-blue-800 text-[9px] font-medium rounded border border-blue-100">{m}</span>
                                ))}
                             </div>
                        </div>
                    </div>
                </div>

                {/* Consultoria */}
                <div className="border border-slate-200 p-4 rounded bg-white">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
                        <h3 className="text-purple-700 font-bold uppercase text-[10px]">Consultoría</h3>
                        <span className="text-[9px] font-bold text-slate-400">{consultoriaCount}</span>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr] gap-6">
                         <div>
                             <span className="text-[9px] font-bold text-slate-900 uppercase block mb-1">Enfoque</span>
                             <p className="text-[10px] text-slate-600">
                                Desarrollo de perfil analítico con foco en estrategia comercial y asesoramiento de mercado.
                             </p>
                        </div>
                        <div>
                             <span className="text-[9px] font-bold text-slate-900 uppercase block mb-1">Mentores Asignados</span>
                             <div className="flex flex-wrap gap-1">
                                {mentoring.content.consultoriaMentors.map((m:string, i:number) => (
                                    <span key={i} className="px-1.5 py-0.5 bg-purple-50 text-purple-800 text-[9px] font-medium rounded border border-purple-100">{m}</span>
                                ))}
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* 06. CONTACTO */}
        <section className="flex-1">
             <h2 className="text-sm font-black text-slate-900 uppercase mb-3 flex items-center gap-2">
                <span className="text-fuchsia-600">06.</span> CONTACTO
            </h2>
            <div className="flex gap-8 items-start bg-slate-50 p-4 border border-slate-200 rounded">
                <div className="flex-1">
                    <p className="text-[10px] text-slate-600 mb-2 italic">"{closing.subtitle}"</p>
                </div>
                <div className="flex gap-6">
                    {closing.content.contacts.map((c: any, i: number) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="bg-slate-200 p-1.5 rounded-full">
                                <Mail size={12} className="text-slate-600" />
                            </div>
                            <div>
                                <span className="text-[9px] font-bold text-slate-500 uppercase block">{c.role}</span>
                                <span className="text-[10px] font-bold text-slate-900">{c.email}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <Footer page={2} />
      </div>
    </div>
  );
};
