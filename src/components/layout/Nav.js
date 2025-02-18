import { Link } from "react-router-dom";
const Nav = (props) => {
    return(
        <nav>
        <div>
            <ul>
                <li><Link to="/"><img class="img-home" src="img/logo.png" height="40px"
                            alt=""/></Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/novedades">Novedades</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>

            </ul>
        </div>
     </nav>   
    )

}
export default Nav;