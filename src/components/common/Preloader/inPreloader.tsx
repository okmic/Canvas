import React from "react";
import './preloader.css'
import ReactLoading from 'react-loading';

type PropsType = {
    preloaderStatus: boolean
}

let PreloaderIn: React.FC<PropsType> = (props) =>  <div className={props.preloaderStatus ? "preloader" : "preloader active"}>
             <ReactLoading type={"bars"} color={'#964b00'} height={30} width={100} />
        </div>

export default PreloaderIn