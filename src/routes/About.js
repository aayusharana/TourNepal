import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/p1.webp"
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";
function About(){
    return(
       <>
         <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={AboutImg}
    title="Namaste Welocome To Nepal"
  
    
    btnClass="hide"
    />
    <AboutUs/>
      <Footer/>
       </>
    )
   }
    export default About;