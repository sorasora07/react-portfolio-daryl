import { FaHtml5 } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { SiKalilinux } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = {
  initial: { y: 0 },
  animate: (custom) => ({
    y: [5, -20, 5],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      delay: custom * 0.2,
    },
  }),
};

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Skills</motion.h1>
      <motion.div 
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          key={0}
          custom={0}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-8"
        >
          <FaHtml5 className="text-6xl text-orange-500" />
          <h1 className="text-center mt-4">HTML</h1>
        </motion.div>
        <motion.div
          key={1}
          custom={1}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-8"
        >
          <FaCss3Alt className="text-6xl text-cyan-400" />
          <h1 className="text-center mt-4">CSS</h1>
        </motion.div>
        <motion.div
          key={2}
          custom={2}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-8"
        >
          <RiReactjsLine className="text-6xl text-blue-500" />
          <h1 className="text-center mt-4">React.js</h1>
        </motion.div>
        <motion.div
          key={3}
          custom={3}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-8"
        >
          <SiKalilinux className="text-6xl text-white" />
          <h1 className="text-center mt-4">Kali Linux</h1>
        </motion.div>
        <motion.div
          key={4}
          custom={4}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-8"
        >
          <img className="size-16" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiMwMjc3QkQiIGQ9Ik0yNC4wNDcsNWMtMS41NTUsMC4wMDUtMi42MzMsMC4xNDItMy45MzYsMC4zNjdjLTMuODQ4LDAuNjctNC41NDksMi4wNzctNC41NDksNC42N1YxNGg5djJIMTUuMjJoLTQuMzVjLTIuNjM2LDAtNC45NDMsMS4yNDItNS42NzQsNC4yMTljLTAuODI2LDMuNDE3LTAuODYzLDUuNTU3LDAsOS4xMjVDNS44NTEsMzIuMDA1LDcuMjk0LDM0LDkuOTMxLDM0aDMuNjMydi01LjEwNGMwLTIuOTY2LDIuNjg2LTUuODk2LDUuNzY0LTUuODk2aDcuMjM2YzIuNTIzLDAsNS0xLjg2Miw1LTQuMzc3di04LjU4NmMwLTIuNDM5LTEuNzU5LTQuMjYzLTQuMjE4LTQuNjcyQzI3LjQwNiw1LjM1OSwyNS41ODksNC45OTQsMjQuMDQ3LDV6IE0xOS4wNjMsOWMwLjgyMSwwLDEuNSwwLjY3NywxLjUsMS41MDJjMCwwLjgzMy0wLjY3OSwxLjQ5OC0xLjUsMS40OThjLTAuODM3LDAtMS41LTAuNjY0LTEuNS0xLjQ5OEMxNy41NjMsOS42OCwxOC4yMjYsOSwxOS4wNjMsOXoiLz48cGF0aCBmaWxsPSIjRkZDMTA3IiBkPSJNMjMuMDc4LDQzYzEuNTU1LTAuMDA1LDIuNjMzLTAuMTQyLDMuOTM2LTAuMzY3YzMuODQ4LTAuNjcsNC41NDktMi4wNzcsNC41NDktNC42N1YzNGgtOXYtMmg5LjM0M2g0LjM1YzIuNjM2LDAsNC45NDMtMS4yNDIsNS42NzQtNC4yMTljMC44MjYtMy40MTcsMC44NjMtNS41NTcsMC05LjEyNUM0MS4yNzQsMTUuOTk1LDM5LjgzMSwxNCwzNy4xOTQsMTRoLTMuNjMydjUuMTA0YzAsMi45NjYtMi42ODYsNS44OTYtNS43NjQsNS44OTZoLTcuMjM2Yy0yLjUyMywwLTUsMS44NjItNSw0LjM3N3Y4LjU4NmMwLDIuNDM5LDEuNzU5LDQuMjYzLDQuMjE4LDQuNjcyQzE5LjcxOSw0Mi42NDEsMjEuNTM2LDQzLjAwNiwyMy4wNzgsNDN6IE0yOC4wNjMsMzljLTAuODIxLDAtMS41LTAuNjc3LTEuNS0xLjUwMmMwLTAuODMzLDAuNjc5LTEuNDk4LDEuNS0xLjQ5OGMwLjgzNywwLDEuNSwwLjY2NCwxLjUsMS40OThDMjkuNTYzLDM4LjMyLDI4Ljg5OSwzOSwyOC4wNjMsMzl6Ii8+PC9zdmc+" />
          <h1 className="text-center mt-4">Python</h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
