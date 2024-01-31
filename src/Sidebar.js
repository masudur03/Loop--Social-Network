import Avatar from '@mui/material/Avatar';
import React from 'react'
import "./Sidebar.css"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser);


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <p>#{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>


            <div className="sidebar__stats">

                <div className="sidebar__stat">
                    <p>Followers</p>
                    <p className='sidebar__statNumber'>2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2,335</p>

                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Trending </p>
                {recentItem('react.js')}
                {recentItem('programing')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}

            </div>

        </div>
    )
}

export default Sidebar
