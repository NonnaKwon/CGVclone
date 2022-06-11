import '../css/Movie.css';

function ChartCard({movie,rank}){
    return(
        <div className="chart_card_container">
            <div className="rank">NO.{rank}</div>
            <img src={movie.image}/>
            <div className="movie_name">{movie.name}</div>
            <div className="info_per">예매율 {movie.reservation_percent}%<div>평점 {movie.total_score}</div></div>
            <div className="info_day">개봉일 {movie.open_date}</div>
            <button className="reservation">예매하기</button>
        </div>
    );
}

export default ChartCard;