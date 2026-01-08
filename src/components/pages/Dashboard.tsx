// import React, { useState } from 'react';
import { Users, PhoneCall, TrendingUp, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Contacts', value: '1,234', icon: Users, color: 'bg-blue-500' },
    { label: 'Total Calls', value: '856', icon: PhoneCall, color: 'bg-green-500' },
    { label: 'Revenue', value: '$45,231', icon: DollarSign, color: 'bg-purple-500' },
    { label: 'Growth', value: '+23%', icon: TrendingUp, color: 'bg-orange-500' }
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-gray-500 text-sm mb-1">{stat.label}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {['Called John Smith', 'Added new contact: Sarah Johnson', 'Meeting scheduled with Mike Davis', 'Email sent to Emily Brown'].map((activity, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-600">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Tasks</h3>
          <div className="space-y-4">
            {['Follow up with 5 leads', 'Quarterly review meeting', 'Update contact database', 'Send monthly newsletter'].map((task, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" />
                <span className="text-gray-600">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;