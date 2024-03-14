import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/b2.jpg"
import Footer from "../component/Footer";
import ConntactForm from "../component/ConntactForm";



function Contact(){
    return(
       <>
           <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={AboutImg}
    title="Connect with us"
  
    
    btnClass="hide"
    />
 <ConntactForm/>
      <Footer/>
       </>
    )
   }
    export default Contact;