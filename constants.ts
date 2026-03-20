
import { LucideIcon, Users, Target, BookOpen, Briefcase, Calendar, TrendingUp, DollarSign, Award, Clock, Layers, BarChart3, Compass, BrainCircuit } from "lucide-react";

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
      highlight: '10 Jóvenes Profesionales',
      tags: ['Mesa de Granos', 'Mercado de Capitales', 'Consultoría']
    }
  },
  {
    id: 'intro',
    type: 'objectives',
    title: 'Objetivos',
    subtitle: 'Potenciando el ecosistema de negocios',
    content: {
      mainGoal: "Incorporar 10 Jóvenes Profesionales con alto potencial comercial y financiero.",
      pillars: ["Inmersión Temprana", "Práctica Real", "Visión 360°"],
      stats: [
        { label: 'Mesa de Granos', value: '4 JP', icon: Users, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100' },
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
      { month: 'Abril', title: 'Cierre', details: 'Entrevistas finales, asignaciones de equipos y propuestas.' },
      { month: 'MAY-JUN', title: 'Ingreso & Onboarding', details: 'Bienvenida, inducción, asignación de mentores.' }
    ]
  },
  {
    id: 'training-granos',
    type: 'info',
    title: 'Capacitación: Granos',
    subtitle: 'Asignación Full-Time + Formación Específica',
    content: {
      description: "La asignación principal es Full-Time en la Mesa Comercial, complementada con una semana mensual dedicada exclusivamente a capacitaciones en áreas de soporte.",
      bullets: [
        "Rol activo en la Mesa Comercial de Granos.",
        "1 semana al mes rotativa en áreas técnicas.",
        "Visión integral de la cadena de valor."
      ],
      stats: [
        { label: 'ÁREA 1', value: 'Insumos', icon: Layers },
        { label: 'ÁREA 2', value: 'Análisis de Mercado', icon: BarChart3 },
        { label: 'ÁREA 3', value: 'Logística', icon: Compass },
        { label: 'ÁREA 4', value: 'Inteligencia y Desarrollo Comercial', icon: BrainCircuit }
      ]
    }
  },
  {
    id: 'academy-split',
    type: 'academy-split',
    title: 'Capacitaciones BackOffice',
    subtitle: 'Formación técnica transversal',
    content: {
        topics: [
            'Apertura, Cuentas y Boletos',
            'Confirmaciones',
            'Descargas',
            'Aplicaciones',
            'Parciales',
            'Notas Rectificatorias',
            'Depósito',
            'Calidades y Finales',
            'Canjes y Finales',
            'Matba',
            'Sustentable',
            'Cobranzas',
            'Pagos',
            'fyo Digital',
            'Créditos',
            'Mercaderías'
        ]
    }
  },
  {
    id: 'rotations-capital',
    type: 'info',
    title: 'Rotaciones: fyoCapital',
    subtitle: 'Inmersión Full-Time (4 JPs)',
    content: {
      description: "En este caso, la inmersión se plantea como jornada completa en cada área, para acompañar adecuadamente el proceso de aprendizaje sobre los instrumentos financieros.",
      bullets: [
        "Rotación mensual por área específica.",
        "Cobertura total de las áreas clave.",
        "Mayor profundidad técnica necesaria para finanzas."
      ],
      stats: [
        { label: 'ÁREA 1', value: 'Finanzas (FP)', icon: Target },
        { label: 'ÁREA 2', value: 'BackOffice fyoCapital', icon: BookOpen },
        { label: 'ÁREA 3', value: 'Análisis de Mercado', icon: TrendingUp },
        { label: 'ÁREA 4', value: 'Inteligencia y Desarrollo Comercial', icon: BrainCircuit }
      ]
    }
  },
  {
    id: 'mentoring-split',
    type: 'mentoring-split',
    title: 'Mentoreo',
    subtitle: 'Acompañamiento estratégico',
    content: {
        granosMentors: ['Augusto Theiler', 'Mateo Beli', 'Iván Ratner', 'José Rainaudo', 'Gastón Colombres', 'Juan Fagnano'],
        capitalMentors: ['Martín Rissi', 'Stefania Lattuga', 'Ángeles Tirelli', 'Fabricio Casanova'],
        consultoriaMentors: ['Giuliana Quirici', 'Dante Romano'],
        considerations: [
            "Feedback Mensual (45 min)",
            "Seguimiento de carrera",
            "Espacio de networking"
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
