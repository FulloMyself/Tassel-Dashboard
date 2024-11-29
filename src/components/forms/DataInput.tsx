import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { Client, Product, Appointment, FinancialTransaction } from '../../types';

type InputSection = 'client' | 'product' | 'appointment' | 'financial';

export function DataInput() {
  const [activeSection, setActiveSection] = useState<InputSection>('client');

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Data Input</h2>
        <div className="flex space-x-4">
          {(['client', 'product', 'appointment', 'financial'] as InputSection[]).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-lg ${
                activeSection === section
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        {activeSection === 'client' && <ClientForm />}
        {activeSection === 'product' && <ProductForm />}
        {activeSection === 'appointment' && <AppointmentForm />}
        {activeSection === 'financial' && <FinancialForm />}
      </div>
    </div>
  );
}

function ClientForm() {
  const [formData, setFormData] = useState<Partial<Client>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Client data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <SubmitButton />
    </form>
  );
}

function ProductForm() {
  const [formData, setFormData] = useState<Partial<Product>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Product Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value="">Select category</option>
          <option value="Skincare">Skincare</option>
          <option value="Hair Care">Hair Care</option>
          <option value="Body Care">Body Care</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Stock</label>
        <input
          type="number"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          step="0.01"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
        />
      </div>
      <SubmitButton />
    </form>
  );
}

function AppointmentForm() {
  const [formData, setFormData] = useState<Partial<Appointment>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Client</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, clientId: e.target.value })}
        >
          <option value="">Select client</option>
          {/* Add client options here */}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Service</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="datetime-local"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, date: new Date(e.target.value) })}
        />
      </div>
      <SubmitButton />
    </form>
  );
}

function FinancialForm() {
  const [formData, setFormData] = useState<Partial<FinancialTransaction>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Financial data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, type: e.target.value as 'income' | 'expense' })}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          step="0.01"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  return (
    <button
      type="submit"
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <Save className="w-4 h-4 mr-2" />
      Save
    </button>
  );
}