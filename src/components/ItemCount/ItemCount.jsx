import { useState, useContext } from 'react'
import { Button, Label, Icon } from 'semantic-ui-react'
import cartContext from '../../context/CartContext';



function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial)

    const {clearCart} = useContext(cartContext)

    function handleClearCart(){
        clearCart()
    }

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
            <Button onClick={resta} color="red"> <Icon name='minus' /> Restar</Button>
            <Label>{count}</Label>
            <Button onClick={suma} color="green"> <Icon name='plus' />Agregar</Button>
            <br/>
            <Button onClick={handleClearCart} color='blue'>Limpiar carrito</Button>
            <Button onClick={addToCart} color='black'>Terminar Compra</Button>
        </div>
    )
}

export default ItemCount