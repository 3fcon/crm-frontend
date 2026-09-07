
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// Inline SVG Components to guarantee rendering without external dependencies
const Users = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const Building2 = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>);
const LayoutDashboard = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>);
const Settings = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>);
const Search = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>);
const Bell = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>);
const Plus = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="M12 5v14"/></svg>);
const MoreVertical = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>);
const Filter = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>);
const ArrowUpRight = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>);
const Sparkles = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>);

const mockContacts = [
  { id: 1, name: 'Alice Freeman', company: 'Global Tech', role: 'CTO', email: 'alice@globaltech.com', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=alice' },
  { id: 2, name: 'Bob Smith', company: 'Acme Corp', role: 'VP Sales', email: 'bsmith@acme.com', status: 'Lead', avatar: 'https://i.pravatar.cc/150?u=bob' },
  { id: 3, name: 'Charlie Davis', company: 'Stark Ind.', role: 'Director', email: 'cdavis@stark.com', status: 'Inactive', avatar: 'https://i.pravatar.cc/150?u=charlie' },
  { id: 4, name: 'Diana Prince', company: 'Themyscira LLC', role: 'CEO', email: 'diana@themyscira.com', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=diana' },
  { id: 5, name: 'Evan Wright', company: 'Wright Co', role: 'Manager', email: 'evan@wright.com', status: 'Lead', avatar: 'https://i.pravatar.cc/150?u=evan' },
];

const mockCompanies = [
  { id: 1, name: 'Global Tech', industry: 'Software', employees: '500-1000', revenue: '$50M+' },
  { id: 2, name: 'Acme Corp', industry: 'Manufacturing', employees: '100-500', revenue: '$10M+' },
  { id: 3, name: 'Stark Ind.', industry: 'Defense', employees: '10000+', revenue: '$1B+' },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'contacts', icon: Users, label: 'Contacts' },
    { id: 'companies', icon: Building2, label: 'Companies' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-emerald-50/30 border-r border-emerald-100/50 h-screen flex flex-col hidden md:flex">
      <div className="h-16 flex items-center px-6 border-b border-emerald-100/50 bg-white">
        <div className="flex items-center gap-2 text-emerald-500">
          <Sparkles size={24} />
          <span className="font-bold text-xl tracking-tight text-slate-800">AgenticCRM</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <div className="text-xs font-semibold text-emerald-600/50 uppercase tracking-wider mb-4 px-3 mt-4">Menu</div>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === item.id
                ? 'bg-emerald-100/60 text-emerald-800 shadow-sm border border-emerald-200/50'
                : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
            }`}
          >
            <item.icon size={18} className={activeTab === item.id ? 'text-emerald-600' : 'text-slate-400'} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-emerald-100/50 bg-white">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="w-9 h-9 rounded-full ring-2 ring-emerald-100" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">Jane Admin</p>
            <p className="text-xs text-emerald-600/70 truncate">jane@agenticcrm.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-emerald-100/50 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 sticky top-0 shadow-sm">
      <div className="flex items-center flex-1 gap-4">
        <div className="w-full max-w-md relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400/70" size={18} />
          <input 
            type="text" 
            placeholder="Search across CRM..." 
            className="w-full pl-10 pr-4 py-2 bg-emerald-50/50 border-transparent rounded-full text-sm focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all duration-300 outline-none text-slate-700 placeholder:text-slate-400"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-400 rounded-full ring-2 ring-white"></span>
        </button>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full shadow-md shadow-emerald-200 transition-transform active:scale-95">
           <Plus size={20} />
        </button>
      </div>
    </header>
  );
};

const ContactsTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-emerald-100/60 overflow-hidden">
      <div className="px-6 py-4 border-b border-emerald-100/60 flex items-center justify-between bg-emerald-50/20">
        <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          <Users size={20} className="text-emerald-500" />
          All Contacts
        </h2>
        <div className="flex gap-2">
           <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors shadow-sm">
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-emerald-50/40 text-emerald-800/60 text-xs uppercase tracking-wider border-b border-emerald-100/60">
              <th className="px-6 py-3 font-medium">Name</th>
              <th className="px-6 py-3 font-medium hidden sm:table-cell">Company</th>
              <th className="px-6 py-3 font-medium hidden md:table-cell">Role</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-50">
            {mockContacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-emerald-50/50 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={contact.avatar} alt={contact.name} className="w-8 h-8 rounded-full border border-emerald-100" />
                    <div>
                      <div className="font-medium text-slate-900 group-hover:text-emerald-700 transition-colors">{contact.name}</div>
                      <div className="text-xs text-slate-500 md:hidden">{contact.company}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 hidden sm:table-cell">
                  <div className="flex items-center gap-1">
                    <Building2 size={14} className="text-emerald-400" />
                    {contact.company}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 hidden md:table-cell">{contact.role}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                    contact.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                    contact.status === 'Lead' ? 'bg-teal-50 text-teal-700 border-teal-200' : 
                    'bg-slate-50 text-slate-600 border-slate-200'
                  }`}>
                    {contact.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-emerald-600 p-1 rounded-md hover:bg-emerald-100 transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-3 border-t border-emerald-100/60 bg-emerald-50/20 flex items-center justify-between text-sm text-slate-500">
        <div>Showing 1 to {mockContacts.length} of {mockContacts.length} results</div>
        <div className="flex gap-1">
          <button className="px-3 py-1 border border-emerald-200 rounded-md bg-white text-emerald-700 hover:bg-emerald-50 disabled:opacity-50" disabled>Prev</button>
          <button className="px-3 py-1 border border-emerald-200 rounded-md bg-white text-emerald-700 hover:bg-emerald-50 disabled:opacity-50" disabled>Next</button>
        </div>
      </div>
    </div>
  );
};

