// SkillsTab.tsx - Fixed
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
          className="bg-slate-800/50 rounded-lg p-4 group"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-700/50 rounded-md group-hover:bg-cyan-400/20 transition-colors">
                <Icon className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-white font-medium">{skill.name}</span>
            </div>
            <span className="text-cyan-400 font-semibold">{skill.level}%</span>
          </div>

          <div className="w-full bg-slate-700 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      )
    })}
  </div>
)

export default SkillsTab