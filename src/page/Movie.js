import '../css/Movie.css';
import {useState,useEffect} from "react";
import axios from 'axios'
import ChartCard from "../components/ChartCard";

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

function Movie(){
    const [movies,setMovies] = useState(movie_data);

    // const sendMoviesRequest = async() => {
    //     const movies = axios.get('http://kitcapstone.iptime.org:3000/movies');
    // };
    //
    // useEffect(()=>{
    //     sendMoviesRequest();
    // });

    // const sortMovies = ()=>{
    //
    // }


    return (
        <div className="movie_container">
            <div className="title">무비차트</div>
            <div className="sort">
                <select>
                    <option>예매율순</option>
                    <option>평점순</option>
                </select>
            </div>
            <div className="movie_list">
                {movies.map((movie,index)=>(
                    <ChartCard movie={movie} rank={index+1}/>
                ))}
            </div>
        </div>
    );
}

export default Movie;