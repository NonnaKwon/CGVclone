import Movie from "../page/Movie";
import TimeTable from "../page/TimeTable";
import { Link } from 'react-router-dom';
import '../Main.css';

function NavMenu(){
    return (
        <div className="nav_menu">
            <Link to="/movie">
                <div className="menu">영화</div>
            </Link>
            <Link to="/timetable">
                <div className="menu">상영시간표</div>
            </Link>
        </div>
    );
}

export default NavMenu;