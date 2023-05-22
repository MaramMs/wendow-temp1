import Footer from "./Footer";
import Navbar from "./Navbar";
import Language from "./Language";
import UnauthorizedLayout from "./UnauthorizedLayout";
import { useEffect, useState } from "react";
const Layout = ({ children ,isAuthorized}) => {

  if(!isAuthorized){
    return <UnauthorizedLayout > {children} </UnauthorizedLayout> 
  }

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        return null;
    }
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