import React from 'react'
import { useContext } from 'react'
import cartContext from '../../context/CartContext'
import { Card, Image, Grid, Button, Label, Checkbox } from "semantic-ui-react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';


import { createOrder } from '../../services/firestore'


function Cart() {

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Nombre muy corto!')
      .max(50, 'Nombre muy largo!')
      .required('Campo obligatorio'),
    phone: Yup.number()
      .min(10, 'Deben de ser mas de 10 digitos!')
      .required('Campo obligatorio'),
    email: Yup.string().email('Correo Invalido').required('Campo obligatorio'),
  });


  const { cart, clearCart, totalPriceCart, removeItem } = useContext(cartContext)

  function handleOrder() {
    const dataOrder = {
      buyer: {
        name: "Adan Contreras",
        phone: 6863153236,
        email: "acaryes@gmail.com"
      },
      item: cart,
      total: totalPriceCart()
    }
    createOrder(dataOrder).then((orderCreated) => {
      clearCart()
      alert("Su id de compra es: " + orderCreated.id)
    })
  }


  function handleClearCart() {
    clearCart()
  }

  return (
    <>

      <Grid columns>
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
          <>               <Grid.Column width={3}>
            <Formik
              initialValues={{
                firstName: '',
                phone: '',
                email: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={handleOrder}
            >
              {({ errors, touched }) => (
                <Form>
                  <Grid.Column>
                    <Label>Nombre</Label>
                    <Field name="firstName" />
                    {errors.firstName && touched.firstName ? (
                      <div>{errors.firstName}</div>
                    ) : null}
                  </Grid.Column>
                  <Grid.Column>
                    <Label>Telefono</Label>
                    <Field name="phone" />
                    {errors.phone && touched.phone ? (
                      <div>{errors.phone}</div>
                    ) : null}
                  </Grid.Column>
                  <Grid.Column>
                    <Label>Correo</Label>
                    <Field name="email" type="email" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <Button type="submit" color='blue'>Finalizar Compra</Button>
                  </Grid.Column>
                </Form>
              )}
            </Formik>
          </Grid.Column>
            <Grid.Row>
              <Label>Total a pagar: ${totalPriceCart()}</Label>
              <Button onClick={handleClearCart} color='blue'>Limpiar carrito</Button></Grid.Row></> : "No hay objetos en el carrito, agregue algun articulo"}
      </Grid>
    </>
  )
}

export default Cart