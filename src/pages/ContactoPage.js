import '../styles/components/pages/ContactoPage.css'
const ContactoPage = (props) => {
    return(
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form className="formulario" action="" method="">
                    <p>
                        <label for="nombre" >Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="email" >Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="telefono" >Teléfono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="mensaje" >Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar" />

                    </p>

                </form>

            </div>
            <div className="datos">
                <h2>Otras Vías de Comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Teléfono: 3772404040</li>
                    <li>Email: insumos2025@hotmail.com</li>
                    <li>Facebook:</li>
                    <li>X:</li>
                    <li>Skype</li>
                </ul>
            </div>
        </main>
    )
}
export default ContactoPage;