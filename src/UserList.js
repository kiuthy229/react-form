import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <div className="user-preview" key={user.id} >
          <Link to={`/users/${user.id}`}>
            <h2>{ user.firstname } { user.lastname }</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default UserList;