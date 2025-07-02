import React from 'react';
import { X, ExternalLink, Github, Calendar, Code } from 'lucide-react';

interface Project {
  title: string;
  period: string;
  description: string[];
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-white bg-gray-800 rounded-full transition-colors duration-200"
        >
          <X size={20} />
        </button>

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
              <div className="flex items-center text-primary-500 mb-4">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm sm:text-base">{project.period}</span>
              </div>
            </div>
          </div>

          {project.image && (
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center">
              <Code size={20} className="mr-2 text-primary-500" />
              Project Details
            </h3>
            <div className="space-y-3">
              {project.description.map((desc, index) => (
                <p key={index} className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  • {desc}
                </p>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-full text-xs sm:text-sm text-primary-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 sm:px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 hover:border-primary-500 transition-all duration-300"
              >
                <Github size={18} className="mr-2" />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;