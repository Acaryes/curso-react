import { useState, useContext } from 'react'
import ItemCount from "../ItemCount/ItemCount";
import cartContext from '../../context/CartContext';
import { Link } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'




function ItemDetail({ item }) {
  const [isAddedToCart, setAddedToCart] = useState(false)


  const { addToCart, cart } = useContext(cartContext)

  function handleOnAdd(cant) {
    addToCart(item, cant)
    setAddedToCart(true)
  }

  console.log(cart)

  return (
    <div>
      <Card className="hoverable-card">
        <Image className="photo" src={item.img} wrapped ui={false} />

        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>
            <span className='price'>${item.price}</span>
          </Card.Meta>
          <Card.Description>
            {item.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {(isAddedToCart === false) ?
            <ItemCount onAdd={handleOnAdd} stock={5} initial={1} />
            :
            <Link to="/cart">Ir al carrito</Link>
          }
        </Card.Content>
      </Card>

    </div>
  )
}

export default ItemDetail