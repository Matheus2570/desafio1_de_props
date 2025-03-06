import "./App.css";
import Home from "./pages/Home"
import Maria1 from "./pages/Maria"
import Matheus1 from "./pages/Matheus";
import Laura1 from "./pages/Laura";
import Ana1 from "./pages/Ana";
import Valentina1 from "./pages/Valentina";
import Vitor1 from "./pages/Vitor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>  

<BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/maria" element={<Maria1 />} />
              <Route path="/matheus" element={<Matheus1 />} />
              <Route path="/laura" element={<Laura1 />} />
              <Route path="/ana" element={<Ana1 />} />
              <Route path="/valentina" element={<Valentina1 />} />
              <Route path="/vitor" element={<Vitor1 />} />
            </Routes>
          </BrowserRouter>


    </>
  );
}

export default App;