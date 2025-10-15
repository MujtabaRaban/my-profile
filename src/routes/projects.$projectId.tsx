import { LoadingAnimation } from '@/components/LoadingAnimation'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ExternalLink, Github, Star, X } from 'lucide-react'
import { useEffect, useState } from 'react'


export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectDemoPage,
  pendingComponent: () => <LoadingAnimation message="Loading project..." />,
})

// Project data type
interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  longDescription?: string
  features?: string[]
  demoImages?: string[]
}

// Mock project data
const projectsData: Record<string, Project> = {
  'uni-souq': {
    id: 'uni-souq',
    name: 'Uni-Souq',
    description: 'A cross-platform marketplace app built using Flutter, featuring real-time updates and Firebase integration.',
    longDescription: 'Uni-Souq is a comprehensive marketplace platform designed specifically for university students. The app enables students to buy, sell, and trade items within their campus community with real-time notifications and secure Firebase authentication. Built with Flutter for cross-platform compatibility, it provides a seamless experience across both iOS and Android devices.',
    tech: ['Flutter', 'Firebase', 'Figma', 'Jira', 'GitHub'],
    liveUrl: 'https://drive.google.com/file/d/1SlgTjTIrHGNbrcZ_artIqCJhI2MPJJav/view?usp=drive_link',
    githubUrl: 'https://github.com/MTAlkhnani/Uni-Souq',
    featured: true,
    features: [
      'Real-time chat between buyers and sellers',
      'Firebase authentication and data storage',
      'Image upload and management',
      'Location-based item filtering',
      'Push notifications for new messages and listings'
    ],
    demoImages: [
      '/images/uni-souq-1.jpg',
      '/images/uni-souq-2.jpg',
      '/images/uni-souq-3.jpg',
      '/images/uni-souq-4.jpg',
      '/images/uni-souq-5.jpg'
    ]
  },
  'tournament-mobile-application': {
    id: 'tournament-mobile-application',
    name: 'Tournament Mobile Application',
    description: 'A mobile platform for tracking and participating in tournaments with live updates and user-friendly interface.',
    longDescription: 'A comprehensive tournament management app that allows users to create, join, and track various competitions. Features include live score updates, bracket visualization, and participant management. The app provides an intuitive interface for both organizers and participants.',
    tech: ['Flutter', 'Firebase'],
    
    githubUrl: 'https://github.com/MujtabaRaban/flutter_application',
    featured: false,
    features: [
      'Tournament creation and management',
      'Real-time score updates',
      'Interactive bracket visualization',
      'Player and team management',
      'Schedule and notification system'
    ],
    demoImages: [
      '/images/tournament-1.jpg',
      '/images/tournament-2.jpg',
      '/images/tournament-3.jpg',
      '/images/tournament-4.jpg'
    ]
  },
  'profile-website': {
    id: 'profile-website',
    name: 'Profile Website',
    description: 'A website that shows the completed profile for me.',
    longDescription: 'A modern, responsive portfolio website built with React and TypeScript. Features a sleek design with interactive elements, project showcase, and smooth animations. The website is optimized for performance and provides an engaging user experience across all devices.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'GitHub'],
    githubUrl: 'https://github.com/MujtabaRaban/my-profile',
    featured: true,
    features: [
      'Responsive design for all devices',
      'Interactive UI with smooth animations',
      'Project showcase with demo links',
      'Contact form integration',
      'Performance optimized'
    ],
    demoImages: [
      '/images/profile-website-1.jpg',
      '/images/profile-website-2.jpg',
      '/images/profile-website-3.jpg',
      '/images/profile-website-4.jpg'
    ]
  }
}

