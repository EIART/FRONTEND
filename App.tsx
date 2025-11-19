import React, { useEffect, useState } from 'react';
import { TIMELINE_DATA } from './constants';
import { TimelineCard } from './components/TimelineCard';
import { ResignationGenerator } from './components/ResignationGenerator';
import { CenteringGame } from './components/CenteringGame';

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
           🪦 RIP Backbone.js 🕯️ 缅怀 Knockout.js 🕯️ 走好 Bower 🕯️ Grunt (2012-2014) 🕯️ Meteor.js (太快了) 🕯️ Flash (爷青结) 🕯️ Create-React-App (废弃) 🕯️ Gatsby 🕯️ Mixins 🕯️ Class Components 🕯️ IE6 (下地狱吧) 🪦
        </div>
      </div>

      {/* Hero Section */}
      <main className="relative z-10 pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded border border-red-900/50 bg-red-950/20 backdrop-blur text-red-400 text-xs font-mono tracking-widest uppercase animate-bounce">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            别学了，全是夕阳红产业
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            <span className="block text-slate-600 text-3xl md:text-4xl mb-2 font-bold">
              前端
              <span className="decoration-red-600 decoration-4 underline underline-offset-8 text-slate-300">已死</span>
              🤡
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-glitch">
              建议申请非物质<br/>文化遗产
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            致敬那些还在手写 CSS 的赛博苦力。Gemini 3 已经把饭喂到嘴边了，你还在研究怎么让 div 垂直居中？
            <br />
            <span className="text-red-400 text-sm mt-4 block font-mono font-bold bg-red-950/30 p-2 rounded inline-block border border-red-900/50">
              ⬇️ 不信？玩玩下面这个游戏，看你多菜 ⬇️
            </span>
          </p>
        </div>

        {/* PROMINENT GAME SECTION - MOVED UP */}
        <div className="relative z-20 mb-24">
          <CenteringGame />
        </div>

        {/* Timeline Section */}
        <div className="max-w-2xl mx-auto relative mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-200">前端火葬场简史</h2>
            <p className="text-slate-500 text-sm">回顾我们是如何一步步把自己作死的</p>
          </div>
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
            <h3 className="text-white font-bold text-xl mb-2">电子垃圾清理工具</h3>
            <p className="text-slate-500 text-sm mb-6">释放 40GB 磁盘空间，删除 `node_modules`。反正你也不需要它了，去考公吧。</p>
            
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
                <span className="relative z-10">{deleteProgress > 0 ? `正在删库跑路 ${Math.floor(deleteProgress)}%` : '删除 NODE_MODULES'}</span>
              </button>
            ) : (
              <div className="text-green-500 font-mono text-sm py-3 border border-green-900/50 bg-green-900/20 rounded">
                ✓ 操作成功。灵魂已净化。
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
          代码是我写的。笑话是我编的。你只是在负责滚动鼠标。😅
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
          (没有人类受到伤害，除了他们的自尊心 🤡)
        </p>
      </footer>
    </div>
  );
};

export default App;