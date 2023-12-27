import styles from "./Card.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Card({ name, description, html_url }) {
  return (
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <FaReact />
          <a
            href={html_url}
            target="_blank"
            rel="nopenner norefferer"
            className={styles.botao}
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Card;
