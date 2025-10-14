// InfoItems.tsx - Fixed
interface InfoItem {
  icon: any
  text: string
}

interface InfoItemsProps {
  items: InfoItem[]
  isVisible: boolean
}

export const InfoItems = ({ items, isVisible }: InfoItemsProps) => (
  <div className={`mt-6 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6 transform transition-all duration-500 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
    {items.map((item) => (
      <div key={`info-${item.text}`} className="flex items-center text-sm font-medium text-slate-400">
        <item.icon className="flex-shrink-0 mr-1.5 h-5 w-5 text-slate-500" aria-hidden="true" />
        {item.text}
      </div>
    ))}
  </div>
)