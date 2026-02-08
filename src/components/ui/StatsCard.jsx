import { TrendingUp, TrendingDown, Sparkles } from 'lucide-react'

const StatsCard = ({ title, value, change, changeType, icon: Icon, gradient }) => {
  const isPositive = changeType === 'positive'

  return (
    <div className="group relative">
      {/* Subtle glow effect behind card */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-2xl"
        style={{ background: gradient }}
      />

      <div className="glass rounded-2xl p-6 card-hover relative overflow-hidden">
        {/* Very subtle gradient background */}
        <div
          className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background: gradient }}
        />

        {/* Subtle shimmer effect on hover */}
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            {/* Subtle muted icon background */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <Icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
            </div>
            <div className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full ${isPositive
              ? 'bg-emerald-500/10 text-emerald-400/80 border border-emerald-500/20'
              : 'bg-red-500/10 text-red-400/80 border border-red-500/20'
              }`}>
              {isPositive ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span>{change}%</span>
            </div>
          </div>

          {/* Value */}
          <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
            {value}
          </h3>
          <p className="text-slate-500 text-sm flex items-center gap-2">
            {title}
            <Sparkles className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatsCard
