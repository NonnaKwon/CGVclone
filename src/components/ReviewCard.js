import moment from 'moment';
import {useState} from 'react';
import axios from 'axios';

function ReviewCard({comment,user}){
    const [likes,setLikes] = useState(comment.likes);
    const [update,setUpdate] = useState(false);

    const [score, setScore] = useState(comment.score);
    const [content, setContent] = useState(comment.content);

    const [update_score, setU_Score] = useState();
    const [update_content, setU_Content] = useState();

    const comment_id = (comment.user_id===null)?"없음":comment.user_id.login_id;

    const clickLike = ()=>{//로그인 되어있을때 가능.
        if(user.id !== ""){
            axios.post("http://kitcapstone.iptime.org:3001/commentLike/"+comment._id, null, {
                params: {
                    'userId' : user.id
                }
            })
                .then((res) => {
                    if(res.data ==="ok"){
                        console.log("ok");
                        setLikes(likes+1);
                    }else{
                        alert(res.data);
                    }
                })
        }else{
            alert("로그인 후에 이용해주세요.");
        }
    }

    const updateFunc = ()=>{
        const update_content = ()=>{
            setUpdate(true);
        }
        
        if(comment_id === user.id){
            return(
              <div>
                  <button onClick={update_content}>
                      수정
                  </button>
              </div>
            );
        }
    }

    const update_submit = ()=>{
        axios.patch("http://kitcapstone.iptime.org:3001/review/"+comment._id,null, {
            params: {
                'userId' : user.id,
                'score': update_score,
                'content': update_content
            }
        })
            .then((res)=>{
                if(res.data ==="ok"){
                    if(update_content!==null){
                        setContent(update_content);
                    }
                    if(update_score !== null){
                        setScore(update_score);
                    }
                }
            })
    }

    const update_cancle = ()=>{
        setUpdate(false);
    }

    const handleInputScore = (e) => {
        console.log(e.target.value);
        setU_Score(e.target.value);
    }
    const handleInputContent = (e) => {
        console.log(e.target.value);
        setU_Content(e.target.value);
    }

    return(
      <div className="review_card_container">
          <div className="user">작성자 {comment_id} / 평점 {score}</div>
          <div className="comment">
              {content}
              <div className={(update===false)?"no":"on"}>
                  <div className="star" onChange={handleInputScore}>
                      <select>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                      </select>
                  </div>
                  <input type="text" onChange={handleInputContent}/>
                  <button onClick={update_submit}>제출</button>
                  <button onClick={update_cancle}>수정취소</button>
              </div>
          </div>
          <div className="day">작성 : {moment(comment.created_date).format('YYYYMMDD HH:mm:ss')}</div>
          <div className="like">좋아요 : {likes} <button onClick={clickLike}>👍🏼</button></div>
          {updateFunc()}
      </div>
    );
}

export default ReviewCard;