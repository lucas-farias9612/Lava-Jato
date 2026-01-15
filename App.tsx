
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard.tsx';
import Customers from './components/Customers.tsx';
import Suppliers from './components/Suppliers.tsx';
import Invoices from './components/Invoices.tsx';
import Financial from './components/Financial.tsx';

type View = 'dashboard' | 'customers' | 'suppliers' | 'invoices' | 'financial';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  useEffect(() => {
    const handleViewChange = (e: any) => {
      setCurrentView(e.detail as View);
    };

    window.addEventListener('change-view', handleViewChange);
    return () => window.removeEventListener('change-view', handleViewChange);
  }, []);

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

  return (
    <div className="animate-in fade-in duration-500">
      {renderView()}
    </div>
  );
};

export default App;
