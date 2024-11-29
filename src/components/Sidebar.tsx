import { LayoutDashboard, Users, Calendar, Package2, DollarSign, Settings, PlusCircle } from 'lucide-react';

type View = 'dashboard' | 'clients' | 'appointments' | 'inventory' | 'financials' | 'data-input';

interface SidebarProps {
  onNavigate: (view: View) => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: 'dashboard' },
  { icon: Users, label: 'Clients', path: 'clients' },
  { icon: Calendar, label: 'Appointments', path: 'appointments' },
  { icon: Package2, label: 'Inventory', path: 'inventory' },
  { icon: DollarSign, label: 'Financials', path: 'financials' },
  { icon: PlusCircle, label: 'Data Input', path: 'data-input' },
  { icon: Settings, label: 'Settings', path: 'settings' },
];

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Tasssel</h1>
        <p className="text-sm text-gray-400">Beauty & Wellness Studio</p>
      </div>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onNavigate(item.path as View)}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg mb-1"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}