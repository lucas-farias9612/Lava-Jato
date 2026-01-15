
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Receipt, Users, Clock, ArrowUpRight, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  const chartData = [
    { name: 'Seg', v: 1200 }, { name: 'Ter', v: 2100 },
    { name: 'Qua', v: 1800 }, { name: 'Qui', v: 2400 },
    { name: 'Sex', v: 3100 }, { name: 'Sáb', v: 4500 },
    { name: 'Dom', v: 3800 },
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Boas-vindas, Admin</h1>
          <p className="text-slate-500 text-sm font-medium">Aqui está o desempenho do seu Lava Jato hoje.</p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 bg-white border border-slate-200 rounded-xl flex items-center gap-2 text-xs font-bold text-slate-600 shadow-sm cursor-default">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> 10 serviços em andamento
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Faturamento', val: 'R$ 18.900', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50', up: '15%' },
          { label: 'Notas Rio Verde', val: '84', icon: Receipt, color: 'text-blue-600', bg: 'bg-blue-50', up: '5%' },
          { label: 'Novos Clientes', val: '24', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50', up: '12%' },
          { label: 'Ticket Médio', val: 'R$ 145', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50', up: '2%' },
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon size={22} strokeWidth={2.5} />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-extrabold px-2 py-1 bg-green-100 text-green-700 rounded-full">
                <ArrowUpRight size={12} /> {item.up}
              </div>
            </div>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">{item.label}</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">{item.val}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-8 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-800 tracking-tight">Fluxo de Receita Semanal</h3>
            <select className="bg-slate-50 border-none text-[11px] font-bold text-slate-500 rounded-lg px-3 py-1.5 focus:ring-0">
              <option>Últimos 7 dias</option>
              <option>Últimos 30 dias</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 500}} dy={10} />
                <YAxis hide />
                <Tooltip 
                   contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '12px'}}
                   itemStyle={{fontSize: '12px', fontWeight: 800, color: '#0f172a'}}
                   labelStyle={{fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px'}}
                />
                <Area type="monotone" dataKey="v" stroke="#ef4444" strokeWidth={4} fillOpacity={1} fill="url(#colorV)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl shadow-sm flex flex-col">
          <h3 className="font-bold text-slate-800 tracking-tight mb-6">Serviços Recentes</h3>
          <div className="space-y-4 flex-1">
            {[
              { id: 1, name: 'Carlos Santos', car: 'Toyota Hilux', val: '150,00' },
              { id: 2, name: 'Mariana Lima', car: 'Jeep Compass', val: '320,00' },
              { id: 3, name: 'Roberto Alves', car: 'VW Golf', val: '80,00' },
              { id: 4, name: 'Ana Silva', car: 'Honda Civic', val: '120,00' },
              { id: 5, name: 'Paulo Souza', car: 'Ford Ranger', val: '180,00' },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-xs">{item.name[0]}</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">{item.name}</p>
                    <p className="text-[10px] text-slate-400 font-semibold">{item.car}</p>
                  </div>
                </div>
                <div className="text-right">
                    <p className="text-sm font-black text-red-600">R$ {item.val}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 text-[11px] font-extrabold text-slate-500 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors uppercase tracking-widest">Relatório Completo</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
