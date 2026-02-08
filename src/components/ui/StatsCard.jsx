import { TrendingUp, TrendingDown, Sparkles } from 'lucide-react'

const StatsCard = ({ title, value, change, changeType, icon: Icon, gradient }) => {
  const isPositive = changeType === 'positive'

  return (
    <div className="group relative">
      {/* Glow effect behind card */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: gradient }}
      />

      <div className="glass rounded-2xl p-6 card-hover relative overflow-hidden">
        {/* Animated gradient background */}
        <div
          className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          style={{ background: gradient }}
        />

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center icon-glow transform group-hover:scale-110 transition-transform duration-300"
              style={{ background: gradient }}
            >
              <Icon className="w-7 h-7 text-white drop-shadow-lg" />
            </div>
            <div className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full ${isPositive
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
              {isPositive ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span>{change}%</span>
            </div>
          </div>

          {/* Value with gradient text effect */}
          <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">
            {value}
          </h3>
          <p className="text-slate-400 text-sm flex items-center gap-2">
            {title}
            <Sparkles className="w-3 h-3 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatsCard
