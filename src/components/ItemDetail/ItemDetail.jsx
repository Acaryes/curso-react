import { useState, useContext } from 'react'
import ItemCount from "../ItemCount/ItemCount";
import cartContext from '../../context/CartContext';
import { Link } from "react-router-dom";



function ItemDetail({ item }) {
  const [isAddedToCart, setAddedToCart] = useState(false)
  

  const {addToCart,cart} = useContext(cartContext)

  function handleOnAdd(cant) {
    addToCart( item, cant )
    setAddedToCart(true)
  }

  console.log(cart)

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>${item.price}</p>
      {(isAddedToCart === false) ?
        <ItemCount onAdd={handleOnAdd} stock={5} initial={1} />
        :
        <Link to="/cart">Ir al carrito</Link>
      }
    </div>
  )
}

export default ItemDetail