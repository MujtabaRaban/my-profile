// ProfileHeader.tsx - Clean alternative
import { Sparkles } from 'lucide-react'

interface ProfileHeaderProps {
  bio: string;
  isVisible: boolean
}

export const ProfileHeader = ({ bio, isVisible }: ProfileHeaderProps) => (
  <div className="text-center relative py-8">
    {/* Bio */}
    <div
      className={`max-w-2xl mx-auto transform transition-all duration-700 delay-400 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        {bio}
      </p>
    </div>
  </div>
)