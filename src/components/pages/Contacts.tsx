// import React, { useState } from 'react';
import { Search } from 'lucide-react';
// import { Contact } from '@/models/Contact';
import ContactCard from './ContactCard';
import type { Contact } from '../models/Contact';

const Contacts = () => {
  const contacts: Contact[] = [
    { id: 1, initials: 'JS', name: 'John Smith', email: 'john.smith@email.com', phone: '+1 (555) 123-4567', tags: ['Customer', 'VIP'], lastContact: 'Jan 8, 2026', totalCalls: 24, color: '#5b4fc8' },
    { id: 2, initials: 'SJ', name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '+1 (555) 234-5678', tags: ['Lead', 'Priority'], lastContact: 'Jan 7, 2026', totalCalls: 12, color: '#4f7cc8' },
    { id: 3, initials: 'MD', name: 'Mike Davis', email: 'mike.davis@email.com', phone: '+1 (555) 345-6789', tags: ['Customer'], lastContact: 'Jan 7, 2026', totalCalls: 18, color: '#6cc8c8' },
    { id: 4, initials: 'EB', name: 'Emily Brown', email: 'emily.b@email.com', phone: '+1 (555) 456-7890', tags: ['Partner', 'VIP'], lastContact: 'Jan 6, 2026', totalCalls: 31, color: '#5ec88f' },
    { id: 5, initials: 'DW', name: 'David Wilson', email: 'david.w@email.com', phone: '+1 (555) 567-8901', tags: ['Customer', 'New'], lastContact: 'Jan 5, 2026', totalCalls: 8, color: '#c89f4f' },
    { id: 6, initials: 'LA', name: 'Lisa Anderson', email: 'lisa.a@email.com', phone: '+1 (555) 678-9012', tags: ['Lead'], lastContact: 'Jan 4, 2026', totalCalls: 15, color: '#c85f5f' }
  ];

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium">
          All Tags
        </button>
        <button className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium">
          Sort by Name
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;