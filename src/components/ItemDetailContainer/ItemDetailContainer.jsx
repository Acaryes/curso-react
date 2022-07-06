import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom"
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import { getProduct } from "../../services/firestore";



const ItemDetailContainer = ({ mensaje, itemId }) => {
    const [products, setProducts] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        
        getProduct(id)
            .then((res) => {
                setProducts(res);
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);


    return (
        <>
            <div>{mensaje}</div>

            {isLoading ? <Segment> <Dimmer active>
                <Loader />
            </Dimmer> </Segment> : <ItemDetail item={products} />}

        </>
    );
};

export default ItemDetailContainer;