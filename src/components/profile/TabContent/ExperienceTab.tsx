// ExperienceTab.tsx - Updated for KFUPM colors
interface ExperienceTabProps {
  user: any
}

const ExperienceTab = ({ user }: ExperienceTabProps) => (
  <div className="relative border-l-2 border-amber-700/50 ml-3 pl-6">
    {user.experience.map((exp: any, index: number) => (
      <div
        key={`exp-${exp.company}-${index}`}
        className="mb-10 ml-4"
      >
        <div className="absolute w-3 h-3 bg-amber-400 rounded-full mt-1.5 -left-1.5 border-2 border-slate-900" />
        <time className="mb-1 text-sm font-normal leading-none text-amber-300/80">{exp.period}</time>
        <h3 className="text-xl font-semibold text-white mt-1">{exp.role}</h3>
        <p className="text-lg font-medium text-amber-400 mb-2">{exp.company}</p>
        <p className="text-amber-200/90 mb-4 text-base font-normal">{exp.description}</p>

        <div className="space-y-2 mb-4">
          {exp.achievements.map((achievement: string, achIndex: number) => (
            <div key={`ach-${exp.company}-${achIndex}`} className="flex items-start gap-2 text-amber-100">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
              <span>{achievement}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {exp.tech.map((tech: string) => (
            <span
              key={`tech-${exp.company}-${tech}`}
              className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-lg text-sm border border-amber-400/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
)

export default ExperienceTab