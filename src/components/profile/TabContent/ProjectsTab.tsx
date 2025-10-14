// ProjectsTab.tsx - Fixed
import { ExternalLink, Github, Star } from 'lucide-react'

interface ProjectsTabProps {
  user: any
}

const ProjectsTab = ({ user }: ProjectsTabProps) => (
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {user.projects.map((project: any) => (
      <div
        key={`project-${project.name}`}
        className="bg-slate-800/50 rounded-lg p-6 flex flex-col group hover:bg-slate-800/80 transition-colors"
      >
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string) => (
              <span
                key={`tech-${project.name}-${tech}`}
                className="px-2.5 py-0.5 bg-cyan-400/10 text-cyan-300 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1 text-gray-400 group-hover:text-cyan-300 transition-colors">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm">{project.stars}</span>
          </div>

          <div className="flex gap-2">
            <button type="button" className="p-2 bg-slate-700 rounded-lg hover:bg-cyan-600 transition-colors">
              <Github className="w-4 h-4" />
            </button>
            <button type="button" className="p-2 bg-slate-700 rounded-lg hover:bg-green-600 transition-colors">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default ProjectsTab