import React, {useState, useEffect} from "react";
import axios from 'axios';

function SignUp(){
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");

    const handleInputId = (e) => {
        setId(e.target.value)
    }
    const handleInputPwd = (e) => {
        setPwd(e.target.value)
    }
    const handleInputName = (e) =>{
        setName(e.target.value)
    }

    const onClickSign = () => {
        axios.post("http://kitcapstone.iptime.org:3001/user/sign", null, {
            params: {
                'id': id,
                'pwd': pwd,
                'name': name
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

    return(
        <div className="signup_container">
            <div className="title">
                회원가입
            </div>
            <form action="">
                <div className="id">
                    아이디 : <input type="text" name="input_id" value={id} onChange={handleInputId}/>
                </div>
                <div className="name">
                    이름 : <input type="text" name="input_name" value={name} onChange={handleInputName}/>
                </div>
                <div className="password">
                    패스워드 : <input type="text" name="input_pwd" value={pwd} onChange={handleInputPwd}/>
                </div>
                <div className="submit">
                    <button type="button" onClick={onClickSign}>가입</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;