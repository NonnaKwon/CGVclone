import TimeCard from "../components/TimeCard";
import '../css/TimeTable.css';
import {useState,useEffect} from "react";
import axios from 'axios'

const time_data = [
    {
        name:"범죄도시",
        runtime:180,
        open_date:"2022-06-11",
        limit_age:19,
        genre:"액션",
        screen_num:1,
        total_seat:85,
        seat:0
    },
    {
        name:"닥터스트레인지", // 영화 이름
        runtime:180, // 런타임
        open_date:"2022-06-12", // 개봉일자
        limit_age:15, // 이용가 나이
        genre:"액션", // 장르
        screen_num:1, // 상영관 번호
        total_seat:80, // 총 좌석
        seat:50, // 남은 좌석 수
        stairs:1, //층
        start_time1:"10:30", //해당영화 시작시간1
        start_time2:"17:50"  //해당영화 시작시간2
    }
]

function TimeTable(){
    const [times,setTimes] = useState(time_data);

    return (
        <div className="timetable_container">
            <div className="title">상영시간표</div>
            <div className="timetable_list">
                {times.map((time)=>{
                    <TimeCard time={time}/>
                })}
            </div>
        </div>
    );
}

export default TimeTable;