import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'

// Custom tooltip component with glass effect
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-xl p-4 shadow-2xl shadow-black/50 border border-slate-700/50">
        <p className="text-sm font-medium text-white mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: entry.color }} />
            <p className="text-sm text-slate-300">
              {entry.name}: <span className="font-semibold text-white">{entry.value.toLocaleString()}</span>
            </p>
          </div>
        ))}
      </div>
    )
  }
  return null
}

// Line Chart Component
export const LineChartComponent = ({ data, dataKey, stroke = '#8b5cf6', title }) => (
  <div className="glass rounded-2xl p-6 relative overflow-hidden group">
    {/* Glow effect */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

    <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
      <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full" />
      {title}
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity={0.4} />
            <stop offset="100%" stopColor={stroke} stopOpacity={0} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
        <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={stroke}
          strokeWidth={3}
          fill="url(#colorGradient)"
          filter="url(#glow)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
)

// Bar Chart Component
export const BarChartComponent = ({ data, dataKey, fill = '#8b5cf6', title }) => (
  <div className="glass rounded-2xl p-6 relative overflow-hidden group">
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

    <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
      <div className="w-1 h-6 bg-gradient-to-b from-fuchsia-500 to-cyan-500 rounded-full" />
      {title}
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1} />
            <stop offset="100%" stopColor="#ec4899" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
        <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(139, 92, 246, 0.1)' }} />
        <Bar dataKey={dataKey} fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

// Pie Chart Component
const COLORS = [
  { start: '#8b5cf6', end: '#7c3aed' },
  { start: '#ec4899', end: '#db2777' },
  { start: '#06b6d4', end: '#0891b2' },
  { start: '#10b981', end: '#059669' },
  { start: '#f59e0b', end: '#d97706' },
]

export const PieChartComponent = ({ data, title }) => (
  <div className="glass rounded-2xl p-6 relative overflow-hidden group">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

    <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
      <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-violet-500 rounded-full" />
      {title}
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <defs>
          {COLORS.map((color, index) => (
            <linearGradient key={index} id={`pieGradient${index}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={color.start} />
              <stop offset="100%" stopColor={color.end} />
            </linearGradient>
          ))}
        </defs>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={110}
          paddingAngle={4}
          dataKey="value"
          stroke="transparent"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`url(#pieGradient${index % COLORS.length})`} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="bottom"
          iconType="circle"
          formatter={(value) => <span className="text-slate-300 text-sm">{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
)

// Multi-line Chart Component
export const MultiLineChart = ({ data, lines, title }) => (
  <div className="glass rounded-2xl p-6 relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

    <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
      <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
      {title}
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <defs>
          {lines.map((line, index) => (
            <filter key={index} id={`glow${index}`}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
        <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          formatter={(value) => <span className="text-slate-300">{value}</span>}
        />
        {lines.map((line, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={line.dataKey}
            name={line.name}
            stroke={line.stroke}
            strokeWidth={3}
            dot={{ fill: line.stroke, strokeWidth: 0, r: 4 }}
            activeDot={{ r: 8, stroke: line.stroke, strokeWidth: 2, fill: '#030712' }}
            filter={`url(#glow${index})`}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </div>
)
