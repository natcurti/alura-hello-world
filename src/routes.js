import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Menu from "./Components/Menu";
import Footer from "Components/Footer";
import DefaultPage from "Components/DefaultPage";
import Post from "Pages/Post";
import NotFound from "Pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<DefaultPage/>}>
          <Route index element={<Home/>}/>
          <Route path="sobremim" element={<AboutMe/>}/>
        </Route>
        <Route path="posts/:id/*" element={<Post/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
