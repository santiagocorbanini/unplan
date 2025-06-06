import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import RoutesApp from "./routes/Routes";
import Footer from "./components/Footer/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import InfoFooter from './components/InfoFooter/InfoFooter';

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RoutesApp />
            <InfoFooter />
            <Footer />
        </QueryClientProvider>
    </StrictMode>
);