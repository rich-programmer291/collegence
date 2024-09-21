import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navmenu from "./components/Navmenu/Navmenu";
import AI from "./components/AI/AI";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Users from "./components/Users";
import Article from "./components/Article/Article";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navmenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/users" element={<Users />} />
          <Route path="/article" element={<Article />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
