// profile.tsx - Updated with KFUPM-compatible colors
import { createFileRoute } from '@tanstack/react-router'
import { Calendar, Cloud, Code, Cpu, Database, Github, Linkedin, Mail, MapPin, Rocket, Smartphone, Sparkles, Target, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { CoverSection } from '../components/profile/CoverSection'
import { InfoItems } from '../components/profile/InfoItems'
import { ProfileHeader } from '../components/profile/ProfileHeader'
import { SocialLinks } from '../components/profile/SocialLinks'
import { TabContent } from '../components/profile/TabContent'
import { useMousePosition } from '../hooks/useMousePosition'
import { LoadingAnimation } from '@/components/LoadingAnimation'


const HexagonalBackground = () => {
  const hexagons = Array.from({ length: 50 }, (_, i) => ({ 
    id: `hex-${i}`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${60 + Math.random() * 100}px`,
    height: `${60 + Math.random() * 100}px`,
    rotation: `${Math.random() * 360}deg`,
    delay: `${Math.random() * 20}s`,
  }))

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Match the cover section transition color */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-slate-900 to-amber-800" />
      <div className="absolute inset-0 opacity-20">
        {hexagons.map((hex) => (
          <div
            key={hex.id}
            className="absolute border border-amber-400/10 rounded-lg"
            style={{
              left: hex.left,
              top: hex.top,
              width: hex.width,
              height: hex.height,
              transform: `rotate(${hex.rotation})`,
              animationDelay: hex.delay,
            }}
          />
        ))}
      </div>
    </div>
  )
}

const AnimatedOrbs = () => {
  const orbs = Array.from({ length: 8 }, (_, i) => ({
    id: `orb-${i}`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${15 + Math.random() * 15}s`,
  }))

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Updated orb colors to match KFUPM theme */}
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Floating orbs with warm colors */}
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-sm animate-float"
          style={{
            left: orb.left,
            top: orb.top,
            animationDelay: orb.delay,
            animationDuration: orb.duration,
          }}
        />
      ))}
    </div>
  )
}

const MouseTrail = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => (
  <>
    {/* Updated cursor glow to warm colors */}
    <div
      className="fixed pointer-events-none -z-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl transition-all duration-150 ease-out"
      style={{ left: mousePosition.x - 64, top: mousePosition.y - 64 }}
    />
    {/* Trail effect */}
    <div
      className="fixed pointer-events-none -z-10 w-16 h-16 bg-orange-400/15 rounded-full blur-lg transition-all duration-300 ease-out"
      style={{ left: mousePosition.x - 32, top: mousePosition.y - 32 }}
    />
  </>
)


export const Route = createFileRoute('/profile')({ 
  component: Profile,
  pendingComponent: () => <LoadingAnimation message="Loading profile..." />,
})

