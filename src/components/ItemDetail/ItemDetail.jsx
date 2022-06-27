import { useState } from 'react'
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({ item }) {
  const [isAddedToCart, setAddedToCart] = useState(false)
  function handleOnAdd() {
    setAddedToCart(true)
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>${item.price}</p>
      {(isAddedToCart === false) ?
        <ItemCount onAdd={handleOnAdd} stock={5} initial={1} />
        :
        <a href='/cart'>Ver carrito</a>
      }
    </div>
  )
}

export default ItemDetail