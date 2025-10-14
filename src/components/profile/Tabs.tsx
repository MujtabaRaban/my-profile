interface TabsProps {
    activeTab: string
    setActiveTab: (tab: string) => void
    isVisible: boolean
  }
  
  export const Tabs = ({ activeTab, setActiveTab, isVisible }: TabsProps) => (
    <div className={`flex border-b border-slate-700 mb-12 relative transform transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {['about', 'experience', 'projects', 'skills'].map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActiveTab(tab)}
          className={`px-8 py-4 font-medium capitalize transition-all duration-300 relative ${
            activeTab === tab ? 'text-cyan-400' : 'text-gray-400 hover:text-white hover:scale-105'
          }`}
        >
          {tab}
          {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 animate-slide-in" />}
        </button>
      ))}
    </div>
  )
  