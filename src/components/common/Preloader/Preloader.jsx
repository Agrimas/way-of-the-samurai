import React from 'react';
import loaderPhoto from "../../../assets/img/loader.svg";

function Preloader() {
    return (
        <img style={{display: 'block', margin: '0 auto'}} src={loaderPhoto}/>
    );
}

export default Preloader;