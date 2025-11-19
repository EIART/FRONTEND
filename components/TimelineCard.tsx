import React from 'react';
import { TimelineEvent, EraType } from '../types';

interface TimelineCardProps {
  event: TimelineEvent;
  isLast: boolean;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ event, isLast }) => {
  const getBorderColor = (type: EraType) => {
    switch (type) {
      case EraType.STONE_AGE: return 'border-gray-600';
      case EraType.JQUERY_ERA: return 'border-blue-600';
      case EraType.FRAMEWORK_WARS: return 'border-orange-500';
      case EraType.COMPLEXITY_HELL: return 'border-purple-500';
      case EraType.THE_END: return 'border-red-600';
      default: return 'border-gray-500';
    }
  };

  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>
      )}
      
      {/* Dot */}
      <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-4 ${getBorderColor(event.type)} bg-slate-950 z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}></div>

      <div className={`p-6 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-slate-600 ${event.type === EraType.THE_END ? 'shadow-[0_0_30px_rgba(220,38,38,0.2)] border-red-900/50' : ''}`}>
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-mono text-slate-500">{event.year}</span>
          <span className="text-2xl">{event.icon}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-100 mb-2">{event.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {event.description}
        </p>
        <div className="bg-slate-950 p-3 rounded border border-slate-800 font-mono text-xs text-green-400/80 italic relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-green-500/50"></div>
          <span className="opacity-50 mr-2">//</span>
          {event.sarcasticComment}
        </div>
      </div>
    </div>
  );
};