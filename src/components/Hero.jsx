import './Hero.css'
const Hero = () => {
  return (
    <div className="flex flex-col items-center">
       <span className="flex bg-neutral-200 bubble">
            <p>Buisness Analytic Services</p>
        </span>  
      <h1 className=" font-bold text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide landing-text">
      Working with data to   
      <span className='bg-gradient-to-t font-bold'> {""}grow <br /></span>
        <p className="grad">
          {" "}
          Buisnesses
        </p>
      </h1>
      <p className="mt-10 text-lg text-center text-black max-w-4xl font-semibold quotes">
      Access insights that make an impact to unleash your business full potential with our customer data services.
      </p>
      <div className="flex justify-center my-10 btnCont1">
        <a
          href="#"
          className="banner-btn"
        >
          Request a Demo
        </a>
        <a href="#" className="banner-btn">
          <p>Learn More</p>
          <i className = "fad fa-arrow-right"></i>
        </a>
      </div>
     
    </div>
  );
};

export default Hero;
