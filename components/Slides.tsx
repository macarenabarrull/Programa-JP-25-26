import React from 'react';
import { SlideData, SLIDES } from '../constants';
import { CheckCircle2, ArrowRight, Users, Target, BookOpen, TrendingUp, Calendar, GraduationCap, Clock, Download, FileText, Presentation, Mail } from 'lucide-react';
import pptxgen from "pptxgenjs";

interface SlideProps {
  data: SlideData;
  onPrint?: () => void;
  onDownloadPPTX?: () => void;
}

// 1. Cover Slide
export const CoverSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-start h-full pl-0 md:pl-10 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-b from-fuchsia-400/20 to-purple-400/20 blur-3xl rounded-full opacity-50 pointer-events-none" />
      
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/30 bg-white/50 text-fuchsia-600 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
        Talent Program
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]">
        PROGRAMA<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600">JP 2026</span>
        <span className="text-purple-300">_</span>
      </h1>
      
      <p className="text-2xl md:text-3xl text-slate-600 font-light max-w-2xl border-l-4 border-fuchsia-400 pl-6 my-8">
        {data.subtitle}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full max-w-3xl">
        {data.content.tags.map((tag: string, idx: number) => (
          <div key={idx} className="flex items-center gap-3 p-4 bg-white/60 border border-purple-100 rounded-lg group hover:border-fuchsia-400 hover:bg-white transition-all shadow-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-purple-400 group-hover:bg-fuchsia-500 transition-colors" />
            <span className="text-slate-700 font-medium group-hover:text-slate-900">{tag}</span>
          </div>
        ))}
      </div>

       <div className="mt-12 flex items-center gap-4 text-sm font-mono text-purple-900/40">
         <span>fyo.com</span>
         <span className="w-px h-3 bg-purple-300"></span>
         <span>@somosfyo</span>
       </div>
    </div>
  );
};

// 2. Info Slide
export const InfoSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center">
      <div className="lg:col-span-7 space-y-8">
        <p className="text-2xl text-slate-700 font-light leading-relaxed">
          {data.content.description}
        </p>
        
        {data.content.bullets && (
            <div className="space-y-4 mt-8">
                {data.content.bullets.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/40 transition-colors border border-transparent hover:border-purple-200">
                        <CheckCircle2 className="text-fuchsia-500 shrink-0 mt-1" size={24} />
                        <span className="text-slate-700 text-lg">{item}</span>
                    </div>
                ))}
            </div>
        )}
      </div>

      <div className="lg:col-span-5 flex flex-col gap-4">
        {data.content.stats && data.content.stats.map((stat: any, idx: number) => {
            const Icon = stat.icon;
            return (
                <div key={idx} className="p-6 bg-white/60 border border-purple-100 rounded-2xl flex items-center justify-between hover:border-fuchsia-300 transition-all shadow-sm group backdrop-blur-md">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</span>
                        <span className="text-3xl md:text-4xl font-black text-slate-900 group-hover:text-fuchsia-600 transition-colors leading-none">
                            {stat.value}
                        </span>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:text-white group-hover:bg-fuchsia-500 transition-all shrink-0 ml-4">
                        <Icon size={24} />
                    </div>
                </div>
            )
        })}

        {data.content.valueProp && (
             <div className="grid grid-cols-2 gap-4">
                {data.content.valueProp.map((vp: any, idx: number) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white/60 border border-purple-100 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300 backdrop-blur-md shadow-sm">
                         <div className="text-fuchsia-500 font-bold text-lg">0{idx + 1}</div>
                         <div>
                             <span className="text-slate-900 font-bold block mb-1">{vp.title}</span>
                             <span className="text-slate-600 text-sm leading-snug">{vp.text}</span>
                         </div>
                    </div>
                ))}
             </div>
        )}
      </div>
    </div>
  );
};

