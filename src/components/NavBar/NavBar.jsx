import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from 'react-router-dom';

export default function NavBar() {

    return(

        <div class="topnav" id="myTopnav">
          <Link to="/">Inicio</Link>
          <Link to="/category/Monitores">Monitores</Link>
          <Link to="/category/CPU">CPU</Link>
          <Link to="/category/Accesorios">Accesorios</Link>
          <CartWidget/>
          <span>3</span>
        </div>

    );
}