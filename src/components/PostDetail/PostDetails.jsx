import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData()
    const {id,title,body} = post
    return (
        <div>
            <h4>ID{id}</h4>
            <h1>{title}</h1>
            <h3>{body}</h3>
        </div>
    );
};

export default PostDetails;