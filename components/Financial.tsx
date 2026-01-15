
import React from 'react';
import { Wallet, ArrowUpCircle, ArrowDownCircle, Plus, Calendar, Filter, ChevronRight } from 'lucide-react';

const Financial: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Gestão Financeira</h1>
          <p className="text-gray-500 text-sm">Controle seu fluxo de caixa e lucros.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 shadow-lg shadow-red-100">
          <Plus size={18} /> Novo Lançamento
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-10">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                  <Wallet size={24} />
                </div>
                <div className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full uppercase tracking-widest">Saldo em Conta</div>
              </div>
              <p className="text-white/70 text-sm font-medium mb-1">Total Disponível</p>
              <h2 className="text-4xl font-extrabold tracking-tight">R$ 12.450,80</h2>
              <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-white/50 uppercase font-bold tracking-wider mb-1">Entradas</p>
                  <p className="text-green-300 font-bold text-lg">R$ 18.2K</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/50 uppercase font-bold tracking-wider mb-1">Saídas</p>
                  <p className="text-red-200 font-bold text-lg">R$ 5.8K</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-lg mb-6">Custos por Operação</h3>
            <div className="space-y-5">
              {[
                { label: 'Comissões Equipe', val: 2400, color: 'bg-red-600', p: 60 },
                { label: 'Produtos e Ceras', val: 800, color: 'bg-blue-500', p: 20 },
                { label: 'Contas Fixas', val: 400, color: 'bg-gray-400', p: 10 },
                { label: 'Outros', val: 400, color: 'bg-gray-200', p: 10 },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500 font-medium">{item.label}</span>
                    <span className="font-bold text-gray-900">R$ {item.val.toFixed(2)}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{width: `${item.p}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <h3 className="font-bold text-lg text-gray-900">Histórico de Transações</h3>
            <div className="flex gap-2">
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-xl transition-colors"><Filter size={20} /></button>
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-xl transition-colors"><Calendar size={20} /></button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            <div className="space-y-2">
              {[
                { id: 1, type: 'INCOME', desc: 'Serviço: Lavagem Hilux - Cliente Marcos', val: 150.00, time: 'Hoje, 14:20' },
                { id: 2, type: 'EXPENSE', desc: 'Compra Insumos: Shampoo Ativado (AutoQuim)', val: 420.00, time: 'Hoje, 11:30' },
                { id: 3, type: 'INCOME', desc: 'Serviço: Polimento Corolla - Cliente Ana', val: 350.00, time: 'Ontem, 16:45' },
                { id: 4, type: 'EXPENSE', desc: 'Comissão Lavador: Pedro Silva', val: 45.00, time: 'Ontem, 12:00' },
                { id: 5, type: 'INCOME', desc: 'Serviço: Higienização - Cliente Roberto', val: 280.00, time: '25 Out, 10:20' },
                { id: 6, type: 'EXPENSE', desc: 'Pagamento Saneago - Outubro/23', val: 310.00, time: '24 Out, 15:40' },
              ].map((t) => (
                <div key={t.id} className="group p-4 rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-between cursor-pointer border border-transparent hover:border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${t.type === 'INCOME' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'} transition-transform group-hover:scale-110`}>
                      {t.type === 'INCOME' ? <ArrowUpCircle size={22} /> : <ArrowDownCircle size={22} />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{t.desc}</p>
                      <p className="text-[11px] text-gray-400 font-medium">{t.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-black ${t.type === 'INCOME' ? 'text-green-600' : 'text-gray-900'}`}>
                      {t.type === 'INCOME' ? '+' : '-'} R$ {t.val.toFixed(2)}
                    </span>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-red-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-center">
            <button className="text-sm font-bold text-red-600 hover:text-red-700 transition-colors">Ver Relatório Financeiro Completo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
