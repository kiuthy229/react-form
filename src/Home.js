import { useState, useEffect } from "react";
import UserList from "./UserList";
import useFetch from './useFetch';

const Home = () => {
    const { data: users, isPending, error} = useFetch('http://localhost:8080/person')
    
    return ( 
    <div className="home">
        <h2>Homapage</h2>
        { error && <div>{error}</div>}
        { isPending && <div>Loading...</div>}
        { users && <UserList person={users} /> }
    </div> 
    );
}
 
export default Home;