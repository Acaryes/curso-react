import React, { useState, useEffect } from "react";
import { productos } from "../../mock/products";
import ItemList from "../ItemList/ItemList";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState([]);
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
      <div>{mensaje}</div>
      <ItemCount initial={1} stock={3} />
      <ItemList items={products} />
    </>
  );
};

export default ItemListContainer;
