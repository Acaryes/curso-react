import React from 'react'
import { useContext } from 'react'
import cartContext from '../../context/CartContext'
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom'


function Cart() {

    const { cart } = useContext(cartContext)

  return (
    <>
        {
        cart.map(item => (
            <Card className="hoverable-card">
            <Image className="photo"src={item.img} wrapped ui={false}/>
            <Card.Content>
              <Card.Header>{item.name}</Card.Header>
              <Card.Description>${item.price}</Card.Description>
              <Link to={`/detalles/${item.id}`}>
              <Button color="green">Detalles</Button>
              </Link>
            </Card.Content>
          </Card>
        ))}
    </>
  )
}

export default Cart