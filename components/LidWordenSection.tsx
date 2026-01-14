import React from 'react';

const LidWordenSection: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-yellow-500 dark:text-yellow-400 mb-8 drop-shadow-md">Kom D'r Bij!</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Info Card (Red) */}
        <div className="relative bg-red-600 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full">
          <div className="carnaval-border-top absolute top-0 left-0 w-full h-2"></div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold text-yellow-300 mb-6">Word Lid van De Stokers</h3>
            
            <p className="text-white mb-6 leading-relaxed text-lg">
              Lid worden van C.V. De Stokers is keisimpel! Vul het formulier in en wordt deel van de leukste carnavalsvereniging van Sint-Oedenrode!
            </p>
            
            <ul className="space-y-4 text-white font-medium mb-8">
              {[
                'Toegang tot alle evenementen', 
                'Deelname aan speciale activiteiten', 
                'Een eigen Stokers-embleem', 
                'Gezelligheid en plezier!'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <p className="text-yellow-300 font-bold text-xl italic animate-pulse">
                Iedereen is welkom bij de Stokers! 👋
              </p>
            </div>
          </div>
        </div>

        {/* Right: Form Card (Yellow) */}
        <div className="relative bg-yellow-400 rounded-2xl shadow-xl overflow-hidden flex flex-col text-slate-900">
          <div className="carnaval-border-top absolute top-0 left-0 w-full h-2"></div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-red-600 mb-6 drop-shadow-sm">Aanmeldformulier</h3>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-1">Naam</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:border-red-500 focus:ring-red-500 outline-none transition-colors bg-white text-slate-900"
                  placeholder="Je volledige naam" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-1">E-mail</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:border-red-500 focus:ring-red-500 outline-none transition-colors bg-white text-slate-900"
                  placeholder="jouw@email.nl" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 mb-1">Telefoon</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:border-red-500 focus:ring-red-500 outline-none transition-colors bg-white text-slate-900"
                  placeholder="06 12345678" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 mb-1">Adres</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:border-red-500 focus:ring-red-500 outline-none transition-colors bg-white text-slate-900"
                  placeholder="Straat en huisnummer" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 mb-1">Bericht (optioneel)</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:border-red-500 focus:ring-red-500 outline-none transition-colors resize-none bg-white text-slate-900"
                  placeholder="Heb je nog vragen?" 
                />
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfFOcHmNoZzS2kttv96Y1QKOsAUPleAZ4tgsyufee8Wmw6HrQ/viewform"
                className="w-full inline-flex justify-center items-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all text-lg"
              >
                Aanmelden
              </a>
            </form>
          </div>
        </div>

      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-600 dark:text-slate-300 text-lg transition-colors">
          Vragen over lidmaatschap? Neem contact met ons op via <a href="mailto:info@stokers.nl" className="text-yellow-600 dark:text-yellow-400 hover:underline">info@stokers.nl</a>
        </p>
      </div>

    </section>
  );
};

export default LidWordenSection;