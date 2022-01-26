import s from './Basket.module.css'
import FormBasketContainer from "./formBasket/FormBasketContainer";

type PropsType = {
    totalPrice: number
    lengthPaint: number
    removeOrderStatus: () => void
    order: boolean
}

let Total: React.FC<PropsType> = (props) => {
    return (
        <div className={s.basket__total}>
            <div className={s.total}>
                <h3>Total:</h3>
                <h3 className={s.total__price}>{props.totalPrice} $ </h3>
            </div>
            <div className={s.length}>
                <h5>{props.lengthPaint} {props.lengthPaint > 1 ? "products" : "product"}</h5>
            </div>
            {
                !props.order
                    ? <div className={s.basket_submit}>
                        <button onClick={() => props.removeOrderStatus()} className={s.submit__order}>TO ORDER</button>
                    </div>
                    : <div className={s.basket_submit}>
                        <button onClick={() => props.removeOrderStatus()} className={s.submit__order_active}>Cancel</button>
                    </div>
            }
            {props.order && <FormBasketContainer order={props.order} />}
        </div>

    )
}

export default Total