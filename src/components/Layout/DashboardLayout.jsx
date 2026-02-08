import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-[#030712] mesh-gradient relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '4s' }} />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Gradient lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-fuchsia-500/20 to-transparent" />
      </div>

      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content */}
      <div className={`transition-all duration-500 ease-out ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
        <Header />
        <main className="p-6 relative">
          <Outlet />
        </main>
      </div>

      {/* Floating particles */}
      <div className="particles" />
    </div>
  )
}

export default DashboardLayout
