import { motion } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Let’s work together</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Have a project in mind or need help with your Laravel stack? I’m available for remote freelance and contract work.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@yourdomain.dev?subject=Project%20Inquiry%20from%20Portfolio"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                <Mail size={18} /> Email Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                <Calendar size={18} /> Book a call
              </a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm"
          >
            <div className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@domain.com"
                    className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </Field>
              </div>
              <Field label="Project details">
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Share your goals, timeline, and budget range."
                  className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </Field>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-zinc-900 dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-zinc-900 hover:opacity-90"
              >
                Send message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-zinc-800 dark:text-zinc-200">{label}</span>
      {children}
    </label>
  );
}
