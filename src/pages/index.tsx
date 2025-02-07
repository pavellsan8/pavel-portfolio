import Navbar from "../components/navigation_bar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home" className="w-full h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-32 relative z-10">
        <div className="flex-1 h-full flex flex-col justify-center items-start space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white-800">
            Hi, I'm Pavel
          </h1>
          <p className="text-lg md:text-xl text-white-600">
            Discover my career journey, skills, and completed projects here!
          </p>
          <a href="#about">
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600">
              Get Started
            </button>
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <img
            src="/images/homepage/profile.jpg"
            alt="Hero Image"
            className="w-3/5 max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </section>
      <div
        className="absolute top-0 left-0 w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/homepage/hero.jpg")' }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
      </div>

      <section id="about" className="h-screen bg-green-500 flex items-center justify-center text-white">
        <h1 className="text-4xl">About Us</h1>
      </section>

      <section id="services" className="h-screen bg-yellow-500 flex items-center justify-center text-white">
        <h1 className="text-4xl">Our Services</h1>
      </section>

      <section id="contact" className="h-screen bg-red-500 flex items-center justify-center text-white">
        <h1 className="text-4xl">Contact Us</h1>
      </section>

      <Footer />
    </>
  );
}