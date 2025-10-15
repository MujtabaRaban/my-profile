import { AnimatePresence, motion } from 'framer-motion'
import AboutTab from './AboutTab'
import ExperienceTab from './ExperienceTab'
import ProjectsTab from './ProjectsTab'
import SkillsTab from './SkillsTab'

interface TabContentProps {
  activeTab: string;
  user: any;
}

export const TabContent = ({ activeTab, user }: TabContentProps) => {
  return (
    <div className="mt-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'about' && <AboutTab user={user} />}
          {activeTab === 'experience' && <ExperienceTab user={user} />}
          {activeTab === 'projects' && <ProjectsTab user={user} />}
          {activeTab === 'skills' && <SkillsTab user={user} />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}