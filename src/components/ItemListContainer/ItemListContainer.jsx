import React, { useState, useEffect } from "react";
import { productos } from "../../mock/products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Dimmer, Loader, Segment } from 'semantic-ui-react'


const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const traerProductos = new Promise((res, rej) => {
      setTimeout(() => {
        if (category === undefined)
          res(productos);
        else {
          const itemFound = productos.filter((item) => {
            return item.category === category;
          });
          res(itemFound);
        }
      }, 2000);
    });
    traerProductos
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <>
      {products ?
        <ItemList items={products} />
        : <Segment> <Dimmer active>
          <Loader />
        </Dimmer> </Segment>
      }
    </>
  );
};

export default ItemListContainer;
