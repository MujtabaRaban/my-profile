// ProjectsTab.tsx - Updated with navigation and KFUPM colors

import { Link } from '@tanstack/react-router'
import { ExternalLink, Github, Star } from 'lucide-react'

interface ProjectsTabProps {
  user: any
}

const ProjectsTab = ({ user }: ProjectsTabProps) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {user.projects.map((project: any) => {
      const projectId = project.id || project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      
      return (
        <div
          key={`project-${project.name}`}
          className="group relative"
        >
          <Link
            to="/projects/$projectId"
            params={{ projectId }}
            className="block"
          >
            <div className="bg-slate-800/30 rounded-2xl border border-amber-700/30 p-6 backdrop-blur-xl hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full flex flex-col">
              <div className="flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <Star className="w-5 h-5 text-amber-400 fill-current flex-shrink-0" />
                  )}
                </div>
                <p className="text-amber-100 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech: string) => (
                    <span
                      key={`tech-${project.name}-${tech}`}
                      className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-lg text-xs border border-amber-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-slate-700/50 text-amber-200 rounded-lg text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <ExternalLink className="w-4 h-4 text-amber-400" />
                  )}
                  {project.githubUrl && (
                    <Github className="w-4 h-4 text-amber-400" />
                  )}
                </div>
                <div className="text-amber-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  View Demo →
                </div>
              </div>
            </div>
          </Link>
        </div>
      )
    })}
  </div>
)

export default ProjectsTab