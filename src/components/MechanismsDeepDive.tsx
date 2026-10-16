import React, { useState } from 'react';
import { THEORETICAL_MODELS, TheoreticalModel } from '../data/criminologyData';
import { ShieldCheck, AlertOctagon, HelpCircle, ArrowRight, UserCheck, Clock, Zap, BookOpen } from 'lucide-react';

export const MechanismsDeepDive: React.FC = () => {
  const [selectedModelIndex, setSelectedModelIndex] = useState<number>(0);
  const activeModel = THEORETICAL_MODELS[selectedModelIndex];

  return (
    <section id="theories" className="py-12 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block mb-1">
            02. Criminological &amp; Psychological Theories
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Why Doesn&apos;t GTA Cause Homicides? The Competing Mechanisms
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            The intuitive belief that violent media causes violent acts relies on simplistic stimulus-response assumptions. In peer-reviewed criminology and behavioral economics, four distinct theoretical models have been tested against longitudinal data.
          </p>
        </div>

        {/* 4 Interactive Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {THEORETICAL_MODELS.map((model, idx) => {
            const isSelected = idx === selectedModelIndex;
            return (
              <button
                key={model.name}
                type="button"
                onClick={() => setSelectedModelIndex(idx)}
                className={`cursor-pointer text-left p-5 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-white border-slate-900 shadow-md ring-1 ring-slate-900'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    Model 0{idx + 1}
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                    model.realWorldDataOutcome === 'Confirmed'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : model.realWorldDataOutcome === 'Refuted'
                      ? 'bg-rose-50 text-rose-800 border border-rose-200'
                      : 'bg-amber-50 text-amber-800 border border-amber-200'
                  }`}>
                    {model.realWorldDataOutcome}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug mb-1">
                  {model.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {model.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Model Deep Dive Inspection Box */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase text-slate-400">Selected Paradigm:</span>
                <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                  {activeModel.tagline}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {activeModel.name}
              </h3>
              <p className="text-xs font-mono text-slate-500 mt-1">
                Leading Researchers: {activeModel.academicProponents}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-slate-500 uppercase">Empirical Status:</span>
              <span className={`text-xs font-bold ${
                activeModel.realWorldDataOutcome === 'Confirmed' ? 'text-emerald-700' :
                activeModel.realWorldDataOutcome === 'Refuted' ? 'text-rose-700' : 'text-amber-700'
              }`}>
                {activeModel.realWorldDataOutcome} by Field Data
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-slate-400 block tracking-wide">
                Proposed Causal Mechanism
              </span>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeModel.proposedMechanism}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-slate-400 block tracking-wide">
                Empirical Prediction
              </span>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeModel.empiricalPrediction}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-slate-400 block tracking-wide">
                Real-World Criminological Finding
              </span>
              <p className="text-sm text-slate-900 font-medium leading-relaxed">
                {activeModel.explanation}
              </p>
            </div>
          </div>

          {/* Time-Use Displacement Deep Dive Callout */}
          {activeModel.name.includes("Time-Use Displacement") && (
            <div className="mt-6 pt-6 border-t border-slate-100 bg-blue-50/50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-xl">
              <h4 className="text-sm font-bold text-blue-950 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-700" />
                The Behavioral Economics of Incapacitation
              </h4>
              <p className="text-xs text-blue-900/80 leading-relaxed mb-4">
                In economics, the &ldquo;incapacitation effect&rdquo; describes how engaging in one time-intensive activity physically precludes participation in another. Committing an armed robbery, bar assault, or homicide requires physical presence in public spaces, usually at night, in proximity to potential victims and antagonists. When a blockbuster like GTA launches, millions of young men spend 20 to 60 hours in their living rooms playing the game, dramatically reducing their opportunity exposure to volatile street scenarios.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="bg-white p-3 rounded border border-blue-200">
                  <span className="text-slate-500 block text-[10px] uppercase">Peak Crime Hours</span>
                  <span className="font-bold text-slate-900">10 PM &ndash; 3 AM Weekends</span>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <span className="text-slate-500 block text-[10px] uppercase">Gaming Time Shift</span>
                  <span className="font-bold text-slate-900">Overlaps 85% of Risk Window</span>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <span className="text-slate-500 block text-[10px] uppercase">Cunningham Net Impact</span>
                  <span className="font-bold text-emerald-700">-2.1% to -3.4% Launch Crime</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
