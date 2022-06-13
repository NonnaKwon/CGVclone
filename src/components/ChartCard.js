import '../css/Movie.css';
import {Link} from "react-router-dom";

function ChartCard({movie,rank}){
    const link = "/movie/"+movie._id;
    return(
        <div className="chart_card_container">
            <div className="rank">NO.{rank}</div>
            <Link to={link}><img src={movie.image}/></Link>
            <Link to={link}><div className="movie_name">{movie.name}</div></Link>
            <div className="info_per">예매율 {movie.reservation_percent}%<div>평점 {movie.total_score}</div></div>
            <div className="info_day">개봉일 {movie.open_date}</div>
            <button className="reservation">예매하기</button>
        </div>
    );
}

export default ChartCard;