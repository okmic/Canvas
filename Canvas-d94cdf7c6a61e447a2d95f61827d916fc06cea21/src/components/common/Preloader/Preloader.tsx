import './preloader.css'
import ReactLoading from 'react-loading';

type PropsType = {
    preloaderStatus: boolean
}

let PreloaderOut: React.FC<PropsType> = (props) =>  {
    return(
        <div className={props.preloaderStatus ? "preloader_cotnainer" : "preloader_cotnainer active"}>
             <ReactLoading type={"bubbles"} color={'#fff'} height={70} width={300} />
        </div>
    )
}    

export default PreloaderOut