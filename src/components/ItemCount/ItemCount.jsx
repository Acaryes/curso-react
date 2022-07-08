import { useState } from 'react'
import { Button, Label, Icon, Grid } from 'semantic-ui-react'



function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial)

    function suma() {
        if(count < stock){
        setCount(count + 1)
        }else{
            alert("Stock maximo alcanzado")
        }
    }

    function resta() {
        if (count > 0){
        setCount(count - 1)
        } else{
            alert("No se pueden restar mas articulos")
        }
    }

    function addToCart(){
        onAdd(count)
    }

    return (
        <div>
            <Grid centered>
            <Grid.Row>
            <Button onClick={resta} color="teal" size='tiny'> <Icon name='minus'/></Button>
            <Label size='large'>{count}</Label>
            <Button onClick={suma} color="teal" size='tiny'> <Icon name='plus'/></Button>
            </Grid.Row>
            <br/>
            <Button onClick={addToCart} size='green' color='black'>Agregar al Carrito</Button>
            </Grid>
        </div>
    )
}

export default ItemCount