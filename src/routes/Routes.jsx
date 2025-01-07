import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "../pages/HomeView";
import Header from "../components/Header/Header";
import InfoView from "../pages/InfoView";
import ComerView from "../pages/ComerView/ComerView";
import SalirView from "../pages/SalirView/SalirView";
import DormirView from "../pages/DormirView/DormirView";
import ContactoView from "../pages/ContactoView";

const RoutesApp = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/info" element={<InfoView />} />
                <Route path="/contacto" element={<ContactoView />} />
                <Route path="/dormir" element={<DormirView />} />
                <Route path="/salir" element={<SalirView />} />
                <Route path="/comer" element={<ComerView />} />
                <Route path="*" element={<HomeView />} />
            </Routes>
        </Router>
    );
};

export default RoutesApp;
