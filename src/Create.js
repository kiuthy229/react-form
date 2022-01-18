import { useState } from "react";

const Create = () => {
    const [firstname, setFirstname] = useState('fn');
    const [lastname, setLastname] = useState('ln');
    const [gender, setGender] = useState('gender');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {firstname, lastname, gender};

        setIsPending(true);

        fetch('http://localhost:8000/users', {
            method:'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(user)
        }).then(() => {
            console.log(user);
            console.log("new user added");
            setIsPending(false);
        })
    }

    return ( 
        <div className="create">
            <h2>Hello from react</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name : </label>
                <input name="firstName" placeholder='firstName' value={firstname} onChange={e => setFirstname(e.target.value)}></input>
                <label>Last Name: </label>
                <input name="lastName" placeholder='lastName' value={lastname} onChange={e => setLastname(e.target.value)}></input>
                <label>Gender: </label>
                <input name="gender" placeholder='gender' value={gender} onChange={e => setGender(e.target.value)}></input>
                { !isPending && <button >Submit</button>}
                { isPending && <button disabled>Submitting...</button>}
            </form>
            {/* <div>{firstname}</div>
            <div>{lastname}</div>
            <div>{gender}</div> */}
        </div>
     );
}
//npx json-server --watch data/db.json --port 8080 
 
export default Create;