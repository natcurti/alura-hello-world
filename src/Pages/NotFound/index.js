import styles from './NotFound.module.css';
import error404 from 'assets/erro_404.png';

const NotFound = () => {
    return (
        <>
        <div className={styles.contentContainer}>
            <span className={styles.text404}>404</span>
            <h1 className={styles.title}>
                Ops! Página não encontrada.
            </h1>
            <p className={styles.text}>
                Tem certeza de que era isso que você estava procurando?
            </p>
            <p className={styles.text}>
                Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>
            <div className={styles.btnContainer}>
                <button>Voltar</button>
            </div>
            <img
                className={styles.imgDog}
                src={error404}
                alt="Cachorro de óculos e vestido como humano"
            />
        </div>
        <div className={styles.whiteSpace}></div>
    </>
    )
}

export default NotFound;