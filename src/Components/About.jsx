import data from "../api/data.json"; // Importing the JSON file
import myimage from "../assets/myimage.jpg";
export const About = () => {
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-bold text-2xl md:text-3xl mb-4">About Me</h2>
          <div className="flex justify-center mb-4">
            <img src={myimage} className="rounded-full w-40 sm:w-60" alt="Profile" />
          </div>
          <p className="text-base md:text-lg text-center mb-6">
            I'm Santosh Yadav, a passionate Frontend Developer specializing in
            <span className="font-bold text-blue-500"> React js</span>. With a strong foundation in HTML,<span  className="font-bold text-blue-500">Tailwind CSS</span> , and JavaScript, I
            focus on building dynamic and responsive web applications. I enjoy
            creating user-friendly interfaces, optimizing performance, and
            ensuring seamless user experiences. Leveraging frameworks like
            Tailwind and Bootstrap, I bring ideas to life through clean,
            maintainable code. My goal is to continuously enhance my skills and
            contribute to impactful projects that push the boundaries of modern
            web development. Here are my skills:
          </p>
          <div className="skills-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="skill-card border p-4 rounded shadow-sm dark:shadow-md dark:shadow-gray-800 transition-transform"
              >
                <img
                  src={`${item.image}`}
                  alt={item.title}
                  className="w-16 h-16 mx-auto"
                />
                <h3 className="text-center font-bold text-lg mt-2">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
