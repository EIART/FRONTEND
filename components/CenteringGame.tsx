import React, { useState, useEffect, useRef, useCallback } from 'react';

const SARCASTIC_COMMENTS = [
  "再往左 1px... 不对，回原来的位置 😅",
  "这个 Div 很有自己的想法，像极了你的实习生",
  "兼容性警告：IE6 正在看着你",
  "PM: 这里能不能用五彩斑斓的黑？🌈",
  "警告：z-index: 9999999 也没用",
  "CSS 是门玄学，建议烧香 ☯️",
  "你连个 Div 都管不住，怎么管团队？🤡",
  "浮动了！它浮动了！🌊",
  "恭喜，这行代码在 Safari 上崩了 🍎",
  "重构吧，这代码没救了 🗑️"
];

export const CenteringGame: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("任务：把那个该死的 Div 居中！");
  const [isPlaying, setIsPlaying] = useState(false);

  // Physics state (refs for performance)
  const boxPos = useRef({ x: 50, y: 50 });
  const boxVel = useRef({ vx: 0, vy: 0 });
  const targetPos = useRef({ x: 150, y: 150 });

  // Render state
  const [renderBox, setRenderBox] = useState({ x: 50, y: 50 });
  const [renderTarget, setRenderTarget] = useState({ x: 150, y: 150 });
  const [feedbackScale, setFeedbackScale] = useState(1);

  const loopRef = useRef<number>(0);

  const randomizeTarget = useCallback(() => {
    if (!canvasRef.current) return;
    const w = canvasRef.current.clientWidth;
    const h = canvasRef.current.clientHeight;
    // Keep away from edges
    const x = 50 + Math.random() * (w - 100);
    const y = 50 + Math.random() * (h - 100);
    targetPos.current = { x, y };
    setRenderTarget({ x, y });
  }, []);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    boxPos.current = { x: 50, y: 50 };
    boxVel.current = { vx: 0, vy: 0 };
    randomizeTarget();
    setComment("项目已启动... 祝你好运");
  };

  const checkWin = () => {
    const dx = Math.abs(boxPos.current.x - targetPos.current.x);
    const dy = Math.abs(boxPos.current.y - targetPos.current.y);

    // If within 15px
    if (dx < 20 && dy < 20) {
      // Win round
      setScore(s => s + 1);
      setComment(`PM: "需求变了！换个位置！" (Bug +1)`);
      setFeedbackScale(1.5);
      setTimeout(() => setFeedbackScale(1), 200);
      randomizeTarget();

      // Increase chaos: add random velocity
      boxVel.current.vx += (Math.random() - 0.5) * 10;
      boxVel.current.vy += (Math.random() - 0.5) * 10;
    }
  };

  useEffect(() => {
    if (!isPlaying) return;

    const update = () => {
      if (!canvasRef.current) return;
      const w = canvasRef.current.clientWidth;
      const h = canvasRef.current.clientHeight;

      // Physics
      boxPos.current.x += boxVel.current.vx;
      boxPos.current.y += boxVel.current.vy;

      // Friction (CSS bloatedness slows it down)
      boxVel.current.vx *= 0.95;
      boxVel.current.vy *= 0.95;

      // Bounce off walls
      if (boxPos.current.x <= 0 || boxPos.current.x >= w - 40) {
        boxVel.current.vx *= -0.8;
        boxPos.current.x = Math.max(0, Math.min(boxPos.current.x, w - 40));
      }
      if (boxPos.current.y <= 0 || boxPos.current.y >= h - 40) {
        boxVel.current.vy *= -0.8;
        boxPos.current.y = Math.max(0, Math.min(boxPos.current.y, h - 40));
      }

      setRenderBox({ ...boxPos.current });
      checkWin();

      loopRef.current = requestAnimationFrame(update);
    };

    loopRef.current = requestAnimationFrame(update);
    return () => {
      if (loopRef.current) cancelAnimationFrame(loopRef.current);
    };
  }, [isPlaying, randomizeTarget]);

  // Controls
  const applyForce = (type: string) => {
    if (!isPlaying) startGame();

    // Random sarcastic comment chance
    if (Math.random() > 0.7) {
        setComment(SARCASTIC_COMMENTS[Math.floor(Math.random() * SARCASTIC_COMMENTS.length)]);
    }

    switch (type) {
      case 'justify-center':
        // Tries to center X, but overshoots
        const dx = (canvasRef.current?.clientWidth || 300) / 2 - boxPos.current.x;
        boxVel.current.vx += dx * 0.05;
        break;
      case 'align-items':
        // Tries to center Y
        const dy = (canvasRef.current?.clientHeight || 300) / 2 - boxPos.current.y;
        boxVel.current.vy += dy * 0.05;
        break;
      case 'float':
        // Floats right violently
        boxVel.current.vx += 2;
        boxVel.current.vy -= 1;
        break;
      case 'important':
        // Random teleport
        if (canvasRef.current) {
            boxPos.current.x = Math.random() * (canvasRef.current.clientWidth - 40);
            boxPos.current.y = Math.random() * (canvasRef.current.clientHeight - 40);
            boxVel.current.vx = 0;
            boxVel.current.vy = 0;
        }
        break;
      case 'margin':
        // Nudge random
         boxVel.current.vx += (Math.random() - 0.5) * 5;
         boxVel.current.vy += (Math.random() - 0.5) * 5;
        break;
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-24 mb-12 relative group">
        {/* Retro Monitor Frame */}
        <div className="bg-slate-800 p-2 rounded-xl border-4 border-slate-700 shadow-2xl relative overflow-hidden">

            {/* Screen Glare */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none z-10"></div>

            {/* Header */}
            <div className="bg-black text-green-500 font-mono text-xs p-2 flex justify-between items-center border-b border-slate-700">
                <span> ➡️ TASKS_RUNNING: FIX_CSS_CENTERING.exe</span>
                <span className="text-yellow-500">已修复 Bug: {score}</span>
            </div>

            {/* Game Canvas */}
            <div
                ref={canvasRef}
                className="h-64 bg-slate-900 relative overflow-hidden cursor-crosshair select-none"
                onClick={() => applyForce('margin')}
            >
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-10"
                     style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                </div>

                {/* Target Box */}
                <div
                    className="absolute w-12 h-12 border-2 border-dashed border-green-500/50 rounded transition-all duration-300 flex items-center justify-center"
                    style={{
                        left: renderTarget.x,
                        top: renderTarget.y,
                        transform: `scale(${feedbackScale})`
                    }}
                >
                    <span className="text-[10px] text-green-500/50 opacity-50">TARGET</span>
                </div>

                {/* Player Box */}
                <div
                    className="absolute w-10 h-10 bg-red-500 border border-red-400 shadow-[0_0_10px_rgba(239,68,68,0.6)] flex items-center justify-center font-bold text-white text-xs transition-transform will-change-transform"
                    style={{
                        left: renderBox.x,
                        top: renderBox.y,
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    &lt;div&gt;
                </div>

                {/* Overlay Text */}
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20 backdrop-blur-sm">
                        <button
                            onClick={startGame}
                            className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-mono rounded border border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-pulse"
                        >
                            START_CHALLENGE
                        </button>
                    </div>
                )}
            </div>

            {/* Control Panel */}
            <div className="bg-slate-900 p-4 border-t border-slate-700 grid grid-cols-3 gap-2 font-mono text-xs">
                <div className="col-span-3 text-center text-yellow-500/80 mb-2 h-4 leading-4 truncate">
                    // {comment}
                </div>
                <button onClick={() => applyForce('justify-center')} className="bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-400 p-2 rounded border border-slate-700 transition-colors">
                    justify-center
                </button>
                <button onClick={() => applyForce('align-items')} className="bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-400 p-2 rounded border border-slate-700 transition-colors">
                    align-items
                </button>
                <button onClick={() => applyForce('float')} className="bg-slate-800 hover:bg-red-600 hover:text-white text-slate-400 p-2 rounded border border-slate-700 transition-colors">
                    float: left
                </button>
                <button onClick={() => applyForce('important')} className="col-span-3 bg-red-900/30 hover:bg-red-600 text-red-400 hover:text-white p-2 rounded border border-red-900/50 transition-all uppercase tracking-widest font-bold">
                    !important;
                </button>
            </div>
        </div>

        <p className="text-center text-slate-600 text-xs mt-2 font-mono">
           提示：点击屏幕任何地方会触发 margin-collapse 导致的随机抖动。
        </p>
    </div>
  );
};
