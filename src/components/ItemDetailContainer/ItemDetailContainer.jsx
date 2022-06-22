import React, { useState, useEffect } from 'react';
import { productos } from '../../mock/products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({ mensaje, itemId }) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const traerProductos = new Promise((res, rej) => {
            let itemNumber = parseInt(itemId)
            setTimeout(() => {
                res(productos[itemNumber]);
            }, 2000);
        });
        traerProductos
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <>
            <div>{mensaje}</div>
            <ItemDetail item={products}/>
        </>
    );
};

export default ItemDetailContainer;