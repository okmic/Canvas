import React from "react";
import './preloader.css'
import ReactLoading from 'react-loading';

let PreloaderContainer = (props) =>  {


    return(
        <div className="preloader_cotnainer">
             <ReactLoading type={"bubbles"} color={'#fff'} height={70} width={300} />
        </div>
    )
}

export default PreloaderContainer