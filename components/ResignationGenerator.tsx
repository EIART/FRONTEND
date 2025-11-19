import React, {useState} from 'react';
import {generateResignationLetter, generateCareerPivot} from '../services/geminiService';
import {ResignationState} from '../types';

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
    setResignation({loading: true, content: '', error: null});
    try {
      const letter = await generateResignationLetter(selectedFramework);
      setResignation({loading: false, content: letter, error: null});
    } catch (err) {
      setResignation({loading: false, content: '', error: '离职失败，你是牛马，跑不掉的 🤡'});
    }
  };

  const handleGeneratePivot = async () => {
    setPivotLoading(true);
    try {
      const result = await generateCareerPivot();
      setPivotOptions(JSON.parse(result));
      setPivotLoading(false);
    } catch (err) {
      const fallbackJobs = [
        {title: "天桥贴膜专员", reason: "擅长给手机覆盖层级 (z-index)。", sarcasm: "无需 API Key，城管来了跑快点就行 😅"},
        {
          title: "外卖骑手",
          reason: "熟悉异步并发 (Promise.all)，擅长路由优化 (Routing)。",
          sarcasm: "每天都在跑 npm run deliver，就是工资按单结算 💸"
        },
        {
          title: "直播带货主播",
          reason: "Debug 了这么多年，骂人话术已经炉火纯青。",
          sarcasm: "老铁双击666，比 console.log 有用多了 🎤"
        },
        {
          title: "奶茶店调茶师",
          reason: "精通配方管理 (JSON Config)，擅长版本控制 (大杯/中杯)。",
          sarcasm: "git merge 珍珠 + 椰果，无冲突包退 🧋"
        },
        {
          title: "网约车司机",
          reason: "天天处理回调地狱，现在只想处理真实的地狱路况。",
          sarcasm: "接口调不通？没事，我接单都靠抢 🚗"
        },
        {
          title: "UP主/自媒体",
          reason: "写了这么多年文档，终于可以拍视频骂产品经理了。",
          sarcasm: "标题党技能 MAX，比 SEO 优化还离谱 📹"
        },
        {title: "电商客服", reason: "长期与测试撕逼，沟通能力点满。", sarcasm: "亲亲，这个 Bug 是特性哦~ ❤️"},
        {
          title: "健身教练",
          reason: "天天 996 搬砖，现在教别人怎么变强壮。",
          sarcasm: "代码写不动了，来练铁吧！Ctrl+C 变卧推 💪"
        },
        {title: "摆摊卖煎饼", reason: "精通多线程操作 (同时摊3个饼)。", sarcasm: "高并发？我早上7点能同时接10单 🥞"},
        {
          title: "保安大哥",
          reason: "写代码守护系统，现在守护小区大门，本质没变。",
          sarcasm: "403 Forbidden 说的就是你，业主卡呢？🛡️"
        }
      ];
      const randomJob = fallbackJobs[Math.floor(Math.random() * fallbackJobs.length)];
      setPivotOptions([randomJob]);
      setPivotLoading(false);
    }
  };

  return (
    <div className="mt-12 border-t border-slate-800 pt-12 relative">
      {/* Decorative "System Alert" Tape */}
      <div
        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black font-bold px-4 py-1 rotate-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] z-10 whitespace-nowrap">
        ⚠ 警告：发现上古切图仔 (Legacy Human) ⚠
      </div>

      <div
        className="max-w-3xl mx-auto bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl overflow-hidden shadow-2xl">

        {/* Tabs */}
        <div className="flex border-b border-slate-700">
          <button
            onClick={() => setActiveTab('resignation')}
            className={`flex-1 py-4 font-mono text-sm transition-colors ${activeTab === 'resignation' ? 'bg-red-900/20 text-red-400 border-b-2 border-red-500' : 'text-slate-500 hover:text-slate-300'}`}
          >
            ~/自动生成_跑路信.sh
          </button>
          <button
            onClick={() => setActiveTab('pivot')}
            className={`flex-1 py-4 font-mono text-sm transition-colors ${activeTab === 'pivot' ? 'bg-blue-900/20 text-blue-400 border-b-2 border-blue-500' : 'text-slate-500 hover:text-slate-300'}`}
          >
            ~/电子厂_进厂指南.exe
          </button>
        </div>

        <div className="p-8 min-h-[400px]">
          {activeTab === 'resignation' ? (
            <div className="animate-fadeIn">
              <p className="text-slate-400 mb-6 text-center italic">
                "请选择你浪费了整个青春去学的框架："
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
                  <span
                    className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span className="relative flex items-center gap-2">
                    {resignation.loading ? (
                      <>正在执行 删库跑路.sh ...</>
                    ) : (
                      <>🚀 一键破防辞职</>
                    )}
                  </span>
                </button>
              </div>

              {resignation.content && (
                <div className="mt-8 relative group">
                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                  <div className="relative bg-black p-6 rounded border border-slate-800 shadow-inner">
                    <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                      </div>
                      <span className="text-xs font-mono text-slate-600">最后的遗言.md</span>
                    </div>
                    <pre
                      className="font-mono text-sm text-slate-300 whitespace-pre-wrap overflow-x-auto leading-relaxed">
                       {resignation.content}
                     </pre>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="animate-fadeIn h-full flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-blue-400 mb-2">`npm install` 之后的生活</h3>
                <p className="text-slate-500 text-sm">Gemini 分析了你的 CV (复制粘贴) 技巧，为你推荐了以下出路：</p>
              </div>

              {!pivotOptions.length && !pivotLoading && (
                <div className="text-center mt-8">
                  <button
                    onClick={handleGeneratePivot}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-mono shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all"
                  >
                    评估我的剩余价值
                  </button>
                </div>
              )}

              {pivotLoading && (
                <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                  <div
                    className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                  <p className="font-mono text-xs text-blue-400 animate-pulse">正在搜索 BOSS直聘 (保安/保洁)...</p>
                </div>
              )}

              {pivotOptions.length > 0 && (
                <div className="grid gap-4">
                  {pivotOptions.map((job, idx) => (
                    <div key={idx}
                         className="bg-slate-800/50 p-4 rounded border border-slate-700 hover:border-blue-500/50 transition-colors">
                      <h4 className="text-lg font-bold text-slate-200 mb-1">{job.title}</h4>
                      <p className="text-sm text-slate-400 mb-2">{job.reason}</p>
                      <div className="text-xs font-mono text-blue-400 bg-blue-900/20 inline-block px-2 py-1 rounded">
                        // {job.sarcasm}
                      </div>
                    </div>
                  ))}
                  <button onClick={handleGeneratePivot}
                          className="mt-4 text-xs text-slate-500 underline hover:text-slate-300">
                    太累了，有没有那种躺着赚钱的？重来。
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
