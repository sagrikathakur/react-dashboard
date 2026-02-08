import {
  Plane,
  Users,
  DollarSign,
  TrendingUp,
  MapPin,
  Calendar,
  Star,
  Sparkles,
  Zap
} from 'lucide-react'
import StatsCard from '../../components/ui/StatsCard'
import { LineChartComponent, PieChartComponent, BarChartComponent } from '../../components/ui/Charts'
import DataTable from '../../components/ui/DataTable'

// Sample data
const statsData = [
  {
    title: 'Total Trips',
    value: '2,847',
    change: 12.5,
    changeType: 'positive',
    icon: Plane,
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
  },
  {
    title: 'Active Users',
    value: '18,234',
    change: 8.2,
    changeType: 'positive',
    icon: Users,
    gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)'
  },
  {
    title: 'Revenue',
    value: '$482,560',
    change: 15.3,
    changeType: 'positive',
    icon: DollarSign,
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
  },
  {
    title: 'Growth Rate',
    value: '24.8%',
    change: 3.1,
    changeType: 'negative',
    icon: TrendingUp,
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
  }
]

const monthlyData = [
  { name: 'Jan', trips: 240, revenue: 24000 },
  { name: 'Feb', trips: 300, revenue: 32000 },
  { name: 'Mar', trips: 280, revenue: 28000 },
  { name: 'Apr', trips: 390, revenue: 42000 },
  { name: 'May', trips: 480, revenue: 52000 },
  { name: 'Jun', trips: 420, revenue: 48000 },
  { name: 'Jul', trips: 550, revenue: 62000 },
  { name: 'Aug', trips: 620, revenue: 71000 },
  { name: 'Sep', trips: 480, revenue: 55000 },
  { name: 'Oct', trips: 520, revenue: 59000 },
  { name: 'Nov', trips: 450, revenue: 51000 },
  { name: 'Dec', trips: 680, revenue: 78000 },
]

const destinationData = [
  { name: 'Europe', value: 35 },
  { name: 'Asia', value: 28 },
  { name: 'Americas', value: 20 },
  { name: 'Africa', value: 10 },
  { name: 'Oceania', value: 7 },
]

const recentTrips = [
  { id: 1, destination: 'Paris, France', traveler: 'John Smith', date: '2026-02-15', price: '$2,450', status: 'Confirmed' },
  { id: 2, destination: 'Tokyo, Japan', traveler: 'Emily Johnson', date: '2026-02-18', price: '$3,200', status: 'Pending' },
  { id: 3, destination: 'Bali, Indonesia', traveler: 'Michael Chen', date: '2026-02-20', price: '$1,800', status: 'Confirmed' },
  { id: 4, destination: 'New York, USA', traveler: 'Sarah Williams', date: '2026-02-22', price: '$1,500', status: 'Confirmed' },
  { id: 5, destination: 'Sydney, Australia', traveler: 'David Brown', date: '2026-02-25', price: '$2,900', status: 'Cancelled' },
  { id: 6, destination: 'London, UK', traveler: 'Lisa Anderson', date: '2026-02-28', price: '$2,100', status: 'Pending' },
  { id: 7, destination: 'Dubai, UAE', traveler: 'James Wilson', date: '2026-03-01', price: '$2,800', status: 'Confirmed' },
  { id: 8, destination: 'Rome, Italy', traveler: 'Emma Davis', date: '2026-03-05', price: '$1,950', status: 'Confirmed' },
]

const tableColumns = [
  {
    key: 'destination',
    label: 'Destination',
    sortable: true,
    render: (row) => (
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <MapPin className="w-4 h-4 text-white/60" />
        </div>
        <span className="text-white font-medium">{row.destination}</span>
      </div>
    )
  },
  { key: 'traveler', label: 'Traveler', sortable: true, render: (row) => <span className="text-slate-300">{row.traveler}</span> },
  {
    key: 'date',
    label: 'Date',
    sortable: true,
    render: (row) => (
      <div className="flex items-center gap-2 text-slate-300">
        <Calendar className="w-4 h-4 text-slate-500" />
        {row.date}
      </div>
    )
  },
  { key: 'price', label: 'Price', sortable: true, render: (row) => <span className="text-emerald-400 font-semibold">{row.price}</span> },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (row) => {
      const statusColors = {
        Confirmed: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 shadow-emerald-500/20',
        Pending: 'bg-amber-500/20 text-amber-400 border-amber-500/30 shadow-amber-500/20',
        Cancelled: 'bg-red-500/20 text-red-400 border-red-500/30 shadow-red-500/20'
      }
      return (
        <span className={`px-3 py-1.5 rounded-full text-xs font-medium border shadow-lg ${statusColors[row.status]}`}>
          {row.status}
        </span>
      )
    }
  }
]

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="animate-fadeIn">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <span className="px-2.5 py-1 rounded-full text-xs text-slate-500 font-medium flex items-center gap-1.5" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
              Live
            </span>
          </div>
          <p className="text-slate-400">Welcome back! Here's your travel agency overview.</p>
        </div>

        <div className="flex items-center gap-3 animate-fadeIn" style={{ animationDelay: '100ms' }}>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-400 hover:text-white transition-all" style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <Calendar className="w-4 h-4" />
            Last 30 days
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-medium hover:opacity-80 transition-all" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Zap className="w-4 h-4" />
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <div key={index} style={{ animationDelay: `${index * 100}ms` }} className="animate-fadeIn">
            <StatsCard {...stat} />
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="animate-fadeIn" style={{ animationDelay: '400ms' }}>
          <LineChartComponent
            data={monthlyData}
            dataKey="trips"
            title="Monthly Trips Overview"
            stroke="#8b5cf6"
          />
        </div>
        <div className="animate-fadeIn" style={{ animationDelay: '500ms' }}>
          <PieChartComponent
            data={destinationData}
            title="Popular Destinations"
          />
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="animate-fadeIn" style={{ animationDelay: '600ms' }}>
        <BarChartComponent
          data={monthlyData}
          dataKey="revenue"
          title="Monthly Revenue ($)"
          fill="#8b5cf6"
        />
      </div>

      {/* Recent Trips Table */}
      <div className="animate-fadeIn" style={{ animationDelay: '700ms' }}>
        <DataTable
          columns={tableColumns}
          data={recentTrips}
          title="Recent Bookings"
          itemsPerPage={5}
        />
      </div>
    </div>
  )
}

export default Dashboard
