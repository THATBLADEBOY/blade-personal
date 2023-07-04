import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TextLoopProps = {
  texts: string[];
};

export const TextLoop = ({ texts }: TextLoopProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % texts.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [texts.length]);

  return (
    <div className="relative w-full flex justify-center items-center">
      {texts.map((text, i) => (
        <motion.div
          key={text}
          className="absolute px-4 py-2 bg-white/20 "
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: index === i ? 1 : 0,
            y: index === i ? 0 : 10,
          }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-2xl md:text-4xl font-bold text-white">{text}</p>
        </motion.div>
      ))}
    </div>
  );
};
