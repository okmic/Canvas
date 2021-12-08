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
                <h3>Итого:</h3>
                <h3 className={s.total__price}>{props.totalPrice} &#8381;</h3>
            </div>
            <div className={s.length}>
                <h5>{props.lengthPaint} {props.lengthPaint > 1 ? "товара" : "товар"}</h5>
            </div>
            {
                !props.order
                    ? <div className={s.basket_submit}>
                        <button onClick={() => props.removeOrderStatus()} className={s.submit__order}>ОФОРМИТЬ ЗАКАЗ</button>
                    </div>
                    : <div className={s.basket_submit}>
                        <button onClick={() => props.removeOrderStatus()} className={s.submit__order_active}>Отменить</button>
                    </div>
            }
            {props.order && <FormBasketContainer order={props.order} />}
        </div>

    )
}

export default Total