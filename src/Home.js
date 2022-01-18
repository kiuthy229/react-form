import { useState, useEffect } from "react";
import UserList from "./UserList";
import useFetch from './useFetch';

const Home = () => {
    const { error, isPending, data: users} = useFetch('http://localhost:8000/users')
    
    return ( 
    <div className="home">
        <h2>Homapage</h2>
        { error && <div>{error}</div>}
        { isPending && <div>Loading...</div>}
        { users && <UserList users={users} /> }
    </div> 
    );
}
 
export default Home;