// src/components/Hero.tsx
import { motion, type Variants } from 'framer-motion';
// Importamos el PDF con el nombre exacto que tienes en tu carpeta assets
import miCV from '../assets/hoja de vida.pdf';

const Hero = () => {
  const titleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      
      {/* Fondo de cuadrícula futurista */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)',
          backgroundSize: '14px 24px',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
        }}
      />

      {/* Brillo central sutil */}
      <div 
        className="absolute top-0 w-full h-full opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle 500px at 50% 200px, #3b0764, transparent)'
        }}
      />

      {/* Contenedor Responsivo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-24 text-center flex flex-col items-center">
        
        {/* Badge animado */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">System Online // Disponible</span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-tight flex flex-col items-center text-center"
        >
          <motion.span variants={wordVariants} className="block text-3xl sm:text-4xl md:text-5xl text-zinc-300 font-medium tracking-normal mb-2">
            Hola, soy Juan Diego
          </motion.span>
          <motion.span variants={wordVariants} className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 mt-2">
            Frontend Developer
          </motion.span>
        </motion.h1>

        {/* Descripción 100% Humana y Directa */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Hago aplicaciones web que resuelven problemas reales. Más que sentarme a escribir líneas de código en automático, me gusta pensar en cómo hacer que todo funcione rápido y sin enredos para el usuario. Mi día a día es armar interfaces limpias y sólidas usando <strong className="text-white font-mono">React</strong> y <strong className="text-white font-mono">TypeScript</strong>.
        </motion.p>

        {/* Botones */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto"
        >
          <a 
            href="#proyectos" 
            className="group w-full sm:w-auto relative px-8 py-4 bg-white text-black font-bold rounded-none overflow-hidden transition-all hover:scale-105 flex justify-center items-center"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver lo que he construido
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </span>
          </a>
          
          <a 
            href={miCV} 
            download="Juan_Diego_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-zinc-300 font-mono text-sm uppercase tracking-widest border border-zinc-800 hover:bg-zinc-900 transition-all flex justify-center items-center"
          >
            Descargar_CV.exe
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;