function ProjectDemoPage() {
  const { projectId } = Route.useParams()
  const [project, setProject] = useState<Project | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsVisible(false)
    setIsLoading(true)
    
    // Simulate loading delay
    const loadingTimer = setTimeout(() => {
      const foundProject = projectsData[projectId]
      setProject(foundProject || null)
      setIsLoading(false)
      
      const visibilityTimer = setTimeout(() => setIsVisible(true), 100)
      return () => clearTimeout(visibilityTimer)
    }, 800) // Simulate 800ms loading time

    return () => clearTimeout(loadingTimer)
  }, [projectId])

  // Show loading animation while data is being fetched
  if (isLoading) {
    return <LoadingAnimation message="Loading project details..." />
  }

  const openImageModal = (index: number) => {
    setSelectedImage(index)
    setIsModalOpen(true)
  }

  const closeImageModal = () => {
    setIsModalOpen(false)
  }

  const navigateImage = (direction: 'next' | 'prev') => {
    if (!project?.demoImages) return
    
    if (direction === 'next') {
      setSelectedImage((prev) => 
        prev === project.demoImages!.length - 1 ? 0 : prev + 1
      )
    } else {
      setSelectedImage((prev) => 
        prev === 0 ? project.demoImages!.length - 1 : prev - 1
      )
    }
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-slate-900 to-amber-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/profile" className="text-amber-400 hover:text-amber-300 underline">
            Return to Profile
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-slate-900 to-amber-800">
      {/* Image Modal */}
      {isModalOpen && project.demoImages && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-full mx-4">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              type="button"
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Navigation Buttons */}
            {project.demoImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  type="button"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10 bg-black/50 rounded-full p-2"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10 bg-black/50 rounded-full p-2 rotate-180"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
              </>
            )}
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 rounded-full px-3 py-1 text-sm">
              {selectedImage + 1} / {project.demoImages.length}
            </div>
            
            {/* Main Image */}
            <img
              src={project.demoImages[selectedImage]}
              alt={`${project.name} demo ${selectedImage + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/profile"
            className={`inline-flex items-center text-amber-400 hover:text-amber-300 transition-all duration-500 mb-8 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Profile
          </Link>

          {/* Project Header */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {project.name}
                </h1>
                <p className="text-xl text-amber-100 max-w-3xl">
                  {project.description}
                </p>
              </div>
              {project.featured && (
                <div className="flex items-center bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full border border-amber-400/30">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  Featured
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-slate-800/50 text-white rounded-xl font-semibold border border-amber-700/30 hover:bg-slate-700/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Main Image Preview */}
            <div className="bg-slate-800/30 rounded-2xl border border-amber-700/30 p-4 mb-6 backdrop-blur-xl">
              {project.demoImages && project.demoImages.length > 0 ? (
                <div className="aspect-video bg-slate-700/50 rounded-xl flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openImageModal(0)}
                  onClick={() => openImageModal(0)}
                >
                  <img
                    src={project.demoImages[0]}
                    alt={`${project.name} main demo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-slate-700/50 rounded-xl flex items-center justify-center">
                  <div className="text-center text-amber-200">
                    <ExternalLink className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No demo images available</p>
                  </div>
                </div>
              )}
            </div>

            {/* Image Grid */}
            {project.demoImages && project.demoImages.length > 1 && (
              <div className="bg-slate-800/30 rounded-2xl border border-amber-700/30 p-6 backdrop-blur-xl mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">More Screenshots</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.demoImages.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-slate-700/50 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 group"
                      onClick={() => openImageModal(index + 1)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openImageModal(index + 1)}
                    >
                      <img
                        src={image}
                        alt={`${project.name} demo ${index + 2}`}
                        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="bg-slate-800/30 rounded-2xl border border-amber-700/30 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-amber-500/20 text-amber-400 rounded-lg border border-amber-400/30 text-sm font-medium"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Long Description */}
            <div className="bg-slate-800/30 rounded-2xl border border-amber-700/30 p-6 backdrop-blur-xl mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">About This Project</h3>
              <p className="text-amber-100 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="bg-slate-800/30 rounded-2xl border border-amber-700/30 p-6 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-amber-100">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}