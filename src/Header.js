import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from './assets/Logo.png'


function Header() {


    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();

    };


    return (
        <div className='header'>
            <div className="header__left">
                <img src={logo} alt="logo" />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />

                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='Following' />
                <HeaderOption Icon={ChatIcon} title="Messages" />
                <HeaderOption Icon={NotificationsIcon} title={"Notifications"} />
                <HeaderOption
                    Icon={LogoutIcon}
                    title="Logout"
                    onClick={logoutOfApp}
                />
            </div>

        </div>
    )
}

export default Header
