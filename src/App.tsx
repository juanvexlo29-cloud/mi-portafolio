// src/App.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // <-- Importación del botón

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-50 selection:bg-cyan-500/30 font-sans">
      <Header />
      
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <About />
      </main>

      <Footer />
      
      {/* Botón Flotante */}
      <WhatsAppButton />
    </div>
  );
}

export default App;