import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name,email,phone} = user
    const userstyle = {
        border:'2px solid yellow',
        padding: "10px",
        borderRadius: "20px",
        margin:"10px"
    }
    return (
        <div style={userstyle}>
            <h3>name: {name}</h3>
            <h4>Email: {email}</h4>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;