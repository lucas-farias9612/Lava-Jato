
import React, { useMemo } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { DollarSign, Receipt, Users, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const data = useMemo(() => [
    { name: 'Seg', receita: 1200, despesa: 800 },
    { name: 'Ter', receita: 2100, despesa: 900 },
    { name: 'Qua', receita: 1800, despesa: 1200 },
    { name: 'Qui', receita: 2400, despesa: 1100 },
    { name: 'Sex', receita: 3100, despesa: 1500 },
    { name: 'Sáb', receita: 4500, despesa: 2000 },
    { name: 'Dom', receita: 3800, despesa: 1800 },
  ], []);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Painel Executivo</h1>
          <p className="text-gray-500 text-sm font-medium">Desempenho operacional em tempo real.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 shadow-sm transition-all">Exportar</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 shadow-lg shadow-red-100 transition-all">Novo Serviço</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-green-50 text-green-600"><DollarSign size={20} /></div>
            <div className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 bg-green-50 text-green-600 rounded-full"><ArrowUpRight size={12}/> +15%</div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Faturamento</p>
          <h3 className="text-2xl font-bold">R$ 18.900</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-600"><Receipt size={20} /></div>
            <div className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-full"><ArrowUpRight size={12}/> +5%</div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Notas Emitidas</p>
          <h3 className="text-2xl font-bold">84</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-purple-50 text-purple-600"><Users size={20} /></div>
            <div className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 bg-purple-50 text-purple-600 rounded-full"><ArrowUpRight size={12}/> +12%</div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Clientes</p>
          <h3 className="text-2xl font-bold">24</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-orange-50 text-orange-600"><Clock size={20} /></div>
            <div className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 bg-red-50 text-red-600 rounded-full"><ArrowDownRight size={12}/> -2%</div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Tempo Médio</p>
          <h3 className="text-2xl font-bold">45 min</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm min-h-[400px]">
          <h3 className="font-bold text-lg mb-6">Fluxo Financeiro (7 dias)</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRec" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#DC2626" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <Tooltip />
                <Area type="monotone" dataKey="receita" stroke="#DC2626" strokeWidth={3} fillOpacity={1} fill="url(#colorRec)" />
                <Area type="monotone" dataKey="despesa" stroke="#9ca3af" strokeWidth={2} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-lg mb-6">Próximos Agendamentos</h3>
          <div className="space-y-4">
            {[
              { id: 1, name: 'Carlos Santos', car: 'Toyota Hilux', time: '14:30' },
              { id: 2, name: 'Mariana Lima', car: 'Jeep Compass', time: '15:15' },
              { id: 3, name: 'Roberto Alves', car: 'VW Golf', time: '16:00' },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center font-bold text-xs uppercase">{item.name[0]}</div>
                  <div>
                    <p className="text-xs font-bold">{item.name}</p>
                    <p className="text-[10px] text-gray-500">{item.car}</p>
                  </div>
                </div>
                <div className="text-xs font-bold text-gray-900">{item.time}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 text-xs font-bold text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">Ver Todos</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
