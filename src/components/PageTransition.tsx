import { motion, AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0, 0, 1] as const } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: [0.2, 0, 0, 1] as const } },
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
