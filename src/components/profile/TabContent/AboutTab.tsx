// AboutTab.tsx - Updated for KFUPM colors
interface AboutTabProps {
  user: any
}

const AboutTab = ({ user }: AboutTabProps) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="md:col-span-2 space-y-6 text-amber-100 leading-relaxed">
      <h3 className="text-2xl font-bold text-white">About Me</h3>
      {user.about?.description?.map((paragraph: string) => (
        <p key={paragraph} className="text-amber-100">
          {paragraph}
        </p>
      ))}
    </div>
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white">Interests</h3>
      <div className="space-y-4">
        {user.about?.interests?.map((interest: any) => {
          const Icon = interest.icon
          return (
            <div 
              key={`interest-${interest.name}`} 
              className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-xl border border-amber-700/30 text-amber-100 hover:border-amber-500/50 transition-colors duration-300"
            >
              <Icon className="w-5 h-5 text-amber-400" />
              <span>{interest.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default AboutTab