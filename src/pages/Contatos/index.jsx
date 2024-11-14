import React from 'react'
import styles from './Contatos.module.css'
import { GoMail } from "react-icons/go";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'

function Contatos(){
    return(
        <>
            <section className={styles.contatos}> 
                <h2>Contatos:</h2>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar mais sobre.</p>
                <div className={styles.icones}>
                    <a href="mailto:bmfmlucas@gmail.com" target='_blank' rel='noopener noreferrer'>
                    <GoMail className={styles.icone} /> 
                    </a>
                    <a href="https://www.instagram.com/llucas.bn" target='_blank' rel='noopener noreferrer'>
                    <BsInstagram className={styles.icone} /> 
                    </a>
                    <a href="https://github.com/lucasbomfim15" target='_blank' rel='noopener noreferrer'>
                    <BsGithub className={styles.icone} />
                    </a>
                    <a href="https://www.linkedin.com/in/lucas-bomfim15" target='_blank' rel='noopener noreferrer'>
                    <BsLinkedin  className={styles.icone} />
                    </a>

                </div>
            </section>
        </>
    )
}

export default Contatos;