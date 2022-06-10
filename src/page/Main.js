import {useState,useEffect} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from '../components/Header';
import NavMenu from '../components/NavMenu';
import Home from './Home';
import Movie from "./Movie";
import TimeTable from "./TimeTable";
import '../Main.css';

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

function Main() {
    const [movies,setMovies] = useState(movie_data);
    const [events,setEvent] = useState(event_data);
    //const [clickedMenu,setClickedMenu] = useState();

    const sendRequest = async() => {
        const response = await axios.get('http://localhost:3000');
        console.log(response);
        console.log(response.data);
    };

    useEffect(()=>{
        sendRequest();
    });

    return (
        <div>
            <BrowserRouter>
                <Header/>
                <NavMenu/>
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<div><Home movies={movies} events={events}/></div>}></Route>
                        <Route path="/movie" element={<div><Movie/></div>}></Route>
                        <Route path="/timetable" element={<div><TimeTable/></div>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Main;