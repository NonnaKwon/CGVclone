import '../css/Home.css';

function MovieCard({movie}){
    return (
        <div className="card">
            <img src={movie.image}/>
            <div className="movie_name">{movie.name}</div>
            <div className="per">예매율 {movie.reservation_percent}%</div>
        </div>
    );
}

export default MovieCard;