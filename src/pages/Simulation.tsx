import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageShell from "@/components/PageShell";

const Simulation = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [analyzing, setAnalyzing] = useState(false);

  const handleSubmit = () => {
    setAnalyzing(true);
    setTimeout(() => navigate("/feedback"), 1800);
  };

  return (
    <PageShell>
    <div className="flex flex-col px-6 py-12 max-w-3xl mx-auto min-h-[calc(100vh-52px)]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
        className="flex-1 flex flex-col"
      >
        {/* Back */}
        <button
          onClick={() => navigate("/dashboard")}
          className="text-sm text-muted-foreground hover:text-foreground mb-8 self-start"
        >
          ← Back to dashboard
        </button>

        {/* Category */}
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-3">
          Interview Practice
        </p>

        {/* Prompt */}
        <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-snug mb-10">
          "Tell me about a time you solved a difficult problem."
        </h1>

        {/* Response area */}
        <div className="flex-1 relative">
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Type your response here..."
            className="w-full h-64 resize-none rounded-lg p-5 text-sm leading-relaxed bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            style={{
              boxShadow: "inset 0 2px 4px rgba(0,0,0,.04), var(--momentum-shadow)",
            }}
          />
        </div>

        {/* Submit */}
        <div className="flex items-center justify-between mt-6">
          {analyzing && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">Analyzing response...</span>
            </div>
          )}
          {!analyzing && <div />}
          <button
            disabled={!response.trim() || analyzing}
            onClick={handleSubmit}
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm disabled:opacity-40 active:scale-[0.96] transition-all"
          >
            Submit for Analysis
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Simulation;
