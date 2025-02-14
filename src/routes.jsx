
import App from "./App";
import CartPage from "./CartPage";
import Home from "./Home";
import Shop from "./Shop";


const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'shop',
                element: <Shop />,
            },
            {
                path: 'cart',
                element: <CartPage />,
            },
        ]
        // agregar ErrorPage
    },
    
]

export default routes