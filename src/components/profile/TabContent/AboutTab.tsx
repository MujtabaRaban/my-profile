// AboutTab.tsx - Updated for new data structure
import { Code, Coffee, Film } from 'lucide-react'

interface AboutTabProps {
  user: any
}

const AboutTab = ({ user }: AboutTabProps) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="md:col-span-2 space-y-6 text-slate-300 leading-relaxed">
      <h3 className="text-2xl font-bold text-white">About Me</h3>
      {user.about?.description?.map((paragraph: string) => (
        <p key={paragraph.substring(0, 20)}>
          {paragraph}
        </p>
      ))}
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white">Interests</h3>
      {user.about?.interests?.map((interest: any) => {
        const Icon = interest.icon
        return (
          <div key={`interest-${interest.name}`} className="flex items-center gap-3 text-slate-300">
            <Icon className="w-5 h-5 text-cyan-400" />
            {interest.name}
          </div>
        )
      })}
    </div>
  </div>
)

export default AboutTab