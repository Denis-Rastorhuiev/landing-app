import './App.css';
import './fonts/HANDGOTN.TTF'
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/footer/Footer";

function App() {
    return (
            <div className="App">
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>} />
                    <Route path={"/about"} element={<AboutUs/>} />
                </Routes>
                <Footer></Footer>
            </div>
    );
}

export default App;