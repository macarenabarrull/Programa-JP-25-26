import React from 'react';
import { SlideData } from '../constants';
import { Users, BookOpen, Target, Calendar, Layers, ArrowRight, BrainCircuit, DollarSign, Briefcase, ChevronRight } from 'lucide-react';

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

  // Helper for Consultoria count
  const consultoriaCount = objectives.content.stats.find((s:any) => s.label === 'Consultoría')?.value || '2 JP';

  const Header = ({ continuation = false }) => (
    <header className="mb-8">
        <div className="flex justify-between items-end mb-2">
            <div>
                <h3 className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                    REPORTE EJECUTIVO PARA LÍDERES {continuation && <span className="text-slate-300">| CONTINUACIÓN</span>}
                </h3>
                <h1 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none">
                    PROGRAMA JP 2026–2027
                </h1>
            </div>
            <div className="text-right">
                <div className="text-4xl font-bold text-slate-200 tracking-tighter leading-none">FYO</div>
                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">TALENTO Y CULTURA</div>
            </div>
        </div>
        <div className="w-full h-0.5 bg-slate-900"></div>
    </header>
  );

  const Footer = ({ page }: { page: number }) => (
    <footer className="mt-auto pt-4 flex justify-between items-center text-[9px] text-slate-400 border-t border-slate-100">
        <div>Programa JP 2026 - Página {page}/2</div>
        <div>fyo Talento y Cultura</div>
    </footer>
  );

  return (
    <div className="w-full bg-white text-slate-800 font-sans text-[10px] leading-relaxed print:p-0">
        
      {/* --- PAGE 1 --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-[1.5cm] relative flex flex-col bg-white print:w-full print:max-w-none print:min-h-screen">
        <Header />
        
        {/* 01. CONTEXTO */}
        <section className="mb-8">
            <h2 className="text-sm font-bold text-slate-900 uppercase mb-1 flex items-center gap-2">
                <span className="text-slate-400">01.</span> VISIÓN: 3 PERFILES, 1 ECOSISTEMA
            </h2>
            <p className="text-slate-500 italic mb-4 text-[10px] border-b border-slate-100 pb-2">
               {objectives.content.mainGoal} El programa unifica la formación base pero especializa la experiencia práctica.
            </p>

            <div className="grid grid-cols-3 gap-4">
                {/* Box 1: Granos */}
                <div className="bg-green-50/50 p-4 rounded-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <Users size={12} className="text-green-700"/>
                        <h3 className="font-bold text-slate-800 uppercase text-[9px]">Mesa de Granos</h3>
                    </div>
                    <p className="text-slate-600 text-[9px] leading-snug mb-2">
                        Perfil comercial con visión de cadena de valor.
                    </p>
                    <span className="text-[10px] font-bold text-slate-900">6 Vacantes</span>
                </div>

                {/* Box 2: Capital */}
                <div className="bg-blue-50/50 p-4 rounded-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <DollarSign size={12} className="text-blue-700"/>
                        <h3 className="font-bold text-slate-800 uppercase text-[9px]">fyoCapital</h3>
                    </div>
                    <p className="text-slate-600 text-[9px] leading-snug mb-2">
                        Perfil financiero técnico con rotación específica.
                    </p>
                    <span className="text-[10px] font-bold text-slate-900">4 Vacantes</span>
                </div>

                {/* Box 3: Consultoria */}
                <div className="bg-purple-50/50 p-4 rounded-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={12} className="text-purple-700"/>
                        <h3 className="font-bold text-slate-800 uppercase text-[9px]">Consultoría</h3>
                    </div>
                    <p className="text-slate-600 text-[9px] leading-snug mb-2">
                        Perfil analítico enfocado en estrategia de mercado.
                    </p>
                    <span className="text-[10px] font-bold text-slate-900">{consultoriaCount}</span>
                </div>
            </div>
        </section>

        {/* 02. PERFIL */}
        <section className="mb-8">
            <h2 className="text-sm font-bold text-slate-900 uppercase mb-4 flex items-center gap-2">
                <span className="text-slate-400">02.</span> DEFINICIÓN: PERFIL DEL CANDIDATO
            </h2>
            
            <div className="flex gap-6">
                {/* Purple Box Style */}
                <div className="w-1/3 bg-purple-50 p-4 rounded-sm">
                    <h3 className="text-purple-900 font-bold uppercase text-[9px] mb-3">Competencias Clave</h3>
                    <ul className="space-y-2">
                        {profile.content.bullets.slice(0,4).map((b: string, i: number) => (
                            <li key={i} className="flex items-start gap-1.5 text-purple-800 text-[9px] leading-tight">
                                <span className="text-purple-400 mt-0.5">•</span> {b}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Description */}
                <div className="flex-1 space-y-4">
                    <div>
                        <h4 className="font-bold text-slate-900 uppercase text-[9px] mb-1">PASO 1: REQUISITOS</h4>
                        <p className="text-slate-600 text-[10px]">
                            Estudiantes avanzados o graduados de Cs. Económicas, Agronomía o afines. Experiencia previa (1 año) valorada pero no excluyente. Foco en actitud proactiva y curiosidad intelectual.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 uppercase text-[9px] mb-1">PASO 2: PROPUESTA DE VALOR</h4>
                        <p className="text-slate-600 text-[10px]">
                            Integración inmediata a equipos reales ("Aprender haciendo"). Liderazgo del propio desarrollo. Visión 360° del negocio agroindustrial.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* 03. ROADMAP */}
        <section className="mb-6 flex-1">
             <h2 className="text-sm font-bold text-slate-900 uppercase mb-4 flex items-center gap-2">
                <span className="text-slate-400">03.</span> HOJA DE RUTA (ETAPAS)
            </h2>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {timeline.content.map((item: any, i: number) => (
                    <div key={i} className="flex gap-3">
                        <div className="w-5 h-5 bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center rounded-sm shrink-0">
                            {i + 1}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 uppercase text-[9px] mb-0.5">{item.title}</h4>
                            <p className="text-slate-500 text-[9px] leading-tight">
                                {item.month}: {item.details}
                            </p>
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

        {/* 04. ACADEMY (Table Style from Ref Page 2) */}
        <section className="mb-10">
             <h2 className="text-sm font-bold text-slate-900 uppercase mb-4 flex items-center gap-2">
                <span className="text-slate-400">04.</span> FORMACIÓN TRANSVERSAL (ACADEMY)
            </h2>
            
            <div className="border border-slate-200 rounded-sm overflow-hidden">
                <div className="flex bg-slate-50 border-b border-slate-200 text-[9px] font-bold text-slate-500 uppercase p-2">
                    <div className="w-1/4">Formato</div>
                    <div className="flex-1">Contenidos Clave (Muestreo)</div>
                </div>
                <div className="flex text-[9px] p-3 text-slate-600">
                    <div className="w-1/4 pr-4 border-r border-slate-100">
                        <div className="mb-2"><strong className="text-slate-900">Frecuencia:</strong><br/>Viernes 14-18hs</div>
                        <div className="mb-2"><strong className="text-slate-900">Duración:</strong><br/>6 Meses</div>
                        <div><strong className="text-slate-900">Evaluación:</strong><br/>Examen Mensual</div>
                    </div>
                    <div className="flex-1 pl-4 grid grid-cols-3 gap-2">
                        {academy.content.topics.slice(0, 12).map((t: string, i: number) => (
                            <div key={i} className="flex items-center gap-1.5">
                                <div className="w-1 h-1 bg-fuchsia-400 rounded-full"></div>
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 05. TRACKS DETAIL (Matrix Style from Ref Page 2 'Matriz de Evaluacion') */}
        <section className="mb-8">
            <h2 className="text-sm font-bold text-slate-900 uppercase mb-4 flex items-center gap-2">
                <span className="text-slate-400">05.</span> DETALLE POR TRACK
            </h2>

            <div className="grid grid-cols-3 gap-4">
                {/* Track 1 */}
                <div className="border border-slate-200 p-4 rounded-sm">
                    <h3 className="text-green-700 font-bold uppercase text-[10px] mb-3 border-b border-slate-100 pb-1">Mesa de Granos</h3>
                    <div className="mb-3">
                        <span className="text-[9px] font-bold text-slate-400 uppercase block mb-0.5">DINÁMICA:</span>
                        <p className="text-[9px] text-slate-700">Full-Time Comercial + 1 Sem/Mes en Soporte.</p>
                    </div>
                    <div className="mb-3">
                         <span className="text-[9px] font-bold text-slate-400 uppercase block mb-0.5">FOCO:</span>
                         <p className="text-[9px] text-slate-700">Insumos, Logística, Análisis, IDC.</p>
                    </div>
                     <div>
                         <span className="text-[9px] font-bold text-slate-400 uppercase block mb-0.5">MENTORES:</span>
                         <p className="text-[9px] text-slate-500">{mentoring.content.granosMentors.slice(0,4).join(', ')}...</p>
                    </div>
                </div>

                {/* Track 2 */}
                <div className="border border-slate-200 p-4 rounded-sm">
                    <h3 className="text-blue-700 font-bold uppercase text-[10px] mb-3 border-b border-slate-100 pb-1">fyoCapital</h3>
                    <div className="mb-3">
                        <span className="text-[9px] font-bold text-slate-400 uppercase block mb-0.5">DINÁMICA:</span>
                        <p className="text-[9px] text-slate-700">Rotación Full-Time mensual por área.</p>
                    </div>
                    <div className="mb-3">
                         <span className="text-[9px] font-bold text-slate-400 uppercase block mb-0.5">FOCO:</span>
                         <p className="text-[9px] text-slate-700">Finanzas, BackOffice, Mercado, IDC.</p>
                    </div>
                     <div>
                         <span className="text-[9px] font-bold text-slate-400 uppercase block mb-0.5">MENTORES:</span>
                         <p className="text-[9px] text-slate-500">{mentoring.content.capitalMentors.join(', ')}.</p>
                    </div>
                </div>

                {/* Track 3 */}
                <div className="border border-slate-200 p-4 rounded-sm">
                    <h3 className="text-purple-700 font-bold uppercase text-[10px] mb-3 border-b border-slate-100 pb-1">Consultoría</h3>
                     <div className="mb-3">
                        <span className="text-[9px] font-bold text-slate-400 uppercase block mb-0.5">DINÁMICA:</span>
                        <p className="text-[9px] text-slate-700">Full-Time Consultoría + Soporte Rotativo.</p>
                    </div>
                    <div className="mb-3">
                         <span className="text-[9px] font-bold text-slate-400 uppercase block mb-0.5">FOCO:</span>
                         <p className="text-[9px] text-slate-700">Asesoramiento comercial y estrategia.</p>
                    </div>
                     <div>
                         <span className="text-[9px] font-bold text-slate-400 uppercase block mb-0.5">MENTORES:</span>
                         <p className="text-[9px] text-slate-500">{mentoring.content.consultoriaMentors.join(', ')}.</p>
                    </div>
                </div>
            </div>
        </section>

         {/* 06. CLOSING (Reference style 07 'Cierre y Propuesta') */}
        <section className="mb-8 flex-1">
             <h2 className="text-sm font-bold text-slate-900 uppercase mb-4 flex items-center gap-2">
                <span className="text-slate-400">06.</span> CIERRE Y PRÓXIMOS PASOS
            </h2>
            <div className="flex gap-4 border-l-2 border-fuchsia-500 pl-4 py-1">
                <div className="flex-1">
                    <h4 className="font-bold text-slate-900 uppercase text-[9px] mb-1">1. VALIDACIÓN</h4>
                    <p className="text-slate-600 text-[9px]">Confirmación de vacantes y mentores asignados.</p>
                </div>
                <div className="w-px bg-slate-200"></div>
                 <div className="flex-1">
                    <h4 className="font-bold text-slate-900 uppercase text-[9px] mb-1">2. DIFUSIÓN</h4>
                    <p className="text-slate-600 text-[9px]">Lanzamiento de campaña interna y externa.</p>
                </div>
                <div className="w-px bg-slate-200"></div>
                 <div className="flex-1">
                    <h4 className="font-bold text-slate-900 uppercase text-[9px] mb-1">3. INICIO</h4>
                    <p className="text-slate-600 text-[9px]">Ingreso proyectado para Mayo 2026.</p>
                </div>
            </div>
        </section>

        <Footer page={2} />
      </div>

    </div>
  );
};
