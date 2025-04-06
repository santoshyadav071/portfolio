import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-24 items-center">
        <motion.div 
          className="lg:flex-grow md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="title-font text-3xl sm:text-4xl mb-4 font-bold"
            variants={itemVariants}
          >
            Crafting Interactive Web Experiences
            <br className="hidden lg:inline-block" />
            Frontend Developer with a Passion for Clean Code & Design
          </motion.h1>
          
          <motion.p 
            className="mb-8 leading-relaxed"
            variants={itemVariants}
          >
            I specialize in building responsive, accessible, and engaging user interfaces that bring digital products to life. With a keen eye for detail and a commitment to performance, I turn complex ideas into elegant and functional web applications.
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-center"
            variants={itemVariants}
          >
            {/* First Button */}
            <Link to="/projects">
              <motion.button 
                className="mb-4 md:mb-0 md:mr-4 inline-flex font-bold text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 hover:text-white rounded text-lg dark:text-white dark:bg-gray-800 dark:hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.button>
            </Link>

            {/* Second Button */}
            <Link to="/contact">
              <motion.button 
                className="inline-flex font-bold text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 hover:text-white rounded text-lg dark:text-white dark:bg-blue-700 dark:hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:max-w-lg lg:w-full md:w-1/2 w-full"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <motion.img 
            src='final.png' 
            alt="Showcase" 
            className="object-cover w-full h-auto"
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;