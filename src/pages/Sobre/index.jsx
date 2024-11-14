import React from 'react'
import styles from './Sobre.module.css'
import avatar from './images/meu avatar.png'
import html from './images/icon-html.svg'
import js from './images/icon-js.svg'
import node from './images/icon-node.svg'
import css from './images/icon-css.svg'
import react from './images/icon-react.svg'
import sql from './images/icon-sql.svg'

function Sobre(){
    return(
            <section className={styles.sobre}>

                <div className={styles.bio}>
                    <img src={avatar} alt="Avatar" className={styles.avatar}/>
                    <div className={styles.textos}>
                        <h2>sobre</h2>

                       <p> Sou <span>Lucas Bomfim</span> <br />
                        <strong>Dev Back End</strong> </p>

                       <p>Trabalho com desenvolvimento Back-end desde 2023.</p> 

                       <p>Sou apaixonado por transformar ideias em realidade digital.</p>  

                       <p> Especializado em criação de aplicações dinâmicas e intuitivas, <br />
                        com foco na experiência do usuário.</p> 

                    </div>
                </div>

                <div className={styles.techs}>
                    <h3>Techs</h3>
                   <div className={styles.icones}>
                   <img src={html} alt="icone" /> 
                        <img src={css} alt="icone" /> 
                        <img src={js} alt="icone" /> 
                        <img src={react} alt="icone" /> 
                        <img src={node} alt="icone" /> 
                        <img src={sql} alt="icone" /> 
                   </div>
                </div>

            </section>
    )
}

export default Sobre;