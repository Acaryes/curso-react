import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import { getItems, getComponentsByCategory } from "../../services/firestore";


const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState(null);
  const { category } = useParams();

  getItems().then(answer => console.log(answer))

  useEffect(() => {
    if(category){
      getComponentsByCategory(category)
      .then((res) =>{
        setProducts(res)
      })
      .catch((error) => {
        console.log(error)
      })
    } else{
    
    getItems()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      });
    }
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
