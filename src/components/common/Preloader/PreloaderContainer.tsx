import React from "react";
import './preloader.css'
import ReactLoading from 'react-loading';

let PreloaderContainerHesh: React.FC = () =>  {
    return(
        <div className="preloader_cotnainer_hesh">
             <ReactLoading type={"bubbles"} color={'#fff'} height={70} width={300} />
        </div>
    )
}

export default PreloaderContainerHesh