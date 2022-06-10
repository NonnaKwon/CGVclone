import MovieCard from '../components/MovieCard';
import EventCard from '../components/EventCard';
import {useState} from "react";
import '../css/Home.css';

//movie 리스트 배열로 들고와서
function Home({movies,events}){
    const [event_num,setEvent] = useState(0);
    const [page_num,setPage] = useState(0);
    const next = ()=> {
        setPage((page_num === 0)?4:0);
    };

    return (
        <div className="home_container">
            <div className="movie_list">
                <div className="next_left" onClick={next}>&#60;</div>
                <MovieCard movie={movies[0+page_num]}/>
                <MovieCard movie={movies[1+page_num]}/>
                <MovieCard movie={movies[2+page_num]}/>
                <MovieCard movie={movies[3+page_num]}/>
                <div className="next_right" onClick={next}>&#62;</div>
            </div>
            <div className="event_text">EVENT</div>
            <div>
                <div className="event_list">
                    <div className="next_left">&#60;</div>
                    <div><EventCard event={events[0]}/></div>
                    <div><EventCard event={events[1]}/></div>
                    <div><EventCard event={events[2]}/></div>
                    <div><EventCard event={events[3]}/></div>
                    <div className="next_right">&#62;</div>
                </div>
            </div>
        </div>
    );
}


export default Home;

// function showEvent(){
//     if(event_num === 0){
//         return(
//             <div>
//                 <div className="event_list">
//                     <div className="next_left">&#60;</div>
//                     <div><EventCard event={events[0]}/></div>
//                     <div><EventCard event={events[1]}/></div>
//                     <div><EventCard event={events[2]}/></div>
//                     <div><EventCard event={events[3]}/></div>
//                     <div className="next_right">&#62;</div>
//                 </div>
//                 {event_num}
//                 {/*{setEvent(1)}*/}
//                 {/*{event_num}*/}
//                 {setTimeout("showEvent()",3000)}
//             </div>
//         );
//     }else{
//         return(
//             <div>
//                 <div className="event_list">
//                     <div className="next_left">&#60;</div>
//                     <div><EventCard event={events[0]}/></div>
//                     <div><EventCard event={events[1]}/></div>
//                     <div><EventCard event={events[2]}/></div>
//                     <div><EventCard event={events[3]}/></div>
//                     <div className="next_right">&#62;</div>
//                 </div>
//                 {event_num}
//
//             </div>
//         );
//     }
// }