// 3. Timeline Slide
export const TimelineSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="h-full flex items-center">
        <div className="w-full relative">
            {/* Horizontal Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-purple-200 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {data.content.map((item: any, idx: number) => (
                    <div key={idx} className="relative group">
                        {/* Dot */}
                        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-fuchsia-500 z-10 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(217,70,239,0.3)]"></div>
                        
                        {/* Card */}
                        <div className={`md:absolute md:left-0 md:w-full p-4 ${idx % 2 === 0 ? 'md:bottom-10 md:pb-8' : 'md:top-10 md:pt-8'}`}>
                            <div className="p-5 bg-white/70 border border-purple-100 rounded-xl hover:border-fuchsia-400 transition-colors h-full flex flex-col justify-between group-hover:bg-white group-hover:shadow-md backdrop-blur-md">
                                <div>
                                    <span className="text-fuchsia-600 font-mono text-xs font-bold uppercase mb-2 block">{item.month}</span>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                                </div>
                                <p className="text-slate-500 text-xs mt-2 border-t border-purple-100 pt-2">{item.details}</p>
                            </div>
                            
                            {/* Connecting Line */}
                             <div className={`hidden md:block absolute left-1/2 w-px bg-gradient-to-b from-fuchsia-300 to-transparent -translate-x-1/2 h-8 
                                ${idx % 2 === 0 ? 'bottom-0 translate-y-2' : 'top-0 -translate-y-2'}`} 
                             />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

// 4. Grid Slide
export const GridSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {data.content.items.map((item: any, idx: number) => {
        const Icon = item.icon;
        return (
            <div key={idx} className="relative p-8 bg-white/60 rounded-3xl border border-purple-100 overflow-hidden group hover:border-fuchsia-400 transition-colors backdrop-blur-md shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-100 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-fuchsia-200 blur-2xl" />
                
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-6 group-hover:bg-fuchsia-600 group-hover:border-fuchsia-500 group-hover:text-white transition-all text-purple-600">
                        <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">{item.desc}</p>
                </div>
            </div>
        );
      })}
    </div>
  );
};

