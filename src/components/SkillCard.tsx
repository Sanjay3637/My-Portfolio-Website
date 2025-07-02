import React, { useState, useEffect, useRef } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: number;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, name, level, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            // Animate the progress bar
            const timer = setInterval(() => {
              setAnimatedLevel(prev => {
                if (prev >= level) {
                  clearInterval(timer);
                  return level;
                }
                return prev + 2;
              });
            }, 20);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div
      ref={cardRef}
      className={`group relative p-4 sm:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-primary-500/50 transition-all duration-500 ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 group-hover:scale-110 transition-transform duration-300">
            <Icon size={20} className="sm:w-6 sm:h-6 text-white" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-white">{name}</h3>
        </div>
        <span className="text-lg sm:text-2xl font-bold text-primary-500">{animatedLevel}%</span>
      </div>
      
      <div className="relative">
        <div className="w-full h-2 sm:h-3 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full skill-progress rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${animatedLevel}%` }}
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      </div>
    </div>
  );
};

export default SkillCard;