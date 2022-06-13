import '../css/Home.css';
import {Link} from "react-router-dom";

function MovieCard({movie}){
    const link = "/movie/"+movie._id;
    return (
        <div className="card">
            <Link to={link}><img src={movie.image}/></Link>
            <Link to={link}><div className="movie_name">{movie.name}</div></Link>
            <div className="per">예매율 {movie.reservation_percent}%</div>
        </div>
    );
}

export default MovieCard;