import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import sunCharacter from "@/assets/sun-character.png";
import PageShell from "@/components/PageShell";

const AnimatedNumber = ({ value }: { value: number }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value]);
  return <span className="tabular-nums">{current}</span>;
};

const practices = [
  { id: "interview", label: "Interview Practice", desc: "Behavioral & technical questions" },
  { id: "networking", label: "Networking Simulation", desc: "First impressions & follow-ups" },
  { id: "pitch", label: "Pitch Your Startup", desc: "Elevator pitch & investor Q&A" },
  { id: "sales", label: "Sales Conversation", desc: "Discovery calls & objection handling" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <PageShell>
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      >
        {/* Header with sun character */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <img src={sunCharacter} alt="YourPitch mascot" className="w-12 h-12" />
            <div>
              <h1 className="font-display text-2xl font-semibold tracking-[-0.02em]">
                Good morning, Alex.
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                You're 12% more confident than last week.
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/progress")}
            className="text-sm text-primary font-medium hover:underline"
          >
            View progress
          </button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          <div className="momentum-card p-5 rounded-xl">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">Confidence Score</p>
            <p className="text-3xl font-display font-bold text-foreground">
              <AnimatedNumber value={78} />
            </p>
          </div>
          <div className="momentum-card p-5 rounded-xl">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">Sessions</p>
            <p className="text-3xl font-display font-bold text-foreground">
              <AnimatedNumber value={24} />
            </p>
          </div>
          <div className="momentum-card p-5 rounded-xl">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">Trend</p>
            <p className="text-3xl font-display font-bold text-primary">
              +<AnimatedNumber value={4} />.2%
            </p>
          </div>
        </div>

        {/* Active Simulations */}
        <h2 className="font-display text-lg font-semibold mb-4">Active Simulations</h2>
        <div className="flex flex-col gap-2">
          {practices.map((p) => (
            <div
              key={p.id}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="momentum-card momentum-card-hover rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer"
              onClick={() => navigate("/simulation")}
            >
              <div>
                <p className="font-medium text-sm text-foreground">{p.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
              </div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === p.id ? 1 : 0 }}
                className="px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium"
              >
                Start
              </motion.button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
    </PageShell>
  );
};

export default Dashboard;
