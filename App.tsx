
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Truck, 
  Receipt, 
  Wallet, 
  Settings, 
  Menu,
  CircleDollarSign,
  Bell
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import Customers from './components/Customers';
import Suppliers from './components/Suppliers';
import Invoices from './components/Invoices';
import Financial from './components/Financial';

type View = 'dashboard' | 'customers' | 'suppliers' | 'invoices' | 'financial';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'customers': return <Customers />;
      case 'suppliers': return <Suppliers />;
      case 'invoices': return <Invoices />;
      case 'financial': return <Financial />;
      default: return <Dashboard />;
    }
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'invoices', label: 'Serviços & NFe', icon: <Receipt size={20} /> },
    { id: 'financial', label: 'Financeiro', icon: <Wallet size={20} /> },
    { id: 'customers', label: 'Clientes', icon: <Users size={20} /> },
    { id: 'suppliers', label: 'Fornecedores', icon: <Truck size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 overflow-hidden">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col z-20 shadow-sm`}>
        <div className="p-5 flex items-center gap-3 border-b border-gray-100">
          <div className="bg-red-600 p-2 rounded-lg text-white shadow-lg shadow-red-100">
            <CircleDollarSign size={24} />
          </div>
          {isSidebarOpen && (
            <span className="font-bold text-lg tracking-tight">
              LavaJato<span className="text-red-600">Pro</span>
            </span>
          )}
        </div>
        
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as View)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                currentView === item.id 
                ? 'bg-red-600 text-white shadow-md shadow-red-100' 
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <div className={currentView === item.id ? 'text-white' : 'text-gray-400'}>{item.icon}</div>
              {isSidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-100">
           <button className="w-full flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors">
             <Settings size={20} />
             {isSidebarOpen && <span className="font-medium">Configurações</span>}
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 shrink-0 z-10">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500"
          >
            <Menu size={20} />
          </button>
          
          <div className="flex items-center gap-6">
            <button className="p-2 text-gray-400 hover:text-red-600 relative transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">Admin Rio Verde</p>
                <p className="text-xs text-gray-400 font-medium">Unidade Central</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-red-400 flex items-center justify-center text-white font-bold shadow-inner">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic View */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#f9fafb] custom-scrollbar">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
