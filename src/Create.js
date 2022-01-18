import { useState } from "react";

const Create = () => {
    const [firstname, setFirstname] = useState('First Name');
    const [lastname, setLastname] = useState('Last Name');
    const [gender, setGender] = useState('Female');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {firstname, lastname, gender};

        setIsPending(true);

        fetch('http://localhost:8080/person', {
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
                <input name="firstName" placeholder={firstname} onChange={e => setFirstname(e.target.value)}></input>
                <label>Last Name: </label>
                <input name="lastName" placeholder={lastname} onChange={e => setLastname(e.target.value)}></input>
                <label>Gender: </label>
                <select name="gender" placeholder={gender} onChange={e => setGender(e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
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