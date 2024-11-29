import React, { useState } from 'react';
import { Users, DollarSign, Calendar, Package2 } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { StatCard } from './components/dashboard/StatCard';
import { RevenueChart } from './components/dashboard/RevenueChart';
import { InventoryTable } from './components/dashboard/InventoryTable';
import { DataInput } from './components/forms/DataInput';
import { ClientsView } from './components/views/ClientsView';
import { AppointmentsView } from './components/views/AppointmentsView';
import { FinancialsView } from './components/views/FinancialsView';

// Sample data
const revenueData = [
  { date: 'Jan', revenue: 4000 },
  { date: 'Feb', revenue: 3000 },
  { date: 'Mar', revenue: 5000 },
  { date: 'Apr', revenue: 4500 },
  { date: 'May', revenue: 6000 },
  { date: 'Jun', revenue: 5500 },
];

const lowStockItems = [
  { id: '1', name: 'Facial Cream', category: 'Skincare', stock: 5, price: 29.99, reorderPoint: 10 },
  { id: '2', name: 'Hair Serum', category: 'Hair Care', stock: 3, price: 34.99, reorderPoint: 8 },
  { id: '3', name: 'Body Oil', category: 'Body Care', stock: 4, price: 24.99, reorderPoint: 10 },
];

type View = 'dashboard' | 'clients' | 'appointments' | 'inventory' | 'financials' | 'data-input';

function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Clients"
                value="1,234"
                icon={Users}
                trend={{ value: 12, isPositive: true }}
              />
              <StatCard
                title="Monthly Revenue"
                value="$45,678"
                icon={DollarSign}
                trend={{ value: 8, isPositive: true }}
              />
              <StatCard
                title="Appointments Today"
                value="24"
                icon={Calendar}
                trend={{ value: 5, isPositive: true }}
              />
              <StatCard
                title="Low Stock Items"
                value="3"
                icon={Package2}
                trend={{ value: 2, isPositive: false }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <RevenueChart data={revenueData} />
              </div>
              <div className="lg:col-span-1">
                <InventoryTable data={lowStockItems} />
              </div>
            </div>
          </>
        );
      case 'clients':
        return <ClientsView />;
      case 'appointments':
        return <AppointmentsView />;
      case 'financials':
        return <FinancialsView />;
      case 'data-input':
        return <DataInput />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onNavigate={(view: View) => setCurrentView(view)} />
      <main className="flex-1 overflow-auto p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {currentView.charAt(0).toUpperCase() + currentView.slice(1).replace('-', ' ')}
                </h1>
                <p className="text-gray-600">Welcome back, here's what's happening today.</p>
              </div>
              <button
                onClick={() => setCurrentView('data-input')}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Add New Data
              </button>
            </div>
          </header>

          {renderView()}
        </div>
      </main>
    </div>
  );
}

export default App;