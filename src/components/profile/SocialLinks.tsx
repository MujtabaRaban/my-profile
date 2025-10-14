// SocialLinks.tsx - Fixed
import type { ComponentType, FC } from 'react'

interface SocialLinksProps {
  icons: ComponentType<any>[]
  isVisible: boolean
}

export const SocialLinks = ({ icons, isVisible }: SocialLinksProps) => {
  const socialLinks = [
    { Icon: icons[0], name: 'GitHub', url: 'https://github.com' },
    { Icon: icons[1], name: 'LinkedIn', url: 'https://linkedin.com' },
    { Icon: icons[2], name: 'Twitter', url: 'https://twitter.com' },
  ]

  return (
    <div
      className={`flex justify-center space-x-5 transform transition-all duration-500 delay-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      {socialLinks.map(({ Icon, name, url }) => (
        <a key={`social-${name}`} href={url} className="text-slate-400 hover:text-slate-300 transition-colors">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}