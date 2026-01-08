
// import React, { useState } from 'react';
import { Bell, Lock, User } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl">
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-indigo-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-900">Profile Settings</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" defaultValue="John Doe" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" defaultValue="john@example.com" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input type="tel" defaultValue="+1 (555) 000-0000" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="text-indigo-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          </div>
          <div className="space-y-4">
            {['Email notifications', 'SMS alerts', 'Push notifications', 'Weekly reports'].map((setting, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-gray-700">{setting}</span>
                <label className="relative inline-block w-12 h-6">
                  <input type="checkbox" defaultChecked={idx < 2} className="sr-only peer" />
                  <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:after:translate-x-6 peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="text-indigo-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-900">Security</h3>
          </div>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};
export default Settings;