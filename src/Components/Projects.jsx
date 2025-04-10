import { motion } from "framer-motion";
import posts from "../api/posts.json";

export const Project = ({ darkMode }) => {
  // Animation variants
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
  };

  return (
    <motion.section 
      className="body-font"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="container px-5 py-24 mx-auto">
        <motion.h2 
          className="font-bold text-center text-xl mb-4"
          variants={item}
        >
          Projects
        </motion.h2>
        
        <motion.p 
          className="text-center mb-6"
          variants={item}
        >
          Explore my collection of projects showcasing practical applications of my front-end development skills. Each project highlights my expertise in using modern web technologies to solve real-world problems and deliver engaging user experiences. From responsive designs to interactive interfaces, these projects are crafted with a focus on efficiency, functionality, and creativity.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap -m-4"
          variants={container}
        >
          {posts.map(post => (
            <motion.div
              key={post.id}
              className="p-4 sm:w-1/2 md:w-1/3"
              variants={item}
              whileHover={{ scale: 1.01 }}
            >
              <motion.div
                className={`h-full border-2 rounded-lg overflow-hidden ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                whileHover={hoverEffect}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={post.image}
                  alt={post.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <motion.h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {post.category}
                  </motion.h2>
                  <motion.h1 className="title-font text-lg font-medium mb-3">
                    {post.title}
                  </motion.h1>
                  <motion.p className="leading-relaxed mb-3">
                    {post.description}
                  </motion.p>
                  <motion.div className="flex items-center flex-wrap">
                    <motion.a 
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      href={post.Livedemo}
                      whileHover={{ x: 3 }}
                    >
                      Live Demo
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                    <motion.span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      {post.views}
                    </motion.span>
                    <motion.span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      {post.comments}
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};