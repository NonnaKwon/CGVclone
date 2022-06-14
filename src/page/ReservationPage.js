import {useEffect, useState} from "react";
import axios from 'axios';
import moment from 'moment';
import '../css/ReservationPage.css';

function ReservationPage(){
    const [movies, setMovies] = useState([]);
    const [times,setTimes] = useState([]);

    const [timeArr,setTimeArr] = useState([]);

    const [selectMovie,setSelectMovie] = useState(null);
    const [selectTime,setSelectTime] = useState(null);

    const sendMoviesReserRequest = async() => {
        axios.get('http://kitcapstone.iptime.org:3001/movies/sort/reservation_percent')
            .then((res)=> {
                    setMovies(res.data);
                    console.log("성공");
                    setTimeout(50000);
                },(error) =>{
                    console.log(error);
                }
            );
    };

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
        sendMoviesReserRequest();
    },[]);

    const list_load = ()=> {
        if (selectMovie === null) {
            return (
                <div></div>
            );
        }
        for (var i = 0; i < timeArr.length; i++) {
            timeArr.pop();
        }
        for (var i = 0; i < times.length; i++) {
            if (times[i].movie_id._id === selectMovie._id) {
                console.log(i);
                timeArr.push(times[i]);
                console.log(timeArr.length);
            }
        }
        console.log(timeArr);

        if (timeArr.length > 0) {
            return (
                <div className="time_list">
                    <button className="sel_time" onClick={()=>setSelectTime(timeArr[1])}>
                        <span className="title">{moment(timeArr[1].start_time).format('HH:mm')}</span>
                    </button>
                    <button className="sel_time" onClick={()=>setSelectTime(timeArr[2])}>
                        <span className="title">{moment(timeArr[2].start_time).format('HH:mm')}</span>
                    </button>
                    {/*{timeArr.map((time)=> {*/}
                    {/*    return (*/}
                    {/*        <button className="sel_time">*/}
                    {/*            <span className="title">{moment(time.start_time).format('HH:mm')}</span>*/}
                    {/*        </button>*/}
                    {/*    );*/}
                    {/*})}*/}
                    }
                </div>
            );
        }else{
            return (
              <div>
                  해당 영화를 상영하는 시간이 없습니다.
              </div>
            );
        }
    }

    const selected = ()=>{
        if(selectMovie !== null && selectTime !== null){
            console.log(selectTime);
            return(
                <div className="seleted">
                    <div className="name">{selectMovie.name}</div>
                    <div className="day">시간:{moment(selectTime.start_time).format('HH:mm')}</div>
                    <button className="action">예매하기</button>
                </div>
            );
        }else if(selectMovie === null && selectTime === null){
            return(
                <div className="seleted">
                    <div className="name"></div>
                    <div className="day"></div>
                    <button className="action_no">예매하기</button>
                </div>
            );
        }else if(selectTime === null){
            return(
                <div className="seleted">
                    <div className="name">{selectMovie.name}</div>
                    <div className="day"></div>
                    <button className="action_no">예매하기</button>
                </div>
            );
        }
    }


    if(movies.length > 0 && times.length > 0) {
        return (
            <div className="reser_page_container">
                <div className="select_container">
                    <div className="movie">
                        <div className="category">영화</div>
                        <div className="movie_list">
                            {movies.map((movie)=>{
                                return(
                                  <button className="sel_movie" onClick={()=>(
                                      setSelectMovie(movie),setSelectTime(null)
                                  )}>
                                      <span className="age">{movie.limit_age}</span>
                                      <span className="title">{movie.name}</span>
                                  </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="time">
                        <div className="category">시간</div>
                        {list_load()}
                    </div>
                </div>
                <div className="selected_container">
                    <div className="info">예약정보</div>
                    {selected()}
                </div>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
}

export default ReservationPage;