import "./Hero.css";
const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="flex bg-neutral-200  text-blue-500 rounded-md h-8 text-sm font-medium px-3 py-2 uppercase spacings">
        Buisness Analytic Services
      </span>
      <h1 className=" font-bold text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Working with data to
        <span className="bg-gradient-to-t font-bold">
          {" "}
          {""}grow <br />
        </span>
        <span className="bg-gradient-to-r from-blue-500 to-blue-500 text-transparent bg-clip-text">
          {" "}
          Buisnesses
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-black max-w-4xl font-semibold">
        Access insights that make an impact to unleash your business full
        potential with our customer data services.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-full hover-white font-semibold"
        >
          Request a Demo
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-full border hover-blue">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Hero;
