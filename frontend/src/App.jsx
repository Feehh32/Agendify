import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
