import '../Main.css';
import { Link } from 'react-router-dom';

function Header(){
    return (
      <div className="container">
          <Link to="/">
              <div className="logo">
                  <img src="img/header/logoRed.png"/>
                  <span>C U L T U R E P L E X</span>
              </div>
          </Link>
          <div className="icons">
              <div className="icon"><img src="img/header/loginPassword.png"/><div>로그인</div></div>
              <div className="icon"><img src="img/header/loginJoin.png"/><div>회원가입</div></div>
              <div className="icon"><img src="img/header/loginMember.png"/><div>MY CGV</div></div>
              <div className="icon"><img src="img/header/loginCustomer.png"/><div>고객센터</div></div>
          </div>
      </div>
    );
}

export default Header;