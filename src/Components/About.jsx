import { motion } from "framer-motion";
import data from "../api/data.json";
import myimage from "../assets/myimage.jpg";

export const About = () => {
  // Animation variants (unchanged)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      className="py-8"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-center font-bold text-2xl md:text-3xl mb-4"
          variants={item}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="flex justify-center mb-4"
          variants={item}
        >
          <img 
            src={myimage} 
            className="rounded-full w-40 sm:w-60" 
            alt="Profile" 
          />
        </motion.div>
        
        <motion.p 
          className="text-base md:text-lg text-center mb-6"
          variants={item}
        >
          I'm Santosh Yadav, a passionate Frontend Developer specializing in
          <span className="font-bold text-blue-500"> React js</span>. With a strong foundation in HTML,
          <span className="font-bold text-blue-500">Tailwind CSS</span>, and JavaScript, I
          focus on building dynamic and responsive web applications. I enjoy
          creating user-friendly interfaces, optimizing performance, and
          ensuring seamless user experiences. Leveraging frameworks like
          Tailwind and Bootstrap, I bring ideas to life through clean,
          maintainable code. My goal is to continuously enhance my skills and
          contribute to impactful projects that push the boundaries of modern
          web development. Here are my skills:
        </motion.p>
        
        <motion.div 
          className="skills-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4"
          variants={container}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="skill-card border border-gray-200 dark:border-gray-600 p-3 rounded-md transition-all"
              variants={item}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              <img
                src={`${item.image}`}
                alt={item.title}
                className="w-14 h-14 mx-auto"
              />
              <h3 className="text-center font-semibold text-base mt-2">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};