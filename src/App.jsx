import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Nav from "../src/components/Nav";
import Hero from "./components/Hero.jsx";
import SolutionPage from "./components/SolutionPage";


function App() {
  return (
    <>
      <div className="App font-nunito-eb">
        <div className="">
          
          <div className="max-w-7xl mx-auto pt-20 px-6">
          <Nav />
          </div>
          <Hero />
          <SolutionPage />
          {/* <div className="py-5"></div> */}
          <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/register" element={<Register />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
