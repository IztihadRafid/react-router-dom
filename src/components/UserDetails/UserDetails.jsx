import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    const {name,phone}= user
    return (
        <div>
            <h1>User Details Here</h1>
            <h1>Name: {name}</h1>
            <h2>Phone: {phone}</h2>
        </div>
    );
};

export default UserDetails;