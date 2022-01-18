import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const UserDetails = () => {
  const { id } = useParams();
  const { data: user, error, isPending } = useFetch('http://localhost:8000/users' + id);

  return (
    <div className="user-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { user && (
        <article>
          First name: <h2>{ user.firstname }</h2>
          Last name: <h2>{ user.lastname }</h2>
          Gender: <div>{ user.gender }</div>
        </article>
      )}
    </div>
  );
}
 
export default UserDetails;