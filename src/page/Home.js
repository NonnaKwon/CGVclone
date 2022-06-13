import MovieCard from '../components/MovieCard';
import EventCard from '../components/EventCard';
import {useEffect, useState} from "react";
import axios from 'axios'
import '../css/Home.css';

// const event_data=[
//     {   id:1,
//         title:"ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
//         period:"2222-22-22~2222-33-33",
//         image:"img/event/16521431715560.jpg"
//     },
//     {   id:2,
//         title:"ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁasdasdfdㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
//         period:"2222-22-22~2222-33-33",
//         image:"img/event/16521431715560.jpg"
//     },
//     {   id:3,
//         title:"ㅁㅁㅁㅁasdasdawfwegㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
//         period:"2222-22-22~2222-33-33",
//         image:"img/event/16521431715560.jpg"
//     },
//     {   id:4,
//         title:"ㅁㅁ마지막ㅁ",
//         period:"2222-22-22~2222-33-33",
//         image:"img/event/16534549224840.jpg"
//     }
//
// ];

// var event_data;

function Home({movie_data}){
    const [event_num,setEventN] = useState(0);
    const [page_num,setPageN] = useState(0);
    const [movies,setMovies] = useState(movie_data);
    //const [events,setEvent] = useState(event_data);

    const [events,setEvent] = useState([]);
    const sendEventsRequest = async() => {
        axios.get('http://kitcapstone.iptime.org:3001/events')
            .then((res)=> {
                    setEvent(res.data);
                    console.log("성공");
                    setTimeout(50000);
                },(error) =>{
                    console.log(error);
                }
            );
    };

    useEffect(()=>{
        sendEventsRequest();
    },[]);


    const next = ()=> {
        setPageN((page_num === 0)?4:0);
    };

    if(events.length > 0) {
        return (
            <div className="home_container">
                <div className="movie_list">
                    <div className="next_left" onClick={next}>&#60;</div>
                    <div className="one">
                        <MovieCard movie={movies[0 + page_num]}/>
                        <MovieCard movie={movies[1 + page_num]}/>
                    </div>
                    <div className="two">
                        <MovieCard movie={movies[2 + page_num]}/>
                        <MovieCard movie={movies[3 + page_num]}/>
                    </div>
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
    }else{
        return <div>이벤트 안됨 ㅜ</div>
    }
}
export default Home;