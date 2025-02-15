import PropTypes from 'prop-types'
import styles from './ProductCard.module.css'

function ProductCard( {display, product, setCart, currentQuantity} ) {

    

    function setQuantityInCart(quantity) {
        setCart((prevCart) => {
            const existingProduct = prevCart.find( item => item.product.id === product.id)

            if (existingProduct) {
                return prevCart.map( item => item.product.id === product.id ? {product: product, quantity} : item)
            }
            else {
                return [...prevCart, {product: product, quantity}]
            }
        })
    }

    return (
        <li className={styles.card + ' ' + (display === 'row' ? styles.row : '')}>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <h2>${product.price}</h2>
            <div className={styles.flex}>
                <button onClick={() => setQuantityInCart(currentQuantity-1 >= 0 ?
                    currentQuantity-1 :
                    0
                )}>-</button>
                <input type='number' value={currentQuantity} onChange={(e) => setQuantityInCart(e.target.value >= 0 ? Number(e.target.value) : 0)}/>
                <button onClick={() => setQuantityInCart(currentQuantity+1)}>+</button>
            </div>
        </li>
    )
}

ProductCard.propTypes = {
    display: PropTypes.string,
    product: PropTypes.object,
    setCart: PropTypes.func,
    currentQuantity: PropTypes.number
}

export default ProductCard