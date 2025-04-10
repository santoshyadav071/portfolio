import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const buttonVariants = {
    hover: {
      y: -2,
      scale: 1.02,
      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const inputFocus = {
    scale: 1.01,
    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
    borderColor: "#3b82f6",
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white "
          >
            Get In <span className="text-blue-400">Touch</span>
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl max-w-2xl mx-auto text-gray-900 dark:text-white"
          >
            Have a project in mind or want to discuss opportunities? Feel free to reach out - I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12  text-gray-900 dark:text-white">
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <label className="block mb-2 font-medium" htmlFor="name">
                  Your Name
                </label>
                <motion.input
                  whileFocus={inputFocus}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block mb-2 font-medium" htmlFor="email">
                  Email Address
                </label>
                <motion.input
                  whileFocus={inputFocus}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3  bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block mb-2 font-medium" htmlFor="message">
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={inputFocus}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3  bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                  rows="5"
                  required
                ></motion.textarea>
              </motion.div>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg flex items-center justify-center gap-2"
              >
                <FiSend className="text-lg" />
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:w-1/2"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 h-full"
            >
              <h2 className="text-2xl font-bold mb-6 text-black dark:text-blue-400">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 rounded-lg text-blue-400">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black dark:text-gray-200">Email</h3>
                    <p className= " text-black dark:text-gray-400">sy7304063887@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 rounded-lg text-blue-400">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium  text-black dark:text-gray-300">Phone</h3>
                    <p className=" text-black dark:text-gray-400">+1 (91) 7304063887</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 rounded-lg text-blue-400">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black dark:text-gray-400">Location</h3>
                    <p className="text-black dark:text-gray-400">Prayagraj Utter pradesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2zMzXCsDQyJzQ0LjAiUyAxNDRyJzQyLjAiRQ!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                  title="Google Map"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;