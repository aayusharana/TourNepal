import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/a1.jpg"
import Trip2 from "../assets/a2.jpg"
import Trip3 from "../assets/a3.jpg"
 function Trip(){
    return(
    <div className="trip">
        <h1>Places</h1>
        <p>allowing yourself to accept changes that might bring good things to you</p>
        <div className="tripcard">
            <TripData
            image={Trip1}
            heading="Mustang"
            text="Mustang is known for its trekking tours and mountain sightseeing. 
            Elevated at an altitude of 3840 kilometres, this city is divided into two parts: 
            Lower and Upper Mustang. Even though it is relatively unexplored, this city is 
            a great destination for those who want to immerse in Tibetan culture as well 
            as in Nepalese lifestyle as it is located near the Tibetan Plateau"
            />
            <TripData
            image={Trip2}
            heading="phoksundo lake"
            text="Phoksundo Lake is an alpine fresh water oligotrophic lake in Nepal's Shey Phoksundo National Park,
             located at an elevation of 3,611.5 m in the Dolpa District.
             Phoksundo Lake is 494 ha in size with a water volume of 409,000,000 m³ and a discharge of 3.715 m³/s. "
            />
            <TripData
            image={Trip3}
            heading="Pokhara"
            text="Pokhara is a city on Phewa Lake, in central Nepal. It’s known as a gateway to the Annapurna Circuit, 
            a popular trail in the Himalayas. Tal Barahi Temple, a 2-story pagoda, sits on an island in the lake. 
            On the eastern shore, the Lakeside district has yoga centers and restaurants. In the city’s south,
             the International Mountain Museum has exhibits on the history of mountaineering and the people of the Himalayas"
            />
        </div>
    </div>
    )
 }
 export default Trip;