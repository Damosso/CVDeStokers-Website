import React from 'react';
import { Clock, MapPin, AlertCircle } from 'lucide-react';
import { agendaItems } from '../data/agendaItems';

const Agenda: React.FC = () => {
  return (
    <div className="py-12 pb-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 dark:text-yellow-400 mb-4 drop-shadow-md">
          De Agenda
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Hier zie je woar je moet zijn! Zet ze in je agenda, want dit wil je niet missen.
        </p>
      </div>

      <div className="space-y-6">
        {agendaItems.map((event) => (
          <div 
            key={event.id}
            className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-yellow-500/10 dark:hover:shadow-yellow-400/10 transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700"
          >
            {/* Colorful side accent based on index to rotate carnaval colors */}
            <div className={`absolute left-0 top-0 bottom-0 w-2 
              ${event.type === 'carnaval' ? 'bg-gradient-to-b from-red-500 via-yellow-400 to-green-500' : 
                event.id % 3 === 0 ? 'bg-green-500' : 
                event.id % 3 === 1 ? 'bg-red-500' : 'bg-yellow-400'
              }`} 
            />

            <div className="flex flex-col md:flex-row">
              
              {/* Date Box */}
              <div className="p-6 md:p-8 flex items-center justify-center md:border-r border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 min-w-[140px]">
                <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="block text-red-600 font-black text-xl tracking-widest uppercase mb-1">
                    {event.month}
                  </span>
                  <span className="block text-5xl font-bold text-slate-800 dark:text-white leading-none">
                    {event.day}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    {event.title}
                  </h3>
                  
                  {/* Tags */}
                  {event.type === 'carnaval' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 border border-yellow-200 dark:border-yellow-700">
                      🎉 Carnaval
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600 dark:text-slate-300 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-green-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-red-600" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-4 mt-2">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Empty state / Info */}
        <div className="mt-12 bg-yellow-50 dark:bg-slate-800/50 border border-yellow-200 dark:border-slate-700 rounded-xl p-6 flex items-start space-x-4">
          <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Staat er iets niet tussen?</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Houdt onze socials in de gaten voor last-minute wijzigingen of extra feestjes. 
              De tijden zijn onder voorbehoud van gezelligheid! 🍻
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;