import styles from './Banner.module.css';
import circle from 'assets/circulo_colorido.png'
import picture from 'assets/picture.jpg'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.presentation}>
                <h1 className={styles.title}>
                    Olá, Mundo!
                </h1>
                <p className={styles.text}>
                    Bem-vindo ao meu espaço pessoal! Eu sou a Natalia e aqui você pode conferir meus artigos favoritos da Alura.
                </p>
            </div>
            <div className={styles.images}>
                <img className={styles.circle} src={circle} aria-hidden={true} alt={'Círculo Colorido'}/>
                <img className={styles.picture} src={picture} alt={'Foto da Natália'}/>
            </div>

        </div>
    )
}

export default Banner;