import React, { useState } from 'react';
import { generateResignationLetter, generateCareerPivot } from '../services/geminiService';
import { ResignationState } from '../types';

export const ResignationGenerator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'resignation' | 'pivot'>('resignation');
  const [selectedFramework, setSelectedFramework] = useState<string>('React');
  const [resignation, setResignation] = useState<ResignationState>({
    loading: false,
    content: '',
    error: null,
  });
  const [pivotOptions, setPivotOptions] = useState<any[]>([]);
  const [pivotLoading, setPivotLoading] = useState(false);

  const handleGenerateResignation = async () => {
    setResignation({ loading: true, content: '', error: null });
    try {
      const letter = await generateResignationLetter(selectedFramework);
      setResignation({ loading: false, content: letter, error: null });
    } catch (err) {
      setResignation({ loading: false, content: '', error: 'Failed to quit. You are trapped forever.' });
    }
  };

  const handleGeneratePivot = async () => {
    setPivotLoading(true);
    try {
      const result = await generateCareerPivot();
      setPivotOptions(JSON.parse(result));
      setPivotLoading(false);
    } catch (err) {
      setPivotOptions([{ title: "Professional Beggar", reason: "You begged for designs, now beg for money.", sarcasm: "No API key required." }]);
      setPivotLoading(false);
    }
  };

  return (
    <div className="mt-12 border-t border-slate-800 pt-12 relative">
      {/* Decorative "System Alert" Tape */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black font-bold px-4 py-1 rotate-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] z-10">
        ⚠ LEGACY HUMAN DETECTED ⚠
      </div>

      <div className="max-w-3xl mx-auto bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
        
        {/* Tabs */}
        <div className="flex border-b border-slate-700">
          <button 
            onClick={() => setActiveTab('resignation')}
            className={`flex-1 py-4 font-mono text-sm transition-colors ${activeTab === 'resignation' ? 'bg-red-900/20 text-red-400 border-b-2 border-red-500' : 'text-slate-500 hover:text-slate-300'}`}
          >
            ~/generate_resignation.sh
          </button>
          <button 
            onClick={() => setActiveTab('pivot')}
            className={`flex-1 py-4 font-mono text-sm transition-colors ${activeTab === 'pivot' ? 'bg-blue-900/20 text-blue-400 border-b-2 border-blue-500' : 'text-slate-500 hover:text-slate-300'}`}
          >
            ~/find_new_purpose.exe
          </button>
        </div>

        <div className="p-8 min-h-[400px]">
          {activeTab === 'resignation' ? (
            <div className="animate-fadeIn">
              <p className="text-slate-400 mb-6 text-center italic">
                "Choose the framework you wasted your 20s on:"
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {['React', 'Vue', 'Angular', 'Svelte', 'jQuery'].map((fw) => (
                  <button
                    key={fw}
                    onClick={() => setSelectedFramework(fw)}
                    className={`px-4 py-2 rounded-full font-mono text-xs border transition-all ${
                      selectedFramework === fw 
                        ? 'bg-red-500 text-white border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]' 
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    {fw}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={handleGenerateResignation}
                  disabled={resignation.loading}
                  className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-red-600 font-mono rounded hover:bg-red-700 focus:outline-none ring-offset-2 focus:ring-2 ring-red-400 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span className="relative flex items-center gap-2">
                    {resignation.loading ? (
                      <>Running delete_career.sh...</>
                    ) : (
                      <>🚀 EJECT CAREER</>
                    )}
                  </span>
                </button>
              </div>

              {resignation.content && (
                <div className="mt-8 relative group">
                   <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                   <div className="relative bg-black p-6 rounded border border-slate-800 shadow-inner">
                     <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <span className="text-xs font-mono text-slate-600">LastWords.md</span>
                     </div>
                     <pre className="font-mono text-sm text-slate-300 whitespace-pre-wrap overflow-x-auto leading-relaxed">
                       {resignation.content}
                     </pre>
                   </div>
                </div>
              )}
            </div>
          ) : (
            <div className="animate-fadeIn h-full flex flex-col">
               <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Life After `npm install`</h3>
                  <p className="text-slate-500 text-sm">Gemini has analyzed your skillset (Copy/Pasting) and found suitable matches.</p>
               </div>
               
               {!pivotOptions.length && !pivotLoading && (
                 <div className="text-center mt-8">
                    <button 
                      onClick={handleGeneratePivot}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-mono shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all"
                    >
                      Analyze My Worthlessness
                    </button>
                 </div>
               )}

               {pivotLoading && (
                 <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                    <p className="font-mono text-xs text-blue-400 animate-pulse">Scanning Craigslist...</p>
                 </div>
               )}

               {pivotOptions.length > 0 && (
                 <div className="grid gap-4">
                    {pivotOptions.map((job, idx) => (
                      <div key={idx} className="bg-slate-800/50 p-4 rounded border border-slate-700 hover:border-blue-500/50 transition-colors">
                        <h4 className="text-lg font-bold text-slate-200 mb-1">{job.title}</h4>
                        <p className="text-sm text-slate-400 mb-2">{job.reason}</p>
                        <div className="text-xs font-mono text-blue-400 bg-blue-900/20 inline-block px-2 py-1 rounded">
                          // {job.sarcasm}
                        </div>
                      </div>
                    ))}
                    <button onClick={handleGeneratePivot} className="mt-4 text-xs text-slate-500 underline hover:text-slate-300">
                      No, I'm too weak for manual labor. Try again.
                    </button>
                 </div>
               )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};