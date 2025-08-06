import { motion } from "framer-motion";

import babycrawl from "../assets/babycrawl.gif"; // Ensure this path is correct

const CrawlingBaby = ({ direction = "right", speed = 20 }) => {
  const isLeft = direction === "left";

  return (
    <div className="relative w-full overflow-hidden h-20">
      <motion.div
        initial={{ x: isLeft ? "100vw" : "-100vw" }}
        animate={{ x: isLeft ? "-100vw" : "100vw" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute bottom-0"
      >
        <div className="relative">
          {/* Baby Image */}
          <img
            src={babycrawl}
            alt="Crawling Baby"
            className={`w-24 md:w-32 ${
              isLeft ? "scale-x-[-1]" : ""
            } drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)]`}
          />

          {/* Shadow under baby */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-2 bg-black/30 blur-md rounded-full z-[-1]" />
        </div>
      </motion.div>
    </div>
  );
};

export default CrawlingBaby;
