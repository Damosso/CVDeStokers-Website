import React from 'react';
import { FeatureCardProps } from '../types';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  actionLabel, 
  actionHref,
  isExternal = false
}) => {
  return (
    <div className="relative group bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-yellow-900/10 dark:hover:shadow-yellow-900/20 transition-all duration-300 flex flex-col h-full border border-slate-200 dark:border-slate-700">
      {/* Red-Yellow-Green Top Border */}
      <div className="carnaval-border-top w-full absolute top-0 left-0" />

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors">
            {/* The icon changes color based on the title purely for variety, or defaults to yellow */}
            <Icon className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 flex-1">
          {description}
        </p>

        {actionLabel && actionHref && (
          <div className="mt-auto">
             {isExternal ? (
               <a 
                href={actionHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex items-center px-6 py-3 rounded-xl font-bold text-white transition-all transform group-hover:translate-x-1
                  ${title.includes('Instagram') 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                    : 'bg-green-600 hover:bg-green-700'}
                `}
              >
                {actionLabel}
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
             ) : (
               <Link 
                to={actionHref}
                className={`
                  inline-flex items-center px-6 py-3 rounded-xl font-bold text-white transition-all transform group-hover:translate-x-1
                  bg-green-600 hover:bg-green-700
                `}
              >
                {actionLabel}
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
             )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionCard;