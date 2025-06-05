import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Dashboard = () => {
  const { userData } = useContext(UserContext);

  const chartData = [
    { name: 'Mon', tasks: 4 },
    { name: 'Tue', tasks: 6 },
    { name: 'Wed', tasks: 5 },
    { name: 'Thu', tasks: 7 },
    { name: 'Fri', tasks: 3 }
  ];

  const handleClick = (e) => {
    const btnName = e.target.name;
    console.log("Button clicked:", btnName);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-4 max-w-4xl w-full bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-2">Welcome, {userData.name || 'User'}!</h1>
        <p><strong>Email:</strong> {userData.email}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 shadow rounded">Team Members: 10</div>
          <div className="bg-white p-4 shadow rounded">Active Projects: 5</div>
          <div className="bg-white p-4 shadow rounded">Notifications: 2</div>
        </div>

        {/* Action buttons */}
        <div className="mt-4 space-x-2">
          <button
            name="refreshBtn"
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Refresh
          </button>
          <button
            name="logoutBtn"
            onClick={handleClick}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        {/* Chart */}
        <h2 className="text-lg mt-6 mb-2">Weekly Progress</h2>
        <BarChart width={500} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="tasks" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
