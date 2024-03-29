import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from 'react-router-dom';

export default function NavBar() {

    return(

        <div className="topnav" id="myTopnav">
          <Link to="/">Inicio</Link>
          <Link to="/category/Monitores">Monitores</Link>
          <Link to="/category/CPU">CPU</Link>
          <Link to="/category/Accesorios">Accesorios</Link>
          <Link to="/cart"><CartWidget/></Link>

        </div>

    );
}