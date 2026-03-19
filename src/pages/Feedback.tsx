import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageShell from "@/components/PageShell";

const AnimatedScore = ({ value, delay = 0 }: { value: number; delay?: number }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 1000;
      const startTime = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return <span className="tabular-nums">{current}</span>;
};

const ProgressBar = ({ value, delay = 0 }: { value: number; delay?: number }) => (
  <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${value}%` }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.2, 0, 0, 1] }}
      className="h-full bg-primary rounded-full"
    />
  </div>
);

const improvements = [
  { text: 'Replace "um" with a deliberate pause in the opening.', highlight: true },
  { text: "Add a specific metric or outcome to the resolution.", highlight: false },
  { text: "Strengthen the transition between problem and action.", highlight: false },
];

const Feedback = () => {
  const navigate = useNavigate();

  return (
    <PageShell>
    <div className="px-6 py-12 max-w-4xl mx-auto">
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

        <h1 className="font-display text-2xl font-semibold tracking-[-0.02em] mb-2">
          Analysis Complete.
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Here's how your response performed across key communication dimensions.
        </p>

        {/* Two column grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left — Scores */}
          <div className="space-y-4">
            <div className="momentum-card p-5 rounded-lg">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">Confidence Score</p>
              <p className="text-4xl font-display font-bold text-foreground">
                <AnimatedScore value={82} />
              </p>
              <ProgressBar value={82} delay={200} />
            </div>

            <div className="momentum-card p-5 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Narrative Clarity</p>
                <span className="text-sm font-display font-bold"><AnimatedScore value={7} delay={200} />/10</span>
              </div>
              <ProgressBar value={70} delay={400} />
            </div>

            <div className="momentum-card p-5 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Leadership Signal</p>
                <span className="text-sm font-medium text-accent">High</span>
              </div>
              <ProgressBar value={85} delay={600} />
            </div>

            <div className="momentum-card p-5 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Tone</p>
                <span className="text-sm font-medium text-foreground">Professional</span>
              </div>
              <ProgressBar value={90} delay={800} />
            </div>
          </div>

          {/* Right — Strengths & Improvements */}
          <div className="space-y-4">
            <div className="momentum-card p-5 rounded-lg">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-3">Strengths Identified</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Strong storytelling with clear narrative arc
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Clear leadership signal throughout
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Professional and measured tone
                </li>
              </ul>
            </div>

            <div className="momentum-card p-5 rounded-lg">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-3">Suggested Improvements</p>
              <ul className="space-y-3">
                {improvements.map((imp, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className={imp.highlight ? "bg-primary/10 px-1 rounded" : ""}>
                      {imp.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="momentum-card p-5 rounded-lg">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-3">Structure Score</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Opening</span>
                <span className="text-sm font-medium"><AnimatedScore value={8} delay={400} />/10</span>
              </div>
              <ProgressBar value={80} delay={500} />
              <div className="flex items-center justify-between mb-2 mt-3">
                <span className="text-sm">Body</span>
                <span className="text-sm font-medium"><AnimatedScore value={7} delay={600} />/10</span>
              </div>
              <ProgressBar value={70} delay={700} />
              <div className="flex items-center justify-between mb-2 mt-3">
                <span className="text-sm">Closing</span>
                <span className="text-sm font-medium"><AnimatedScore value={6} delay={800} />/10</span>
              </div>
              <ProgressBar value={60} delay={900} />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={() => navigate("/simulation")}
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium active:scale-[0.96] transition-transform"
          >
            Try again
          </button>
          <button
            onClick={() => navigate("/progress")}
            className="px-5 py-2.5 rounded-lg bg-card text-foreground text-sm font-medium active:scale-[0.96] transition-transform"
            style={{ boxShadow: "var(--momentum-shadow)" }}
          >
            View progress
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Feedback;
