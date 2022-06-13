import '../Main.css';
import { Link } from 'react-router-dom';
import {useState} from "react";

function Header(){
    const [isOpen,setMenu] = useState(false);


    return (
        <div>
            <div className="sideNav">
                <button className="sideNavbutton" onClick={()=>setMenu(!isOpen)}><img src="img/header/icon.png"/></button>
                <div className={(isOpen===false)?"icons_no":"icons"}>
                    <Link to="/login">
                        <div className="icon"><img src="img/header/loginPassword.png"/><div>로그인</div></div>
                    </Link>
                    <Link to="/user">
                        <div className="icon"><img src="img/header/loginJoin.png"/><div>회원가입</div></div>
                    </Link>
                    <Link to="/mypage">
                        <div className="icon"><img src="img/header/loginMember.png"/><div>MY CGV</div></div>
                    </Link>
                    <div className="icon"><img src="img/header/loginCustomer.png"/><div>고객센터</div></div>
                </div>
            </div>
            <div className="container">
                <Link to="/">
                    <div className="logo">
                        <img src="img/header/logoRed.png"/>
                        <span>C U L T U R E P L E X</span>
                    </div>
                </Link>
                <div className="icons">
                    <Link to="/login">
                        <div className="icon"><img src="img/header/loginPassword.png"/><div>로그인</div></div>
                    </Link>
                    <Link to="/user">
                        <div className="icon"><img src="img/header/loginJoin.png"/><div>회원가입</div></div>
                    </Link>
                    <Link to="/mypage">
                        <div className="icon"><img src="img/header/loginMember.png"/><div>MY CGV</div></div>
                    </Link>
                    <div className="icon"><img src="img/header/loginCustomer.png"/><div>고객센터</div></div>
                </div>
            </div>
        </div>

    );
}

export default Header;