import React, { useState } from 'react';
import { Header } from './components/Header';
import { ThesisVerdictBanner } from './components/ThesisVerdictBanner';
import { MacroTimeSeriesChart } from './components/MacroTimeSeriesChart';
import { MechanismsDeepDive } from './components/MechanismsDeepDive';
import { ReleaseShockSimulator } from './components/ReleaseShockSimulator';
import { CrossNationalMatrix } from './components/CrossNationalMatrix';
import { PeerReviewedDossier } from './components/PeerReviewedDossier';
import { ThesisStressTester } from './components/ThesisStressTester';
import { ExportSummaryModal } from './components/ExportSummaryModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('macro');
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);

  const scrollToSection = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* Top Navigation Bar adhering to the Top Bar Contract */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={scrollToSection} 
        onOpenExport={() => setIsExportOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Thesis Statement & Scientific Verdict Banner */}
        <ThesisVerdictBanner />

        {/* 01. Historical Macro Time-Series Explorer (1995-2024) */}
        <MacroTimeSeriesChart />

        {/* 02. Criminological Mechanisms & Theoretical Models */}
        <MechanismsDeepDive />

        {/* 03. Quasi-Experimental Release Shock Simulator */}
        <ReleaseShockSimulator />

        {/* 04. Cross-National Comparison (The International Paradox) */}
        <CrossNationalMatrix />

        {/* 05. Peer-Reviewed Academic Studies Archive */}
        <PeerReviewedDossier />

        {/* 06. Interactive Thesis Inquest & Stress-Testing Sandbox */}
        <ThesisStressTester />
      </main>

      {/* Clean Academic Footer without Slop or Telemetry Tickers */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <span className="text-sm font-bold text-slate-900 block">
                GTA &amp; Global Crime Empirical Criminology Platform
              </span>
              <p className="text-xs text-slate-500 mt-1">
                Data synthesized from FBI Uniform Crime Reporting, CDC WONDER, UNODC, and peer-reviewed journals.
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs text-slate-500 font-mono">
              <span>NBER JEBO 2016</span>
              <span aria-hidden="true">&middot;</span>
              <span>APA Resolution 2020</span>
              <span aria-hidden="true">&middot;</span>
              <span>SCOTUS 564 U.S. 786</span>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              Academic research synthesis platform. Grand Theft Auto and associated trademarks belong to Take-Two Interactive and Rockstar Games.
            </p>
            <div className="flex items-center gap-4">
              <button 
                type="button"
                onClick={() => setIsExportOpen(true)}
                className="cursor-pointer hover:text-slate-700 transition-colors"
              >
                Export CSV Dataset
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('macro')}
                className="cursor-pointer hover:text-slate-700 transition-colors"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Export CSV & Research Brief Modal */}
      <ExportSummaryModal 
        isOpen={isExportOpen} 
        onClose={() => setIsExportOpen(false)} 
      />
    </div>
  );
}
