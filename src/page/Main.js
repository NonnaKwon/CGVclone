import {useState,useEffect} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from '../components/Header';
import NavMenu from '../components/NavMenu';
import Home from './Home';
import Movie from "./Movie";
import TimeTable from "./TimeTable";
import MyPage from "./MyPage";
import '../Main.css';

function Main() {

    return (
        <div>
            <BrowserRouter>
                <Header/>
                <NavMenu/>
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<div><Home/></div>}></Route>
                        <Route path="/movie" element={<div><Movie/></div>}></Route>
                        <Route path="/timetable" element={<div><TimeTable/></div>}></Route>
                        <Route path="/mypage" element={<div><MyPage/></div>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Main;