
import React from 'react';
import { ExternalLink, Receipt, Plus, Search, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { NFE_URL } from '../constants';

const Invoices: React.FC = () => {
  const handleOpenNfe = () => {
    window.open(NFE_URL, '_blank');
  };

  const services = [
    { id: '1', client: 'João Paulo', service: 'Lavagem Americana', date: '27/10/2023', value: 120.00, status: 'issued', nfe: 'NF-2023001' },
    { id: '2', client: 'Beatriz Silva', service: 'Polimento + Cera', date: '27/10/2023', value: 350.00, status: 'pending', nfe: '-' },
    { id: '3', client: 'Marcos Oliver', service: 'Limpeza de Motor', date: '26/10/2023', value: 80.00, status: 'issued', nfe: 'NF-2023002' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Serviços & Notas Fiscais</h1>
          <p className="text-gray-500 text-sm">Gerencie o faturamento e a integração com Rio Verde.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={handleOpenNfe}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-red-600 text-red-600 rounded-xl text-sm font-bold hover:bg-red-50 transition-all shadow-sm"
          >
            <ExternalLink size={18} /> Acessar Portal NFe
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100">
            <Plus size={18} /> Novo Lançamento
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-50 flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Pesquisar por cliente, data ou serviço..." 
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-300 transition-all outline-none text-sm"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Data</th>
                    <th className="px-6 py-4">Cliente</th>
                    <th className="px-6 py-4">Serviço</th>
                    <th className="px-6 py-4">Valor</th>
                    <th className="px-6 py-4">NFe</th>
                    <th className="px-6 py-4 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {services.map((s) => (
                    <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-500">{s.date}</td>
                      <td className="px-6 py-4 font-bold text-gray-900">{s.client}</td>
                      <td className="px-6 py-4 text-gray-600">{s.service}</td>
                      <td className="px-6 py-4 font-bold text-red-600">R$ {s.value.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        {s.status === 'issued' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 uppercase">
                            <CheckCircle2 size={12} /> {s.nfe}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-orange-100 text-orange-700 uppercase">
                            <Receipt size={12} /> Pendente
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors">Detalhes</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-red-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-50 text-red-600 rounded-lg"><AlertTriangle size={20} /></div>
              <h3 className="font-bold text-sm">Atenção Fiscal</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Lembre-se: O portal de Rio Verde exige <b>Certificado Digital</b> ativo para emissão de Notas de Serviço (ISS).
            </p>
            <div className="mt-4 p-3 bg-gray-50 rounded-xl flex items-start gap-3">
              <Info className="text-blue-500 shrink-0" size={16} />
              <p className="text-[10px] text-gray-500 leading-tight">Mantenha os dados do cliente (CPF/CNPJ) sempre atualizados para evitar rejeição no portal.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl text-white shadow-xl">
            <h3 className="font-bold text-sm mb-4 opacity-80 uppercase tracking-widest">Resumo ISS</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-xs text-white/60">Total Faturado</span>
                <span className="font-bold">R$ 4.250,00</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-xs text-white/60">Alíquota (Rio Verde)</span>
                <span className="font-bold">3.0%</span>
              </div>
              <div className="pt-3 border-t border-white/10 flex justify-between items-end">
                <span className="text-sm font-bold">Imposto Devido</span>
                <span className="text-xl font-bold text-red-400">R$ 127,50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
