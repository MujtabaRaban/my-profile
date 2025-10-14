// ExperienceTab.tsx - Fixed
interface ExperienceTabProps {
  user: any
}

const ExperienceTab = ({ user }: ExperienceTabProps) => (
  <div className="relative border-l-2 border-slate-700 ml-3 pl-6">
    {user.experience.map((exp: any) => (
      <div
        key={`exp-${exp.company}-${exp.role}`}
        className="mb-10 ml-4"
      >
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full mt-1.5 -left-1.5 border border-slate-900" />
        <time className="mb-1 text-sm font-normal leading-none text-slate-400">{exp.period}</time>
        <h3 className="text-xl font-semibold text-white mt-1">{exp.role}</h3>
        <p className="text-lg font-medium text-cyan-300 mb-2">{exp.company}</p>
        <p className="mb-4 text-base font-normal text-slate-400">{exp.description}</p>

        <div className="space-y-2">
          {exp.achievements.map((achievement: string) => (
            <div key={`ach-${exp.company}-${achievement.slice(0, 20)}`} className="flex items-center gap-2 text-gray-300">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              {achievement}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
)

export default ExperienceTab