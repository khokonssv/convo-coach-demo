import appBackground from "@/assets/app-background.png";
import logoIcon from "@/assets/logo-icon.png";
import { useNavigate } from "react-router-dom";

const PageShell = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      {/* Subtle background */}
      <img
        src={appBackground}
        alt=""
        className="fixed inset-0 w-full h-full object-cover -z-10 opacity-[0.07] pointer-events-none"
      />
      <div className="fixed inset-0 -z-10 bg-background/80 pointer-events-none" />

      {/* Top bar with logo */}
      <div className="sticky top-0 z-10 px-6 py-3 flex items-center gap-2 bg-background/70 backdrop-blur-md border-b border-border/50">
        <img
          src={logoIcon}
          alt="YourPitch"
          className="w-7 h-7 rounded-lg cursor-pointer"
          onClick={() => navigate("/dashboard")}
        />
        <span className="font-display font-semibold text-sm text-foreground tracking-tight">YourPitch</span>
      </div>

      {children}
    </div>
  );
};

export default PageShell;
