import React, { useState, useEffect } from 'react';
import { productos } from '../../mock/products';
import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ mensaje }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos);
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
            <ItemCount initial={1} stock={3}/>
            <ItemList items={products} />
        </>
    );
};

export default ItemListContainer;