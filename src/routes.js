import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Menu from "./Components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobremim" element={<AboutMe/>}/>
        <Route path="*" element={<p>Página não encontrada.</p>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
