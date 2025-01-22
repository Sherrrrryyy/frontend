import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [donors, setDonors] = useState([]);
  
  useEffect(() => {
    const fetchDonors = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          const response = await axios.get('http://localhost:5000/api/donors', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setDonors(response.data);
        } catch (err) {
          console.error('Error fetching donors:', err);
        }
      }
    };
    
    fetchDonors();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Available Donors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donors.map((donor) => (
          <div key={donor._id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg">{donor.name}</h3>
            <p className="text-sm text-gray-600">{donor.bloodType}</p>
            <p className="text-sm text-gray-600">Location: {donor.location}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Contact</button>
          </div>
        ))}0         
      </div>
    </div>
  );
};

export default Dashboard;
