import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageShell from "@/components/PageShell";

const modules = [
  { label: "Fundraising Simulator", desc: "Pitch to virtual VCs and get scored" },
  { label: "Crisis Management", desc: "Navigate high-pressure communications" },
  { label: "Board Meeting Prep", desc: "Practice executive-level presentations" },
  { label: "Salary Negotiation", desc: "Master compensation conversations" },
  { label: "Media Training", desc: "Prepare for press and podcasts" },
  { label: "Conflict Resolution", desc: "De-escalate difficult conversations" },
  { label: "Team Leadership", desc: "Practice 1-on-1s and all-hands" },
  { label: "Customer Discovery", desc: "Refine your interview technique" },
  { label: "Public Speaking", desc: "Rehearse keynotes and panels" },
];

const Future = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      >
        <button
          onClick={() => navigate("/dashboard")}
          className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
        >
          ← Back to dashboard
        </button>

        <h1 className="font-display text-2xl font-semibold tracking-[-0.02em] mb-1">
          The Roadmap
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          New simulation modules coming soon.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {modules.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
              whileHover={{ opacity: 1 }}
              className="momentum-card p-5 rounded-lg grayscale hover:grayscale-0 transition-all cursor-pointer group"
            >
              <p className="font-medium text-sm text-foreground mb-1">{m.label}</p>
              <p className="text-xs text-muted-foreground mb-4">{m.desc}</p>
              <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Join waitlist →
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Future;
