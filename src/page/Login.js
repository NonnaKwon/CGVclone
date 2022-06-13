import "../css/Login.css";
import React, {useState, useEffect} from "react";
import axios from 'axios';

function Login() {
    //로그인 유지 어케함
    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");

    const handleInputId = (e) => {
        setId(e.target.value)
    }
    const handleInputPw = (e) => {
        setPwd(e.target.value)
    }
    const onClickLogin = () => {
        axios.post("http://kitcapstone.iptime.org:3001/user/login", null, {
            params: {
                'id': id,
                'pwd': pwd
            }
        })
            .then((err,data)=>{
                if(err){
                    console.log(err);
                }
                if(data){

                    if(data.data("ok")){
                        alert("ok");
                    }
                    else {
                        alert(data.data);
                    }
                }

            })
    }


    return (
        <div className="login_container">
            <div className="title">
                로그인
            </div>
            <div className="id">
                아이디 : <input type="text" name="input_id" value={id} onChange={handleInputId}/>
            </div>
            <div className="password">
                패스워드 : <input type="password" name="input_password" value={pwd} onChange={handleInputPw}/>
            </div>
            <div className="submit">
                <button type='button' onClick={onClickLogin}>확인</button>
            </div>
        </div>
    );
}

export default Login;