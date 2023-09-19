
import CardEvents from "../Events/CardEvents";
import "./book.css"
const Bookings = () => {
    return ( 
        <>  
            <div className="titleBook">
                My Bookings
            </div>
            
            <hr class="new1"></hr>
            <div className="bookContainer">
                <CardEvents booked={true}/>
                <CardEvents booked={true}/>
            </div>
        </>
    );
}
 
export default Bookings;