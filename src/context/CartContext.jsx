import { useState, createContext } from 'react'

const cartContext = createContext();

export function CartContextProvider(props) {
    const [cart, setCart] = useState([])

    function addToCart(item, cant) {
        if (isInCart(item.id)) {
            const idToAdd = item.id
            let itemToAdd = cart.find(eachItem => eachItem.id === idToAdd)
            itemToAdd.cant += cant
            let newCart = cart.filter((eachItem) => eachItem.id !== item.id)
            setCart([...newCart,
            { ...itemToAdd }])


        } else {
            setCart([...cart,
            { ...item, cant }])
        }
    }

    function removeItem(id) {
        let newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }

    function isInCart(id) {
        return cart.some((prod) => prod.id === id)
    }

    function clearCart() {
        setCart([])
    }

    function quantityInCart() {
        let total = 0
        cart.forEach((item) => (total = total + item.cant))
        return total
    }

    function totalPriceCart() {
        let total = 0
        cart.forEach((item) => (total = total + (item.cant * item.price)))
        return total
    }



    return <cartContext.Provider value={{ cart, addToCart, clearCart, quantityInCart, totalPriceCart, removeItem }}>
        {props.children}
    </cartContext.Provider>
}

export default cartContext