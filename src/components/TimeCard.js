import moment from 'moment';
import {Link} from "react-router-dom";

function TimeCard({time,time2}){

    const movie_open = moment(time.movie_id.open_date).format('YYYY-MM-DD');

    const seat = ((start1,start2,seat1,seat2)=>{
        start1 = moment(start1).format('HH:mm');
        start2 = moment(start2).format('HH:mm');
        if(seat1 > 0 && seat2 >0){
            return(
                <div className="reservation">
                    <Link to="/reservation">
                        <div className="time">{start1}<div className="num">{seat1}석</div></div>
                    </Link>
                    <Link to="/reservation">
                        <div className="time">{start2}<div className="num">{seat2}석</div></div>
                    </Link>
                </div>
            );
        }else if(seat1 > 0 && seat2 == 0){
            return(
                <div className="reservation">
                    <Link to="/reservation">
                        <div className="time">{start1}<div className="num">{seat1}석</div></div>
                    </Link>
                    <div className="time_no">{start2}<div className="num">마감</div></div>
                </div>
             );
        }else if(seat1 == 0 && seat2 > 0){
            return(
                <div className="reservation">
                    <div className="time_no">{start1}<div className="num">마감</div></div>
                    <Link to="/reservation">
                        <div className="time">{start2}<div className="num">{seat2}석</div></div>
                    </Link>
                </div>
            );
        }else{
            return(
                <div className="reservation">
                    <div className="time_no">{start1}<div className="num">마감</div></div>
                    <div className="time_no">{start2}<div className="num">마감</div></div>
                </div>
        );
        }
    });


    return(
        <div className="timecard_container">
            <div className="top">
                <span className="age">{time.movie_id.limit_age}</span>
                <span className="movie_title">{time.movie_id.name}</span>
                <span className="state">상영중</span>
                <span className="info">{time.movie_id.genre}/{time.movie_id.runtime}분/{movie_open} 개봉</span>
            </div>
            <div className="seat">2D&nbsp;&nbsp;&nbsp;&nbsp;<span className="s">|</span>&nbsp;&nbsp;&nbsp;&nbsp;
                {time.screen_id.screen_num}관 {time.screen_id.stairs}층&nbsp;&nbsp;&nbsp;&nbsp;<span className="s">|</span>&nbsp;&nbsp;&nbsp;&nbsp;총 {time.screen_id.total_seat}석
            </div>
                {seat(time.start_time,time2.start_time,time.reservationable_seat_num,time2.reservationable_seat_num)}
        </div>
    );
}
export default TimeCard;