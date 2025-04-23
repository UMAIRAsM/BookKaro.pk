import React, { useState } from 'react';

const initialUsers = [
  { id: 1, username: 'Sameer', email: 'sameer@gmail.com', role: 'Admin' },
  { id: 2, username: 'Hafsah', email: 'hfsahchndio@gmail.com', role: 'Staff' },
  { id: 3, username: 'umair', email: 'm.umairaslam315@gmail.com', role: 'User' },
  { id: 4, username: 'umairaslam', email: 'k225153@nu.edu.pk', role: 'User' },
];

const UserManagement = () => {
  const [userList, setUserList] = useState(initialUsers);
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    role: 'User',
  });

  const deleteUser = (id) => {
    setUserList(userList.filter((user) => user.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = userList.length + 1;
    const userToAdd = { ...newUser, id: newId };
    setUserList([...userList, userToAdd]);
    setNewUser({ username: '', email: '', role: 'User' });
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#CE1B19] mb-8">User Management</h1>

      <div className="bg-white shadow-xl rounded-xl overflow-hidden p-4 sm:p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">User List</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-separate border-spacing-2">
            <thead>
              <tr className="bg-[#FFA515] text-white">
                <th className="py-3 px-4 text-left text-base sm:text-lg">Username</th>
                <th className="py-3 px-4 text-left text-base sm:text-lg">Email</th>
                <th className="py-3 px-4 text-left text-base sm:text-lg">Role</th>
                <th className="py-3 px-4 text-left text-base sm:text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">{user.username}</td>
                  <td className="py-3 px-4 text-gray-800">{user.email}</td>
                  <td className="py-3 px-4 text-gray-800">{user.role}</td>
                  <td className="py-3 px-4">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          className="bg-[#FFA515] hover:bg-[#CE1B19] text-white font-medium px-6 py-2 rounded"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New User'}
        </button>
      </div>

      {showForm && (
        <div className="mt-8 bg-white shadow-xl rounded-xl p-6 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Add New User</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={newUser.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Role</label>
              <select
                name="role"
                value={newUser.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#FFA515] hover:bg-[#CE1B19] text-white font-medium px-6 py-2 rounded"
            >
              Add User
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
