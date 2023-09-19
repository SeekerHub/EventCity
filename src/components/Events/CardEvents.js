import "./event.css";
// import logo from 'standup.jpg'
const CardEvents = (props) => {
    return ( 
        <>
           <div className="containerEvents">
            <div className="imageContainEvents">
                <img src = {require('./standup.jpg')} style={{width : "100%"}}></img>
            </div>
            <div className="bodyInfoEvents">
                <div className="postedOn">{"15th July 2023"}</div>
                <div className="title">{"STAND UP COMEDY"}</div>
                <div className="content">{"After successfull show \"TATHASTU\",  Zakir Khan is back again with another show..."}
                <div className="authorInfo">{"Zakir Khan"}</div>
                {/* <div className="Venue"></div> */}
                </div>
                {props.booked ? null:<div className = "bookingButton">Book Now</div>}
            </div>
            </div> 
        </>
     );
}
 
export default CardEvents;