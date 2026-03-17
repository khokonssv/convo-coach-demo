import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, hsl(226 70% 55% / 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, hsl(210 20% 80% / 0.15) 0%, transparent 50%), hsl(210 20% 98%)",
        }}
      />

      {/* Logo mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        className="mb-8"
      >
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-display font-bold text-lg">M</span>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
        className="font-display text-4xl sm:text-[3.5rem] font-bold tracking-[-0.04em] text-foreground text-center leading-tight max-w-2xl"
      >
        Master the moments that matter.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
        className="mt-4 text-muted-foreground text-lg text-center max-w-md"
      >
        The AI-powered simulator for high-stakes conversations.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.2, 0, 0, 1] }}
        className="mt-10 flex gap-3"
      >
        <button
          onClick={() => navigate("/onboarding")}
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm active:scale-[0.96] transition-transform"
        >
          Sign up
        </button>
        <button
          onClick={() => navigate("/onboarding")}
          className="px-6 py-3 rounded-lg bg-card text-foreground font-medium text-sm active:scale-[0.96] transition-transform"
          style={{ boxShadow: "var(--momentum-shadow)" }}
        >
          Log in
        </button>
      </motion.div>
    </div>
  );
};

export default Welcome;
