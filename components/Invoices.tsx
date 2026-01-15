
import React from 'react';
import { ExternalLink, Receipt, Plus, Search, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

const Invoices: React.FC = () => {
  const handleOpenPortal = () => {
    window.open('https://servicos.rioverde.go.gov.br/', '_blank');
  };

  const services = [
    { id: '1', client: 'João Paulo', service: 'Lavagem Americana', date: '27/10/2023', value: 120.00, status: 'issued', nfe: '2023/128' },
    { id: '2', client: 'Beatriz Silva', service: 'Polimento Técnico', date: '27/10/2023', value: 350.00, status: 'pending', nfe: '-' },
    { id: '3', client: 'Marcos Oliver', service: 'Limpeza de Motor', date: '26/10/2023', value: 80.00, status: 'issued', nfe: '2023/127' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Emissão de Notas (Rio Verde)</h1>
          <p className="text-slate-500 text-sm font-medium">Sincronize seus serviços com o portal oficial ISS.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={handleOpenPortal}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
          >
            <ExternalLink size={18} /> Acessar Portal Rio Verde
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100">
            <Plus size={18} /> Novo Serviço
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="glass-card rounded-3xl overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-100 flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Pesquisar cliente ou serviço..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-transparent rounded-xl focus:bg-white focus:border-red-300 transition-all outline-none text-sm font-medium"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Data</th>
                    <th className="px-6 py-4">Cliente</th>
                    <th className="px-6 py-4">Serviço</th>
                    <th className="px-6 py-4">Valor</th>
                    <th className="px-6 py-4">Status NFe</th>
                    <th className="px-6 py-4 text-right">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {services.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4 text-slate-500 font-medium">{s.date}</td>
                      <td className="px-6 py-4 font-bold text-slate-900">{s.client}</td>
                      <td className="px-6 py-4 text-slate-600">{s.service}</td>
                      <td className="px-6 py-4 font-bold text-red-600 text-base">R$ {s.value.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        {s.status === 'issued' ? (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-bold bg-green-50 text-green-600 uppercase border border-green-100">
                            <CheckCircle2 size={12} /> Nº {s.nfe}
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-bold bg-amber-50 text-amber-600 uppercase border border-amber-100">
                            <Receipt size={12} /> Aguardando
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                          <FileText size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 rounded-3xl shadow-sm border-l-4 border-l-amber-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><AlertTriangle size={20} /></div>
              <h3 className="font-bold text-sm text-slate-800 tracking-tight">Requisito Fiscal</h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              A prefeitura de Rio Verde exige <b>Certificado Digital A1/A3</b> para autenticação no portal servicos.rioverde.go.gov.br.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
            <h3 className="font-bold text-xs mb-4 opacity-50 uppercase tracking-widest">Previsão ISS Mensal</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-xs text-slate-400 font-medium">Faturamento</span>
                <span className="font-bold">R$ 4.250,00</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-xs text-slate-400 font-medium">Alíquota (RV)</span>
                <span className="font-bold">3.0%</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                <span className="text-sm font-bold">Imposto Devido</span>
                <span className="text-xl font-extrabold text-red-500">R$ 127,50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
