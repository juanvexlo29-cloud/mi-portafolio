// src/components/Footer.tsx
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-black border-t border-zinc-900 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-24 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            ¿Construimos algo <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">increíble?</span>
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para formar parte de equipos técnicos de alto nivel.
          </p>
          
          <a 
            href="juanvexlo29@gmail.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-none hover:scale-105 transition-transform"
          >
            Enviar Mensaje
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </motion.div>

        {/* Línea divisoria */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent mb-8"></div>

        {/* Enlaces y Copyright */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm font-mono">
            © {new Date().getFullYear()} Creado con React & Tailwind v4.
          </p>
          
          <div className="flex gap-6">
            <a href="https://github.com/juanvexlo29-cloud" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/juan-vega-aa275a3a8" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;