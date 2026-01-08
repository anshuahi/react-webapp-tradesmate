// import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Calls = () => {
  const calls = [
    { name: 'John Smith', time: '10:30 AM', duration: '12:45', type: 'Outgoing', status: 'Completed' },
    { name: 'Sarah Johnson', time: '11:15 AM', duration: '8:20', type: 'Incoming', status: 'Completed' },
    { name: 'Mike Davis', time: '2:45 PM', duration: '15:30', type: 'Outgoing', status: 'Completed' },
    { name: 'Emily Brown', time: '4:20 PM', duration: '5:15', type: 'Missed', status: 'Missed' }
  ];

  return (
    <div className="p-8">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search calls..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-medium">
              New Call
            </button>
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Contact</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Time</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {calls.map((call, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">{call.name}</td>
                <td className="px-6 py-4 text-gray-600">{call.time}</td>
                <td className="px-6 py-4 text-gray-600">{call.duration}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    call.type === 'Outgoing' ? 'bg-blue-100 text-blue-700' : 
                    call.type === 'Incoming' ? 'bg-green-100 text-green-700' : 
                    'bg-red-100 text-red-700'
                  }`}>
                    {call.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    call.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {call.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calls;