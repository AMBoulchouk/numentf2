import './ContactSection.css';
import React from 'react';

function ContactSection(props) {
    return (

        <section className="contact" id="contact">

            <h1 className="heading-contact"> <span>contacto</span></h1>

            <div className="row">
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26269.017678496217!2d-58.369778428957154!3d-34.6135870795892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d9c2d70389%3A0xe7b5e9ee316678f!2sPuerto%20Madero%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1647399227637!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy"></iframe>
                <form action="">
                    <h3>Escríbenos</h3>
                    <div className="inputBox">
                        <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                        <input type="text" placeholder="Nombre" />
                    </div>
                    <div className="inputBox">
                        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                        <input type="email" placeholder="email" />
                    </div>
                    <div className="inputBox">
                        <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                        <input type="number" placeholder="Número" />
                    </div>
                    <input type="submit" value="Contactanos" className="btn" />
                </form>
            </div>

        </section>

    );
}

export default ContactSection;