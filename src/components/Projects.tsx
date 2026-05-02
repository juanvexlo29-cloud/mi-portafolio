// src/components/Projects.tsx
// Se importó Variants correctamente como tipo
import { motion, type Variants } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "ICFES PRO",
      category: "EdTech // Fullstack Architecture",
      desc: "Plataforma premium de preparación educativa con motor de feedback impulsado por IA y sistema de niveles dinámico.",
      tech: ["React", "TypeScript", "AI Tutor", "Wompi", "PDF Chunks"],
      highlights: [
        "Optimización de memoria en generación de reportes PDF por chunks.",
        "Implementación de pasarela de pagos Wompi (Becado PRO).",
        "Estandarización de lógica de XP y niveles en toda la App."
      ],
      link: "https://github.com/juanvexlo29-cloud",
      github: "https://github.com/juanvexlo29-cloud",
      size: "md:col-span-2", 
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "WalkerHome",
      category: "Service Management",
      desc: "Ecosistema digital para la gestión de servicios de paseadores con dashboards dinámicos y perfiles personalizados.",
      tech: ["React", "Tailwind CSS", "Dashboards"],
      highlights: [
        "Vistas de perfil dinámicas para prestadores de servicios.",
        "Arquitectura de componentes altamente reutilizables."
      ],
      link: "https://github.com/juanvexlo29-cloud",
      github: "https://github.com/juanvexlo29-cloud",
      size: "md:col-span-1", 
      color: "from-purple-500/20 to-fuchsia-500/20"
    }
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="proyectos" className="relative py-24 bg-black overflow-hidden">
      {/* Se cambiaron las medidas arbitrarias por las canónicas w-125 h-125 */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/5 blur-[120px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Proyectos <span className="text-zinc-600 italic">Seleccionados</span>
          </h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-[0.3em]">
            // Casos de éxito y retos técnicos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative overflow-hidden bg-zinc-900/50 border border-zinc-800 p-8 flex flex-col justify-between hover:border-zinc-600 transition-all duration-500 ${project.size}`}
            >
              {/* Se actualizó bg-gradient-to-br a bg-linear-to-br */}
              <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded tracking-widest uppercase">
                    {project.category}
                  </span>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-zinc-500 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.805.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href={project.link} className="text-zinc-500 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                <ul className="space-y-2 mb-8">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-500">
                      <span className="text-cyan-500 mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono text-zinc-400 border border-zinc-800 px-2 py-1 rounded bg-black/40">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;