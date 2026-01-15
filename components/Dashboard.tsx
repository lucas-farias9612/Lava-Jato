
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { DollarSign, Receipt, Users, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { name: 'Seg', receita: 1200, despesa: 800 },
  { name: 'Ter', receita: 2100, despesa: 900 },
  { name: 'Qua', receita: 1800, despesa: 1200 },
  { name: 'Qui', receita: 2400, despesa: 1100 },
  { name: 'Sex', receita: 3100, despesa: 1500 },
  { name: 'Sáb', receita: 4500, despesa: 2000 },
  { name: 'Dom', receita: 3800, despesa: 1800 },
];

const StatCard = ({ title, value, trend, icon, color }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        {icon}
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
        {trend.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {trend}
      </div>
    </div>
    <p className="text-sm text-gray-500 font-medium">{title}</p>
    <h3 className="text-2xl font-bold mt-1">{value}</h3>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Painel Executivo</h1>
          <p className="text-gray-500 text-sm">Visão geral do desempenho do Lava Jato em Rio Verde.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 shadow-sm transition-all">Exportar Dados</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 shadow-lg shadow-red-100 transition-all">Novo Serviço</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Receita Semanal" value="R$ 18.900,00" trend="+15.4%" icon={<DollarSign className="text-green-600" />} color="bg-green-50" />
        <StatCard title="Notas Emitidas" value="84" trend="+5.2%" icon={<Receipt className="text-blue-600" />} color="bg-blue-50" />
        <StatCard title="Novos Clientes" value="24" trend="+12.1%" icon={<Users className="text-purple-600" />} color="bg-purple-50" />
        <StatCard title="Tempo Médio" value="45 min" trend="-2.4%" icon={<Clock className="text-orange-600" />} color="bg-orange-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-lg mb-6">Fluxo Financeiro (7 dias)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRec" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#DC2626" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
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
              { id: 1, name: 'Carlos Santos', car: 'Toyota Hilux - PRT1234', time: '14:30', status: 'confirmado' },
              { id: 2, name: 'Mariana Lima', car: 'Jeep Compass - ABC5678', time: '15:15', status: 'em_espera' },
              { id: 3, name: 'Roberto Alves', car: 'VW Golf - XYZ9012', time: '16:00', status: 'confirmado' },
              { id: 4, name: 'Ana Souza', car: 'Honda Civic - GHI3456', time: '17:00', status: 'confirmado' },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{item.name}</p>
                    <p className="text-[11px] text-gray-500">{item.car}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">{item.time}</p>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${item.status === 'confirmado' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {item.status.replace('_', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 text-sm font-bold text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">Ver Agenda Completa</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
