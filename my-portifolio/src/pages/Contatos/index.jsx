import styles from './Contatos.module.css/'
import { MdMailOutline } from "react-icons/md"
import { CiLinkedin} from "react-icons/ci"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Contato () {
    return (
        <>
            <section className={styles.contatos}>
                <img className={styles.imgContact} src="/Public/contact.svg" alt="imagem da pg de contato" />
                <h2>Contatos</h2>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar mais sobre.</p>
                <div className={styles.icones}>
                        <a href="mailto:582jeffersons@gmail.com" target="_blank" 
                        rel="nooperer noreferrer">
                        <MdMailOutline className={styles.icone}/>
                        </a>
                        
                        <a href="http://linkedin.com/in/jefferson-souza-santos-33645521a" target="_blank" rel="noopener noreferrer">
                        <CiLinkedin className={styles.icone}/>
                        </a>
                        <a href="http://github.com/devjeffersonss" target="_blank" rel="noopener noreferrer">
                        <FaGithub className={styles.icone}/>
                        </a>
                        <a href="http://www.instagram.com/jeffin.souza21/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.icone}/>
                        </a>          
                </div>

            </section>
        </>
    )
}

export default Contato