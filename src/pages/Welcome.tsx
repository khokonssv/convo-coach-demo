import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";
import appBackground from "@/assets/app-background.png";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background image */}
      <img
        src={appBackground}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-background/60" />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        className="mb-8"
      >
        <img src={logoIcon} alt="YourPitch" className="w-16 h-16 rounded-2xl shadow-lg" />
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
          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm active:scale-[0.96] transition-transform shadow-lg"
        >
          Sign up
        </button>
        <button
          onClick={() => navigate("/onboarding")}
          className="px-6 py-3 rounded-xl bg-card text-foreground font-medium text-sm active:scale-[0.96] transition-transform"
          style={{ boxShadow: "var(--momentum-shadow)" }}
        >
          Log in
        </button>
      </motion.div>
    </div>
  );
};

export default Welcome;
