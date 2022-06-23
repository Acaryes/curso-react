import React, { useState, useEffect } from 'react';
import { productos } from '../../mock/products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({ mensaje, itemId }) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                const itemFound = productos.find(item => {
                   return item.id === parseInt(id)
                })
                res(itemFound);
            }, 2000);
        });
        traerProductos
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);


    return (
        <>
            <div>{mensaje}</div>
            <ItemDetail item={products}/>
        </>
    );
};

export default ItemDetailContainer;