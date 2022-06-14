import {useState,useEffect} from "react";
import "../css/MyPage.css";


function MyPage({user}){
    const [reser,setReser] = useState([]);

    const reservationManage = ()=>{
        if(reser.length === 0){
            return(
                <div className="reser_info">
                    고객님의 최근 예매내역이 존재하지 않습니다.
                </div>
            );
        }else{
            return(
                <div>
                    {reser.length}
                </div>
            );
        }
    }

    if(user.id !== ""){
        return(
            <div className="mypage_container">
                <div className="user_box">
                    <div className="info">
                        <span className="name">{user.id}님</span>
                    </div>
                    <div className="hello">환영합니다!</div>
                </div>
                <div className="reservation_list">
                    <div className="title">
                        MY 예매내역
                    </div>
                    <div className="box">
                        {reservationManage()}
                    </div>
                </div>
            </div>
        );
    }else{
        return (
          <div className="mypage_container">
              <div className="user_box">
                  <div className="hello">로그인 해주세요.</div>
              </div>
          </div>
        );
    }
}
export default MyPage;