// src/components/About.tsx
import { motion } from 'framer-motion';

const About = () => {
  const terminalCode = `{
  "rol": "Software Developer",
  "base": "Colombia",
  "idiomas": {
    "español": "Nativo",
    "ingles": "Intermedio (B1/B2)"
  },
  "mindset": [
    "Aprender haciendo",
    "Código limpio",
    "Impacto real"
  ],
  "estado": "Estudiando inglés a diario / Listo para nuevos retos"
}`;

  return (
    <section id="sobre-mi" className="relative py-24 bg-black border-t border-white/5 overflow-hidden">
      
      {/* Luz de fondo sutil */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Columna Izquierda: Texto Humano y Sincero */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Un poco <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                sobre mí
              </span>
            </h2>
            
            <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed font-light">
              <p>
                Para ser sincero, no me considero solo un "tira-código". Me gusta meterme de lleno en los problemas y buscar la mejor forma de resolverlos. En proyectos como <em>ICFES PRO</em> o <em>WalkerHome</em>, entendí que lo que construimos impacta el día a día de personas reales, y eso me motiva a hacer las cosas bien.
              </p>
              <p>
                Soy un poco perfeccionista con el rendimiento. Si veo que el navegador sufre procesando datos pesados (como me pasó al generar reportes masivos en PDF), me obsesiono hasta encontrar una solución, como procesarlos por partes para que la aplicación no se cuelgue y la experiencia sea fluida.
              </p>
              <p>
                <strong className="text-white font-medium">¿Y el inglés?</strong> Para ser totalmente transparente, mi nivel actual es <strong className="text-cyan-400 font-medium">intermedio</strong>. No soy fluido todavía, pero tampoco me quedo mudo. Me defiendo súper bien leyendo documentación técnica y comunicándome por chat. Le estoy metiendo la ficha estudiando todos los días para soltar la lengua, así que si hay oportunidades en equipos internacionales, me le mido sin miedo a aprender.
              </p>
            </div>
          </motion.div>

          {/* Columna Derecha: Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative group"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl blur-md opacity-25 group-hover:opacity-50 transition duration-500"></div>
            
            <div className="relative bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden">
              <div className="flex items-center px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto text-xs font-mono text-zinc-500">perfil_jd.json</div>
              </div>
              
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono leading-loose">
                  <code className="text-zinc-300">
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