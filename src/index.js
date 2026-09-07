import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Your live Render Backend URL
const API_BASE_URL = 'https://crm-backend-qduh.onrender.com/api';

// --- Icons ---
const Users = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const KanbanIcon = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="9" x2="9" y1="3" y2="21"/><line x1="15" x2="15" y1="3" y2="21"/></svg>);
const Sparkles = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>);
const Loader = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>);
const Plus = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="M12 5v14"/></svg>);
const X = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>);
const Menu = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>);
const Mail = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
const Lock = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>);

const LoginScreen = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); onLogin(); }, 1200);
  };
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <div className="text-emerald-500 mb-2"><Sparkles size={40} /></div>
        <h2 className="text-center text-3xl font-extrabold text-slate-900 tracking-tight">Agentic CRM</h2>
        <p className="mt-2 text-center text-sm text-slate-500">Enterprise AI Sales Automation</p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-emerald-50">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center"><Mail className="h-5 w-5 text-slate-400" /></div>
                <input type="email" required className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 border-slate-200 rounded-lg py-2.5 bg-slate-50 border outline-none text-sm" placeholder="admin@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center"><Lock className="h-5 w-5 text-slate-400" /></div>
                <input type="password" required className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 border-slate-200 rounded-lg py-2.5 bg-slate-50 border outline-none text-sm" placeholder="••••••••" />
              </div>
            </div>
            <div>
              <button type="submit" disabled={isLoading} className="w-full flex justify-center py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-colors">
                {isLoading ? <Loader className="animate-spin" /> : 'Sign in to Workspace'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('pipeline');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // LIVE DATA STATES
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enrichingId, setEnrichingId] = useState(null); 
  
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', companyName: '' });

  // 1. FETCH DATA FROM YOUR LIVE BACKEND
  const fetchContacts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`);
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      }
    } catch (error) {
      console.error("Error fetching live data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchContacts();
  }, [isAuthenticated]);

  // 2. CREATE A NEW CONTACT
  const handleCreateContact = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsModalOpen(false);
        setFormData({ firstName: '', lastName: '', email: '', companyName: '' });
        fetchContacts();
      }
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  // 3. UPDATE PIPELINE STAGE
  const handleUpdateStage = async (id, newStage) => {
    try {
      // Optimistic UI update for instant feel
      setContacts(contacts.map(c => c.id === id ? { ...c, customFields: { ...c.customFields, stage: newStage } } : c));
      
      await fetch(`${API_BASE_URL}/contacts/${id}/stage`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stage: newStage })
      });
    } catch (error) {
      console.error("Error updating stage:", error);
      fetchContacts(); // Revert on failure
    }
  };

  // 4. TRIGGER AI ENRICHMENT
  const handleEnrich = async (id) => {
    setEnrichingId(id);
    try {
      await fetch(`${API_BASE_URL}/contacts/${id}/enrich`, { method: 'POST' });
      await fetchContacts(); 
    } catch (error) {
      console.error("Error running AI:", error);
    } finally {
      setEnrichingId(null);
    }
  };

  if (!isAuthenticated) return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;

  const pipelineStages = ['Lead', 'Contacted', 'Proposal', 'Closed'];

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Sidebar */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-slate-900/50 z-20 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />}
      <div className={`fixed inset-y-0 left-0 w-64 bg-emerald-50/40 border-r border-emerald-100/50 h-screen flex flex-col z-30 transition-transform duration-300 md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center px-6 border-b border-emerald-100/50 bg-white">
          <div className="flex items-center gap-2 text-emerald-500"><Sparkles size={24} /><span className="font-bold text-xl text-slate-800 tracking-tight">AgenticCRM</span></div>
        </div>
        <nav className="flex-1 p-4 space-y-2 bg-white/50">
          <button onClick={() => { setActiveTab('pipeline'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'pipeline' ? 'bg-emerald-100/60 text-emerald-800 border border-emerald-200/50 shadow-sm' : 'text-slate-600 hover:bg-emerald-50'}`}>
            <KanbanIcon size={18} className={activeTab === 'pipeline' ? 'text-emerald-600' : 'text-slate-400'} /> Sales Pipeline
          </button>
          <button onClick={() => { setActiveTab('contacts'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'contacts' ? 'bg-emerald-100/60 text-emerald-800 border border-emerald-200/50 shadow-sm' : 'text-slate-600 hover:bg-emerald-50'}`}>
            <Users size={18} className={activeTab === 'contacts' ? 'text-emerald-600' : 'text-slate-400'} /> All Contacts
          </button>
        </nav>
      </div>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b border-emerald-100/50 flex items-center justify-between px-4 sm:px-8 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 text-slate-600"><Menu size={24} /></button>
            <h1 className="text-xl font-bold text-slate-800 capitalize hidden sm:block">{activeTab}</h1>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors flex items-center gap-2">
            <Plus size={16} /> New Lead
          </button>
        </header>
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/50">
          
          {/* THE KANBAN PIPELINE VIEW */}
          {activeTab === 'pipeline' && (
            <div className="h-full">
               <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-6 min-h-[500px]">
                  {pipelineStages.map(stage => (
                    <div key={stage} className="bg-slate-100/50 rounded-2xl min-w-[280px] w-full md:w-[320px] p-4 border border-slate-200/60 flex flex-col h-fit max-h-full shadow-sm">
                      <div className="flex justify-between items-center mb-4 px-2">
                        <h3 className="font-semibold text-slate-700 tracking-wide">{stage}</h3>
                        <span className="text-xs bg-white px-2.5 py-1 rounded-full shadow-sm border border-slate-100 text-slate-600 font-medium">
                           {contacts.filter(c => (c.customFields?.stage || 'Lead') === stage).length}
                        </span>
                      </div>
                      
                      <div className="space-y-3 overflow-y-auto pr-1 pb-2">
                        {contacts.filter(c => (c.customFields?.stage || 'Lead') === stage).map(contact => (
                          <div key={contact.id} className="bg-white p-4 rounded-xl shadow-sm border border-emerald-100 relative group cursor-pointer hover:shadow-md hover:border-emerald-300 transition-all">
                            <h4 className="font-bold text-slate-800">{contact.firstName} {contact.lastName}</h4>
                            <p className="text-xs text-slate-500 mb-3 font-medium">{contact.customFields?.companyName || contact.email}</p>
                            
                            {/* AI Summary Display in Card */}
                            {contact.customFields?.aiSummary && (
                              <div className="bg-emerald-50/50 text-emerald-800 text-[11px] p-2.5 rounded-lg mb-3 leading-relaxed border border-emerald-100 shadow-inner">
                                <Sparkles size={12} className="inline mr-1 text-emerald-500 mb-0.5" />
                                {contact.customFields.aiSummary}
                              </div>
                            )}

                            <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-50">
                               <span className="text-[10px] uppercase font-bold text-slate-400">Move Stage:</span>
                               <select 
                                  className="text-xs bg-slate-50 border border-slate-200 rounded-md px-2 py-1 outline-none text-slate-700 font-medium focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 cursor-pointer"
                                  value={stage}
                                  onChange={(e) => handleUpdateStage(contact.id, e.target.value)}
                                >
                                  {pipelineStages.map(s => <option key={s} value={s}>{s}</option>)}
                               </select>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          )}

          {/* THE CONTACTS TABLE VIEW (With AI Button) */}
          {activeTab === 'contacts' && (
            <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden">
               <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-emerald-50/40 text-emerald-800/70 text-xs uppercase tracking-wider border-b border-emerald-100/60">
                      <th className="px-6 py-4 font-semibold">Name / Email</th>
                      <th className="px-6 py-4 font-semibold hidden sm:table-cell">Company</th>
                      <th className="px-6 py-4 font-semibold">Stage</th>
                      <th className="px-6 py-4 font-semibold text-right">AI Agent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald-50">
                    {contacts.map((c) => (
                      <tr key={c.id} className="hover:bg-emerald-50/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-bold text-slate-800">{c.firstName} {c.lastName}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{c.email}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 hidden sm:table-cell font-medium">
                          {c.customFields?.companyName || "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm">
                           <span className="bg-slate-100 px-2 py-1 rounded-md text-xs font-semibold text-slate-600">{c.customFields?.stage || 'Lead'}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                           <button 
                             onClick={() => handleEnrich(c.id)}
                             disabled={enrichingId === c.id || c.customFields?.aiSummary}
                             className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm ${
                               c.customFields?.aiSummary 
                               ? 'bg-emerald-100 text-emerald-700 border border-emerald-200 cursor-default'
                               : 'bg-white text-emerald-600 hover:bg-emerald-50 border border-emerald-200 hover:border-emerald-300 shadow-emerald-100/50 hover:shadow-md disabled:opacity-50'
                             }`}
                           >
                             {enrichingId === c.id ? <Loader className="animate-spin text-emerald-500" size={14}/> : <Sparkles size={14} className={c.customFields?.aiSummary ? '' : 'text-emerald-500'}/>}
                             {enrichingId === c.id ? 'Researching...' : c.customFields?.aiSummary ? 'Enriched' : 'Run AI'}
                           </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        {/* ADD CONTACT MODAL */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-emerald-100">
                <div className="px-6 py-4 border-b border-emerald-50 flex justify-between items-center bg-emerald-50/30">
                  <h3 className="font-bold text-slate-800">Add New Lead</h3>
                  <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600"><X size={20}/></button>
                </div>
                <form onSubmit={handleCreateContact} className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">First Name</label>
                      <input type="text" required value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="Jane" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Last Name</label>
                      <input type="text" required value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Work Email</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="jane@apple.com" />
                  </div>
                  <div className="pt-4 flex justify-end gap-3">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors">Cancel</button>
                    <button type="submit" className="px-5 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-md shadow-emerald-600/20 transition-all active:scale-95">Save Lead</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
