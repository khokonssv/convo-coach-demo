import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageShell from "@/components/PageShell";

const TOTAL_STEPS = 9;

const genderOptions = ["Female", "Male", "Non-binary", "Prefer not to say", "Other"];
const ageOptions = ["Under 18", "18–24", "25–34", "35–44", "45–54", "55+"];
const educationOptions = ["High school", "College", "Graduate", "Doctorate", "Other"];
const scenarioOptions = [
  { id: "interview", label: "Interview", icon: "🎯" },
  { id: "networking", label: "Networking", icon: "🤝" },
  { id: "pitch", label: "Startup Pitch", icon: "🚀" },
  { id: "sales", label: "Sales Conversation", icon: "💼" },
];
const personalityOptions = [
  "Calm and grounded",
  "Focused and reliable",
  "Creative and curious",
  "Bold and action-driven",
  "Visionary and big-picture",
];
const proudOptions = [
  "Help someone grow",
  "Build something lasting",
  "Connect people",
  "Overcome fear",
  "Stand up for what's right",
];

const confidenceLabels = ["😬 Not at all", "2", "3", "4", "💪 Very confident"];

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [scenario, setScenario] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);
  const [education, setEducation] = useState<string | null>(null);
  const [location, setLocation] = useState("");
  const [confidence, setConfidence] = useState<number | null>(null);
  const [personality, setPersonality] = useState<string | null>(null);
  const [proud, setProud] = useState<string | null>(null);

  const canContinue = () => {
    switch (step) {
      case 1: return name.trim().length > 0;
      case 2: return !!scenario;
      case 3: return !!gender;
      case 4: return !!age;
      case 5: return !!education;
      case 6: return location.trim().length > 0;
      case 7: return confidence !== null;
      case 8: return !!personality;
      case 9: return !!proud;
      default: return false;
    }
  };

  const next = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
    else navigate("/dashboard");
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  const OptionButton = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`momentum-card momentum-card-hover px-4 py-3 text-left rounded-lg text-sm font-medium active:scale-[0.97] transition-all ${
        selected ? "ring-2 ring-primary bg-primary/10" : ""
      }`}
    >
      {label}
    </button>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-[-0.02em] mb-3">
              What should we call you?
            </h1>
            <p className="text-sm text-muted-foreground mb-6">We'd love to personalise your experience.</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              autoFocus
            />
          </div>
        );

      case 2:
        return (
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-[-0.02em] mb-6">
              What are you preparing for?
            </h1>
            <div className="grid grid-cols-2 gap-3">
              {scenarioOptions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setScenario(s.id)}
                  className={`momentum-card momentum-card-hover p-5 text-left rounded-lg transition-all active:scale-[0.96] ${
                    scenario === s.id ? "ring-2 ring-primary bg-primary/10" : ""
                  }`}
                >
                  <span className="text-2xl block mb-2">{s.icon}</span>
                  <span className="font-medium text-sm text-foreground">{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-[-0.02em] mb-6">
              How do you identify?
            </h1>
            <div className="flex flex-col gap-2">
              {genderOptions.map((g) => (
                <OptionButton key={g} label={g} selected={gender === g} onClick={() => setGender(g)} />
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-[-0.02em] mb-6">
              What's your age group?
            </h1>
            <div className="grid grid-cols-2 gap-2">
              {ageOptions.map((a) => (
                <OptionButton key={a} label={a} selected={age === a} onClick={() => setAge(a)} />
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-[-0.02em] mb-6">
              What's your highest level of education?
            </h1>
            <div className="flex flex-col gap-2">
              {educationOptions.map((e) => (
                <OptionButton key={e} label={e} selected={education === e} onClick={() => setEducation(e)} />
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-[-0.02em] mb-3">
              Where in the world do you call home?
            </h1>
            <p className="text-sm text-muted-foreground mb-6">City, country — whatever feels right.</p>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Sydney, Australia"
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              autoFocus
            />
          </div>
        );

      case 7:
        return (
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-[-0.02em] mb-6">
              How confident do you feel pitching yourself right now?
            </h1>
            <div className="flex justify-between gap-2">
              {confidenceLabels.map((label, i) => (
                <button
                  key={i}
                  onClick={() => setConfidence(i + 1)}
                  className={`flex-1 py-3 px-1 rounded-lg text-center text-xs font-medium transition-all active:scale-[0.95] momentum-card momentum-card-hover ${
                    confidence === i + 1 ? "ring-2 ring-primary bg-primary/10" : ""
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        );

      case 8:
        return (
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-[-0.02em] mb-6">
              When you're at your best, what describes you most?
            </h1>
            <div className="flex flex-col gap-2">
              {personalityOptions.map((p) => (
                <OptionButton key={p} label={p} selected={personality === p} onClick={() => setPersonality(p)} />
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-[-0.02em] mb-6">
              You feel most proud when you…
            </h1>
            <div className="flex flex-col gap-2">
              {proudOptions.map((p) => (
                <OptionButton key={p} label={p} selected={proud === p} onClick={() => setProud(p)} />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <PageShell>
      <div className="flex items-center justify-center px-6 py-12 min-h-[calc(100vh-52px)]">
        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            >
              {/* Progress */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                  {step} of {TOTAL_STEPS}
                </span>
              </div>

              {renderStep()}

              {/* Navigation */}
              <div className="flex gap-3 mt-8">
                {step > 1 && (
                  <button
                    onClick={back}
                    className="px-5 py-3 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground transition-colors active:scale-[0.96]"
                  >
                    Back
                  </button>
                )}
                <button
                  disabled={!canContinue()}
                  onClick={next}
                  className="flex-1 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm disabled:opacity-40 active:scale-[0.96] transition-all"
                >
                  {step === TOTAL_STEPS ? "Get started" : "Continue"}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageShell>
  );
};

export default Onboarding;
