import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers]=useState(loadedUsers)
    const handleDelete = (_id) => {
        console.log('delete', _id)

        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
            // headers: {
            //     "content-Type": "application/json",
            // },
            // body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {console.log(data)
            if(data.deletedCount>0){
                alert('Deleted Successfully')
                // delete user from UI
                const remaining=users.filter(user=> user._id!==_id)
                setUsers(remaining)
            }})
    }
    return (
        <div>
            {users.map(user => <p key={user._id}>{user.name} : {user.email} : {user._id}
                <Link to={`/update/${user._id}`}><button>Update</button></Link>
                <button onClick={() => handleDelete(user._id)}>XX</button> </p>)}

        </div>
    );
};

export default Users;