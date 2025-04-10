import { motion } from "framer-motion";
import posts from "../api/posts.json";

export const Project = ({ darkMode }) => {
  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const item = {
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

  const cardHover = {
    y: -8,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: { 
      type: "spring", 
      stiffness: 300,
      damping: 10 
    }
  };

  const imageHover = {
    scale: 1.05,
    transition: { duration: 0.4 }
  };

  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="container px-5 mx-auto max-w-7xl">
        <motion.div className="text-center mb-20" variants={item}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6  text-gray-800 dark:text-white">
            My <span className="text-blue-400">projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl  text-gray-900 dark:text-white max-w-3xl mx-auto leading-relaxed">
            Explore my collection of professional projects showcasing cutting-edge web development solutions and innovative design approaches.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 "
          variants={container}
        >
          {posts.map(post => (
            <motion.div
              key={post.id}
              className="group"
              variants={item}
            >
              <motion.div
                className="h-full bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
                whileHover={cardHover}
                initial={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    className="w-full h-56 object-cover object-top"
                    src={post.image}
                    alt={post.title}
                    whileHover={imageHover}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <motion.a 
                      href={post.Livedemo}
                      className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      Live Preview
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.a>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-gray-700 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex space-x-3 text-sm text-gray-400">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {post.views}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {post.comments}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3  text-gray-800 dark:text-white">
                    {post.title}
                  </h3>
                  
                  <p className="mb-6 text-gray-800 dark:text-gray-200 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={post.Livedemo}
                      className="inline-flex items-center font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Case Study
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    
                    <div className="flex space-x-2">
                      {post.tags?.map((tag, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};