const DashboardView = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-emerald-600"><Users size={64} /></div>
          <p className="text-sm font-medium text-emerald-700/80 mb-1">Total Contacts</p>
          <p className="text-3xl font-bold text-emerald-900">{mockContacts.length}</p>
          <div className="mt-4 flex items-center text-xs font-medium text-teal-700 bg-teal-100/50 w-fit px-2 py-1 rounded-full">
            <ArrowUpRight size={14} className="mr-1" /> +12% this month
          </div>
        </div>
        
        <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-teal-600"><Building2 size={64} /></div>
          <p className="text-sm font-medium text-teal-700/80 mb-1">Active Companies</p>
          <p className="text-3xl font-bold text-teal-900">{mockCompanies.length}</p>
           <div className="mt-4 flex items-center text-xs font-medium text-teal-700 bg-teal-100/50 w-fit px-2 py-1 rounded-full">
            <ArrowUpRight size={14} className="mr-1" /> +3% this month
          </div>
        </div>

        <div className="bg-sky-50 border border-sky-100 rounded-xl p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-sky-600"><Sparkles size={64} /></div>
          <p className="text-sm font-medium text-sky-700/80 mb-1">AI Interactions</p>
          <p className="text-3xl font-bold text-sky-900">1,492</p>
          <div className="mt-4 flex items-center text-xs font-medium text-teal-700 bg-teal-100/50 w-fit px-2 py-1 rounded-full">
            <ArrowUpRight size={14} className="mr-1" /> +89% this month
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className="bg-white rounded-xl shadow-sm border border-emerald-100 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b border-emerald-50 pb-2">Recent Activity</h3>
            <div className="space-y-4">
              {[1,2,3].map((i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-1">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-800">AI Agent updated <span className="font-semibold text-emerald-600">Acme Corp</span> profile based on recent email thread.</p>
                    <p className="text-xs text-slate-400 mt-1">{i * 2} hours ago</p>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </div>
    </div>
  );
}

const App = () => {
  const [activeTab, setActiveTab] = useState('contacts');

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight capitalize">
              {activeTab}
            </h1>
            <p className="text-emerald-700/60 mt-1 text-sm font-medium">
              Manage your Agentic CRM {activeTab} and data.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && <DashboardView />}
            {activeTab === 'contacts' && <ContactsTable />}
            {activeTab === 'companies' && (
               <div className="bg-white rounded-xl shadow-sm border border-emerald-100/60 p-12 text-center">
                 <Building2 size={48} className="mx-auto text-emerald-200 mb-4" />
                 <h3 className="text-lg font-medium text-slate-900">Companies Module</h3>
                 <p className="text-slate-500 mt-2">Connect to the backend API to populate this view.</p>
               </div>
            )}
             {activeTab === 'settings' && (
               <div className="bg-white rounded-xl shadow-sm border border-emerald-100/60 p-12 text-center">
                 <Settings size={48} className="mx-auto text-emerald-200 mb-4" />
                 <h3 className="text-lg font-medium text-slate-900">CRM Settings</h3>
                 <p className="text-slate-500 mt-2">Configure tenant, AI models, and user roles.</p>
               </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

