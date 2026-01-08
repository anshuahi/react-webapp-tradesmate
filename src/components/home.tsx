// import React, { useState } from 'react';
// import { Users, Phone, BarChart3, Settings, LayoutDashboard, Search, Upload, UserPlus, MoreVertical, HelpCircle } from 'lucide-react';

// const contacts = [
//   {
//     id: 1,
//     initials: 'JS',
//     name: 'John Smith',
//     email: 'john.smith@email.com',
//     phone: '+1 (555) 123-4567',
//     tags: ['Customer', 'VIP'],
//     lastContact: 'Jan 8, 2026',
//     totalCalls: 24,
//     color: '#5b4fc8'
//   },
//   {
//     id: 2,
//     initials: 'SJ',
//     name: 'Sarah Johnson',
//     email: 'sarah.j@email.com',
//     phone: '+1 (555) 234-5678',
//     tags: ['Lead', 'Priority'],
//     lastContact: 'Jan 7, 2026',
//     totalCalls: 12,
//     color: '#4f7cc8'
//   },
//   {
//     id: 3,
//     initials: 'MD',
//     name: 'Mike Davis',
//     email: 'mike.davis@email.com',
//     phone: '+1 (555) 345-6789',
//     tags: ['Customer'],
//     lastContact: 'Jan 7, 2026',
//     totalCalls: 18,
//     color: '#6cc8c8'
//   },
//   {
//     id: 4,
//     initials: 'EB',
//     name: 'Emily Brown',
//     email: 'emily.b@email.com',
//     phone: '+1 (555) 456-7890',
//     tags: ['Partner', 'VIP'],
//     lastContact: 'Jan 6, 2026',
//     totalCalls: 31,
//     color: '#5ec88f'
//   },
//   {
//     id: 5,
//     initials: 'DW',
//     name: 'David Wilson',
//     email: 'david.w@email.com',
//     phone: '+1 (555) 567-8901',
//     tags: ['Customer', 'New'],
//     lastContact: 'Jan 5, 2026',
//     totalCalls: 8,
//     color: '#c89f4f'
//   },
//   {
//     id: 6,
//     initials: 'LA',
//     name: 'Lisa Anderson',
//     email: 'lisa.a@email.com',
//     phone: '+1 (555) 678-9012',
//     tags: ['Lead'],
//     lastContact: 'Jan 4, 2026',
//     totalCalls: 15,
//     color: '#c85f5f'
//   }
// ];

// const ContactCard = ({ contact }) => (
//   <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
//     <div className="flex justify-between items-start mb-4">
//       <div 
//         className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-semibold"
//         style={{ backgroundColor: contact.color }}
//       >
//         {contact.initials}
//       </div>
//       <button className="text-gray-400 hover:text-gray-600">
//         <MoreVertical size={20} />
//       </button>
//     </div>
    
//     <h3 className="text-xl font-semibold text-gray-900 mb-1">{contact.name}</h3>
//     <p className="text-gray-500 text-sm mb-1">{contact.email}</p>
//     <p className="text-gray-500 text-sm mb-4">{contact.phone}</p>
    
//     <div className="flex gap-2 mb-6">
//       {contact.tags.map((tag, idx) => (
//         <span 
//           key={idx}
//           className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
//         >
//           {tag}
//         </span>
//       ))}
//     </div>
    
//     <div className="flex justify-between text-sm">
//       <div>
//         <p className="text-gray-500 mb-1">Last Contact</p>
//         <p className="text-gray-900 font-semibold">{contact.lastContact}</p>
//       </div>
//       <div className="text-right">
//         <p className="text-gray-500 mb-1">Total Calls</p>
//         <p className="text-gray-900 font-semibold">{contact.totalCalls}</p>
//       </div>
//     </div>
//   </div>
// );

// export default function App() {
//   const [activeTab, setActiveTab] = useState('contacts');
//   const [searchQuery, setSearchQuery] = useState('');

//   const navItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
//     { id: 'calls', label: 'Calls', icon: Phone },
//     { id: 'contacts', label: 'Contacts', icon: Users },
//     { id: 'analytics', label: 'Analytics', icon: BarChart3 },
//     { id: 'settings', label: 'Settings', icon: Settings }
//   ];

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
//         {/* Logo */}
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
//               <span className="text-white text-xl font-bold">T</span>
//             </div>
//             <span className="text-2xl font-bold text-gray-900">TradesMate</span>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 p-4">
//           <ul className="space-y-2">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <li key={item.id}>
//                   <button
//                     onClick={() => setActiveTab(item.id)}
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
//                       activeTab === item.id
//                         ? 'bg-indigo-600 text-white'
//                         : 'text-gray-600 hover:bg-gray-100'
//                     }`}
//                   >
//                     <Icon size={20} />
//                     <span className="font-medium">{item.label}</span>
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* User Profile */}
//         <div className="p-4 border-t border-gray-200">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
//               JD
//             </div>
//             <div className="flex-1">
//               <p className="text-sm font-semibold text-gray-900">John Doe</p>
//               <p className="text-xs text-gray-500">john@example.com</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <header className="bg-white border-b border-gray-200 px-8 py-6">
//           <div className="flex items-center justify-between">
//             <h1 className="text-3xl font-bold text-gray-900">
//               {navItems.find(item => item.id === activeTab)?.label}
//             </h1>
//             <div className="flex items-center gap-3">
//               <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
//                 <Upload size={18} />
//                 <span className="font-medium">Import</span>
//               </button>
//               <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
//                 <UserPlus size={18} />
//                 <span className="font-medium">Add Contact</span>
//               </button>
//             </div>
//           </div>
//         </header>

//         {/* Content Area */}
//         <main className="flex-1 overflow-auto">
//           {activeTab === 'contacts' ? (
//             <div className="p-8">
//               {/* Search and Filters */}
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                   <input
//                     type="text"
//                     placeholder="Search contacts..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//                 <button className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium">
//                   All Tags
//                 </button>
//                 <button className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium">
//                   Sort by Name
//                 </button>
//               </div>

//               {/* Contact Cards Grid */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//                 {contacts.map(contact => (
//                   <ContactCard key={contact.id} contact={contact} />
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className="h-full flex items-center justify-center">
//               <div className="text-center">
//                 <div className="text-gray-400 mb-4">
//                   {React.createElement(navItems.find(item => item.id === activeTab)?.icon, { size: 64 })}
//                 </div>
//                 <h2 className="text-2xl font-semibold text-gray-900 mb-2">
//                   {navItems.find(item => item.id === activeTab)?.label}
//                 </h2>
//                 <p className="text-gray-500">This section is coming soon</p>
//               </div>
//             </div>
//           )}
//         </main>

//         {/* Help Button */}
//         <button className="fixed bottom-8 right-8 w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors">
//           <HelpCircle size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }