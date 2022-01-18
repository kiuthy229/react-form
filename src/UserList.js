import { Link } from 'react-router-dom';

const UserList = ({ person }) => {
  return (
    <div className="user-list">
      {person.map(user => (
        <div className="user-preview" key={user.id} >
          <Link to={`/person/${user.id}`}>
            <h2>{ user.firstname } { user.lastname }</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default UserList;