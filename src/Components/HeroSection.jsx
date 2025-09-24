import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0, rotate: -1 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-5 flex flex-col-reverse md:flex-row items-center">
        <motion.div 
          className="lg:flex-grow md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="mb-8" variants={itemVariants}>
            <h1 className="title-font text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              <span className="block">Crafting Interactive</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
                Web Experiences
              </span>
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mx-auto md:mx-0 mb-8"></div>
          </motion.div>
          
          <motion.p 
            className="mb-10 leading-relaxed text-lg text-gray-600 dark:text-gray-300 max-w-lg"
            variants={itemVariants}
          >
            I specialize in building responsive, accessible, and engaging user interfaces that bring digital products to life. With a keen eye for detail and a commitment to performance.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            variants={itemVariants}
          >
            <Link to="/projects" className="flex-1 sm:flex-none">
              <motion.button 
                className="w-full font-bold text-white bg-gray-700 py-3 px-8 focus:outline-none rounded-lg text-lg dark:bg-gray-800 shadow-md hover:shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                View Work
                <span className="ml-2">→</span>
              </motion.button>
            </Link>

            <Link to="/contact" className="flex-1 sm:flex-none">
              <motion.button 
                className="w-full font-bold text-white bg-blue-600 py-3 px-8 focus:outline-none rounded-lg text-lg dark:bg-blue-700 shadow-md hover:shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact Me
                <span className="ml-2">✉️</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:max-w-lg lg:w-full md:w-1/2 w-full px-4"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-200 to-blue-200 rounded-2xl opacity-20 blur-lg"></div>
            <motion.img 
              src='santosh_yadav_softwear.png' 
              alt="santosh_yadav_softwear_img" 
              className="object-cover w-full h-auto rounded-lg relative"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;