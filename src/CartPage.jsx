import ProductCard from "./Components/ProductCard"

const CartPage = ({currentCart, addToCart}) => {
    return (
        <>
        {currentCart.map((element) => <ProductCard
            key={element.product.id} 
            product={element.product} 
            addToCart={addToCart}
            currentQuantity={element.quantity}/>)
        }
        </>
    )
}

export default CartPage