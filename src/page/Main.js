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

// const movie_data=[
//     {   id:1,
//         name:"범죄도시",
//         runtime :180,
//         open_date:20220609,
//         director:"김",
//         total_score:5,
//         reservation_percent:60,
//         actors:"마동석",
//         description:"범죄",
//         limit_age:19,
//         image:"img/movie/85715_320.jpg",
//         genre:"액션"
//     },
//     {   id:2,
//         name:"범죄도시",
//         runtime :180,
//         open_date:20220609,
//         director:"김",
//         total_score:5,
//         reservation_percent:60,
//         actors:"마동석",
//         description:"범죄",
//         limit_age:19,
//         image:"img/movie/85715_320.jpg",
//         genre:"액션"
//     },
//
//     {   id:3,
//         name:"닥터 스트레인지2",
//         runtime :180,
//         open_date:20220609,
//         director:"김",
//         total_score:5,
//         reservation_percent:80,
//         actors:"마동석",
//         description:"범죄",
//         limit_age:19,
//         image:"img/movie/85813_320.jpg",
//         genre:"액션"
//     },
//     {   id:4,
//         name:"닥터 스트레인지2",
//         runtime :180,
//         open_date:20220609,
//         director:"김",
//         total_score:5,
//         reservation_percent:80,
//         actors:"마동석",
//         description:"범죄",
//         limit_age:19,
//         image:"img/movie/85813_320.jpg",
//         genre:"액션"
//     },
//     {   id:5,
//         name:"머랭쿠키",
//         runtime :180,
//         open_date:20220609,
//         director:"김",
//         total_score:5,
//         reservation_percent:10,
//         actors:"마동석",
//         description:"범죄",
//         limit_age:19,
//         image:"img/movie/85689_320.jpg",
//         genre:"액션"
//     },
//     {   id:6,
//         name:"머랭쿠키",
//         runtime :180,
//         open_date:20220609,
//         director:"김",
//         total_score:5,
//         reservation_percent:10,
//         actors:"마동석",
//         description:"범죄",
//         limit_age:19,
//         image:"img/movie/85689_320.jpg",
//         genre:"액션"
//     },
//     {   id:7,
//         name:"떡볶잉",
//         runtime :180,
//         open_date:20220609,
//         director:"김",
//         total_score:5,
//         reservation_percent:30,
//         actors:"마동석",
//         description:"범죄",
//         limit_age:19,
//         image:"img/movie/85829_320.jpg",
//         genre:"액션"
//     },
//     {   id:8,
//         name:"떡볶잉",
//         runtime :180,
//         open_date:20220609,
//         director:"김",
//         total_score:5,
//         reservation_percent:30,
//         actors:"마동석",
//         description:"범죄",
//         limit_age:19,
//         image:"img/movie/85829_320.jpg",
//         genre:"액션"
//     }
// ];



function Main() {
    const [movie_data, setMovie_data] = useState([]);
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
                            <Route path="/movie" element={<div><Movie/></div>}></Route>
                            <Route path="/timetable" element={<div><TimeTable/></div>}></Route>
                            <Route path="/mypage" element={<div><MyPage/></div>}></Route>
                            <Route path="/login" element={<div><Login/></div>}></Route>
                            <Route path="/user" element={<div><SignUp/></div>}></Route>
                            <Route path="/movie/:id" element={<div><Detail movie_data={movie_data}/></div>}></Route>
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