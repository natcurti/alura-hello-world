import styles from './PostModel.module.css';

const PostModel = ({children, cover, title}) => {
    return (
        <article className={styles.postModelContainer}>
            <div className={styles.cover} style={{backgroundImage: `url(${cover})`}}>               
            </div>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.postContentContainer}>{children}</div>
        </article>
    )
}

export default PostModel;