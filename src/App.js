import { Grid } from "semantic-ui-react";

import './App.css';
import NavBar from './components/NavBar/NavBar';
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid divided='horizontally'>
      <Grid.Row columns={2}>
      <Grid.Column>
      <ItemListContainer mensaje={"Catalogo de productos"}/>
      </Grid.Column>
      <Grid.Column>
      <ItemDetailContainer itemId={2} mensaje={"Detalle de productos"}/>
      </Grid.Column>
      </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
