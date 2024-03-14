import "./CandFStyles.css"
import Trip1 from "../assets/in.jpg"
import Trip2 from "../assets/dt.jpg"
import Trip3 from "../assets/bs.webp"
 import CandFData from "./CandFData"

function CandF(){
    return(
        <div className="trip">
            <h1>Cultural and Festival</h1>
            <p>Culture is a way of coping with the world by defining it in detail</p>
            <div className="tripcard">
                <CandFData
                image={Trip1}
                heading="Indra Jatra"
                text="The eight-day long Indra Jatra festival falls in September and is one of the most exciting and revered festivals of the Newar community of the Kathmandu Valley. This also marks the beginning of a month-long festival season of autumn. It begins with the erection of a wooden pole made of pine at Basantapur Sqaure in front of the old Hanuman Dhoka Palace."
                />
                <CandFData
                image={Trip2}
                heading="Dashain and Tihar"
                text="Dashain is the major National festival of Nepal. It is celebrated throughout the country and lasts for fifteen days. Tihar, also known as the festival of lights is celebrated 2 weeks after Dashain. "
                />
                <CandFData
                image={Trip3}
                heading="Bisket jatra"
                text="Biska originated as festival celebrating the 
                  March equinox and the Solar New Year in Bhaktapur by exhibiting a long banner tied in a
                   long wooden pole.During the Malla dynasty, the festival spread to 
                   other parts of the kingdom and many new traditions were added, including
                    the chariot festival of Bhairava and his consort Bhadrakali in Bhaktapur, the 
                    sindoor throwing festival in Thimi, both of which constitute the most iconic part of the 
                    festival today."
                />
            </div>
        </div>
        )

}
export default CandF;