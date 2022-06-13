import {useState,useEffect} from "react";
import "../css/MyPage.css";

const user_data = [{
    login_id : "non1233",
    name : "권새롬",
}];

const reservation_data = [
    // {
    //     movie_id:1,
    //     reservation:"범죄도시",
    // }
]

function MyPage(){
    const [user,setUser] = useState(user_data);
    const [reser,setReser] = useState(reservation_data);

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

    return(
        <div className="mypage_container">
            <div className="user_box">
                <div className="info">
                    <span className="name">{user[0].name}님</span>
                    <span className="id">{user[0].login_id}</span>
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
}
export default MyPage;