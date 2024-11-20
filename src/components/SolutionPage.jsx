import { features } from "../constants"

const SolutionPage = () => {
  return (
    <div className="  flex flex-col items-center relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-neutral-200 text-blue-500 rounded-md h-6  text-sm font-medium px-3 py-2 uppercase">
              Our Solution</span>
              <h2 className="text-10xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide font-bold"> Buisness Analytic Solutions</h2>
              <p className="mt-10 text-lg text-center text-black max-w-4xl">
              Use data to learn everything you need to grow your business.
              </p>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900
                text-blue-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>

                <div>
                  <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                  <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
  )
}

export default SolutionPage;