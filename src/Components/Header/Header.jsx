import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png' />

        <div className={s.loginBlock}>
            { props.isAuth 
            ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;