import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/users/signup', { name, email, password, role });
      // Redirect to login page after successful signup
      window.location.href = '/login';
    } catch (err) {
      setError('Error signing up. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 mt-2 border rounded-md" 
              placeholder="Enter your name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              className="w-full px-4 py-2 mt-2 border rounded-md" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              className="w-full px-4 py-2 mt-2 border rounded-md" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="role">Role</label>
            <select 
              id="role" 
              className="w-full px-4 py-2 mt-2 border rounded-md"
              value={role} 
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="patient">Patient</option>
              <option value="donor">Donor</option>
            </select>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
