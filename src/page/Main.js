import {useState} from "react";
import {Routes,Route} from "react-router-dom";
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Home from './Home';
import Movie from "./Movie";
import TimeTable from "./TimeTable";
import '../Main.css';

function Main() {
    //const [clickedMenu,setClickedMenu] = useState();
    return (
        <div>
            <Header></Header>
            <MenuBar></MenuBar>
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<div><Home/></div>}></Route>
                        <Route path="/movie" element={<div><Movie/></div>}></Route>
                        <Route path="/timetable" element={<div><TimeTable/></div>}></Route>
                    </Routes>
                </div>
        </div>
    );
}

export default Main;