
function TimeCard({time}){
    return(
        <div>
            <div className="top">
                <span className="age">{time.limit_age}</span>
                <span className="title">{time.name}</span>
                <span className="state">상영중</span>
                <span className="info">{time.genre}/{time.runtime}분/{time.open_date} 개봉</span>
            </div>
            <div className="seat">2D    {time.screen_num}관 {time.stair}층    총 {time.total_seat}석</div>
            <div className="reservation">
                <div className="time">{time.start_time1}</div>
                <div className="time">{time.start_time2}</div>
            </div>
        </div>
    );
}
export default TimeCard;