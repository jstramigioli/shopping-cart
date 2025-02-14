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
        
        showingCart ?
        <>
        <h2>Cart Summary</h2>
        <CartBtn onClick={()=>setShowingCart(!showingCart)} showingCart={showingCart} cart={cart}/>
        <div className={styles.cartSummary}>
            <ul>
                {cart.map((element) => <ProductCard
                    key={element.product.id}
                    product={element.product}
                    setCart={setCart}
                    currentQuantity={element.quantity}
                    display='row'
                        />)
                }
            </ul>
        <h3>Total: ${cart.reduce((acc, current) => current.product.price * current.quantity + acc, 0).toFixed(2)}</h3>
        </div>
        </> :
        <>
        <CartBtn onClick={()=>setShowingCart(!showingCart)} cart={cart} showingCart={showingCart}/>
        <div className={styles.productGrid}>
            {productList.map(product => (
                <ProductCard key={product.id} 
                product={product} 
                setCart={setCart}
                currentQuantity={cart.find(item => item.product.id === product.id) ? cart.find(item => item.product.id === product.id).quantity : 0}
                />
            ))}
              
        </div>
        </> 
    )
}



export default Shop