function Profile() {
  const [activeTab, setActiveTab] = useState('about')
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const mousePosition = useMousePosition()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsLoading(false)
    }, 600) // Simulate loading time
    
    return () => clearTimeout(timer)
  }, [])

  // Show loading animation while data is being prepared
  if (isLoading) {
    return <LoadingAnimation message="Loading profile..." />
  }
  const tabs = [
    { id: 'about', label: 'About', icon: Sparkles },
    { id: 'experience', label: 'Experience', icon: Rocket },
    { id: 'projects', label: 'Projects', icon: Target },
    { id: 'skills', label: 'Skills', icon: Zap },
  ]

  // Updated user data with KFUPM cover and local avatar
  const user = {
    name: 'Mujtaba Al Raban',
    title: 'Software Engineer',
    avatarUrl: '/images/profile2.jpg',
    coverUrl: 'https://cpg.kfupm.edu.sa/wp-content/uploads/2016/11/rotation5.jpg',
    bio: 'Software Engineer and KFUPM graduate passionate about crafting intuitive digital solutions. I focus on building efficient, user-centered applications using modern web and mobile technologies.',
    location: 'Saihat, Saudi Arabia',
    email: 'mujtabaalraban@gmail.com',
    joinDate: 'KFUPM Graduate — Class of 2024',
    
    skills: [
      { name: 'React & Flutter', level: 95, icon: Code, color: 'from-amber-400 to-orange-500' },
      { name: 'TypeScript / JavaScript', level: 90, icon: Code, color: 'from-orange-400 to-amber-500' },
      { name: 'Java & Python', level: 88, icon: Cpu, color: 'from-yellow-400 to-amber-500' },
      { name: 'RESTful APIs', level: 85, icon: Database, color: 'from-amber-500 to-orange-600' },
      { name: 'PostgreSQL / Firebase', level: 80, icon: Cloud, color: 'from-orange-500 to-red-500' },
      { name: 'Agile, GitHub, Figma, Jira', level: 75, icon: Rocket, color: 'from-amber-600 to-orange-700' },
    ],
    experience: [
      {
        company: 'Jaicome',
        role: 'Software Engineer Full Stack',
        period: 'Sep 2025 – Oct 2025',
        location: 'Saihat, Saudi Arabia',
        description: 'Improved the jaicome admin website and implment the auth system in their apps.',
        achievements: [
          'Enhanced UX for a more intuitive web experience',
          'Implemented Better auth for frontend-backend authentication',
          'Refactored and optimized base code to boost performance and maintainability'
        ],
        tech: ['React', 'TypeScript', 'Postgres', 'GitHub'],
      },
      {
        company: 'Minthar',
        role: 'Software Engineer Intern',
        period: 'May 2024 – Aug 2024',
        location: 'Riyadh, Saudi Arabia',
        description: 'Improved the Mozn Flutter app UX and performance while optimizing backend integration.',
        achievements: [
          'Enhanced UX for a more intuitive mobile experience',
          'Implemented RESTful APIs for frontend-backend communication',
          'Refactored and optimized base code to boost performance and maintainability'
        ],
        tech: ['Flutter', 'RESTful APIs', 'GitHub' , "Figma", "Jira" , "Slack"],
      }
    ],
    education: [
      {
        institution: 'King Fahd University of Petroleum and Minerals (KFUPM)',
        degree: 'Bachelor of Engineering in Software Engineering',
        period: 'Feb 2018 – Dec 2024',
        details: [
          'Major Courses: OOP, Web Development, Mobile Development, Advanced Database Systems'
        ]
      }
    ],
    projects: [
      {
        name: 'Uni-Souq',
        description: 'A cross-platform marketplace app built using Flutter, featuring real-time updates and Firebase integration.',
        tech: ['Flutter', 'Firebase', 'Figma', 'Jira', 'GitHub'],
        liveUrl: 'https://github.com/MTAlkhnani/Uni-Souq',
        githubUrl: 'https://github.com/MTAlkhnani/Uni-Souq',
        featured: true,
      },
      {
        name: 'Tournament Mobile Application',
        description: 'A mobile platform for tracking and participating in tournaments with live updates and user-friendly interface.',
        tech: ['Flutter', 'Firebase'],
        liveUrl: 'https://github.com/MujtabaRaban/flutter_application',
        githubUrl: 'https://github.com/MujtabaRaban/flutter_application',
        featured: false,
      },
      {
        name: 'Profile Website',
        description: 'A website that show the complated profile for me .',
        tech: ['React', 'Postgres', 'GitHub'],
        liveUrl: 'https://github.com/MujtabaRaban/my-profile.git',
        githubUrl: 'https://github.com/MujtabaRaban/my-profile',
        featured: true,
      },
    ],
    about: {
      description: [
        "I'm a passionate Software Engineer and KFUPM graduate focused on developing impactful digital products. My work spans mobile and web development, with hands-on experience in building scalable, high-performance applications.",
        "During my training at Minthar, I enhanced a production Flutter app’s UX and backend integrations, learning to balance creativity and technical precision.",
        "Outside of coding, I enjoy designing in Figma, contributing to open-source projects, and exploring the intersection of art, tech, and human experience."
      ],
      interests: [
        { name: 'Mobile App Development', icon: Smartphone },
        { name: 'Open Source', icon: Code },
        { name: 'UI/UX Design', icon: Sparkles },
      ]
    }
  }

  const infoItems = [
    { icon: MapPin, text: user.location },
    { icon: Mail, text: user.email },
    { icon: Calendar, text: user.joinDate },
  ]

  const socialLinks = [
    { Icon: Github, name: 'GitHub', url: 'https://github.com/MujtabaRaban' },
    { Icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/mujtaba-al-raban-017590264' },
   
  ]
  

  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
    {/* Background Effects */}
    <HexagonalBackground />
    <AnimatedOrbs />
    <MouseTrail mousePosition={mousePosition} />

    <CoverSection coverUrl={user.coverUrl} avatarUrl={user.avatarUrl} isVisible={isVisible} name={user.name} title={user.title} />

    {/* Main Profile Content - Remove negative margin */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Remove the pb-8 since the CoverSection now handles spacing */}
      <div>
        <ProfileHeader bio={user.bio} isVisible={isVisible} />
      </div>

        {/* Info & Social Section - Updated border colors */}
        <div className="relative">
          <div className="backdrop-blur-xl bg-slate-800/30 rounded-3xl border border-amber-700/30 p-6 mt-4 shadow-2xl">
            <div className={`transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <InfoItems items={infoItems} isVisible={isVisible} />
                <SocialLinks links={socialLinks} isVisible={isVisible} />
              </div>
              
             
            </div>
          </div>
        </div>

        {/* Enhanced Tabs - Updated colors */}
        <div className="mt-12">
          <div className="backdrop-blur-xl bg-slate-800/30 rounded-2xl border border-amber-700/30 p-2">
            <nav className="flex space-x-1" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-400/30'
                      : 'text-gray-400 hover:text-white hover:bg-slate-700/50 border-transparent'
                  } group inline-flex items-center py-3 px-6 border-2 rounded-xl font-semibold text-sm transition-all duration-300 flex-1 justify-center`}
                >
                  <tab.icon
                    className={`${
                      activeTab === tab.id ? 'text-amber-400' : 'text-gray-500 group-hover:text-gray-300'
                    } mr-3 h-5 w-5 transition-colors duration-200`}
                    aria-hidden="true"
                  />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content - Updated border colors */}
        <div className="mt-8 backdrop-blur-xl bg-slate-800/30 rounded-3xl border border-amber-700/30 p-8 shadow-2xl">
          <TabContent activeTab={activeTab} user={user} />
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float { 
          0%, 100% { transform: translateY(0px) rotate(0deg); } 
          33% { transform: translateY(-20px) rotate(120deg); } 
          66% { transform: translateY(10px) rotate(240deg); } 
        }
        @keyframes gradient-shift { 
          0%, 100% { background-position: 0% 50%; } 
          50% { background-position: 100% 50%; } 
        }
        @keyframes glow { 
          0%, 100% { opacity: 0.5; } 
          50% { opacity: 0.8; } 
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient-shift { 
          animation: gradient-shift 3s ease infinite; 
          background-size: 200% 200%;
        }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .bg-size-200 { background-size: 200% 200%; }
      `}</style>
    </div>
  )
}