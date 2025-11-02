import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-zinc-200/60 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Freelancer Laravel Developer. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">Projects</a>
            <a href="#services" className="hover:text-indigo-600 dark:hover:text-indigo-400">Services</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
