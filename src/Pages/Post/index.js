import { useParams, Routes, Route } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModel from 'Components/PostModel';
import ReactMarkdown from 'react-markdown';
import './Post.css';
import NotFound from 'Pages/NotFound';
import DefaultPage from 'Components/DefaultPage';
import PostRecomendation from 'Components/PostRecomendation';

const Post = () => {
    const params = useParams();
    
    const activePost = posts.find((item) => {
        return item.id === Number(params.id);
    })

    if(!activePost){
        return <NotFound/>
    }

    return (
        <Routes>
            <Route path='*' element={<DefaultPage/>}>
                <Route index element={
                    <PostModel cover={`/posts/${activePost.id}/capa.png`} title={activePost.title}>
                        <div className='post-markdown-container'>
                            <ReactMarkdown>
                                {activePost.text}
                            </ReactMarkdown>
                         </div>
                         <PostRecomendation idActivePost={activePost.id}/>
                    </PostModel>
                }/>
            </Route>
        </Routes>
    )
}

export default Post;