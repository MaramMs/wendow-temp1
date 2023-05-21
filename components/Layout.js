import Footer from "./Footer";
import Navbar from "./Navbar";
import Language from "./Language";
import UnauthorizedLayout from "./UnauthorizedLayout";
const Layout = ({ children ,isAuthorized}) => {

  if(!isAuthorized){
    return <UnauthorizedLayout > {children} </UnauthorizedLayout> 
  }
  return (
    <>
    {/* <Language /> */}
      <Navbar />
        <main className="overflow-x-hidden">
    

          {children}
     
        </main>

    <Footer />
    </>
  );
};

export default Layout;