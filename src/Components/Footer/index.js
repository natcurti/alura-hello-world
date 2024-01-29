import styles from './Footer.module.css';
import { ReactComponent as RegisterSymbol } from 'assets/marca_registrada.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <RegisterSymbol/>
            Desenvolvido por Natália.
        </footer>
    )
}

export default Footer;