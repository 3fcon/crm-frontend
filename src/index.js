import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// --- Utility Icons (Mimicking SLDS) ---
const IconAppLauncher = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400 hover:text-blue-600 cursor-pointer"><path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/></svg>;
const IconSearch = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const IconBell = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 hover:text-blue-600 cursor-pointer"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>;
const IconPlus = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 hover:text-blue-600 cursor-pointer"><path d="M5 12h14"/><path d="M12 5v14"/></svg>;
const IconHelp = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 hover:text-blue-600 cursor-pointer"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>;
const IconSettings = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 hover:text-blue-600 cursor-pointer"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconChevronDown = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>;
const IconAccount = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>;
const IconContact = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconOpportunity = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>;

const App = () => {
  const [activeTab, setActiveTab] = useState('details');

  // Replicating the Global Header
  const GlobalHeader = () => (
    <header className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xl cursor-pointer">
          ☁️
        </div>
        <div className="relative hidden md:block w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IconSearch />
          </div>
          <input 
            type="text" 
            placeholder="Search Salesforce" 
            className="w-full bg-slate-100 border border-slate-300 text-slate-900 text-sm rounded h-8 pl-10 pr-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <IconPlus />
        <IconHelp />
        <IconSettings />
        <div className="relative">
          <IconBell />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-bold px-1 rounded-full">10</span>
        </div>
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold border border-blue-200 cursor-pointer ml-2">
          A
        </div>
      </div>
    </header>
  );

  // Replicating the App Navigation Bar
  const NavigationBar = () => {
    const navItems = ['Home', 'Leads', 'Accounts', 'Contacts', 'Opportunities', 'Calendar', 'Forecasts', 'Dashboards', 'Reports', 'Quotes'];
    return (
      <nav className="bg-white border-b border-slate-200 h-12 flex items-center px-4 overflow-x-auto">
        <div className="flex items-center gap-2 mr-6 cursor-pointer">
          <IconAppLauncher />
          <span className="font-bold text-slate-800 text-lg">Sales</span>
        </div>
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item} className={`px-4 h-12 flex items-center cursor-pointer text-sm font-medium border-b-2 transition-colors ${item === 'Accounts' ? 'text-blue-700 border-blue-700 bg-slate-50' : 'text-slate-600 border-transparent hover:bg-slate-50'}`}>
              {item} {['Leads', 'Accounts', 'Contacts', 'Opportunities'].includes(item) && <IconChevronDown />}
            </div>
          ))}
        </div>
      </nav>
    );
  };

  // Field display helper mimicking standard SLDS read-only fields
  const Field = ({ label, value, isLink = false }) => (
    <div className="py-2 border-b border-slate-100 last:border-0 flex flex-col">
      <span className="text-xs text-slate-500 mb-0.5">{label}</span>
      {isLink ? (
        <a href="#" className="text-sm text-blue-600 hover:underline">{value}</a>
      ) : (
        <span className="text-sm text-slate-900">{value}</span>
      )}
    </div>
  );

  // Related List Card
  const RelatedList = ({ title, count, icon, bgColor, children }) => (
    <div className="bg-white border border-slate-200 rounded-md shadow-sm mb-4">
      <div className="p-3 border-b border-slate-200 flex justify-between items-center bg-slate-50/50 rounded-t-md">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 ${bgColor} rounded flex items-center justify-center`}>
            {icon}
          </div>
          <h3 className="font-bold text-slate-900 text-sm hover:text-blue-600 cursor-pointer">{title} ({count})</h3>
        </div>
        <button className="text-slate-500 p-1 hover:bg-slate-200 rounded"><IconChevronDown /></button>
      </div>
      <div className="p-0">
        {children}
      </div>
      <div className="p-2 text-center border-t border-slate-200">
        <a href="#" className="text-blue-600 text-sm hover:underline font-medium">View All</a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 font-sans flex flex-col">
      <GlobalHeader />
      <NavigationBar />

      {/* Main Workspace */}
      <main className="flex-1 p-4 flex flex-col md:flex-row gap-4 max-w-[1600px] mx-auto w-full">
        
        {/* LEFT COLUMN: Related Lists */}
        <aside className="w-full md:w-80 flex flex-col gap-4">
          
          {/* Record Header (Mobile) / Left side header */}
          <div className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
             <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded flex items-center justify-center shrink-0">
                  <IconAccount />
                </div>
                <div>
                  <h1 className="text-sm text-slate-500 font-medium uppercase tracking-wide">Account</h1>
                  <h2 className="text-xl font-bold text-slate-900 leading-tight">Acme (Sample)</h2>
                </div>
             </div>
             <div className="flex gap-2">
                <button className="flex-1 border border-slate-300 bg-white hover:bg-slate-50 text-blue-600 text-sm font-medium py-1.5 rounded transition-colors">Edit</button>
                <button className="flex-1 border border-slate-300 bg-white hover:bg-slate-50 text-blue-600 text-sm font-medium py-1.5 rounded transition-colors">Delete</button>
             </div>
          </div>

          <RelatedList title="Contacts" count="3" icon={<IconContact/>} bgColor="bg-purple-500">
            {[
              { name: 'Howard Jones (Sample)', title: 'Buyer', email: 'info@salesforce.com', phone: '1 (800) 667-6389' },
              { name: 'Jennifer Stamos (Sample)', title: 'President and CEO', email: 'info@salesforce.com', phone: '1 (800) 667-6389' },
              { name: 'Leanne Tomlin (Sample)', title: 'VP Customer Support', email: 'info@salesforce.com', phone: '1 (800) 667-6389' }
            ].map((contact, i) => (
              <div key={i} className="p-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 cursor-pointer">
                <a href="#" className="font-semibold text-blue-600 text-sm mb-1 block hover:underline">{contact.name}</a>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-slate-500">Title: <span className="text-slate-900">{contact.title}</span></div>
                  <div className="text-slate-500">Email: <a href="#" className="text-blue-600">{contact.email}</a></div>
                  <div className="text-slate-500">Phone: <span className="text-slate-900">{contact.phone}</span></div>
                </div>
              </div>
            ))}
          </RelatedList>

          <RelatedList title="Opportunities" count="3+" icon={<IconOpportunity/>} bgColor="bg-orange-500">
             <div className="p-4 text-center text-sm text-slate-500 italic">Opportunities loading...</div>
          </RelatedList>
        </aside>

        {/* RIGHT COLUMN: Record Details */}
        <section className="flex-1 bg-white border border-slate-200 rounded-md shadow-sm flex flex-col">
          
          {/* Inner Tabs */}
          <div className="border-b border-slate-200 flex px-4 pt-2 gap-6 bg-slate-50/50 rounded-t-md">
            {['Details', 'Marketing', 'Service'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.toLowerCase() ? 'text-slate-900 border-blue-600' : 'text-slate-600 border-transparent hover:text-slate-900'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Details Content Area */}
          <div className="p-6 flex-1 overflow-y-auto">
            {activeTab === 'details' && (
              <div className="space-y-6">
                
                {/* Section 1 */}
                <div>
                  <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                    <IconChevronDown /> Account Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 px-6">
                    <Field label="Account Name" value="Acme (Sample)" />
                    <Field label="Parent Account" value="salesforce.com (Sample)" isLink={true} />
                    <Field label="Account Owner" value="Tatiana Lebreton" isLink={true} />
                    <Field label="Type" value="Prospect" />
                    <Field label="Phone" value="1 (800) 667-6389" isLink={true} />
                    <Field label="Industry" value="Manufacturing" />
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                    <IconChevronDown /> Additional Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 px-6">
                    <Field label="Website" value="www.salesforce.com" isLink={true} />
                    <Field label="Phone" value="1 (800) 667-6389" isLink={true} />
                    <Field label="Description" value="Acme is a leading manufacturer of widgets and tools. Established in 1999." />
                    <Field label="Employees" value="680" />
                  </div>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                    <IconChevronDown /> Address Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 px-6">
                    <Field label="Billing Address" value={<>10 Main Rd.<br/>New York, NY 10001<br/>USA</>} />
                    <Field label="Shipping Address" value={<>10 Main Rd.<br/>New York, NY 10001<br/>USA</>} />
                  </div>
                </div>

              </div>
            )}
            
            {activeTab !== 'details' && (
              <div className="h-48 flex items-center justify-center text-slate-500">
                This section is currently empty. Connect to backend to load {activeTab} data.
              </div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
