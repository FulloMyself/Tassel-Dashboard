export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  lastVisit: Date;
  totalSpent: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  stock: number;
  price: number;
  reorderPoint: number;
}

export interface Appointment {
  id: string;
  clientId: string;
  service: string;
  date: Date;
  duration: number;
  price: number;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface FinancialTransaction {
  id: string;
  date: Date;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  description: string;
}