import React, { useState, useEffect } from 'react';
import { productos } from '../../mock/products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ mensaje, itemId }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos[itemId]);
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