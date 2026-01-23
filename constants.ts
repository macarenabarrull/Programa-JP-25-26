
import { LucideIcon, Users, Target, BookOpen, Briefcase, Calendar, TrendingUp, DollarSign, Award, Clock } from "lucide-react";

export interface SlideData {
  id: string;
  type: 'cover' | 'objectives' | 'info' | 'timeline' | 'grid' | 'table-granos' | 'table-capital' | 'mentoring-split' | 'academy-split' | 'closing';
  title?: string;
  subtitle?: string;
  content?: any;
}

export const SLIDES: SlideData[] = [
  {
    id: 'cover',
    type: 'cover',
    title: 'PROGRAMA DE JP 2026–2027',
    subtitle: 'Formando el futuro del ecosistema de negocios comerciales',
    content: {
      highlight: '12 Jóvenes Profesionales',
      tags: ['Mesa de Granos', 'Mercado de Capitales', 'Consultoría']
    }
  },
  {
    id: 'intro',
    type: 'objectives', // Changed type for custom design
    title: 'Objetivos',
    subtitle: 'Potenciando el ecosistema de negocios',
    content: {
      mainGoal: "Incorporar 12 Jóvenes Profesionales con alto potencial comercial y financiero.",
      pillars: ["Inmersión Temprana", "Práctica Real", "Visión 360°"],
      stats: [
        { label: 'Mesa de Granos', value: '6 JP', icon: Users, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100' },
        { label: 'fyoCapital', value: '4 JP', icon: DollarSign, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
        { label: 'Consultoría', value: '2 JP', icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' }
      ]
    }
  },
  {
    id: 'profile',
    type: 'info',
    title: 'Perfil buscado',
    subtitle: 'Requisitos y competencias claves',
    content: {
      description: "Orientado a jóvenes con breve base previa, curiosidad intelectual y actitud proactiva.",
      bullets: [
        "Al menos 1 año de experiencia en áreas comerciales, ventas, logística o finanzas.",
        "Estudiantes avanzados o graduados de carreras afines.",
        "Interés genuino por comercialización de granos y mercado financiero.",
        "Experiencia previa eleva autonomía y velocidad de aprendizaje."
      ],
      valueProp: [
        { title: "Liderá", text: "Tu propio desarrollo profesional." },
        { title: "Integrate", text: "A equipos comerciales reales desde el inicio." },
        { title: "Aprendé", text: "Del negocio en acción, no desde la teoría." },
        { title: "Viví", text: "La experiencia fyo desde adentro." }
      ]
    }
  },
  {
    id: 'timeline',
    type: 'timeline',
    title: 'Cronograma',
    subtitle: 'Roadmap del Programa JP 25-26',
    content: [
      { month: 'Enero', title: 'Diseño & Alineamiento', details: 'Armado integral, presentación a líderes, campaña de marketing.' },
      { month: 'Febrero', title: 'Reclutamiento', details: 'Hunting activo, universidades, referidos.' },
      { month: 'Mar-Abr', title: 'Evaluación', details: 'Entrevistas, 3 Assessment Centers, Psicotécnicos, FODA.' },
      { month: 'Abril', title: 'Cierre', details: 'Entrevistas finales, asignaciones y propuestas.' },
      { month: 'Mayo', title: 'Ingreso & Onboarding', details: 'Bienvenida, inducción, asignación de mentores.' }
    ]
  },
  {
    id: 'rotations-granos',
    type: 'grid',
    title: 'Rotaciones: Granos y Consultoría',
    subtitle: 'Estructura Dinámica (8 JPs)',
    content: {
      items: [
        { title: 'Mañana (09-12hs)', desc: 'Mesa Comercial de Granos. Foco en ejecución y mercado en vivo.', icon: TrendingUp },
        { title: 'Almuerzo (13-14hs)', desc: 'Espacio de networking informal.', icon: Clock },
        { title: 'Tarde (14-18hs)', desc: 'Áreas Asignadas (Insumos, Análisis, Logística, etc.). Visión sistémica.', icon: Target },
        { title: 'Mentores', desc: 'Acompañamiento en duplas para inmersión real.', icon: Users }
      ]
    }
  },
  {
    id: 'matrix-granos',
    type: 'table-granos',
    title: 'Matriz de Rotación: Granos',
    subtitle: '5 Meses - 4 Grupos - 5 Áreas',
    content: {}
  },
  {
    id: 'rotations-capital',
    type: 'info',
    title: 'Rotaciones: fyoCapital',
    subtitle: 'Inmersión Full-Time (4 JPs)',
    content: {
      description: "A diferencia de Granos, la inmersión es jornada completa en cada área debido a la complejidad de los instrumentos financieros.",
      bullets: [
        "Rotación mensual por área específica.",
        "Cobertura total de las 4 áreas clave.",
        "Mayor profundidad técnica necesaria para finanzas."
      ],
      stats: [
        { label: 'ÁREA 1', value: 'Finanzas (FP)', icon: Target, color: 'text-indigo-600' },
        { label: 'ÁREA 2', value: 'BackOffice fyoCapital', icon: BookOpen, color: 'text-indigo-600' },
        { label: 'ÁREA 3', value: 'Análisis de Mercado', icon: TrendingUp, color: 'text-indigo-600' },
        { label: 'ÁREA 4', value: 'Operadores', icon: Users, color: 'text-indigo-600' }
      ]
    }
  },
  {
    id: 'matrix-capital',
    type: 'table-capital',
    title: 'Matriz de Rotación: fyoCapital',
    subtitle: 'Programa JP 25-26',
    content: {}
  },
  {
    id: 'mentoring-split',
    type: 'mentoring-split',
    title: 'Mentoreo',
    subtitle: 'Acompañamiento estratégico',
    content: {
        granosMentors: ['Gastón Colombres', 'Augusto Theiler', 'Iván Ratner', 'José Rainaudo', 'Juan Fagnano', 'Mateo Beli'],
        capitalMentors: ['Martín Rissi', 'Inés Dumas', 'Stefania Lattuga', 'Ángeles Tirelli', 'Fabricio Casanova'],
        considerations: [
            "Feedback Mensual (45 min)",
            "Seguimiento de carrera",
            "Espacio de networking"
        ]
    }
  },
  {
    id: 'academy-split',
    type: 'academy-split',
    title: 'BackOffice Academy',
    subtitle: 'Capacitación técnica intensiva',
    content: {
        topics: [
            'Apertura de Cuentas y Boletos',
            'Canje y Finales',
            'Mercadería',
            'Pagos y Cobranzas',
            'Matba Rofex',
            'fyoDigital',
            'Aplicaciones',
            'Normativas y Compliance',
            'Entre otros...'
        ]
    }
  },
  {
    id: 'closing',
    type: 'closing',
    title: '¡Muchas gracias!',
    subtitle: 'Quedamos a disposición para seguir construyendo juntos.',
    content: {
      contacts: [
        { role: 'TBP', email: 'mbarrull@fyo.com' },
        { role: 'Talentos', email: 'talentos@fyo.com' }
      ]
    }
  }
];
