import React from 'react';
import { Download, BookOpen, BarChart3, Globe2, Activity } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenExport }) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#overview" 
          onClick={(e) => { e.preventDefault(); setActiveTab('macro'); }}
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-slate-700 transition-colors"
        >
          GTA &amp; Crime Evidence Lab
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button 
            type="button"
            onClick={() => setActiveTab('macro')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${activeTab === 'macro' ? 'text-slate-900 font-semibold border-b-2 border-slate-900' : 'hover:text-slate-900'}`}
          >
            Macro Trends
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('theories')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${activeTab === 'theories' ? 'text-slate-900 font-semibold border-b-2 border-slate-900' : 'hover:text-slate-900'}`}
          >
            Theoretical Models
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('shock')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${activeTab === 'shock' ? 'text-slate-900 font-semibold border-b-2 border-slate-900' : 'hover:text-slate-900'}`}
          >
            Release Shock Model
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('global')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${activeTab === 'global' ? 'text-slate-900 font-semibold border-b-2 border-slate-900' : 'hover:text-slate-900'}`}
          >
            Global Comparison
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('studies')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${activeTab === 'studies' ? 'text-slate-900 font-semibold border-b-2 border-slate-900' : 'hover:text-slate-900'}`}
          >
            Peer-Reviewed Studies
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            type="button"
            onClick={onOpenExport}
            className="cursor-pointer px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Data &amp; Brief</span>
          </button>
        </div>
      </div>
    </header>
  );
};
