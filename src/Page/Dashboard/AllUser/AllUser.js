import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';


const AllUser = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            const data = await res.json();
            return data
        }
    })

    // handle admin
    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
           if(data.modifiedCount > 0){
            toast.success('Make Admin Successful!');
            refetch();
           }
        })
    }





    return (
        <div className='ml-6'>
            <h2 className='text-3xl text-white my-6'>All User</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-white'>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 &&
                            users?.map((user, i) => <tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' &&  <button onClick={()=> handleMakeAdmin(user._id)} className='btn btn-sm btn-primary'>Make Admin</button>}</td>
                                <td><button className='btn btn-sm btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;