import '../css/Detail.css';
import {useEffect, useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ReviewCard from "./ReviewCard";
import moment from 'moment';
import axios from 'axios';


function Detail({movie_data,user}){
    const [movie,setMovie] = useState(movie_data);
    const [isWrite,setWrite] = useState(false);
    const {id} = useParams();
    var index;
    for(var i=0;i<8;i++){
           if(movie[i]._id === id){
               index = i;
           }
    }

    const [score, setScore] = useState(1);
    const [content, setContent] = useState("");

    const handleInputScore = (e) => {
        console.log(e.target.value);
        setScore(e.target.value);
    }
    const handleInputContent = (e) => {
        console.log(e.target.value);
        setContent(e.target.value);
    }

    const onClickSubmit = () => {
        axios.post("http://kitcapstone.iptime.org:3001/review/"+id, null, {
            params: {
                'userId' : user.id,
                'score': score,
                'content': content
            }
        })
            .then((res)=>{
                alert("리뷰가 등록되었습니다.");
                })
    }

    //리뷰 요청
    const [comment, setComment] = useState([]);
    const sendMoviesRequest = async() => {
        axios.get('http://kitcapstone.iptime.org:3001/review/'+id)
            .then((res)=> {
                    setComment(res.data);
                    console.log(res.data);
                    console.log("성공");
                    setTimeout(50000);
                },(error) =>{
                    console.log(error);
                }
            );
    };

    useEffect(()=>{
        sendMoviesRequest();

    },[]);


    const review = ()=>{
        if(comment.length === 0){
            return(
              <div className="no_review">
                  등록된 리뷰가 없습니다.
              </div>
            );
        }else{
            return(
                <div className="isreview">
                    {comment.map((cmt)=>(
                        <ReviewCard comment={cmt} user={user}/>
                    ))}
                </div>
            );
        }
    };

    return(
        <div>
            <div className="detail_container">
                <div className="info_container">
                    <div className="imgWrap">
                        <img src={movie[index].image}/>
                    </div>
                    <div className="textInfo">
                        <span className="title">{movie[index].name}</span><span className="state">예매중</span>
                        <div className="per">예매율 {movie[index].reservation_percent}%</div>
                        <div className="text_de">
                            감독 : {movie[index].director} / 배우 : {movie[index].actors}{'\n'}
                            장르 : {movie[index].genre}{'\n'}
                            개봉 : {moment(movie[index].open_date).format('YYYY-MM-DD')}{'\n'}
                            줄거리 : {movie[index].description}{'\n'}
                        </div>
                        <button className="reservation">
                            예매하기
                        </button>
                    </div>
                </div>

                <div className="review_btn">
                    <div className="info">관람일 7일 이내 관람평을 남기시면 포인트가 적립됩니다.</div>
                    <button className="write" onClick={()=>setWrite(!isWrite)}>평점작성</button>
                </div>
                <div className={(isWrite===false)?"review_write_no":"review_write"}>
                    <div className="star" onChange={handleInputScore}>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="comment_write">
                        <input type="text" onChange={handleInputContent}/><button onClick={onClickSubmit}>등록</button>
                    </div>
                </div>
                <div className="review">
                    {review()}
                </div>
            </div>
        </div>
    );
}

export default Detail;