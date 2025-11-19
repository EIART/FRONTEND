import React, { useEffect, useState } from 'react';
import { TIMELINE_DATA } from './constants';
import { TimelineCard } from './components/TimelineCard';
import { ResignationGenerator } from './components/ResignationGenerator';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [deleteProgress, setDeleteProgress] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDeleteNodeModules = () => {
    if (isDeleted) return;
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 5;
      if (progress >= 100) {
        clearInterval(interval);
        setDeleteProgress(100);
        setIsDeleted(true);
      } else {
        setDeleteProgress(progress);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans overflow-x-hidden relative selection:bg-red-900 selection:text-white">
      {/* CSS for Graveyard Marquee */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee-content {
          display: inline-block;
          animation: scroll 20s linear infinite;
        }
      `}</style>

      {/* Matrix Rain Effect Background */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0 bg-[url('https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif')] bg-cover bg-center mix-blend-screen"></div>
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-900">
        <div 
          className="h-full bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 shadow-[0_0_10px_rgba(220,38,38,0.7)]"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      {/* Graveyard Marquee */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/90 border-t border-slate-800 py-2 font-mono text-xs text-slate-500 marquee-container">
        <div className="marquee-content">
           🪦 RIP Backbone.js 🪦 In Loving Memory of Knockout.js 🪦 Gone too soon: Bower 🪦 Grunt (2012-2014) 🪦 Meteor.js (It was too fast) 🪦 Flash (Never forget) 🪦 Create-React-App 🪦 Gatsby 🪦 Mixins 🪦 Class Components 🪦
        </div>
      </div>

      {/* Hero Section */}
      <main className="relative z-10 pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded border border-red-900/50 bg-red-950/20 backdrop-blur text-red-400 text-xs font-mono tracking-widest uppercase animate-bounce">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            Frontend is Dead. Long live AI.
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            <span className="block text-slate-700 line-through decoration-red-600 decoration-4">FRONTEND</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 animate-glitch">OBSOLETE</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            A memorial service for the {'<div>'} that we could never quite center.
            <br />
            <span className="text-slate-600 text-sm mt-2 block font-mono">Wait time for Gemini 3 build: 0ms</span>
          </p>
        </div>

        {/* Timeline Section */}
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-800 via-slate-800 to-transparent"></div>
          {TIMELINE_DATA.map((event, index) => (
            <TimelineCard 
              key={index} 
              event={event} 
              isLast={index === TIMELINE_DATA.length - 1} 
            />
          ))}
        </div>

        {/* The Node Modules Deletion Interaction */}
        <div className="max-w-md mx-auto mt-32 mb-12 p-1 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
          <div className="bg-black rounded-lg p-6 text-center border border-slate-800">
            <h3 className="text-white font-bold text-xl mb-2">Legacy Clean Up Tool</h3>
            <p className="text-slate-500 text-sm mb-6">Free up 40GB of disk space by deleting your `node_modules` folder. You won't need it anymore.</p>
            
            {!isDeleted ? (
              <button 
                onClick={handleDeleteNodeModules}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition-all active:scale-95 relative overflow-hidden"
              >
                {deleteProgress > 0 && (
                  <div 
                    className="absolute left-0 top-0 bottom-0 bg-red-800 transition-all duration-100 z-0"
                    style={{ width: `${deleteProgress}%` }}
                  ></div>
                )}
                <span className="relative z-10">{deleteProgress > 0 ? `DELETING ${Math.floor(deleteProgress)}%` : 'DELETE NODE_MODULES'}</span>
              </button>
            ) : (
              <div className="text-green-500 font-mono text-sm py-3 border border-green-900/50 bg-green-900/20 rounded">
                ✓ SUCCESS. SOUL PURIFIED.
              </div>
            )}
          </div>
        </div>

        {/* Interactive Generator */}
        <ResignationGenerator />

      </main>

      {/* FOOTER - EXTREMELY LARGE AS REQUESTED */}
      <footer className="py-32 text-center font-mono border-t border-slate-900 bg-black flex flex-col items-center justify-center overflow-hidden relative z-20">
        <p className="text-slate-500 mb-8 text-sm uppercase tracking-widest">
          I wrote the code. I wrote the jokes. You just scrolled.
        </p>
        <div className="relative">
          <h2 className="text-[12vw] leading-[0.8] font-black text-slate-800 select-none tracking-tighter opacity-100">
            GENERATED
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-black">BY GEMINI</span>
          </h2>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-color-dodge">
             <h2 className="text-[12vw] leading-[0.8] font-black text-slate-700/50 blur-sm select-none tracking-tighter">
              GENERATED
              <br />
              BY GEMINI
            </h2>
          </div>
        </div>
        <p className="mt-12 text-slate-600 text-xs">
          (NO HUMANS WERE HARMED, ONLY THEIR EGOS)
        </p>
      </footer>
    </div>
  );
};

export default App;