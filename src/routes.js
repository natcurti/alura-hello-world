import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Menu from "./Components/Menu";
import Footer from "Components/Footer";
import DefaultPage from "Components/DefaultPage";
import Post from "Pages/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<DefaultPage/>}>
          <Route index element={<Home/>}/>
          <Route path="sobremim" element={<AboutMe/>}/>
          <Route path="posts/:id" element={<Post/>}/>
        </Route>
        <Route path="*" element={<p>Página não encontrada.</p>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;