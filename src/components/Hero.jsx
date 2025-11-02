import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Code2, Database, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
            >
              Remote Full‑Stack PHP Laravel Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-zinc-600 dark:text-zinc-300"
            >
              I craft scalable web apps, robust APIs, and rich front‑end experiences. Open to freelance gigs, long‑term contracts, and remote collaborations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border border-zinc-300 dark:border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                Hire Me
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <Feature icon={<Code2 className="w-5 h-5" />} title="Laravel + Vue/React" />
              <Feature icon={<Database className="w-5 h-5" />} title="SQL/NoSQL" />
              <Feature icon={<Globe className="w-5 h-5" />} title="Deploy & DevOps" />
            </div>
          </div>

          <div className="relative h-[380px] sm:h-[440px] md:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 border border-zinc-200/60 dark:border-zinc-800">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent dark:from-zinc-950/60" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-[0] top-0 h-[700px] bg-gradient-to-b from-indigo-200/50 via-transparent to-transparent dark:from-indigo-900/30" />
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-zinc-200/60 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 px-3 py-2">
      <span className="text-indigo-600">{icon}</span>
      <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{title}</span>
    </div>
  );
}
