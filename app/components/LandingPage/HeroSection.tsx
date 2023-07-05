// import { SocialList } from "components/common/SocialList";

import { motion } from "framer-motion";
import { TextLoop } from "../TextLoop";
import { SocialLinks } from "../SocialLinks";

export const HeroSection = () => (
  <div className="flex justify-center flex-col items-center pt-12">
    <h1 className="text-7xl font-bold md:text-[120px] leading-none flex justify-center items-center flex-col  text-white">
      <span className="flex justify-center items-center">
        <motion.span
          className="-rotate-12 flex justify-center items-center"
          animate={{
            rotate: [0, 0, 0, 0, 0, 0, 0, 0, 0, -12, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            bounce: -1,
            bounceStiffness: 100,
            ease: "linear",
          }}
        >
          <svg
            className="inline fill-white h-8 mr-1 md:h-16 md:mr-2 scale-x-[-1] "
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
          </svg>
        </motion.span>
        AUSTIN
        <motion.span
          className="-rotate-12 flex justify-center items-center"
          animate={{
            rotate: [0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, -6, 0, 0, 0, 0],
            opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            bounce: -1,
            bounceStiffness: 100,
            ease: "linear",
          }}
        >
          <svg
            className="inline fill-white h-8 ml-2 md:h-16 md:ml-4 rotate-12"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
          </svg>
        </motion.span>
      </span>
      <span className="bg-yellow-400 px-8">
        <p className="text-7xl -mb-4 text-black md:text-[170px]">BLADE</p>
      </span>
    </h1>
    <div className="text-white  text-sm md:text-lg flex flex-col justify-center items-center w-full relative">
      <div className=" -mt-1 -mb-2 bg-black border-black border-2 px-2 max-w-fit text-sm md:text-lg rotate-6 drop-shadow-xl z-50 shadow-black font-bold">
        LOVES{" "}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block -ml-0.5"
        >
          🫀
        </motion.div>
      </div>
      <div className="w-full mt-8 mb-4">
        <TextLoop
          texts={[
            "BUILDING COOL THINGS",
            "TECHNOLOGY",
            "SOFTWARE DEVELOPMENT",
            "HELPING OTHERS LEARN",
          ]}
        />
      </div>
    </div>
    <div className="mt-12 justify-center items-center w-full max-w-2xl">
      <SocialLinks />
    </div>
  </div>
);
