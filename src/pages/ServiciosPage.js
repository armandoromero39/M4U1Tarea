
import '../styles/components/pages/ServiciosPage.css'
const ServiciosPage = (props) => {
    return(
        <main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
            <img src="img/servicios/insumos.png" alt="Insumos Informáticos"/>
            <div className="info">
                <h4>Venta de Insumos Informáticos</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum voluptatem ducimus debitis
                    autem sapiente consectetur architecto dolorum earum quas. Quo ducimus voluptate alias nam quasi
                    harum. Sapiente, neque quo.</p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/mantenimiento.jpg" alt="Sistemas Operativos"/>
            <div className="info">
                <h4>Instalación y mantenimiento de Sistemas Operativos</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum voluptatem ducimus debitis
                    autem sapiente consectetur architecto dolorum earum quas. Quo ducimus voluptate alias nam quasi
                    harum. Sapiente, neque quo.</p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/impresiones.png" alt="Impresiones 3D"/>
            <div className="info">
                <h4>Diseño e Impresiones en 3D</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum voluptatem ducimus debitis
                    autem sapiente consectetur architecto dolorum earum quas. Quo ducimus voluptate alias nam quasi
                    harum. Sapiente, neque quo.</p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/asesoramiento.png" alt="Asesoramiento"/>
            <div className="info">
                <h4>Asesoramiento Informático</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum voluptatem ducimus debitis
                    autem sapiente consectetur architecto dolorum earum quas. Quo ducimus voluptate alias nam quasi
                    harum. Sapiente, neque quo.</p>
            </div>
        </div>
    </main>   
    )
}
export default ServiciosPage;