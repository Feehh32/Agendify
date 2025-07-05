import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const hiddenHeaderRoutes = ["/login", "/register"];
  const shouldHideHeader = hiddenHeaderRoutes.includes(location.pathname);

  return (
    <div className="flex  flex-col min-h-screen">
      {!shouldHideHeader && <Header />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
