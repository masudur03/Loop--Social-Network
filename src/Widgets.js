import React from 'react'
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">

                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2> News</h2>
                <InfoIcon />
            </div>
            {newsArticle("AI", "Top news-  9099 readers ")}
            {newsArticle("Tesla's growth is stalling", "Top news - 4060 readers")}
            {newsArticle("Is Redux too good? ", "Code - 560 readers")}
        </div>

    );
}

export default Widgets
