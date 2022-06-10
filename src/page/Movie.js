import '../css/Movie.css';

function Movie({movies}){
    return (
        <div className="movie_container">
            <div className="title">무비차트</div>
            <div className="sort">
                <form name="sort" action="/movie/sort" method="GET">
                    <select>
                        <option>예매율순</option>
                        <option>평점순</option>
                    </select>
                </form>
            </div>
            <div className="movie_list">
                
            </div>
        </div>
    );
}

export default Movie;