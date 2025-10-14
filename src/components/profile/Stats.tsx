// Stats.tsx - Fixed for new data structure
interface StatsProps {
  stats: Record<string, { value: string | number; label: string }>
  isVisible: boolean
}

export const Stats = ({ stats, isVisible }: StatsProps) => (
  <div
    className={`mt-8 grid grid-cols-3 gap-4 transform transition-all duration-700 delay-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}
  >
    {Object.entries(stats).map(([key, stat]) => (
      <div key={`stat-${key}`} className="text-center group">
        <div className="bg-slate-700/30 rounded-2xl p-4 border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
          <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {stat.value}
          </p>
          <p className="text-sm font-medium uppercase tracking-wider text-slate-400 mt-2 group-hover:text-cyan-300 transition-colors">
            {stat.label}
          </p>
        </div>
      </div>
    ))}
  </div>
)