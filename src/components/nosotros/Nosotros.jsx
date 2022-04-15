import React from "react";
import './Nosotros.css';

const Nosotros = () => {
    return (
        <section className="about" id="about">

            <h1 className="heading"> <span>Nosotros</span></h1>

            <div className="row">

                <div className="image">
                    
                </div>

                <div className="content">
                    <h3>Sobre Nosotros</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
                    <p>Para comenzar un gran proyecto, hace falta valentía. Para terminar un gran proyecto, hace falta perseverancia</p>
                    <a href="#" className="btn">learn more</a>
                </div>

            </div>

        </section>
    );
}

export default Nosotros;