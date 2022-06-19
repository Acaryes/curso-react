import React from "react";
import Item from "../Item/Item";
import { Grid } from "semantic-ui-react";

const ItemList = ({ items }) => {
  return (
    <Grid>
      <Grid.Row stretched>
        {items.map((item) => (
          <Grid.Column width={4}>
            <Item key={item.id} item={item} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default ItemList;
