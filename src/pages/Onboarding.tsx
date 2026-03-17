import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const scenarios = [
  { id: "interview", label: "Interview", icon: "🎯" },
  { id: "networking", label: "Networking", icon: "🤝" },
  { id: "pitch", label: "Startup Pitch", icon: "🚀" },
  { id: "sales", label: "Sales Conversation", icon: "💼" },
];

const industries = [
  "Technology", "Finance", "Healthcare", "Education", "Consulting", "E-commerce", "Real Estate", "Media",
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const [industry, setIndustry] = useState("");
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          >
            <p className="text-sm text-muted-foreground mb-2">Step 1 of 2</p>
            <h1 className="font-display text-2xl font-semibold tracking-[-0.02em] mb-8">
              What are you preparing for?
            </h1>

            <div className="grid grid-cols-2 gap-3">
              {scenarios.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  className={`momentum-card momentum-card-hover p-5 text-left rounded-lg transition-all active:scale-[0.96] ${
                    selected === s.id
                      ? "ring-2 ring-primary"
                      : ""
                  }`}
                >
                  <span className="text-2xl block mb-2">{s.icon}</span>
                  <span className="font-medium text-sm text-foreground">{s.label}</span>
                </button>
              ))}
            </div>

            <button
              disabled={!selected}
              onClick={() => setStep(2)}
              className="mt-8 w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm disabled:opacity-40 active:scale-[0.96] transition-all"
            >
              Continue
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          >
            <p className="text-sm text-muted-foreground mb-2">Step 2 of 2</p>
            <h1 className="font-display text-2xl font-semibold tracking-[-0.02em] mb-8">
              What industry are you in?
            </h1>

            <div className="flex flex-col gap-2">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setIndustry(ind)}
                  className={`momentum-card momentum-card-hover px-4 py-3 text-left rounded-lg text-sm font-medium active:scale-[0.98] transition-all ${
                    industry === ind ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>

            <button
              disabled={!industry}
              onClick={() => navigate("/dashboard")}
              className="mt-8 w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm disabled:opacity-40 active:scale-[0.96] transition-all"
            >
              Get started
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
