import React from 'react'
import { useContext } from 'react'
import cartContext from '../../context/CartContext'
import { Card, Image, Grid, Button, Label } from "semantic-ui-react";


function Cart() {

  const { cart, clearCart, totalPriceCart, removeItem } = useContext(cartContext)

  function handleClearCart() {
    clearCart()
  }

  return (
    <>

      <Grid>
        <Grid.Row>
          {cart.map((item) => (
            <Grid.Column width={4}>
              <Card className="hoverable-card">
                <Image className="photo" src={item.img} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Description>${item.price}</Card.Description>
                </Card.Content>
                <Card.Content>
                  Subtotal: ${item.price * item.cant}
                </Card.Content>
                <Card.Content extra>
                  Cantidad: {item.cant}
                </Card.Content>
                <Button color="red" onClick={() => removeItem(item.id)}>Eliminar articulo</Button>
              </Card>
            </Grid.Column>
          ))}
        </Grid.Row>
        {(cart.length > 0) ?
          <><Label>Total a pagar: ${totalPriceCart()}</Label>
            <Button onClick={handleClearCart} color='blue'>Limpiar carrito</Button></> : "No hay objetos en el carrito, agregue algun articulo"}
      </Grid>
    </>
  )
}

export default Cart