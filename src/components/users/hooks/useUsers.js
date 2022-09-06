import {useEffect, useState} from 'react';
import usersService from '../services/usersService';
const useUsers=()=>{
    const [usersLoading,setUsersLoading] = useState(true);
    const [users,setUsers] = useState([]);
    useEffect(() => {   
        usersService.fetchAll().then(users => {
            setUsersLoading(false);
            setUsers(users);
        });
       
    }, []);

    return {
        users: users,
        usersLoading: usersLoading
    };
}
export default useUsers;
