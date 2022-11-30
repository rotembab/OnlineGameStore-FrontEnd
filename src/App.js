import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
