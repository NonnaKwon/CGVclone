import TimeCard from "../components/TimeCard";
import '../css/TimeTable.css';
import {useState,useEffect} from "react";
import axios from 'axios'

function TimeTable(){
    const [times,setTimes] = useState([]);
    const sendTimeTableRequest = async() => {
        axios.get('http://kitcapstone.iptime.org:3001/screenTable')
            .then((res)=> {
                    setTimes(res.data);
                    console.log("성공");
                    setTimeout(50000);
                },(error) =>{
                    console.log(error);
                }
            );
    };

    useEffect(()=>{
        sendTimeTableRequest();
    },[]);


    if(times.length > 0) {
        return (
            <div className="timetable_container">
                <div className="title">상영시간표</div>
                <div className="timetable_list">
                    <TimeCard time={times[8]} time2={times[9]}/>
                    <TimeCard time={times[10]} time2={times[11]}/>
                </div>
            </div>
        );
    }else{
        return(
          <div>안됌</div>
        );
    }
}

export default TimeTable;