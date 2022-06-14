import {useState,useEffect} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from '../components/Header';
import NavMenu from '../components/NavMenu';
import Login from '../page/Login';
import SignUp from '../page/SignUp';
import Detail from '../components/Detail';
import Home from './Home';
import Movie from "./Movie";
import TimeTable from "./TimeTable";
import MyPage from "./MyPage";
import '../Main.css';
import axios from 'axios';
import ReservationPage from './ReservationPage';


const user_data = {
    id:"",
    password:""
};

function Main() {
    const [movie_data, setMovie_data] = useState([]);
    const [user,setUser] = useState(user_data);

    const sendMoviesRequest = async() => {
        axios.get('http://kitcapstone.iptime.org:3001/movies')
            .then((res)=> {
                setMovie_data(res.data);
                console.log("성공");
                setTimeout(50000);
            },(error) =>{
                console.log(error);
                }
            );
    };

    useEffect(()=>{
       sendMoviesRequest();
       setUser(user);
    },[]);


    if(movie_data.length > 0){
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <NavMenu/>
                    <div className="content-container">
                        <Routes>
                            <Route path="/" element={<div><Home movie_data={movie_data}/></div>}></Route>
                            <Route path="/movie" element={<div><Movie user={user}/></div>}></Route>
                            <Route path="/timetable" element={<div><TimeTable user={user}/></div>}></Route>
                            <Route path="/mypage" element={<div><MyPage user={user}/></div>}></Route>
                            <Route path="/login" element={<div><Login user={user}/></div>}></Route>
                            <Route path="/user" element={<div><SignUp user={user}/></div>}></Route>
                            <Route path="/movie/:id" element={<div><Detail movie_data={movie_data} user={user}/></div>}></Route>
                            <Route path="/reservation" element={<div><ReservationPage user={user}/></div>}></Route>
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }else{
        return <div>안돼....</div>
    }
}

export default Main;