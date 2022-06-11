import MovieCard from '../components/MovieCard';
import EventCard from '../components/EventCard';
import {useEffect, useState} from "react";
import axios from 'axios'
import '../css/Home.css';

const movie_data=[
    {   id:1,
        name:"범죄도시",
        runtime :180,
        open_date:20220609,
        director:"김",
        total_score:5,
        reservation_percent:60,
        actors:"마동석",
        description:"범죄",
        limit_age:19,
        image:"img/movie/85715_320.jpg",
        genre:"액션"
    },
    {   id:2,
        name:"범죄도시",
        runtime :180,
        open_date:20220609,
        director:"김",
        total_score:5,
        reservation_percent:60,
        actors:"마동석",
        description:"범죄",
        limit_age:19,
        image:"img/movie/85715_320.jpg",
        genre:"액션"
    },

    {   id:3,
        name:"닥터 스트레인지2",
        runtime :180,
        open_date:20220609,
        director:"김",
        total_score:5,
        reservation_percent:80,
        actors:"마동석",
        description:"범죄",
        limit_age:19,
        image:"img/movie/85813_320.jpg",
        genre:"액션"
    },
    {   id:4,
        name:"닥터 스트레인지2",
        runtime :180,
        open_date:20220609,
        director:"김",
        total_score:5,
        reservation_percent:80,
        actors:"마동석",
        description:"범죄",
        limit_age:19,
        image:"img/movie/85813_320.jpg",
        genre:"액션"
    },
    {   id:5,
        name:"머랭쿠키",
        runtime :180,
        open_date:20220609,
        director:"김",
        total_score:5,
        reservation_percent:10,
        actors:"마동석",
        description:"범죄",
        limit_age:19,
        image:"img/movie/85689_320.jpg",
        genre:"액션"
    },
    {   id:6,
        name:"머랭쿠키",
        runtime :180,
        open_date:20220609,
        director:"김",
        total_score:5,
        reservation_percent:10,
        actors:"마동석",
        description:"범죄",
        limit_age:19,
        image:"img/movie/85689_320.jpg",
        genre:"액션"
    },
    {   id:7,
        name:"떡볶잉",
        runtime :180,
        open_date:20220609,
        director:"김",
        total_score:5,
        reservation_percent:30,
        actors:"마동석",
        description:"범죄",
        limit_age:19,
        image:"img/movie/85829_320.jpg",
        genre:"액션"
    },
    {   id:8,
        name:"떡볶잉",
        runtime :180,
        open_date:20220609,
        director:"김",
        total_score:5,
        reservation_percent:30,
        actors:"마동석",
        description:"범죄",
        limit_age:19,
        image:"img/movie/85829_320.jpg",
        genre:"액션"
    }

];

const event_data=[
    {   id:1,
        title:"ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
        period:"2222-22-22~2222-33-33",
        image:"img/event/16521431715560.jpg"
    },
    {   id:2,
        title:"ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁasdasdfdㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
        period:"2222-22-22~2222-33-33",
        image:"img/event/16521431715560.jpg"
    },
    {   id:3,
        title:"ㅁㅁㅁㅁasdasdawfwegㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
        period:"2222-22-22~2222-33-33",
        image:"img/event/16521431715560.jpg"
    },
    {   id:4,
        title:"ㅁㅁ마지막ㅁ",
        period:"2222-22-22~2222-33-33",
        image:"img/event/16534549224840.jpg"
    }

];


function Home(){
    const [movies,setMovies] = useState(movie_data);
    const [events,setEvent] = useState(event_data);

    const [event_num,setEventN] = useState(0);
    const [page_num,setPageN] = useState(0);

    // const sendMoviesRequest = async() => {
    //     const movies = axios.get('http://kitcapstone.iptime.org:3000/movies');
    // };
    //
    // const sendEventsRequest = async() => {
    //     const events = axios.get('http://kitcapstone.iptime.org:3000/events');
    // };
    //
    // useEffect(()=>{
    //     sendMoviesRequest();
    //     sendEventsRequest();
    // });
    //
    const next = ()=> {
        setPageN((page_num === 0)?4:0);
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