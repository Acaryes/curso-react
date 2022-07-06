import {useContext} from "react"
import cartContext from "../../context/CartContext";
import "./CartWidget.css";


export const CartWidget = () => {
  const { quantityInCart } = useContext(cartContext)

  return (
    <>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ic_shopping_cart_48px.svg/1024px-Ic_shopping_cart_48px.svg.png" alt="cart" width={50} height={50}/>
    <span>{quantityInCart() > 0 ? quantityInCart() : ""}</span>
    </>
  )
}
