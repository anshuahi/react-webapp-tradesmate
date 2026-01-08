const Analytics = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Call Analytics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Outgoing Calls</span>
                <span className="font-semibold">245</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Incoming Calls</span>
                <span className="font-semibold">189</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Missed Calls</span>
                <span className="font-semibold">34</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Types</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">VIP Contacts</span>
              <span className="text-2xl font-bold text-purple-600">127</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Regular Customers</span>
              <span className="text-2xl font-bold text-blue-600">456</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Leads</span>
              <span className="text-2xl font-bold text-green-600">234</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Partners</span>
              <span className="text-2xl font-bold text-orange-600">89</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Performance</h3>
        <div className="h-64 flex items-end justify-between gap-4">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-indigo-500 rounded-t-lg" style={{ height: `${Math.random() * 100 + 50}%` }}></div>
              <span className="text-sm text-gray-600 mt-2">{month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Analytics;