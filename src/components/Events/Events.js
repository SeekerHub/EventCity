import CardEvents from "./CardEvents";
const Events = () => {
    return ( 
        <>  
            <h2>Events in your City</h2>
            <div className="cardsEvents">
                <CardEvents booked={false}/>
                <CardEvents booked={false}/>
                <CardEvents booked={false}/>
                <CardEvents booked={false}/>
            </div>
        </>
    );
}
 
export default Events;