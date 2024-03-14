import "./HeroStyles.css"
function Hero(props){
    return(
       <>
      <div className={props.cName}>
        <img alt="HerImg" src={props.heroImg}/>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p1>{props.text}</p1>
            <a href={props.url} className=
            {props.btnClass}>
            {props.buttonText}
            </a>
      </div>
      </div>
       </>
    )
   }
    export default Hero;