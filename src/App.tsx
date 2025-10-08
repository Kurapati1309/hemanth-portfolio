// src/App.tsx
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronRight, ExternalLink } from "lucide-react";
import "./index.css";

// Small helpers
const Section = ({
  id,
  title,
  children,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="py-24 px-6 bg-black/80 text-gray-100">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-3 text-gray-300 max-w-3xl"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

export default function App() {
  // Smooth scroll for nav links
  const go = (target: string) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const skills = [
    "Python",
    "SQL",
    "Databricks",
    "Spark",
    "Delta Lake",
    "AWS (S3/Glue/Redshift)",
    "Azure",
    "Snowflake",
    "dbt",
    "Airflow",
    "Power BI",
    "Tableau",
  ];

  const projects = [
    {
      title: "Real-Time ETL Platform",
      copy:
        "Streaming ingestion → curated lake → Redshift marts. Orchestrated with Airflow/dbt. Reduced data latency by 30%.",
      img: "/images/etl-arch.png",
      link: "#",
      stack: ["Spark", "AWS Glue", "S3", "Redshift", "dbt"],
    },
    {
      title: "Predictive Pricing & Demand",
      copy:
        "Forecasts with Prophet/ARIMA and elastic pricing engine. Live KPI boards for business.",
      img: "/images/pricing.png",
      link: "#",
      stack: ["Python", "Prophet", "Databricks", "Tableau"],
    },
    {
      title: "AI-Driven Call Center Analytics",
      copy:
        "NLP-validated KPIs (AHT, CSAT, containment) powering exec dashboards and alerts.",
      img: "/images/callcenter.png",
      link: "#",
      stack: ["Azure", "NLP", "Power BI"],
    },
    {
      title: "Lakehouse on Databricks",
      copy:
        "Delta Lake + Unity Catalog patterns for governance, quality, and cost control.",
      img: "/images/lakehouse.png",
      link: "#",
      stack: ["Databricks", "Delta Lake", "Unity Catalog"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white scroll-smooth">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <button
            onClick={() => go("#home")}
            className="font-semibold tracking-tight"
            title="Go home"
          >
            HK<span className="text-gray-300 ml-2">Data Engineer</span>
          </button>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => go("#about")} className="text-gray-300 hover:text-white">
              About
            </button>
            <button onClick={() => go("#skills")} className="text-gray-300 hover:text-white">
              Skills
            </button>
            <button onClick={() => go("#projects")} className="text-gray-300 hover:text-white">
              Projects
            </button>
            <button onClick={() => go("#contact")} className="text-gray-300 hover:text-white">
              Contact
            </button>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Kurapati1309"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/hemanth-kurapati1021"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:hk485@nau.edu"
              className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden"
        style={{ minHeight: "74vh" }}
      >
        {/* animated orbs */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center gap-2 text-xs text-gray-300 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Houston, TX
            </p>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                Cloud-Native
              </span>{" "}
              Data Platforms
            </h1>
            <p className="mt-4 max-w-xl text-gray-300">
              I design real-time ETL, lakehouse architectures, and analytics systems
              with Databricks, Spark, AWS, and Azure. Focused on reliability, governance, and ROI.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => go("#projects")}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium border border-white/10 hover:bg-white/20"
              >
                See Projects <ChevronRight size={16} />
              </button>
              <a
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/20 px-4 py-2 text-sm font-semibold border border-cyan-400/30 hover:bg-cyan-500/30"
                href="/Hemanth_DSZ_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative mx-auto aspect-square max-w-sm">
              <div className="absolute inset-0 animate-pulse rounded-[2rem] bg-gradient-to-tr from-cyan-400/20 to-violet-400/20 blur-2xl" />
              <img
                src="/images/profile.jpeg"
                alt="Hemanth"
                className="relative rounded-[2rem] border border-white/10 bg-white/5 object-cover shadow-2xl w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        title="About"
        subtitle="Data Engineer with real-time ETL, lakehouse architecture, and AI-driven analytics experience. Passionate about reliable data products and measurable business value."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Platforms</h3>
            <p className="text-sm text-gray-300 mt-2">Databricks • Spark • Delta Lake • Unity Catalog • Kafka</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Cloud</h3>
            <p className="text-sm text-gray-300 mt-2">AWS (S3, Glue, Redshift) • Azure • Terraform • dbt</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Data & BI</h3>
            <p className="text-sm text-gray-300 mt-2">PostgreSQL • Snowflake • Power BI • Tableau</p>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Technical Skills">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {skills.map((s) => (
            <motion.div
              key={s}
              whileHover={{ scale: 1.05 }}
              className="text-center text-sm rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" subtitle="Production-grade builds with measurable outcomes.">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <img
                src={p.img}
                alt={p.title}
                className="mb-4 h-44 w-full rounded-xl object-cover border border-white/10 bg-white/5"
              />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{p.copy}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-gray-800/60 px-3 py-1 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
              >
                View details <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Let’s build something reliable.</h3>
            <p className="text-sm text-gray-300 mt-1">
              I respond quickly on email and LinkedIn. Based in Houston, open to hybrid/remote.
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="mailto:hk485@nau.edu"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium border border-white/10 hover:bg-white/20"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="https://linkedin.com/in/hemanth-kurapati1021"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium border border-white/10 hover:bg-white/20"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/Kurapati1309"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium border border-white/10 hover:bg-white/20"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 text-center text-sm text-gray-400 py-10">
        © {new Date().getFullYear()} Hemanth Kumar Kurapati • Built with React, Tailwind & Motion
      </footer>
    </div>
  );
}
