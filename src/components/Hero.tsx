import { motion } from "framer-motion";

/* const textVariants1 = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const textVariants2 = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.5,
    },
  }, 
};
*/
const Hero = () => {
  return (
    <section className="w-full h-screen bg-white flex flex-col items-start justify-center px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48">
      <motion.p
        className="text-6xl md:text-8xl font-bold text-gray-800 max-w-4xl leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Turning
        {/* <span className="text-green-600">sustainability</span> knowledge into action */}
      </motion.p>

      <motion.p
        className="text-6xl md:text-8xl font-bold text-green-600 max-w-4xl leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        sustainability
      </motion.p>

      <motion.p
        className="text-6xl md:text-8xl font-bold text-gray-900 max-w-4xl leading-tight"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut", delay: 1 },
          },
        }}
      >
        knowledge
      </motion.p>
      <motion.p
        className="text-6xl md:text-8xl font-bold text-gray-800 max-w-4xl leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
      >
        into action
      </motion.p>
    </section>
  );
};

export default Hero;
