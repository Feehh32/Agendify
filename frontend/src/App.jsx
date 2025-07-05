import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
