import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import { Toaster } from "react-hot-toast";
import "./components/landing-style.css";

function App() {
  return (
    <>
      <div className="App font-nunito-eb">
        <div className="">
          <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
