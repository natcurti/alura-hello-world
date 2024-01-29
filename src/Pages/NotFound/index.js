import Button from 'Components/Button';
import styles from './NotFound.module.css';
import error404 from 'assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();


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
            <div className={styles.btnContainer} onClick={() => navigate('/')}>
                <Button size="lg">Voltar</Button>
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