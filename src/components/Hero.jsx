import './Hero.css'
const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Working with data to   
      <span className='bg-gradient-to-t from-blue-500  to-blue-500'> {""}grow <br /></span>
        <span className="bg-gradient-to-r from-blue-500 to-blue-500 text-transparent bg-clip-text">
          {" "}
          Buisnesses
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Access insights that make an impact to unleash your business full potential with our customer data services.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-full hover-white"
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
