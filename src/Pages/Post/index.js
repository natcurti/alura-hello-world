import { useParams } from "react-router-dom";


const Post = () => {
    const params = useParams();
    console.log(params);

    return (
        <h1>Post {params.id} </h1>
    )
}

export default Post;