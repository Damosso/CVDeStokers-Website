import React from 'react';
import { Calendar } from 'lucide-react';
import { agendaItems } from '../data/agendaItems';

const WaWeDoenSection: React.FC = () => {
  // Take the first 3 items from the shared agenda
  const upcomingEvents = agendaItems.slice(0, 3);

  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8 drop-shadow-md">Wa We Doen</h2>
      
      {/* Top Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* Carnaval Card (Red) */}
        <div className="relative bg-red-600 rounded-2xl shadow-xl overflow-hidden flex flex-col">
          <div className="carnaval-border-top absolute top-0 left-0 w-full h-2"></div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Carnaval</h3>
            <p className="text-white mb-6 leading-relaxed">
              Als C.V. De Stokers organiseren we verschillende carnavalsactiviteiten door het jaar heen. Van de traditionele carnavalsviering tot speciale evenementen, we zorgen voor een onvergetelijke tijd!
            </p>
            <ul className="space-y-3 text-white font-medium">
              {['Deelname aan de grote optocht', 'Kroegentochten', 'Dansmarieke Festijn', 'Struitbal', 'Snertconcert'].map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Evenementen Card (Green) */}
        <div className="relative bg-green-700 rounded-2xl shadow-xl overflow-hidden flex flex-col">
          <div className="carnaval-border-top absolute top-0 left-0 w-full h-2"></div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Evenementen</h3>
            <p className="text-white mb-6 leading-relaxed">
              Naast carnaval organiseren we ook andere feestelijke evenementen. Van zomerfeesten tot speciale thema-avonden, er is altijd wel iets te beleven bij De Stokers!
            </p>
            <ul className="space-y-3 text-white font-medium">
              {['Zomer BBQ', 'Themafeesten', 'Uitstapjes', 'Leden bijeenkomsten', 'Feestelijke activiteiten'].map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Komende Evenementen Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-green-800 border border-green-700">
         <div className="carnaval-border-top absolute top-0 left-0 w-full h-2 z-10"></div>
         
         {/* Yellow Header Strip */}
         <div className="bg-yellow-400 pt-8 pb-4 px-8 mt-2">
            <h3 className="text-3xl font-bold text-red-600 drop-shadow-sm uppercase tracking-wide">
              Komende Evenementen
            </h3>
         </div>

         {/* Events Grid */}
         <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((evt) => (
              <div key={evt.id} className="bg-white rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="text-red-600 font-bold tracking-wider text-sm uppercase">{evt.month}</div>
                    <div className="text-4xl font-bold text-slate-800 mb-2">{evt.day}</div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{evt.title}</h4>
                  </div>
                  <div className="text-slate-500 text-sm font-medium mt-4 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                    <span className="truncate">{evt.time} - {evt.location}</span>
                  </div>
                </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default WaWeDoenSection;