import PostCard from "Components/PostCard";
import styles from "./PostRecomendation.module.css";
import posts from "json/posts.json";

const PostRecomendation = ({idActivePost}) => {

    const recomendationPosts = posts
        .filter((item) => item.id !== idActivePost)
        .sort((a, b) => b.id - a.id)
        .slice(0,4);

    return (
        <div className={styles.recomendationContainer}>
            <h3 className={styles.recomendationTitle}>Outros posts que você pode gostar:</h3>
            <div className={styles.recomendationPosts}>
                {recomendationPosts.map((item) => {
                    return (
                        <PostCard post={item} key={item.id}/>
                    )
                })}
            </div>   
        </div>
    )
}

export default PostRecomendation;