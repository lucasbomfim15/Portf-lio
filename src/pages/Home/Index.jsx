import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
  
    <section className={styles.home}>
      <div className={styles.apresentacao}>
        <p>
          Olá, Sou <br />
          <span>Lucas Bomfim</span> <br />
          Dev Back End
        </p>
        <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
          Saiba mais sobre mim
        </Link>
      </div>
      <figure>
        <img className={styles.img_home} src="/dev.svg" alt="imagem de home" />
      </figure>
    </section>

  )
}

export default Home
