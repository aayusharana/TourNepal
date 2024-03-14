import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/b1.webp"
import Footer from "../component/Footer";
import Trip from "../component/Trip";


function Service(){
    return(
       <>
        <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={AboutImg}
    title="Make a Trip"
  
    
    btnClass="hide"
    />
    <Trip/>
  <Footer/>
       </>
    )
   }
    export default Service;