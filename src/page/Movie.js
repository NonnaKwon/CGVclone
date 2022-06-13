import '../css/Movie.css';
import {useState,useEffect} from "react";
import axios from 'axios'
import ChartCard from "../components/ChartCard";

function Movie(){
    const [movies,setMovies] = useState([]);
    const [selected,setSelect] = useState("reservation_percent");

    const handleChangeSelect=(e)=>{
        setSelect(()=>e.target.value);
        if(selected === "total_score"){
            setMovies(movie_data_reser);
            console.log("total_score");
        }else{
            setMovies(movie_data_score);
            console.log("reservation_percent");
        }
    }

    const [movie_data_reser, setMovie_data_reser] = useState([]);
    const [movie_data_score, setMovie_data_score] = useState([]);

    const sendMoviesReserRequest = async() => {
        axios.get('http://kitcapstone.iptime.org:3001/movies/sort/reservation_percent')
            .then((res)=> {
                    setMovie_data_reser(res.data);
                    setMovies(res.data);
                    console.log("성공");
                    setTimeout(50000);
                },(error) =>{
                    console.log(error);
                }
            );
    };

    const sendMoviesScoreRequest = async() => {
        axios.get('http://kitcapstone.iptime.org:3001/movies/sort/total_score')
            .then((res)=> {
                    setMovie_data_score(res.data);
                    console.log("성공");
                    setTimeout(50000);
                },(error) =>{
                    console.log(error);
                }
            );
    };

    useEffect(()=>{
        sendMoviesScoreRequest();
        sendMoviesReserRequest();
    },[]);


    if(movie_data_reser.length > 0 && movie_data_score.length > 0) {
        return (
            <div className="movie_container">
                <div className="title">무비차트</div>
                <div className="sort">
                    <select onChange={handleChangeSelect} value={selected}>
                        <option value="reservation_percent">예매율순</option>
                        <option value="total_score">평점순</option>
                    </select>
                </div>
                <div className="movie_list">
                    <ChartCard movie={movies[0]} rank={1}/>
                    <ChartCard movie={movies[1]} rank={2}/>
                    <ChartCard movie={movies[2]} rank={3}/>
                </div>
                <div className="movie_list">
                    <ChartCard movie={movies[3]} rank={4}/>
                    <ChartCard movie={movies[4]} rank={5}/>
                    <ChartCard movie={movies[5]} rank={6}/>
                </div>
                <div className="movie_list">
                    <ChartCard movie={movies[6]} rank={7}/>
                    <ChartCard movie={movies[7]} rank={8}/>
                </div>
            </div>
        );
    }else{
        return (
            <div>영화 차트 안됨</div>
        );
    }
}

export default Movie;