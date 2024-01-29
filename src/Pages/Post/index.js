import { useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModel from 'Components/PostModel';
import ReactMarkdown from 'react-markdown';
import './Post.css';

const Post = () => {
    const params = useParams();
    
    const activePost = posts.find((item) => {
        return item.id === Number(params.id);
    })

    if(!activePost){
        return <h1>Post não encontrado</h1>
    }

    return (
        <PostModel cover={`/posts/${activePost.id}/capa.png`} title={activePost.title}>
            <div className='post-markdown-container'>
                <ReactMarkdown>
                    {activePost.text}
                </ReactMarkdown>
            </div>
        </PostModel>
    )
}

export default Post;