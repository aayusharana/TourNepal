import "./AdventureStyles.css"
import Trip1 from "../assets/bun.jpg"
import Trip2 from "../assets/raf.jpg"
import Trip3 from "../assets/tre.jpeg"
import AdventureData from "./AdventureData"
function Adventure(){
    return(
<div className="trip">
        <h1>Adventure</h1>
        <p>It feels good to be lost in the right direction.</p>
        <div className="tripcard">
            <AdventureData
            image={Trip1}
            heading="Bungee Jumping in Nepal"
            text="If you are looking for some thrill in the country, then go for Bungee Jumping in Nepal. Out of all the activities in Nepal, it is one that has gained popularity in the last few years at a fast rate. Both locals as well as tourists indulge in the activity to get thrilled from head to toe. Nepal offers great views and hence, it is perfect for such activity."
            />
            <AdventureData
            image={Trip2}
            heading="Rafting"
            text="Nepal's rivers descend from the highest mountains of the world, growing bigger along the way. Rafters enjoy breaks and meals along stretches of white sandy beaches. There are also stops at waterfalls where people swim in the pool and take a shower in the natural waters flowing down. "
            />
            <AdventureData
            image={Trip3}
            heading="Trekking"
            text="Home to the magnificent Himalayas, Nepal offers a multitude of breathtaking trekking opportunities for adventurers of all levels. From the legendary hike to Everest Base Camp that winds through the shadow of the world's tallest peak to the enchanting Annapurna Circuit, which showcases diverse terrain and stunning vistas, as well as lesser-known (but no less spectacular) hiking trails, Nepal has something to captivate every trekking enthusiast."
            />
        </div>
    </div>
    )
}
 export default Adventure;