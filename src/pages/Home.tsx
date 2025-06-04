import { motion } from "framer-motion";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* ABOUT SECTION */}
      <div className="w-full h-screen bg-green-200 flex flex-col items-center justify-center p-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }} // allows the animation to trigger when the element is in view
          className="text-3xl md:text-4xl font-semibold text-emerald-900"
        >
          Some Title
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8 mt-4 p-5 w-3/4 ">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="mt-4 text-black max-w-2xl text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            quidem harum provident earum. Quo corrupti laudantium cumque, earum
            labore quasi neque fugit sapiente rerum accusantium adipisci,
            consequatur hic excepturi perspiciatis!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
            className="mt-4 text-black max-w-2xl text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            quidem harum provident earum. Quo corrupti laudantium cumque, earum
            labore quasi neque fugit sapiente rerum accusantium adipisci,
            consequatur hic excepturi perspiciatis!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Home;
