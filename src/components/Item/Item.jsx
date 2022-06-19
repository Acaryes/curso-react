import { Card, Image } from "semantic-ui-react";
import "./Item.css";

const Item = ({ item }) => {
  return (

          <Card className="hoverable-card">
            <Image className="photo"src={item.img} wrapped ui={false}/>
            <Card.Content>
              <Card.Header>{item.name}</Card.Header>
              <Card.Description>${item.price}</Card.Description>
            </Card.Content>
          </Card>

  );
};

export default Item;
