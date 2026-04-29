// src/components/TechStack.tsx
import { motion } from 'framer-motion';

const TechStack = () => {
  const skills = [
    { 
      name: "React", 
      role: "Frontend Core", 
      desc: "Creación de interfaces dinámicas y componentes reutilizables.",
      accent: "group-hover:border-cyan-400",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]"
    },
    { 
      name: "TypeScript", 
      role: "Tipado Estricto", 
      desc: "Desarrollo escalable, reducción de errores y código autocomplementado.",
      accent: "group-hover:border-blue-500",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
    },
    { 
      name: "Tailwind CSS", 
      role: "Estilos Funcionales", 
      desc: "Diseño responsivo, rápido y con sistemas de diseño consistentes.",
      accent: "group-hover:border-teal-400",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.3)]"
    },
    { 
      name: "Arquitectura & Lógica", 
      role: "Optimización", 
      desc: "Manejo eficiente de memoria en el navegador y estandarización de procesos.",
      accent: "group-hover:border-purple-500",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]"
    },
    { 
      name: "Integración de APIs", 
      role: "Backend Comms", 
      desc: "Consumo de servicios RESTful y sincronización de estados complejos.",
      accent: "group-hover:border-fuchsia-500",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(217,70,239,0.3)]"
    },
    { 
      name: "Pasarelas de Pago", 
      role: "Transacciones", 
      desc: "Implementación de flujos de pago seguros (ej. Wompi) y gestión de suscripciones.",
      accent: "group-hover:border-emerald-400",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)]"
    }
  ];

  return (
    <section id="habilidades" className="relative py-24 bg-black border-t border-white/5">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#18181b,transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Nivel <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-400 to-zinc-600">Técnico</span>
          </h2>
          {/* Aquí se corrigió a bg-linear-to-r */}
          <div className="h-1 w-20 bg-linear-to-r from-cyan-500 to-blue-600"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 bg-zinc-950 border border-zinc-800 transition-all duration-300 hover:-translate-y-1 ${skill.accent} ${skill.glow}`}
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-500 group-hover:border-current transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-500 group-hover:border-current transition-colors"></div>

              <p className="text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider">
                {skill.role}
              </p>
              <h3 className="text-xl font-bold text-zinc-100 mb-3">
                {skill.name}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;