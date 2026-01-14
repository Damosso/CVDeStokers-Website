import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ConfettiBackground from './components/ConfettiBackground';
import WaWeDoenSection from './components/WaWeDoenSection';
import LidWordenSection from './components/LidWordenSection';
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import Contact from './pages/Contact';
import { ThemeProvider } from './components/ThemeContext';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 selection:bg-yellow-400 selection:text-slate-900 font-sans flex flex-col transition-colors duration-300">
          <ConfettiBackground />
          <Navbar />

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* We reuse the Section components as full pages by wrapping them in a div with some padding if needed, 
                  though they have built-in padding. Adding a wrapper to push content down from fixed navbar is good. */}
              <Route path="/activities" element={<div className="pt-20"><WaWeDoenSection /></div>} />
              <Route path="/agenda" element={<div className="pt-20"><Agenda /></div>} />
              <Route path="/membership" element={<div className="pt-20"><LidWordenSection /></div>} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 relative z-10 mt-auto transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h4 className="text-2xl font-bold text-yellow-500 dark:text-yellow-400 mb-2">C.V. De Stokers</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                De gezelligste vereniging van Papgat. Alaaf!
                </p>
                <p className="text-slate-500 dark:text-slate-600 text-xs">
                     &copy; {new Date().getFullYear()} C.V. De Stokers. Alle rechten voorbehouden.
                </p>
            </div>
          </footer>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;