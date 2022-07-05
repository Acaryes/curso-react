import { Grid } from "semantic-ui-react";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {CartContextProvider} from "./context/CartContext"
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <div className="App">
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <CartContextProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <ItemListContainer mensaje={"Catalogo de productos"} />
                  }
                />
                <Route
                  path="/category/:category"
                  element={<ItemListContainer mensaje={"Categoria de items"} />}
                />
                <Route
                  path="/detalles/:id"
                  element={
                    <ItemDetailContainer mensaje={"Detalle de productos"} />
                  }
                />
                <Route path="/cart" element={<Cart/>}/>
              </Routes>
            </BrowserRouter>
            </CartContextProvider>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
