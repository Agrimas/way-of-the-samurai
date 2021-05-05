import React from 'react';
import loaderPhoto from "../../../assets/img/loader.svg";

function Preloader(props) {
    return (
        <img style={{display: 'block', margin: '0 auto'}} src={loaderPhoto} alt=''/>
    );
}

export default Preloader;