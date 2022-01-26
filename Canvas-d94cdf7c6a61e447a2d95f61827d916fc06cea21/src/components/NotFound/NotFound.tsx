
import s from './NotFound.module.css'
import imgNotFound from '../img/404.png'

let NotFound = () => <div className={s.container_notFound}>
           <div>
               <img src={imgNotFound} alt="404 Not Found" />
            </div>
            <div className={s.notFound}>
                <span>
                404 NOT FOUND
                </span>
            </div>
        </div>

export default NotFound