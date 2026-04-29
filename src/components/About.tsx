// src/components/About.tsx
import { motion } from 'framer-motion';

const About = () => {
  const terminalCode = `{
  "name": "Software Developer",
  "base": "Colombia",
  "languages": [
    "Spanish (Native)", 
    "English (Target: Native Fluency)"
  ],
  "core_focus": [
    "Clean Architecture",
    "Memory Optimization",
    "Scalable UX/UI"
  ],
  "status": "Ready for global challenges"
}`;

  return (
    <section id="sobre-mi" className="relative py-24 bg-black border-t border-white/5 overflow-hidden">
      
      {/* Luz de fondo sutil */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Columna Izquierda: Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Filosofía & <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                Trayectoria
              </span>
            </h2>
            
            <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed font-light">
              <p>
                No me limito a escribir código; <strong className="text-white font-medium">construyo herramientas que resuelven problemas reales</strong>. Mi experiencia en plataformas como <em>ICFES PRO</em> y <em>WalkerHome</em> me ha enseñado que el verdadero valor de un software radica en su impacto en el usuario final.
              </p>
              <p>
                Tengo una obsesión por la <strong className="text-cyan-400 font-medium">arquitectura limpia y la optimización</strong>. Disfruto enfrentarme a retos complejos, como estandarizar la lógica matemática de un sistema o evitar que el navegador colapse al generar reportes PDF masivos mediante procesamiento por chunks.
              </p>
              <p>
                Actualmente trabajo desde Colombia y estoy inmerso en un plan intensivo para alcanzar la <strong className="text-white font-medium">fluidez nativa en inglés</strong>. Estoy preparado para integrarme a equipos distribuidos globalmente y aportar soluciones escalables desde el día uno.
              </p>
            </div>
          </motion.div>

          {/* Columna Derecha: Terminal de Código */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative group"
          >
            {/* Efecto de brillo en hover */}
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl blur-md opacity-25 group-hover:opacity-50 transition duration-500"></div>
            
            <div className="relative bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden">
              {/* Barra superior de la terminal */}
              <div className="flex items-center px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto text-xs font-mono text-zinc-500">perfil.json</div>
              </div>
              
              {/* Cuerpo de la terminal */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono leading-loose">
                  <code className="text-zinc-300">
                    {/* Aplicamos un poco de color simulando sintaxis JSON */}
                    {terminalCode.split('\n').map((line, i) => (
                      <div key={i} className="hover:bg-zinc-800/50 px-2 rounded transition-colors">
                        <span className="text-zinc-600 select-none mr-4">{i + 1}</span>
                        {line}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;