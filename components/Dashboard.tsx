
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { DollarSign, Receipt, Users, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const chartData = [
    { name: 'Seg', receita: 1200 },
    { name: 'Ter', receita: 2100 },
    { name: 'Qua', receita: 1800 },
    { name: 'Qui', receita: 2400 },
    { name: 'Sex', receita: 3100 },
    { name: 'Sáb', receita: 4500 },
    { name: 'Dom', receita: 3800 },
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Painel Executivo</h1>
          <p className="text-gray-500 text-sm font-medium">Gestão de Rio Verde em tempo real.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold hover:bg-gray-50 transition-all">Relatórios</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-bold hover:bg-red-700 shadow-lg shadow-red-100 transition-all">+ Novo Serviço</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 rounded-xl bg-green-50 text-green-600"><DollarSign size={20} /></div>
            <div className="text-[10px] font-bold px-2 py-0.5 bg-green-50 text-green-600 rounded-full">+15%</div>
          </div>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Faturamento</p>
          <h3 className="text-xl font-black mt-1">R$ 18.900</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600"><Receipt size={20} /></div>
            <div className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">+5%</div>
          </div>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Notas Emitidas</p>
          <h3 className="text-xl font-black mt-1">84</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600"><Users size={20} /></div>
            <div className="text-[10px] font-bold px-2 py-0.5 bg-purple-50 text-purple-600 rounded-full">+12%</div>
          </div>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Clientes</p>
          <h3 className="text-xl font-black mt-1">24</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600"><Clock size={20} /></div>
            <div className="text-[10px] font-bold px-2 py-0.5 bg-red-50 text-red-600 rounded-full">-2%</div>
          </div>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Tempo Médio</p>
          <h3 className="text-xl font-black mt-1">45 min</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-6">Receita Semanal</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRec" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#DC2626" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 10}} dy={10} />
                <YAxis hide />
                <Tooltip 
                   contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                   itemStyle={{fontSize: '12px', fontWeight: 'bold'}}
                />
                <Area type="monotone" dataKey="receita" stroke="#DC2626" strokeWidth={3} fillOpacity={1} fill="url(#colorRec)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-6">Últimos Serviços</h3>
          <div className="space-y-4">
            {[
              { id: 1, name: 'Carlos Santos', car: 'Toyota Hilux', time: '14:30', val: '150,00' },
              { id: 2, name: 'Mariana Lima', car: 'Jeep Compass', time: '15:15', val: '320,00' },
              { id: 3, name: 'Roberto Alves', car: 'VW Golf', time: '16:00', val: '80,00' },
              { id: 4, name: 'Ana Silva', car: 'Civic G10', time: '16:45', val: '120,00' },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center font-black text-[10px] uppercase">{item.name[0]}</div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">{item.name}</p>
                    <p className="text-[10px] text-gray-500">{item.car}</p>
                  </div>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-black text-red-600">R$ {item.val}</p>
                    <p className="text-[9px] text-gray-400 font-medium">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2.5 text-[10px] font-bold text-gray-500 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors uppercase tracking-widest">Ver Histórico Completo</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
