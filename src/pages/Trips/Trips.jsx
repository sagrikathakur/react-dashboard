import { useState } from 'react'
import {
  Plus,
  Filter,
  Download,
  MapPin,
  Calendar,
  Users,
  Star,
  MoreVertical,
  Edit,
  Trash2,
  Eye
} from 'lucide-react'
import DataTable from '../../components/ui/DataTable'

const tripsData = [
  {
    id: 1,
    destination: 'Paris, France',
    description: 'Romantic getaway with Eiffel Tower views',
    duration: '7 days',
    price: '$2,450',
    travelers: 2,
    rating: 4.8,
    status: 'Active',
    bookings: 145
  },
  {
    id: 2,
    destination: 'Tokyo, Japan',
    description: 'Experience the blend of tradition and modernity',
    duration: '10 days',
    price: '$3,200',
    travelers: 4,
    rating: 4.9,
    status: 'Active',
    bookings: 203
  },
  {
    id: 3,
    destination: 'Bali, Indonesia',
    description: 'Tropical paradise with stunning beaches',
    duration: '5 days',
    price: '$1,800',
    travelers: 2,
    rating: 4.7,
    status: 'Active',
    bookings: 312
  },
  {
    id: 4,
    destination: 'Santorini, Greece',
    description: 'White-washed buildings and blue domes',
    duration: '6 days',
    price: '$2,600',
    travelers: 2,
    rating: 4.9,
    status: 'Draft',
    bookings: 0
  },
  {
    id: 5,
    destination: 'New York, USA',
    description: 'The city that never sleeps',
    duration: '4 days',
    price: '$1,500',
    travelers: 1,
    rating: 4.6,
    status: 'Active',
    bookings: 287
  },
  {
    id: 6,
    destination: 'Machu Picchu, Peru',
    description: 'Ancient Incan citadel in the clouds',
    duration: '8 days',
    price: '$2,900',
    travelers: 6,
    rating: 4.8,
    status: 'Active',
    bookings: 98
  },
  {
    id: 7,
    destination: 'Sydney, Australia',
    description: 'Iconic Opera House and beautiful harbors',
    duration: '12 days',
    price: '$4,200',
    travelers: 2,
    rating: 4.7,
    status: 'Inactive',
    bookings: 156
  },
  {
    id: 8,
    destination: 'Safari, Kenya',
    description: 'Wildlife adventure in the savanna',
    duration: '9 days',
    price: '$5,500',
    travelers: 4,
    rating: 4.9,
    status: 'Active',
    bookings: 67
  },
]

const columns = [
  {
    key: 'destination',
    label: 'Trip',
    sortable: true,
    render: (row) => (
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
          <MapPin className="w-6 h-6 text-violet-400" />
        </div>
        <div>
          <span className="text-white font-medium block">{row.destination}</span>
          <span className="text-slate-400 text-sm">{row.description.substring(0, 30)}...</span>
        </div>
      </div>
    )
  },
  {
    key: 'duration',
    label: 'Duration',
    sortable: true,
    render: (row) => (
      <div className="flex items-center gap-2 text-slate-300">
        <Calendar className="w-4 h-4 text-slate-500" />
        {row.duration}
      </div>
    )
  },
  {
    key: 'travelers',
    label: 'Travelers',
    sortable: true,
    render: (row) => (
      <div className="flex items-center gap-2 text-slate-300">
        <Users className="w-4 h-4 text-slate-500" />
        Up to {row.travelers}
      </div>
    )
  },
  {
    key: 'price',
    label: 'Price',
    sortable: true,
    render: (row) => <span className="text-emerald-400 font-semibold">{row.price}</span>
  },
  {
    key: 'rating',
    label: 'Rating',
    sortable: true,
    render: (row) => (
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
        <span className="text-white">{row.rating}</span>
      </div>
    )
  },
  {
    key: 'bookings',
    label: 'Bookings',
    sortable: true,
    render: (row) => <span className="text-slate-300">{row.bookings}</span>
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (row) => {
      const statusColors = {
        Active: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
        Draft: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
        Inactive: 'bg-red-500/20 text-red-400 border-red-500/30'
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
          <Edit className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-all">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    )
  }
]

const Trips = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Trips</h1>
          <p className="text-slate-400 mt-1">Manage all your travel packages and tours</p>
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
            Add Trip
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass rounded-xl p-4">
          <p className="text-slate-400 text-sm">Total Trips</p>
          <p className="text-2xl font-bold text-white mt-1">48</p>
        </div>
        <div className="glass rounded-xl p-4">
          <p className="text-slate-400 text-sm">Active</p>
          <p className="text-2xl font-bold text-emerald-400 mt-1">42</p>
        </div>
        <div className="glass rounded-xl p-4">
          <p className="text-slate-400 text-sm">Draft</p>
          <p className="text-2xl font-bold text-amber-400 mt-1">4</p>
        </div>
        <div className="glass rounded-xl p-4">
          <p className="text-slate-400 text-sm">Inactive</p>
          <p className="text-2xl font-bold text-red-400 mt-1">2</p>
        </div>
      </div>

      {/* Trips Table */}
      <DataTable
        columns={columns}
        data={tripsData}
        title="All Trips"
        itemsPerPage={6}
      />
    </div>
  )
}

export default Trips
