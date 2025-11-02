import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Subscriptions Platform',
    stack: ['Laravel', 'Cashier', 'Stripe', 'React'],
    description:
      'Multi-tenant billing, team roles, webhooks, and usage-based metering with responsive dashboard.',
    links: { live: '#', github: '#' },
  },
  {
    title: 'E-commerce Headless Storefront',
    stack: ['Laravel', 'Inertia', 'MySQL', 'Redis'],
    description:
      'Headless architecture with product search, coupons, order tracking, and admin reporting.',
    links: { live: '#', github: '#' },
  },
  {
    title: 'Project Management Suite',
    stack: ['Laravel', 'Vue', 'PostgreSQL', 'Docker'],
    description:
      'Kanban boards, real-time notifications, and role-based permissions for distributed teams.',
    links: { live: '#', github: '#' },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Featured Projects</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Production-grade work with clean architecture and maintainable code.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-md bg-zinc-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-zinc-900 hover:opacity-90"
          >
            Let’s build yours
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900"
            >
              <div className="h-40 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.links.live}
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    <Globe size={16} /> Live
                  </a>
                  <a
                    href={p.links.github}
                    className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div id="services" className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 p-8">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Services</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="API & Back‑end"
              desc="RESTful APIs, authentication, queues, caching, testing, and integrations."
            />
            <ServiceCard
              title="Front‑end & UI"
              desc="Responsive SPAs, SSR/CSR, component libraries, and accessibility."
            />
            <ServiceCard
              title="DevOps & Deploy"
              desc="Docker, CI/CD, monitoring, and cloud deployments (VPS, AWS, DigitalOcean)."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div className="rounded-xl border border-zinc-200/60 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 p-5">
      <h4 className="font-semibold text-zinc-900 dark:text-white">{title}</h4>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
    </div>
  );
}
