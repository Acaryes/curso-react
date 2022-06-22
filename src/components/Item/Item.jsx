import { Card, Image, Button } from "semantic-ui-react";
import "./Item.css";
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (

          <Card className="hoverable-card">
            <Image className="photo"src={item.img} wrapped ui={false}/>
            <Card.Content>
              <Card.Header>{item.name}</Card.Header>
              <Card.Description>${item.price}</Card.Description>
              <Link to={`/detalles/${item.id}`}>
              <Button color="green">Detalles</Button>
              </Link>
            </Card.Content>
          </Card>

  );
};

export default Item;
