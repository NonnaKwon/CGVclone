import '../css/Home.css';

function EventCard({event}){
    return(
        <div className="event_card">
            <img src={event.image}/>
            <div className="title">{event.title}</div>
            <div className="period">{event.period}</div>
        </div>
    );
}

export default EventCard;