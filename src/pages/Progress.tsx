import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

const lineData = [
  { week: "W1", score: 52 },
  { week: "W2", score: 58 },
  { week: "W3", score: 61 },
  { week: "W4", score: 65 },
  { week: "W5", score: 68 },
  { week: "W6", score: 72 },
  { week: "W7", score: 74 },
  { week: "W8", score: 78 },
];

const radarData = [
  { skill: "Clarity", value: 82 },
  { skill: "Empathy", value: 68 },
  { skill: "Authority", value: 75 },
  { skill: "Structure", value: 70 },
  { skill: "Persuasion", value: 73 },
];

const categories = [
  { label: "Interview", sessions: 12, trend: "+8%" },
  { label: "Networking", sessions: 5, trend: "+3%" },
  { label: "Pitch", sessions: 4, trend: "+12%" },
  { label: "Sales", sessions: 3, trend: "+2%" },
];

const Progress = () => {
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
          Growth Trajectory
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Your communication skills over time.
        </p>

        {/* Confidence line chart */}
        <div className="momentum-card p-5 rounded-lg mb-6">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-4">Confidence Score Trend</p>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91%)" />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="hsl(215 14% 46%)" />
              <YAxis domain={[40, 100]} tick={{ fontSize: 12 }} stroke="hsl(215 14% 46%)" />
              <Tooltip
                contentStyle={{
                  background: "hsl(0 0% 100%)",
                  border: "none",
                  borderRadius: 8,
                  boxShadow: "0 0 0 1px rgba(0,0,0,.05), 0 4px 12px rgba(0,0,0,.1)",
                  fontSize: 13,
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="hsl(226 70% 55%)"
                strokeWidth={2}
                dot={{ r: 3, fill: "hsl(226 70% 55%)" }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Radar chart */}
          <div className="momentum-card p-5 rounded-lg">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-4">Skills Breakdown</p>
            <ResponsiveContainer width="100%" height={240}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(220 13% 91%)" />
                <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11 }} stroke="hsl(215 14% 46%)" />
                <Radar dataKey="value" stroke="hsl(226 70% 55%)" fill="hsl(226 70% 55% / 0.15)" strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Categories */}
          <div className="momentum-card p-5 rounded-lg">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-4">Categories Practiced</p>
            <div className="space-y-3">
              {categories.map((c) => (
                <div key={c.label} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.label}</p>
                    <p className="text-xs text-muted-foreground">{c.sessions} sessions</p>
                  </div>
                  <span className="text-sm font-medium text-accent">{c.trend}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={() => navigate("/future")}
            className="text-sm text-primary font-medium hover:underline"
          >
            See what's coming next →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Progress;
