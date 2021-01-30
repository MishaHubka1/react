import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";


const App = (props) => {


    return (

            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <DialogsContainer  />}/>

                    <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>

                    <Route path='/users' render={ () => <UsersContainer />}/>

                    {/* <Route path='/news/' render={ () => <News/>}/>
                    <Route path='/music/' render={ () => <Music/>}/>
                    <Route path='/Settings/' render={ () => <Settings/>}/>*/}
                </div>
            </div>
    )
}


export default App;
