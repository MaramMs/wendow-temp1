import Wrapper from "./Wrapper";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Language from "./Language";
import Hero from "./Hero";
const Layout = ({ children }) => {
  return (
    <>
    <Language />
      <Navbar />
        <main className="overflow-x-hidden">
    

          {children}
     
        </main>

    <Footer />
    </>
  );
};

export default Layout;