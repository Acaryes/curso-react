import { Grid } from "semantic-ui-react";

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Grid divided='horizontally'>
        <Grid.Row>
          <Grid.Column>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<ItemListContainer mensaje={"Catalogo de productos"} />} />
              </Routes>
              <Routes>
                <Route path="/detalles/:id" element={<ItemDetailContainer itemId={2} mensaje={"Detalle de productos"} />} />
              </Routes>
            </BrowserRouter>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
