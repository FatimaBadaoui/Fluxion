import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 2000); // adjust duration
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          initial={{ scale: 1 }}
          animate={{ scale: 30 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <motion.svg
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1.2 }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-emerald-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 3.43 2.61 7.37 7 11.54 4.39-4.17 7-8.11 7-11.54 0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 2.36-1.97 5.46-5 8.88C8.97 14.46 7 11.36 7 9c0-2.76 2.24-5 5-5z" />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
