import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../Redux/features/UserSlice';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="user-card bg-white shadow-md rounded-lg p-4 m-4 hover:shadow-black transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-700 mb-4">{user.email}</p>
            <p className="text-lg font-semibold mb-4">Role: {user.role}</p>
            <div className="flex space-x-2">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
