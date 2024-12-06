import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "../pages/HomeView";
import Header from "../components/Header/Header";
import InfoView from "../pages/InfoView";

const RoutesApp = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/info" element={<InfoView />} />
                <Route path="*" element={<HomeView />} />
            </Routes>
        </Router>
    );
};

export default RoutesApp;
