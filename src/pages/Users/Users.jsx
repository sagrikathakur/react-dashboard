import {
  Plus,
  Filter,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  UserCheck,
  UserX,
  Users as UsersIcon
} from 'lucide-react'
import DataTable from '../../components/ui/DataTable'
import { LineChartComponent } from '../../components/ui/Charts'

const usersData = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 234 567 890',
    location: 'New York, USA',
    joinDate: '2025-08-15',
    trips: 12,
    spent: '$28,450',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Emily Johnson',
    email: 'emily.j@email.com',
    phone: '+1 345 678 901',
    location: 'Los Angeles, USA',
    joinDate: '2025-09-22',
    trips: 8,
    spent: '$19,200',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'mchen@email.com',
    phone: '+86 123 456 789',
    location: 'Shanghai, China',
    joinDate: '2025-10-05',
    trips: 15,
    spent: '$42,800',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Sarah Williams',
    email: 'sarah.w@email.com',
    phone: '+44 789 012 345',
    location: 'London, UK',
    joinDate: '2025-11-12',
    trips: 5,
    spent: '$11,500',
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'dbrown@email.com',
    phone: '+61 456 789 012',
    location: 'Sydney, Australia',
    joinDate: '2025-12-01',
    trips: 3,
    spent: '$8,700',
    status: 'Active'
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    email: 'l.anderson@email.com',
    phone: '+1 567 890 123',
    location: 'Toronto, Canada',
    joinDate: '2026-01-08',
    trips: 7,
    spent: '$16,300',
    status: 'Pending'
  },
  {
    id: 7,
    name: 'James Wilson',
    email: 'jwilson@email.com',
    phone: '+971 123 456 789',
    location: 'Dubai, UAE',
    joinDate: '2026-01-15',
    trips: 20,
    spent: '$68,900',
    status: 'Active'
  },
  {
    id: 8,
    name: 'Emma Davis',
    email: 'emma.d@email.com',
    phone: '+49 234 567 890',
    location: 'Berlin, Germany',
    joinDate: '2026-01-28',
    trips: 4,
    spent: '$9,800',
    status: 'Active'
  },
]

const userGrowthData = [
  { name: 'Jan', users: 1240 },
  { name: 'Feb', users: 1580 },
  { name: 'Mar', users: 2100 },
  { name: 'Apr', users: 2890 },
  { name: 'May', users: 3480 },
  { name: 'Jun', users: 4200 },
  { name: 'Jul', users: 5150 },
  { name: 'Aug', users: 6320 },
  { name: 'Sep', users: 7480 },
  { name: 'Oct', users: 9200 },
  { name: 'Nov', users: 12400 },
  { name: 'Dec', users: 15800 },
]

const columns = [
  {
    key: 'name',
    label: 'User',
    sortable: true,
    render: (row) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-semibold">
          {row.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <span className="text-white font-medium block">{row.name}</span>
          <span className="text-slate-400 text-sm">{row.email}</span>
        </div>
      </div>
    )
  },
  {
    key: 'location',
    label: 'Location',
    sortable: true,
    render: (row) => (
      <div className="flex items-center gap-2 text-slate-300">
        <MapPin className="w-4 h-4 text-slate-500" />
        {row.location}
      </div>
    )
  },
  {
    key: 'joinDate',
    label: 'Joined',
    sortable: true,
    render: (row) => (
      <div className="flex items-center gap-2 text-slate-300">
        <Calendar className="w-4 h-4 text-slate-500" />
        {row.joinDate}
      </div>
    )
  },
  {
    key: 'trips',
    label: 'Trips',
    sortable: true,
    render: (row) => <span className="text-slate-300">{row.trips}</span>
  },
  {
    key: 'spent',
    label: 'Total Spent',
    sortable: true,
    render: (row) => <span className="text-emerald-400 font-semibold">{row.spent}</span>
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (row) => {
      const statusColors = {
        Active: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
        Pending: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
        Inactive: 'bg-slate-500/20 text-slate-400 border-slate-500/30'
      }
      return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[row.status]}`}>
          {row.status}
        </span>
      )
    }
  },
  {
    key: 'actions',
    label: 'Actions',
    render: (row) => (
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all">
          <Eye className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all">
          <Mail className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-all">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    )
  }
]

const Users = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Users</h1>
          <p className="text-slate-400 mt-1">Manage your customer base and track user activity</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-all">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-all">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium hover:opacity-90 transition-all">
            <Plus className="w-4 h-4" />
            Add User
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
            <UsersIcon className="w-6 h-6 text-violet-400" />
          </div>
          <div>
            <p className="text-slate-400 text-sm">Total Users</p>
            <p className="text-2xl font-bold text-white">18,234</p>
          </div>
        </div>
        <div className="glass rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
            <UserCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <p className="text-slate-400 text-sm">Active</p>
            <p className="text-2xl font-bold text-emerald-400">16,842</p>
          </div>
        </div>
        <div className="glass rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <p className="text-slate-400 text-sm">New This Month</p>
            <p className="text-2xl font-bold text-amber-400">1,247</p>
          </div>
        </div>
        <div className="glass rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
            <UserX className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <p className="text-slate-400 text-sm">Inactive</p>
            <p className="text-2xl font-bold text-red-400">1,392</p>
          </div>
        </div>
      </div>

      {/* User Growth Chart */}
      <LineChartComponent
        data={userGrowthData}
        dataKey="users"
        title="User Growth (2025)"
        stroke="#8b5cf6"
      />

      {/* Users Table */}
      <DataTable
        columns={columns}
        data={usersData}
        title="All Users"
        itemsPerPage={6}
      />
    </div>
  )
}

export default Users
