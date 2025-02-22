import '../../styles/components/layout/Nav.css'
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return(
        <nav>
        <div className="holder">
            <ul>
                <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined}><img className="img-home" src="img/logo.png" height="40px"
                            alt=""/></NavLink></li>
                <li><NavLink to="/nosotros" className={({isActive}) => isActive ? "activo" : undefined}>Nosotros</NavLink></li>
                <li><NavLink to="/novedades" className={({isActive}) => isActive ? "activo" : undefined}>Novedades</NavLink></li>
                <li><NavLink to="/contacto" className={({isActive}) => isActive ? "activo" : undefined}>Contacto</NavLink></li>

            </ul>
        </div>
     </nav>   
    )

}
export default Nav;