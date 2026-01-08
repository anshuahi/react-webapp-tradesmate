

import { MoreVertical } from 'lucide-react';
import type { Contact } from '../models/Contact';

type ContactCardProps = {
  contact: Contact;
};

const ContactCard : React.FC<ContactCardProps> = ({ contact }) =>  (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div 
        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-semibold"
        style={{ backgroundColor: contact.color }}
      >
        {contact.initials}
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <MoreVertical size={20} />
      </button>
    </div>
    
    <h3 className="text-xl font-semibold text-gray-900 mb-1">{contact.name}</h3>
    <p className="text-gray-500 text-sm mb-1">{contact.email}</p>
    <p className="text-gray-500 text-sm mb-4">{contact.phone}</p>
    
    <div className="flex gap-2 mb-6">
      {contact.tags.map((tag, idx) => (
        <span 
          key={idx}
          className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
    
    <div className="flex justify-between text-sm">
      <div>
        <p className="text-gray-500 mb-1">Last Contact</p>
        <p className="text-gray-900 font-semibold">{contact.lastContact}</p>
      </div>
      <div className="text-right">
        <p className="text-gray-500 mb-1">Total Calls</p>
        <p className="text-gray-900 font-semibold">{contact.totalCalls}</p>
      </div>
    </div>
  </div>
);

export default ContactCard;