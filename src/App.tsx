import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Upload, UserPlus, HelpCircle } from 'lucide-react'
import Sidebar from './components/SideBar'
import Dashboard from './components/pages/Dashboard'
import Calls from './components/pages/Calls'
import Contacts from './components/pages/Contacts'
import Analytics from './components/pages/Analytics'
import Settings from './components/pages/Settings'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderPage = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'calls':
        return <Calls />;
      case 'contacts':
        return <Contacts />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  const getPageTitle = () => {
    return activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
  };

  return (
    <div className="home">
      <div className="flex h-screen bg-gray-50">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white border-b border-gray-200 px-8 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">{getPageTitle()}</h1>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Upload size={18} />
                  <span className="font-medium">Import</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  <UserPlus size={18} />
                  <span className="font-medium">Add Contact</span>
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto">
            {renderPage()}
          </main>

          <button className="fixed bottom-8 right-8 w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors">
            <HelpCircle size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
