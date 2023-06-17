import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useFollowPointer } from "../Hooks/useFollowPoints";
import "../Hooks/index.css";

const Layout = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      className="background flex items-center justify-center h-screen bg-light-gray"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <motion.div
        ref={ref}
        className="w-5 h-5 rounded-full bg-electric-blue"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      />
      <div className="bg-white w-full max-w-sm rounded-lg  min-h-custom-height">
        <div className="z-10 backdrop-filter backdrop-blur-md w-full max-w-sm px-10 p-6 border rounded-lg border-dotted text-medium-blue min-h-custom-height">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Layout;
