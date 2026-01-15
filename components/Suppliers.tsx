
import React from 'react';
import { Truck, Plus, Building2, MapPin, Package } from 'lucide-react';

const Suppliers: React.FC = () => {
  const suppliers = [
    { id: '1', name: 'AutoQuim Rio Verde', cat: 'Produtos Químicos', rep: 'Silas Mendes' },
    { id: '2', name: 'Distribuidora Automotiva', cat: 'Peças e Acessórios', rep: 'Paula Lima' },
    { id: '3', name: 'Ceras & Brilho Sul', cat: 'Estética Automotiva', rep: 'Vitor Hugo' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Fornecedores</h1>
          <p className="text-gray-500 text-sm">Controle seus parceiros de suprimentos.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 shadow-lg shadow-red-100 transition-all">
          <Plus size={18} /> Novo Fornecedor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suppliers.map((s) => (
          <div key={s.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-red-200 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-gray-50 text-gray-400 group-hover:bg-red-50 group-hover:text-red-600 rounded-2xl transition-colors">
                <Building2 size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-3 py-1 rounded-full">{s.cat}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{s.name}</h3>
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Package size={16} /> Representante: <span className="text-gray-900 font-semibold">{s.rep}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <MapPin size={16} /> Rio Verde, GO
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-50 grid grid-cols-2 gap-4">
              <button className="text-xs font-bold text-gray-500 hover:text-red-600 transition-colors uppercase tracking-widest text-center">Contato</button>
              <button className="text-xs font-bold text-red-600 hover:bg-red-50 py-2 rounded-xl transition-all uppercase tracking-widest text-center">Nova Compra</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
