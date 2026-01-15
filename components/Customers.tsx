
import React from 'react';
import { Search, Plus, UserPlus, Phone, Mail, MoreHorizontal } from 'lucide-react';

const Customers: React.FC = () => {
  const customers = [
    { id: '1', name: 'Ricardo Alencar', doc: '123.456.789-00', phone: '(64) 99234-5678', car: 'BMW X5 (Preta)', visits: 12 },
    { id: '2', name: 'Patrícia Nunes', doc: '987.654.321-11', phone: '(64) 98112-4455', car: 'Fiat Pulse (Branco)', visits: 4 },
    { id: '3', name: 'Henrique Jorge', doc: '456.123.789-22', phone: '(64) 98888-0099', car: 'Honda Civic (Prata)', visits: 8 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Clientes & Veículos</h1>
          <p className="text-gray-500 text-sm">Gerencie seu cadastro de clientes e fidelidade.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 shadow-lg shadow-red-100 transition-all">
          <UserPlus size={18} /> Novo Cliente
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar por nome, placa ou CPF..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-300 transition-all outline-none text-sm"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-2 text-sm font-bold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50">Filtros</button>
            <button className="flex-1 md:flex-none px-4 py-2 text-sm font-bold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50">Exportar</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4 text-center w-16">Avatar</th>
                <th className="px-6 py-4">Cliente</th>
                <th className="px-6 py-4">Veículo</th>
                <th className="px-6 py-4 text-center">Lavagens</th>
                <th className="px-6 py-4">Contato</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {customers.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 flex items-center justify-center font-bold text-gray-500">
                      {c.name.substring(0, 2).toUpperCase()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{c.name}</p>
                    <p className="text-[11px] text-gray-400">{c.doc}</p>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-600">{c.car}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold">{c.visits}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs text-gray-500"><Phone size={12} /> {c.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg transition-colors"><MoreHorizontal size={20}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
