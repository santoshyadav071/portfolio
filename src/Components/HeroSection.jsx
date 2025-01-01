import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-24 items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
          <h1 className="title-font text-3xl sm:text-4xl mb-4 font-bold animate-fade-in-up">
            Crafting Interactive Web Experiences
            <br className="hidden lg:inline-block" />
            Frontend Developer with a Passion for Clean Code & Design
          </h1>
          <p className="mb-8 leading-relaxed">
            I specialize in building responsive, accessible, and engaging user interfaces that bring digital products to life. With a keen eye for detail and a commitment to performance, I turn complex ideas into elegant and functional web applications.
          </p>
          <div className="flex flex-col md:flex-row justify-center">
            {/* First Button */}
            <Link to="/projects">
              <button className="mb-4 md:mb-0 md:mr-4 inline-flex font-bold text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 hover:text-white rounded text-lg dark:text-white dark:bg-gray-800 dark:hover:bg-blue-700">
                View Work
              </button>
            </Link>

            {/* Second Button */}
            <Link to="/contact">
              <button className="inline-flex font-bold text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 hover:text-white rounded text-lg dark:text-white dark:bg-blue-700 dark:hover:bg-blue-600">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
          <img src='final.png' alt="Showcase" className="object-cover w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
