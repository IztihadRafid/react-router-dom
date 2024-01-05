import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
const {id,title,body}=post
const navigate = useNavigate()

const postStyle ={
    border:"2px solid cyan",
    padding:"10px",
    margin: "10px"
}
const handleShowDetail=()=>{
    navigate(`/post/${id}`)
}
    return (
        <div style={postStyle}>
            <h3>ID: {id}</h3>
            <h2>Title: {title}</h2>
            <h3>{body}</h3>
            <Link></Link>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button> </Link>
            <button onClick={handleShowDetail}>Click to see Details</button>
        </div>
    );
};

export default Post;