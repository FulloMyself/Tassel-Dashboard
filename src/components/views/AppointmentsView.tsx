import React from 'react';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Appointment } from '../../types';
import { format } from 'date-fns';

const columnHelper = createColumnHelper<Appointment>();

const columns = [
  columnHelper.accessor('clientId', {
    header: 'Client',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('service', {
    header: 'Service',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('date', {
    header: 'Date & Time',
    cell: (info) => format(info.getValue(), 'MMM dd, yyyy HH:mm'),
  }),
  columnHelper.accessor('duration', {
    header: 'Duration (min)',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('price', {
    header: 'Price',
    cell: (info) => `$${info.getValue().toFixed(2)}`,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          info.getValue() === 'completed'
            ? 'bg-green-100 text-green-800'
            : info.getValue() === 'cancelled'
            ? 'bg-red-100 text-red-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}
      >
        {info.getValue().charAt(0).toUpperCase() + info.getValue().slice(1)}
      </span>
    ),
  }),
];

const sampleAppointments: Appointment[] = [
  {
    id: '1',
    clientId: 'Jane Smith',
    service: 'Facial Treatment',
    date: new Date('2024-03-15T10:00:00'),
    duration: 60,
    price: 120.00,
    status: 'scheduled',
  },
  // Add more sample appointments here
];

export function AppointmentsView() {
  const table = useReactTable({
    data: sampleAppointments,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold">Appointments</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}