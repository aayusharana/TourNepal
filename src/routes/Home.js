
import Adventure from "../component/Adventure";
import CandF from "../component/CandF";
import Destination from "../component/Destination";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Trip from "../component/Trip";
import ReviewsCarousel from "../component/ReviewsCarousel"

function Home(){
 return(
    <>
    <Navbar/>
    
    <Hero
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1612875895771-76bba1a61a49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="The journey of a thousand miles begins with a single step"
    text="choose your favourite destination."
    buttonText="Travel Plan"
    url="TravelPlan"
    btnClass="show"
    />
    <Destination/>
    <Trip/>
    <CandF/>
    <Adventure/>
   
    <ReviewsCarousel/>
    <Footer/>
    
    </>
 )
}
 export default Home;