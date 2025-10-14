// CoverSection.tsx - Updated with amber color
interface CoverSectionProps {
  coverUrl: string
  avatarUrl: string
  name: string
  title: string
  isVisible: boolean
}

export const CoverSection = ({ coverUrl, avatarUrl, name, title, isVisible }: CoverSectionProps) => (
  <div className="relative h-72 sm:h-80 lg:h-96">
    {/* Simple, clean background */}
    <div className="absolute inset-0">
      <img
        src={coverUrl}
        alt="Cover background"
        className="h-full w-full object-cover"
      />
      {/* Enhanced gradient overlay for better transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
    </div>

    {/* Natural content layout */}
    <div className="relative h-full flex flex-col justify-end pb-8">
      <div className="px-6">
        <div
          className={`flex items-center space-x-6 transition-all duration-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-4 opacity-0'
          }`}
        >
          {/* Avatar - larger size and styling */}
          <div className="flex-shrink-0">
            <img
              src={avatarUrl} 
              alt="Profile avatar"
              className="h-24 w-24 rounded-full border-3 border-white/90 shadow-lg sm:h-32 sm:w-32 lg:h-40 lg:w-40 transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Text content - clean and readable */}
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-2 sm:text-4xl lg:text-5xl">{name}</h1>
            <p className="text-white/90 text-lg sm:text-xl font-medium">{title}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Gradient with amber color */}
    <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-b from-amber-800/10 via-slate-900/10 to-transparent backdrop-blur-md" />
  </div>
)