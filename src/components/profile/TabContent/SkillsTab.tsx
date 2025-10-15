// SkillsTab.tsx - Updated for KFUPM colors
interface SkillsTabProps {
  user: any
}

const SkillsTab = ({ user }: SkillsTabProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {user.skills.map((skill: any) => {
      const Icon = skill.icon
      return (
        <div
          key={`skill-${skill.name}`}
          className="bg-slate-800/30 rounded-2xl border border-amber-700/30 p-6 backdrop-blur-xl group hover:border-amber-500/50 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-semibold text-lg">{skill.name}</span>
            </div>
            <span className="text-amber-400 font-bold text-lg">{skill.level}%</span>
          </div>

          <div className="w-full bg-slate-700/50 rounded-full h-3">
            <div
              className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      )
    })}
  </div>
)

export default SkillsTab