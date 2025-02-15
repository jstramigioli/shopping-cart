import ProductCard from "./Components/ProductCard"
import { useEffect , useState } from "react"
import styles from './Shop.module.css'
import CartBtn from "./Components/CartBtn";


function Shop() {
    const [productList, setProductList] = useState([]);
    const [cart, setCart] = useState([])
    const [showingCart, setShowingCart] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>setProductList(json))
            .catch(error => console.error("Error fetching products:", error))
            
    }, [])

    


    return (
        <>
            <CartBtn onClick={() => setShowingCart(!showingCart)} cart={cart} showingCart={showingCart} />
            <div className={styles.shopContainer}>
                {showingCart ? (
                    <>
                        
                            <ul>
                                {cart.map((element) => (
                                    <ProductCard
                                        key={element.product.id}
                                        product={element.product}
                                        setCart={setCart}
                                        currentQuantity={element.quantity}
                                        display="row"
                                    />
                                ))}
                            </ul>
                            <div className={styles.cartSummary}>
                            <h2>Cart Summary</h2>
                            <h3>
                                Total: $
                                {cart
                                    .reduce((acc, current) => current.product.price * current.quantity + acc, 0)
                                    .toFixed(2)}
                            </h3>
                            <button className={styles.checkoutButton}>Checkout</button>
                
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.productGrid}>
                            {productList.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    setCart={setCart}
                                    currentQuantity={
                                        cart.find((item) => item.product.id === product.id)
                                            ? cart.find((item) => item.product.id === product.id).quantity
                                            : 0
                                    }
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}



export default Shop