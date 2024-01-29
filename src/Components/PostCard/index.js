import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

const PostCard = ({post}) => {
    return (
        <Link to={`posts/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.cover} src={`/posts/${post.id}/capa.png`} alt="Imagem de Capa do Post"/>
                <h2 className={styles.title}>{post.title}</h2>
                <button className={styles.btnRead}>Ler</button>
            </div>
        </Link>        
    )
}

export default PostCard;