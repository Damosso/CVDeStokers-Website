import React from 'react';
import SectionCard from '../components/SectionCard';
import { Instagram, MapPin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <h2 className="text-4xl font-bold text-yellow-500 dark:text-yellow-400 mb-8 drop-shadow-md">Contact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SectionCard
          title="Social Media"
          description="Volg ons op Instagram @Cv.destokers vur de leste nieuwtjes en foto's van onze avonturen. We posten regelmatig updates over onze activiteiten en evenementen."
          icon={Instagram}
          actionLabel="Volg ons op Instagram"
          actionHref="https://instagram.com"
          isExternal={true}
          accentColor="green"
        />

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 relative flex flex-col p-8 h-full transition-colors duration-300">
            <div className="carnaval-border-top absolute top-0 left-0 w-full h-2"></div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contactgegevens</h3>
            <div className="flex-1 flex flex-col justify-center">
              <ul className="space-y-8 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center space-x-6">
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-xl transition-colors">
                          <MapPin className="w-8 h-8 text-red-500" />
                      </div>
                      <div>
                          <strong className="block text-slate-900 dark:text-white text-lg">Stamkroeg</strong>
                          <span className="text-lg">'Ons Thuys'</span><br/>
                          <span>Sint-Oedenrode</span>
                      </div>
                  </li>
                  <li className="flex items-center space-x-6">
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-xl transition-colors">
                          <Mail className="w-8 h-8 text-green-500" />
                      </div>
                      <div>
                          <strong className="block text-slate-900 dark:text-white text-lg">E-mail</strong>
                          <a href="mailto:info@cvdestokers.nl" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors text-lg">info@cvdestokers.nl</a>
                      </div>
                  </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;