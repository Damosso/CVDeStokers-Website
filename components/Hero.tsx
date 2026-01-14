import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-12 md:pt-48 md:pb-24 flex flex-col items-center justify-center text-center px-4">
      
      {/* Logo Container with floating animation */}
      <div className="relative mb-8 floating z-10">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white dark:bg-slate-800 border-[6px] border-yellow-400 shadow-[0_0_50px_rgba(250,204,21,0.3)] flex items-center justify-center overflow-hidden transition-colors duration-300">
           {/* Logo Image */}
           <img 
            src="/public/logo.png" 
            alt="C.V. De Stokers Logo" 
            className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-700"
           />
        </div>
        
        {/* Decorative elements behind logo */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-600 rounded-full animate-bounce delay-700 opacity-80 shadow-lg"></div>
        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-green-600 rounded-full animate-bounce delay-100 opacity-80 shadow-lg"></div>
      </div>

      {/* Text Content */}
      <div className="max-w-5xl mx-auto z-10">
        <h1 className="font-fredoka text-6xl md:text-8xl font-bold mb-6 text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-lg transition-colors duration-300 flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 gap-y-2">
          <div className="inline-flex items-center">
             <span className="relative z-10">C.</span>
             <span className="relative -ml-3 md:-ml-5 z-0">V.</span>
          </div>
          <span className="text-yellow-500 dark:text-yellow-400">De Stokers</span>
        </h1>
        <p className="text-xl md:text-3xl text-slate-700 dark:text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
          Vur alle carnavalsgekken en gezelligheidsdieren in <span className="text-yellow-600 dark:text-yellow-400 font-bold whitespace-nowrap">Sint-Oedenrode</span>!
        </p>
      </div>

      {/* Decorative gradient blur behind hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-yellow-400/20 dark:bg-yellow-600/10 rounded-full blur-[100px] -z-0 pointer-events-none transition-colors duration-300"></div>
    </div>
  );
};

export default Hero;