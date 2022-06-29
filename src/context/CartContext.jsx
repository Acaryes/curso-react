import { useState, createContext } from 'react'

const cartContext = createContext();

export function CartContextProvider(props) {
    const [cart, setCart] = useState([])

    function addToCart(item, cant) {
        if (isInCart(item.id)) {
        alert("Este producto ya fue agregado")
        } else {
            setCart([...cart, {
                ...item,
                cantidad: cant
            }])
        }
    }

    function isInCart(id) {
        return cart.some((prod) => prod.id === id)
    }

    function clearCart(){
        setCart([])
    }



    return <cartContext.Provider value={{ cart, addToCart, clearCart }}>
        {props.children}
    </cartContext.Provider>
}

export default cartContext