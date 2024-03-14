import Kathmandu1 from "../assets/k1.jpg";
import Kathmandu2 from "../assets/k.jpg";
import Kathmandu3 from "../assets/m3.jpg";
import Kathmandu4 from "../assets/m4.webp";
import "./DestinationStyles.css";
import DestinationData from "./destinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>“Heaven is a myth, Nepal is real</p>
      <DestinationData
      className="first-des"
        heading="Kathmandu Durbar Square"
        text="Kathmandu Durbar Square (Nepal Bhasa: येँ लायकु Nepali: हनुमानढोका दरबार/ Basantapur Durbar Kshetra) is a historically and culturally significant site in Kathmandu, Nepal.
    It is one of the three Durbar (royal palace) Squares in the Kathmandu Valley in Nepal that are UNESCO World Heritage Sites.
Although the construction of the square began in the 3rd century, the major structures within it were added in later periods. 
The outer complex consists of a number of 16th-century temples built during the reign of Malla kings.
 These buildings are adorned with meticulously carved facades characteristic to Newar architecture.
The central square is surrounded by palace complexes built during the Malla and Shah periods.
The most well-known among them is the Nautalle Durbar, a nine-story palace built by Prithvi Narayan Shah to commemorate the Unification of Nepal.
A three-story temple called Kumari Chouk or Kumari Bahal is located at the southern edge of the Durbar square. This Malla-era temple is used as the resident of the Kumari,
 a young girl worshipped as a living embodiment of the Hindu Goddess Durga"
        img1={Kathmandu1}
        img2={Kathmandu2}
      />

<DestinationData
className="first-des-reverse"
        heading="Mount Everest"
        text="Mount Everest attracts many climbers, including highly experienced mountaineers. There are two main climbing routes, one approaching the summit from the southeast in Nepal (known as the standard route) 
        and the other from the north in Tibet. While not posing substantial technical climbing challenges on the standard 
        route, Everest presents dangers such as altitude sickness, weather, and wind,
         as well as hazards from avalanches and the Khumbu Icefall. As of November 2022, 
         310 people have died on Everest. 
         Over 200 bodies remain on the mountain and have not been removed due to the dangerous conditions"
        img1={Kathmandu3}
        img2={Kathmandu4}
      />
    </div>
  );
};
export default Destination;
