import './ContactSection.css';
import React from 'react';

function ContactSection(props) {
  return (

    <section class="contact" id="contact">

    <h1 class="heading"> <span>contacto</span></h1>

    <div class="row">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26269.017678496217!2d-58.369778428957154!3d-34.6135870795892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d9c2d70389%3A0xe7b5e9ee316678f!2sPuerto%20Madero%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1647399227637!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy"></iframe>

        <form action="">
            <h3>Escríbenos</h3>
            <div class="inputBox">
                <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                <input type="text" placeholder="Nombre" />
            </div>
            <div class="inputBox">
                <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
                <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                <input type="number" placeholder="Número" />
            </div>
            <input type="submit" value="Contactanos" class="btn" />
        </form>

    </div>

</section>
      
  );
}

export default ContactSection;