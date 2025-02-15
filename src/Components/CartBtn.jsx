import cartImg from '../assets/cart.svg'
import style from './CartBtn.module.css'
import backImg from '../assets/back.svg' 
import PropTypes from 'prop-types'

function CartBtn({onClick, showingCart, cart}) {

    return (
        <button onClick={onClick} 
        className={style.btn + ' ' + (showingCart ? style.flip : '')}>
        
            <img src={cartImg} className={style.cart} alt="cart" />
            <img src={backImg} className={style.back} alt="back" />
            {
                (cart.reduce((acc, current)=> acc + current.quantity, 0) > 0 && showingCart == false)&& <p className={style.quantity}>{cart.reduce((acc, current)=> acc + current.quantity, 0)}</p>
            }
            
        </button>
    )
}

CartBtn.propTypes = {
    onClick: PropTypes.func,
    showingCart: PropTypes.bool,
    cart: PropTypes.array
}

export default CartBtn