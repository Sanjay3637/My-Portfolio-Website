import React, { useState } from 'react';
import sanjayImg from './assets/sanjay-blazzers-img.jpg';
import resume from './assets/SANJAY - 714022104130 - (Common).pdf';


import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  Code,
  Database,
  Globe,
  Award,
  ExternalLink,
  Send,
  Coffee,
} from 'lucide-react';

import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import TypeWriter from './components/TypeWriter';
import ScrollIndicator from './components/ScrollIndicator';
import SkillCard from './components/SkillCard';
import ProjectModal from './components/ProjectModal';


interface Project {
  title: string;
  period: string;
  description: string[];
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const typewriterTexts = [
    "Java Developer",
    "Software Engineer", 
    "Web Developer",
    "Problem Solver"
  ];

  const skills = [
    { icon: Coffee, name: 'Java', level: 80 },
    { icon: Database, name: 'MySQL', level: 70 },
    { icon: Database, name: 'MongoDB', level: 20 },
    { icon: Globe, name: 'React', level: 50 },
    { icon: Code, name: 'JavaScript', level: 50 },
    { icon: Globe, name: 'HTML/CSS', level: 90 },
    { icon: Code, name: 'Git', level: 60 },
  ];

  const projects: Project[] = [
    {
      title: 'ATM Banking System',
      period: 'Jan 2025',
      description: [
        'Developed a comprehensive console-based ATM system in Java with MySQL database integration using JDBC and XAMPP',
        'Implemented secure authentication, real-time transaction processing, fund transfers, and account management',
        'Built with robust error handling, transaction logging, and security measures for financial operations',
        'Designed scalable architecture following OOP principles and design patterns'
      ],
      technologies: ['Java', 'MySQL', 'JDBC', 'XAMPP', 'OOP', 'Design Patterns'],
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Hand Gesture Game Controller',
      period: 'Aug 2023 - Dec 2023',
      description: [
        'Built an intelligent gesture recognition system using OpenCV and Python for touch-free gaming',
        'Implemented computer vision algorithms with real-time hand tracking and gesture mapping',
        'Integrated with popular games like Subway Surfers and Hill Climb Racing for seamless control',
        'Achieved 95% accuracy in gesture detection with optimized performance for real-time processing'
      ],
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning', 'NumPy', 'TensorFlow'],
      image: 'https://images.pexels.com/photos/7862492/pexels-photo-7862492.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Full-Stack Car Marketplace Platform',
      period: 'Mar 2023 - Jul 2023',
      description: [
        'Developed a comprehensive car-selling platform with modern web technologies',
        'Built responsive frontend with HTML5, CSS3, JavaScript and dynamic backend with PHP',
        'Implemented user authentication, search filters, and secure payment integration',
        'Optimized database queries and implemented caching for improved performance'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'AJAX'],
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  const achievements = [
    'Published research paper "Health Tracker" in IJSREM',
    'Solved 250+ problems on LeetCode with focus on Java and algorithms',
    'Event Organizer at college tech fest "KALAM" - managed full event lifecycle',
    'CTRL+C Coordinator - led technical events and mentored junior developers',
    'Proficient in full-stack development with 3+ years of hands-on experience',
    'Strong expertise in Java ecosystem including Spring Framework and microservices'
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const downloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = resume; // You would need to add your resume PDF to the public folder
    link.download = 'Sanjay_R_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <ScrollIndicator />
      <ParticleBackground />
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="text-center z-10 max-w-6xl mx-auto w-full">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 leading-tight">
              Hi, I'm <span className="neon-text">SANJAY R</span>
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 h-12 sm:h-16 flex items-center justify-center">
              <TypeWriter texts={typewriterTexts} />
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up px-4">
            Passionate Java Developer & Web developer with expertise in building scalable web applications. 
            Skilled in Java ecosystem, modern web technologies, and database design. 
            Experienced in delivering high-performance solutions and leading technical initiatives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up px-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300 neon-glow"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-500 text-primary-500 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 sm:mb-16 neon-text">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-slide-in-left order-2 lg:order-1">
              <div className="floating-card gradient-border">
                <div className="gradient-border-inner p-8 sm:p-10 lg:p-12">
                  {/* Enhanced Profile Image */}
                  <div className="relative mx-auto mb-8 group">
                    <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-purple-600 p-2 neon-glow shadow-2xl">
                      <div className="w-full h-full rounded-full bg-gray-900 p-2">
                        <img 
                          src={sanjayImg} 
                          alt="Sanjay R - Java Developer & Full-Stack Engineer" 
                          className="w-full h-full object-cover rounded-full border-4 border-gray-800 hover:border-primary-500 transition-all duration-500 transform group-hover:scale-105 shadow-xl"
                        />
                      </div>
                    </div>
                    {/* Professional Badge */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg neon-glow">
                      ✨ Open to work
                    </div>
                  </div>
                  
                  {/* Professional Summary */}
                  <div className="text-center space-y-6">
                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
                    </div>
                    
                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
                      <div className="bg-gradient-to-br from-secondary-500/10 to-purple-500/10 rounded-lg p-4 border border-secondary-500/20">
                        <div className="text-3xl font-bold text-secondary-500 mb-1">240+</div>
                        <div className="text-gray-300 text-sm">LeetCode Problems</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Technical Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                {[
                  'Java',
                  'Web Developer',
                  'Software Developer',
                  'Problem Solving',
                  'Code Optimization',
                  'Team Leadership'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-primary-500/50 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 font-medium text-sm sm:text-base">{skill}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Languages</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <span className="font-semibold text-white text-sm sm:text-base">English</span>
                  <span className="text-primary-500 font-medium text-sm sm:text-base"></span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <span className="font-semibold text-white text-sm sm:text-base">Tamil</span>
                  <span className="text-primary-500 font-medium text-sm sm:text-base">Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 sm:mb-16 neon-text">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                name={skill.name}
                level={skill.level}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 sm:mb-16 neon-text">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card rounded-xl p-4 sm:p-6 cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => handleProjectClick(project)}
              >
                {project.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-500 transition-colors duration-300 flex-1">
                    {project.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-primary-500 bg-primary-500/20 px-2 sm:px-3 py-1 rounded-full self-start">
                    {project.period}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4 line-clamp-3 text-sm sm:text-base">
                  {project.description[0]}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs sm:text-sm">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center text-primary-500 group-hover:text-secondary-500 transition-colors duration-300">
                  <span className="text-sm font-medium">View Details</span>
                  <ExternalLink size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-8 neon-text">
            Resume
          </h2>
          
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 text-left">
                <h4 className="text-lg sm:text-xl font-bold text-white">B.E - Computer Science and Engineering</h4>
                <p className="text-primary-500 font-medium text-sm sm:text-base">Sri Shakthi Institute of Engineering and Technology, Anna University</p>
                <p className="text-gray-400 text-sm sm:text-base">2022 - 2026 | CGPA: 7.6*</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 text-left">
                <h4 className="text-lg sm:text-xl font-bold text-white">Higher Secondary Certificate (HSC)</h4>
                <p className="text-primary-500 font-medium text-sm sm:text-base">Sri Vivekananda Matriculation Hr. Sec. School - State Board</p>
                <p className="text-gray-400 text-sm sm:text-base">2021 - 2022 | 72.6%</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 text-left">
                <h4 className="text-lg sm:text-xl font-bold text-white">Secondary School Leaving Certificate (SSLC)</h4>
                <p className="text-primary-500 font-medium text-sm sm:text-base">Sri Vivekananda Matriculation Hr. Sec. School - State Board</p>
                <p className="text-gray-400 text-sm sm:text-base">2019 – 2020 | 81.4%</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Achievements & Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-800/50 rounded-xl border border-gray-700 text-left">
                  <div className="p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg text-white flex-shrink-0">
                    <Award size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={downloadResume}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300 neon-glow animate-pulse-glow"
          >
            <Download size={20} className="inline mr-2" />
            Download Resume
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 sm:mb-16 neon-text">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
                I'm always interested in new opportunities, challenging projects, and collaborations. 
                Whether you're looking for a Java developer, full-stack engineer, or technical consultant, 
                let's discuss how we can work together!
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <a 
                  href="tel:9751903637" 
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 group"
                >
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Phone size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-400 text-sm sm:text-base">+91 9751903637</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:sanjay7183637@gmail.com" 
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 group"
                >
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Mail size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Email</h4>
                    <p className="text-gray-400 text-sm sm:text-base break-all">sanjay7183637@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg text-white flex-shrink-0">
                    <MapPin size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Location</h4>
                    <p className="text-gray-400 text-sm sm:text-base">3/270/E30, Kumar Nagar,Vettaikaran Kuttai,Karumathampatti, Coimbatore – 641659Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
                <a 
                  href="https://www.linkedin.com/in/sanjay-r-736b17276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Sanjay3637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-4 sm:px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 font-semibold hover:border-primary-500 hover:shadow-lg hover:shadow-gray-800/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300 neon-glow"
                >
                  <Send size={20} className="inline mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-gray-800/50 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; 2025 Sanjay R. All rights reserved. Built with ❤️ and React
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;