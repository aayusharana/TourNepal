import { Component } from "react";
import Kathmandu1 from "../assets/k1.jpg"
import Kathmandu2 from "../assets/k.jpg"
import Kathmandu3 from "../assets/m3.jpg"
import Kathmandu4 from "../assets/m4.webp"
import "./DestinationStyles.css"
 
class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>
                    {this.props.text}
                </p>
    
            </div>
            <div className="image">
                <img alt="img" src={this.props.img1}/>
                <img alt="img" src={this.props.img2}/>
            </div>
        </div>
        )
    }
}
 export default DestinationData;