// 5. Table Slide (Granos)
export const TableGranosSlide: React.FC<SlideProps> = () => {
  const months = ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5'];
  const areas = ['Insumos', 'Análisis', 'Consultoría', 'Logística', 'Intel. Com.'];
  const matrix = [
    [1, 2, 3, 4, null],
    [null, 1, 2, 3, 4],
    [4, null, 1, 2, 3],
    [3, 4, null, 1, 2],
    [2, 3, 4, null, 1],
  ];

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border border-purple-100 bg-white/60 backdrop-blur-md shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-5 bg-purple-50 text-slate-500 font-medium text-sm border-b border-purple-100 uppercase tracking-wider">Período</th>
              {areas.map((area, i) => (
                  <th key={i} className="p-5 bg-purple-50/50 text-slate-800 font-bold text-sm border-b border-purple-100 border-l border-purple-100 text-center">{area}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {months.map((month, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-white transition-colors group">
                <td className="p-5 font-mono text-slate-600 text-sm border-b border-purple-100 bg-purple-50/30 group-hover:text-fuchsia-600">{month}</td>
                {matrix[rowIndex].map((group, colIndex) => (
                  <td key={colIndex} className="p-2 border-b border-purple-100 border-l border-purple-100/50 text-center">
                    {group ? (
                      <div className={`mx-auto w-12 h-10 rounded-md flex items-center justify-center text-sm font-bold shadow-sm transition-all hover:scale-105 text-white
                        ${group === 1 ? 'bg-indigo-500' : ''}
                        ${group === 2 ? 'bg-fuchsia-500' : ''}
                        ${group === 3 ? 'bg-purple-600' : ''}
                        ${group === 4 ? 'bg-rose-500' : ''}
                      `}>
                        G{group}
                      </div>
                    ) : (
                      <span className="text-purple-200 text-xl">·</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 flex flex-wrap gap-6 justify-center">
          <LegendItem color="bg-indigo-500" label="Grupo 1 (JP 1-2)" />
          <LegendItem color="bg-fuchsia-500" label="Grupo 2 (JP 3-4)" />
          <LegendItem color="bg-purple-600" label="Grupo 3 (JP 5-6)" />
          <LegendItem color="bg-rose-500" label="Grupo 4 (JP 7-8)" />
      </div>
    </div>
  );
};

const LegendItem = ({ color, label }: { color: string, label: string }) => (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-purple-100">
        <span className={`w-2.5 h-2.5 rounded-full ${color}`}></span>
        <span className="text-slate-600 text-xs font-medium">{label}</span>
    </div>
)

// 6. Table Slide (Capital)
export const TableCapitalSlide: React.FC<SlideProps> = () => {
    const data = [
        { month: '1', jp1: 'Finanzas (FP)', jp2: 'BackOffice fyoCapital', jp3: 'Análisis de Mercado', jp4: 'Operadores' },
        { month: '2', jp1: 'BackOffice fyoCapital', jp2: 'Análisis de Mercado', jp3: 'Operadores', jp4: 'Finanzas (FP)' },
        { month: '3', jp1: 'Análisis de Mercado', jp2: 'Operadores', jp3: 'Finanzas (FP)', jp4: 'BackOffice fyoCapital' },
        { month: '4', jp1: 'Operadores', jp2: 'Finanzas (FP)', jp3: 'BackOffice fyoCapital', jp4: 'Análisis de Mercado' },
    ];

    return (
        <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-purple-100 bg-white/60 backdrop-blur-md shadow-sm">
                <div className="grid grid-cols-5 bg-purple-50 border-b border-purple-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <div className="p-5">Mes</div>
                    <div className="p-5 text-fuchsia-600">JP 1</div>
                    <div className="p-5 text-fuchsia-600">JP 2</div>
                    <div className="p-5 text-fuchsia-600">JP 3</div>
                    <div className="p-5 text-fuchsia-600">JP 4</div>
                </div>
                {data.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-5 border-b border-purple-100 hover:bg-white transition-colors text-sm group">
                        <div className="p-5 font-mono text-slate-600 flex items-center bg-purple-50/30 group-hover:text-fuchsia-700">{row.month}</div>
                        <div className="p-5 text-slate-700 flex items-center border-l border-purple-100">{row.jp1}</div>
                        <div className="p-5 text-slate-700 flex items-center border-l border-purple-100">{row.jp2}</div>
                        <div className="p-5 text-slate-700 flex items-center border-l border-purple-100">{row.jp3}</div>
                        <div className="p-5 text-slate-700 flex items-center border-l border-purple-100">{row.jp4}</div>
                    </div>
                ))}
            </div>
            <p className="mt-4 text-center text-slate-400 text-sm">Rotación Full-Time mensual por área</p>
        </div>
    );
};

// 7. New Mentoring Slide (Split 1/2)
export const MentoringSplitSlide: React.FC<SlideProps> = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Left Col: Lists of Mentors */}
            <div className="space-y-6">
                 {/* Granos */}
                 <div className="bg-white/60 p-6 rounded-2xl border border-purple-100 backdrop-blur-md hover:border-fuchsia-300 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Mentores Granos
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {data.content.granosMentors.map((m: string, i: number) => (
                            <li key={i} className="flex items-center gap-2 text-slate-700">
                                <CheckCircle2 size={16} className="text-purple-400" />
                                <span className="text-sm font-medium">{m}</span>
                            </li>
                        ))}
                    </ul>
                 </div>

                 {/* Capital */}
                 <div className="bg-white/60 p-6 rounded-2xl border border-purple-100 backdrop-blur-md hover:border-fuchsia-300 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        Mentores fyoCapital
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {data.content.capitalMentors.map((m: string, i: number) => (
                            <li key={i} className="flex items-center gap-2 text-slate-700">
                                <CheckCircle2 size={16} className="text-purple-400" />
                                <span className="text-sm font-medium">{m}</span>
                            </li>
                        ))}
                    </ul>
                 </div>
            </div>

            {/* Right Col: Considerations */}
            <div className="bg-fuchsia-50/50 p-8 rounded-3xl border border-fuchsia-100 flex flex-col justify-center backdrop-blur-md">
                <div className="mb-6 flex items-center gap-4">
                     <div className="p-3 bg-white rounded-xl shadow-sm text-fuchsia-600">
                        <Users size={28} />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900">Consideraciones del Rol</h3>
                </div>
                
                <p className="text-slate-600 mb-8 leading-relaxed">
                    El rol del mentor es clave para facilitar la inmersión cultural y técnica del JP, brindando guía estratégica más allá del día a día.
                </p>

                <div className="grid grid-cols-1 gap-4">
                    {data.content.considerations.map((item: string, i: number) => (
                        <div key={i} className="p-4 bg-white rounded-xl border border-purple-50 shadow-sm flex items-center gap-3">
                             <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></div>
                             <span className="text-slate-800 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 8. New Academy Slide (Split 2/2)
export const AcademySplitSlide: React.FC<SlideProps> = ({ data }) => {
    return (
        <div className="flex flex-col h-full gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/60 p-6 rounded-2xl border border-purple-100 backdrop-blur-md flex flex-col items-center text-center justify-center hover:-translate-y-1 transition-transform">
                    <Calendar size={32} className="text-fuchsia-500 mb-3" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cuándo</span>
                    <span className="text-xl font-bold text-slate-900 mt-1">Viernes 14-18hs</span>
                </div>
                <div className="bg-white/60 p-6 rounded-2xl border border-purple-100 backdrop-blur-md flex flex-col items-center text-center justify-center hover:-translate-y-1 transition-transform">
                    <GraduationCap size={32} className="text-purple-500 mb-3" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Frecuencia</span>
                    <span className="text-xl font-bold text-slate-900 mt-1">2 Módulos / Sem</span>
                </div>
                <div className="bg-white/60 p-6 rounded-2xl border border-purple-100 backdrop-blur-md flex flex-col items-center text-center justify-center hover:-translate-y-1 transition-transform">
                    <Clock size={32} className="text-indigo-500 mb-3" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Evaluación</span>
                    <span className="text-xl font-bold text-slate-900 mt-1">Examen Mensual</span>
                </div>
            </div>

            <div className="flex-1 bg-white/60 rounded-3xl border border-purple-100 p-8 md:p-12 flex flex-col justify-center items-start backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-50 rounded-bl-full -mr-20 -mt-20 pointer-events-none" />
                
                <div className="relative z-10 max-w-3xl">
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">Contenidos del Programa</h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        BackOffice Academy es un espacio de formación técnica intensiva diseñado para nivelar conocimientos y profundizar en la operatoria del negocio.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Circuitos Administrativos', 'Herramientas de Gestión', 'Normativas y Compliance', 'Análisis de Contratos', 'Gestión de Riesgos', 'Logística Aplicada'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                                <CheckCircle2 size={20} className="text-fuchsia-500" />
                                <span className="text-slate-800 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// 9. Closing Slide with Download Logic
export const ClosingSlide: React.FC<SlideProps> = ({ data, onPrint }) => {

    const generatePPTX = async () => {
        const pres = new pptxgen();
        
        // Metadata
        pres.title = "Programa JP 2026-2027";
        pres.company = "fyo";

        SLIDES.forEach((slide) => {
            const pptxSlide = pres.addSlide();
            pptxSlide.background = { color: "F5F3FF" }; // Violet 50

            // Header for slides (except cover/closing)
            if (slide.type !== 'cover' && slide.type !== 'closing') {
                pptxSlide.addText(slide.title || "", { x: 0.5, y: 0.5, fontSize: 32, bold: true, color: "0F172A" });
                if (slide.subtitle) {
                    pptxSlide.addText(slide.subtitle, { x: 0.5, y: 1.0, fontSize: 18, color: "475569" });
                    pptxSlide.addShape(pres.ShapeType.line, { x: 0.5, y: 1.35, w: 9, h: 0, line: { color: "C084FC", width: 2 } });
                }
            }

            // Content Logic
            if (slide.type === 'cover') {
                pptxSlide.addText("PROGRAMA JP 2026-2027", { x: 1, y: 2, w: '80%', fontSize: 54, bold: true, align: 'center', color: "0F172A" });
                pptxSlide.addText(slide.subtitle || "", { x: 1, y: 3.5, w: '80%', fontSize: 24, align: 'center', color: "475569" });
                if (slide.content?.tags) {
                    pptxSlide.addText(slide.content.tags.join(" | "), { x: 1, y: 5, w: '80%', fontSize: 14, align: 'center', color: "C084FC" });
                }
            }
            else if (slide.type === 'info') {
                 if(slide.content.description) {
                    pptxSlide.addText(slide.content.description, { x: 0.5, y: 1.8, w: '45%', fontSize: 14, color: "334155" });
                 }
                 if (slide.content.bullets) {
                    pptxSlide.addText(slide.content.bullets.map((b: string) => `• ${b}`).join("\n"), { x: 0.5, y: 2.5, w: '45%', fontSize: 12, color: "334155", lineSpacing: 18 });
                 }
                 if(slide.content.stats) {
                     let yOffset = 1.8;
                     slide.content.stats.forEach((stat: any) => {
                         pptxSlide.addText(`${stat.label}: ${stat.value}`, { x: 5.5, y: yOffset, w: '40%', fontSize: 16, bold: true, color: "0F172A", fill: { color: "FFFFFF" } });
                         yOffset += 1.0;
                     });
                 }
            }
            else if (slide.type === 'timeline') {
                let xOffset = 0.5;
                slide.content.forEach((item: any) => {
                    pptxSlide.addText(item.month, { x: xOffset, y: 2, w: 1.5, fontSize: 10, bold: true, color: "C084FC" });
                    pptxSlide.addText(item.title, { x: xOffset, y: 2.3, w: 1.5, fontSize: 12, bold: true, color: "0F172A" });
                    pptxSlide.addText(item.details, { x: xOffset, y: 2.7, w: 1.5, fontSize: 10, color: "475569" });
                    xOffset += 1.8;
                });
            }
            else if (slide.type === 'grid') {
                 let xPos = 0.5;
                 let yPos = 1.8;
                 slide.content.items.forEach((item: any, idx: number) => {
                     if(idx === 2) { xPos = 0.5; yPos = 4; } // New row
                     else if (idx === 1 || idx === 3) { xPos = 5.2; }
                     
                     pptxSlide.addText(item.title, { x: xPos, y: yPos, w: 4, fontSize: 14, bold: true, color: "0F172A" });
                     pptxSlide.addText(item.desc, { x: xPos, y: yPos + 0.4, w: 4, fontSize: 11, color: "475569" });
                 });
            }
            else if (slide.type === 'mentoring-split') {
                 pptxSlide.addText("Mentores Granos:", { x: 0.5, y: 1.8, fontSize: 14, bold: true });
                 pptxSlide.addText(slide.content.granosMentors.join("\n"), { x: 0.5, y: 2.2, h: 3, fontSize: 11, lineSpacing: 16 });
                 
                 pptxSlide.addText("Mentores Capital:", { x: 4, y: 1.8, fontSize: 14, bold: true });
                 pptxSlide.addText(slide.content.capitalMentors.join("\n"), { x: 4, y: 2.2, h: 3, fontSize: 11, lineSpacing: 16 });

                 pptxSlide.addText("Consideraciones:", { x: 7.5, y: 1.8, fontSize: 14, bold: true });
                 pptxSlide.addText(slide.content.considerations.join("\n"), { x: 7.5, y: 2.2, h: 3, fontSize: 11, lineSpacing: 16 });
            }
             else if (slide.type === 'closing') {
                pptxSlide.addText("¡Muchas gracias!", { x: 1, y: 2, w: '80%', fontSize: 54, bold: true, align: 'center', color: "0F172A" });
                pptxSlide.addText(slide.subtitle || "", { x: 1, y: 3.5, w: '80%', fontSize: 24, align: 'center', color: "475569" });
                if (slide.content?.contact) {
                    pptxSlide.addText(`Contacto: ${slide.content.contact.email}`, { x: 1, y: 5, w: '80%', fontSize: 18, align: 'center', color: "C084FC" });
                }
            }
            // Fallback for tables (simplified text)
            else if (slide.type.includes('table')) {
                 pptxSlide.addText("Ver presentación web para el detalle interactivo de la matriz.", { x: 0.5, y: 2, fontSize: 14, italic: true, color: "64748B" });
            }

        });

        pres.writeFile({ fileName: "Programa-JP-2026-2027.pptx" });
    };

    return (
        <div className="flex flex-col justify-center items-center h-full text-center relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-fuchsia-400/20 to-purple-500/20 blur-[120px] rounded-full opacity-60 pointer-events-none" />

            <div className="mb-12 relative z-10 animate-fade-in-down">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-tight">
                    ¡Muchas gracias!
                </h1>
                <p className="text-2xl text-slate-600 font-light">
                    {data.subtitle}
                </p>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6 animate-fade-in-up">
                 <div className="p-8 bg-white/70 backdrop-blur-md rounded-3xl border border-purple-100 shadow-sm flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-16 w-16 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-600">
                        <Mail size={32} />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{data.content.contact.role}</div>
                        <a href={`mailto:${data.content.contact.email}`} className="text-2xl font-bold text-slate-900 hover:text-fuchsia-600 transition-colors">
                            {data.content.contact.email}
                        </a>
                    </div>
                 </div>

                 {/* Download Area */}
                 <div className="mt-12 flex gap-4 no-print">
                    <button 
                        onClick={onPrint}
                        className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-xl hover:border-fuchsia-500 hover:text-fuchsia-600 transition-all font-medium text-slate-600 group shadow-sm"
                    >
                        <FileText size={20} className="group-hover:scale-110 transition-transform" />
                        Descargar PDF
                    </button>
                    <button 
                        onClick={generatePPTX}
                        className="flex items-center gap-3 px-6 py-4 bg-slate-900 text-white border border-slate-900 rounded-xl hover:bg-fuchsia-600 hover:border-fuchsia-600 transition-all font-medium shadow-lg hover:shadow-fuchsia-500/30"
                    >
                        <Presentation size={20} />
                        Descargar PPTX
                    </button>
                 </div>
            </div>
        </div>
    )
}