import { useState } from "react";
import { motion } from "framer-motion";

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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-4 md:p-10"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl font-bold mb-4 text-center"
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mb-4 text-center"
        >
          "Feel free to reach out to me! Whether you have a question, an opportunity, or just want to say hello, I'd love to hear from you. You can connect with me through the form below, or drop me a message on my social platforms. Let's create something amazing together!"
        </motion.p>

        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="space-y-4 max-w-lg mx-auto"
        >
          <motion.div variants={itemVariants}>
            <label className="block mb-1" htmlFor="name">
              Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #3b82f6" }}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded p-2 w-full text-black"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #3b82f6" }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded p-2 w-full text-black"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block mb-1" htmlFor="message">
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #3b82f6" }}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border rounded p-2 w-full text-black"
              rows="4"
              required
            />
          </motion.div>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          variants={itemVariants}
          className="mt-6"
        >
          <h2 className="text-xl font-semibold text-center">Find Us Here:</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2zMzXCsDQyJzQ0LjAiUyAxNDRyJzQyLjAiRQ!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;