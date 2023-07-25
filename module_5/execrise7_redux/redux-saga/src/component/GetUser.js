import { useDispatch, useSelector } from 'react-redux'
import { DeleteUser } from '../redux/userAction';

export default function GetUser() {
    const users = useSelector(state => state.users)
    console.log(useSelector(state => state.users));
    const dispatch = useDispatch();
    const deleteUser = (id) => {
        
        dispatch(DeleteUser(id));
    };
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>
                            <button onClick={()=> {deleteUser(user.id)}} >Delete user</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}