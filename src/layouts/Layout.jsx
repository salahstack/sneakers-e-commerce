/**
 * Node modules
 */
import { Outlet } from "react-router-dom";
/**
 * Components
 */
import Footer from "../components/Footer";
import Header from "../components/Header";


const Layout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout