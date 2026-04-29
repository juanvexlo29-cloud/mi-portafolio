// src/components/Header.tsx


const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Nombre */}
        <div className="text-xl font-black tracking-tighter text-white group cursor-pointer">
          <span className="text-emerald-400 group-hover:text-indigo-400 transition-colors duration-300">&lt;</span>
          Juan Diego Vega
          <span className="text-emerald-400 group-hover:text-indigo-400 transition-colors duration-300"> /&gt;</span>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#inicio" className="hover:text-emerald-400 transition-colors">Inicio</a>
          <a href="#proyectos" className="hover:text-emerald-400 transition-colors">Proyectos</a>
          <a href="#sobre-mi" className="hover:text-emerald-400 transition-colors">Sobre mí</a>
        </nav>

        {/* Botón Contacto */}
        <a 
          href="#contacto"
          className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-slate-900 bg-white rounded-full hover:scale-105 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300"
        >
          Hablemos 👋
        </a>
      </div>
    </header>
  );
};

export default Header;