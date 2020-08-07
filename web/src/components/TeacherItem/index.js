import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://scontent.fcgh4-1.fna.fbcdn.net/v/t1.0-9/116246869_3441700912527414_2673333697776372919_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=cMDZ_Cq_68cAX_8SP9y&_nc_ht=scontent.fcgh4-1.fna&oh=d28009f3134ecb60195123e7c12f1acb&oe=5F51518F" alt="Jair Raya"/>
                <div>
                    <strong>Jair Raya</strong>
                    <span>Desenvolvedor</span>
                </div>       
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br/><br/> 
                Debitis culpa quaerat, deleniti nobis non explicabo ducimus iusto commodi magnam voluptatum quam voluptatem veritatis, dolorem sit dolor maiores minima repellendus provident.
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>U$$ 80,00</strong>
                </p>
                <button type="button">
                    <img
                        src={whatsappIcon}
                        alt="Whats-App"/>
                        Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;