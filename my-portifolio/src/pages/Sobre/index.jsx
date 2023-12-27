import styles from "./Sobre.module.css";
import avatar from "./images/avatar.svg";
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import sql from './images/icon-sql.svg'

function Sobre() {
  return (
    <>
      <section className={styles.sobre}>
        <div className={styles.bio}>
          <img src={avatar} alt="Avatar do usuario" className={styles.avatar} />

          <div className={styles.texto}>
            <h2>Sobre</h2>

            <p>Sou o <span> Jefferson santos</span><br /><br />
                <strong>Dev Junior !</strong></p>

             <p>
                Eu estou empolgado em compartilhar meu
                entusiasmo pelo mundo da programação através deste portfólio. Como
                um novato nesta emocionante jornada tecnológica, quero levá-lo(a)
                através das minhas primeiras incursões no universo do código.
                <br /><br />
                    <p>Quem Sou:</p> Sou um aprendiz entusiasta, apaixonado por desvendar os
                mistérios da programação. Meu fascínio pela criação de software
                motivou-me a mergulhar de cabeça em um mundo de algoritmos, lógica
                e resolução de problemas.
                <br/><br />
                    <p>Minhas Explorações:</p> Ao longo deste percurso inicial, explorei
                linguagens de programação, desde o [javaScript] ao [PHP].
                Meu objetivo é não apenas aprender a linguagem, mas compreender os
                fundamentos que impulsionam a magia do código.
            </p>
          </div>
        </div>

        <div className={styles.techs}>
          <h3>Techs</h3>
            <div className={styles.icones}>
            <img src={html} alt="Icone" />
            <img src={css} alt="Icone-css" />
            <img src={js} alt="Icone-js" />
            <img src={react} alt="Icone-react" />
            <img src={sql} alt="Icone-sql" />
            </div>

        </div>
      </section>
    </>
  );
}

export default Sobre;
