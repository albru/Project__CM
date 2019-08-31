import React from 'react';
import bgImg from '../../assets/img/main-bg.webp';
import bgImgPng from '../../assets/img/main-bg.png';
import classes from './BgImage.css';
import { checkUserBrowserForRightImages } from '../../shared/utility';

const bgImage = props => {
    let changedImage = checkUserBrowserForRightImages(null) ? bgImgPng : bgImg;
    return (
        <div className={classes.BgImage}>
            <img src={changedImage} alt='background'></img>
        </div>
    )
}

export default bgImage;