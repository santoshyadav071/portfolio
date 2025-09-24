import { motion } from "framer-motion";
import data from "../api/data.json";
import myimage from "../assets/myimage.jpg";

export const About = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skillItem = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div className="text-center mb-12" variants={item}>
          <h2 className="font-bold text-3xl md:text-4xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            className="flex-shrink-0"
            variants={item}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={myimage}
              className="rounded-full w-48 sm:w-56 border-4 border-white dark:border-gray-700 shadow-lg"
              alt="Profile"
            />
          </motion.div>

          <motion.div className="text-center lg:text-left" variants={item}>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm{" "}
              <span className="font-semibold text-blue-500 dark:text-blue-400">
                Santosh Yadav
              </span>
              , a passionate
              <span className="font-bold text-blue-500 dark:text-blue-400">
                {" "}
                Full Stack Developer
              </span>{" "}
              specializing in modern web technologies. With a strong foundation
              in
              <span className="font-bold text-blue-500 dark:text-blue-400">
                {" "}
                React.js
              </span>
              ,
              <span className="font-bold text-blue-500 dark:text-blue-400">
                {" "}
                Node.js
              </span>
              ,
              <span className="font-bold text-blue-500 dark:text-blue-400">
                {" "}
                Express.js
              </span>
              , and
              <span className="font-bold text-blue-500 dark:text-blue-400">
                {" "}
                MongoDB
              </span>
              , I build scalable, dynamic, and responsive web applications from
              frontend to backend.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I enjoy creating user-friendly interfaces, designing robust
              backend systems, and integrating secure APIs to deliver seamless
              digital experiences. My goal is to continuously expand my
              expertise, contribute to impactful projects, and push the
              boundaries of modern full stack web development.
            </p>
          </motion.div>
        </div>

        <motion.div className="text-center mb-8" variants={item}>
          <h3 className="font-bold text-2xl md:text-3xl mb-4 text-gray-800 dark:text-white">
            My <span className="text-blue-500">Skills</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I've been working with recently
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={container}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="skill-card bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              variants={skillItem}
              whileHover="hover"
            >
              <div className="flex flex-col items-center">
                <img
                  src={`${item.image}`}
                  alt={item.title}
                  className="w-16 h-16 object-contain mb-4"
                />
                <h3 className="text-center font-medium text-gray-800 dark:text-gray-200">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
