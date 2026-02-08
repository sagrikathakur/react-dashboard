import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/Layout/DashboardLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Trips from './pages/Trips/Trips'
import Users from './pages/Users/Users'
import Reports from './pages/Reports/Reports'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="trips" element={<Trips />} />
        <Route path="users" element={<Users />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  )
}

export default App
