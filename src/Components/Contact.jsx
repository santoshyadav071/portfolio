import { useState } from "react";

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

  return (
    <div className="p-4 md:p-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="mb-4 text-center">
  

"Feel free to reach out to me! Whether you have a question, an opportunity, or just want to say hello, I’d love to hear from you. You can connect with me through the form below, or drop me a message on my social platforms. Let’s create something amazing together!"  

Let me know if you want any changes or a different tone.
      </p>
      <form
        action="https://formsubmit.co/sy7304063887@gmail.com"
        method="POST"
        className="space-y-4 max-w-lg mx-auto"
      >
        <div>
          <label className="block mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded p-2 w-full text-black"
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded p-2 w-full text-black"
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border rounded p-2 w-full text-black"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-center">Find Us Here:</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2zMzXCsDQyJzQ0LjAiUyAxNDRyJzQyLjAiRQ!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
