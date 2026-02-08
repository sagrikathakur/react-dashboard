import {
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Plane,
  Users,
  Globe
} from 'lucide-react'
import {
  LineChartComponent,
  BarChartComponent,
  PieChartComponent,
  MultiLineChart
} from '../../components/ui/Charts'

const revenueData = [
  { name: 'Jan', revenue: 24000, expenses: 18000 },
  { name: 'Feb', revenue: 32000, expenses: 22000 },
  { name: 'Mar', revenue: 28000, expenses: 19000 },
  { name: 'Apr', revenue: 42000, expenses: 28000 },
  { name: 'May', revenue: 52000, expenses: 35000 },
  { name: 'Jun', revenue: 48000, expenses: 32000 },
  { name: 'Jul', revenue: 62000, expenses: 41000 },
  { name: 'Aug', revenue: 71000, expenses: 48000 },
  { name: 'Sep', revenue: 55000, expenses: 38000 },
  { name: 'Oct', revenue: 59000, expenses: 40000 },
  { name: 'Nov', revenue: 51000, expenses: 36000 },
  { name: 'Dec', revenue: 78000, expenses: 52000 },
]

const tripTypeData = [
  { name: 'Beach', value: 28 },
  { name: 'Adventure', value: 22 },
  { name: 'Cultural', value: 20 },
  { name: 'Luxury', value: 18 },
  { name: 'Budget', value: 12 },
]

const monthlyBookings = [
  { name: 'Jan', bookings: 145 },
  { name: 'Feb', bookings: 189 },
  { name: 'Mar', bookings: 176 },
  { name: 'Apr', bookings: 234 },
  { name: 'May', bookings: 298 },
  { name: 'Jun', bookings: 267 },
  { name: 'Jul', bookings: 345 },
  { name: 'Aug', bookings: 412 },
  { name: 'Sep', bookings: 298 },
  { name: 'Oct', bookings: 334 },
  { name: 'Nov', bookings: 287 },
  { name: 'Dec', bookings: 456 },
]

const kpiCards = [
  {
    title: 'Total Revenue',
    value: '$602,000',
    change: '+18.2%',
    isPositive: true,
    icon: DollarSign,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Total Bookings',
    value: '3,441',
    change: '+12.8%',
    isPositive: true,
    icon: Plane,
    color: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Avg. Booking Value',
    value: '$175',
    change: '+5.4%',
    isPositive: true,
    icon: TrendingUp,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Conversion Rate',
    value: '4.2%',
    change: '-0.3%',
    isPositive: false,
    icon: Users,
    color: 'from-orange-500 to-red-500'
  }
]

const topDestinations = [
  { rank: 1, destination: 'Paris, France', bookings: 487, revenue: '$145,200' },
  { rank: 2, destination: 'Tokyo, Japan', bookings: 423, revenue: '$134,500' },
  { rank: 3, destination: 'Bali, Indonesia', bookings: 398, revenue: '$89,200' },
  { rank: 4, destination: 'New York, USA', bookings: 356, revenue: '$78,400' },
  { rank: 5, destination: 'Santorini, Greece', bookings: 312, revenue: '$98,700' },
]

const Reports = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Reports</h1>
          <p className="text-slate-400 mt-1">Deep insights into your travel business performance</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-300">
            <Calendar className="w-4 h-4" />
            <span>Jan 2025 - Dec 2025</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium hover:opacity-90 transition-all">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi, index) => (
          <div key={index} className="glass rounded-2xl p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${kpi.color} flex items-center justify-center`}>
                <kpi.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`flex items-center gap-1 text-sm ${kpi.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                {kpi.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {kpi.change}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white">{kpi.value}</h3>
            <p className="text-slate-400 text-sm mt-1">{kpi.title}</p>
          </div>
        ))}
      </div>

      {/* Revenue vs Expenses Chart */}
      <MultiLineChart
        data={revenueData}
        lines={[
          { dataKey: 'revenue', stroke: '#8b5cf6', name: 'Revenue' },
          { dataKey: 'expenses', stroke: '#ef4444', name: 'Expenses' }
        ]}
        title="Revenue vs Expenses (2025)"
      />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChartComponent
          data={monthlyBookings}
          dataKey="bookings"
          title="Monthly Bookings"
          fill="#8b5cf6"
        />
        <PieChartComponent
          data={tripTypeData}
          title="Bookings by Trip Type"
        />
      </div>

      {/* Top Destinations */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Top Performing Destinations</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="px-4 py-3 text-left text-sm font-medium text-slate-400">Rank</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-slate-400">Destination</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-slate-400">Bookings</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-slate-400">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {topDestinations.map((dest) => (
                <tr key={dest.rank} className="border-b border-slate-700/50 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${dest.rank === 1 ? 'bg-amber-500/20 text-amber-400' :
                      dest.rank === 2 ? 'bg-slate-400/20 text-slate-300' :
                        dest.rank === 3 ? 'bg-orange-500/20 text-orange-400' :
                          'bg-slate-700/50 text-slate-400'
                      }`}>
                      {dest.rank}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-violet-400" />
                      </div>
                      <span className="text-white font-medium">{dest.destination}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-300">{dest.bookings.toLocaleString()}</td>
                  <td className="px-4 py-4 text-emerald-400 font-semibold">{dest.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Reports
