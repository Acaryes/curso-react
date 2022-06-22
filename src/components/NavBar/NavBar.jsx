import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from 'react-router-dom';

export default function NavBar() {

    return(

        <div class="topnav" id="myTopnav">
          <Link to="/">Inicio</Link>
          <Link to="/detalles">Detalles</Link>
          <a href="#contacto">Contacto</a>
          <a href="#sobrenosotros">Sobre Nosotros</a>
          <CartWidget/>
          <span>3</span>
        </div>

    );
}