// SocialLinks.tsx - Better approach
import type { ComponentType } from 'react'

interface SocialLink {
  Icon: ComponentType<any>
  name: string
  url: string
}

interface SocialLinksProps {
  links: SocialLink[]
  isVisible: boolean
}

export const SocialLinks = ({ links, isVisible }: SocialLinksProps) => {
  return (
    <div
      className={`flex justify-center space-x-5 transform transition-all duration-500 delay-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      {links.map(({ Icon, name, url }) => (
        <a 
          key={`social-${name}`} 
          href={url} 
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-slate-800/50 border border-amber-700/30 rounded-xl flex items-center justify-center text-amber-400 hover:bg-amber-500/20 hover:text-amber-300 hover:border-amber-500/50 transition-all duration-300"
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}