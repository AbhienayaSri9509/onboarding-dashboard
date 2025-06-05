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

  // Safe click handler to avoid circular JSON error
  const handleClick = (e) => {
    // Log only safe properties, never stringify the entire event target
    console.log('Clicked button info:', {
      name: e.target.name,
      id: e.target.id,
      text: e.target.innerText
    });
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

        <h2 className="text-lg mt-6 mb-2">Weekly Progress</h2>
        <BarChart width={500} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="tasks" fill="#8884d8" />
        </BarChart>

        {/* Example button to demonstrate safe click handler */}
        <button
          name="exampleButton"
          id="btn1"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleClick}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
