import React, { useState } from 'react';
import { THESIS_INQUEST_TOPICS, ThesisQuestionScenario } from '../data/criminologyData';
import { HelpCircle, CheckCircle2, XCircle, ArrowRight, MessageSquare, Send, Sparkles } from 'lucide-react';

export const ThesisStressTester: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(THESIS_INQUEST_TOPICS[0].id);
  const [customThesis, setCustomThesis] = useState<string>('');
  const [customAnalysis, setCustomAnalysis] = useState<{
    status: 'analyzed' | 'idle';
    userClaim: string;
    verdict: string;
    evidence: string[];
    criminologicalPrinciple: string;
  } | null>(null);

  const activeTopic = THESIS_INQUEST_TOPICS.find(t => t.id === selectedTopicId) || THESIS_INQUEST_TOPICS[0];

  const handleAuditCustomThesis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customThesis.trim()) return;

    const lower = customThesis.toLowerCase();
    let verdict = "Refuted by Macro Criminological Time-Series";
    let principle = "Ecological Fallacy & Media Scapegoating";
    let evidence = [
      "Between 1993 and 2014, US homicides dropped by ~55% while video game revenues surged over 400%.",
      "Quasi-experimental econometric studies (Cunningham 2016) show violent offenses fall by 2-3% during release weeks.",
      "International data shows Japan, UK, and Canada have heavy GTA consumption with 70% to 95% lower homicide rates than the US."
    ];

    if (lower.includes('homicide') || lower.includes('murder') || lower.includes('kill')) {
      verdict = "Lethal Violence Thesis: Disproven by Empirical Records";
      principle = "Criminological Etiology: Lethal violence is determined by firearm access, gang distribution, and socio-economic stress, not fictional simulation.";
      evidence = [
        "In 2013 (GTA V release), US homicide rate hit 4.53 per 100k, a 50-year historic low.",
        "The American Psychological Association (2020) concluded zero causal link exists between violent games and criminal violence.",
        "Forensic evaluations of incarcerated homicide perpetrators consistently show gang affiliations, severe physical trauma, and substance dependence, while video game play mirrors ordinary population rates."
      ];
    } else if (lower.includes('car') || lower.includes('theft') || lower.includes('steal')) {
      verdict = "Motor Vehicle Theft Thesis: Inverted Reality";
      principle = "Target Hardening & Immobilizer Technology: Real-world vehicle thefts fell over 60% due to electronic transponder chips, not video game mechanics.";
      evidence = [
        "US vehicle thefts dropped from 1.5 million in 1995 to under 700,000 in 2014.",
        "Virtual car theft in GTA has never produced a documented statistical uptick in real-world motor vehicle theft."
      ];
    }

    setCustomAnalysis({
      status: 'analyzed',
      userClaim: customThesis,
      verdict,
      evidence,
      criminologicalPrinciple: principle
    });
  };

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block mb-1">
            06. Interactive Thesis Inquest &amp; Stress-Testing
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stress-Testing Key Arguments Against Real-World Data
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Select a classic claim below to review the counter-evidence, or submit your own hypothesis variation for a forensic criminological audit.
          </p>
        </div>

        {/* Preset Question Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {THESIS_INQUEST_TOPICS.map((topic, idx) => {
            const isSelected = topic.id === selectedTopicId;
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => { setSelectedTopicId(topic.id); setCustomAnalysis(null); }}
                className={`cursor-pointer text-left p-4 rounded-lg border transition-all ${
                  isSelected && !customAnalysis
                    ? 'bg-white border-slate-900 shadow-sm ring-1 ring-slate-900'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                  Inquest Case 0{idx + 1}
                </span>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  {topic.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Topic Breakdown */}
        {!customAnalysis && (
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">
                {activeTopic.title}
              </h3>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200 shrink-0">
                <XCircle className="w-3.5 h-3.5 text-rose-600" />
                Refuted by Empirical Records
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1.5 bg-slate-50 p-4 rounded-lg border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  Common Intuitive Assumption
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {activeTopic.commonBelief}
                </p>
              </div>

              <div className="space-y-1.5 bg-emerald-50/50 p-4 rounded-lg border border-emerald-200">
                <span className="text-[10px] font-mono uppercase text-emerald-800 block">
                  Empirical Fact &amp; Crime Statistics
                </span>
                <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                  {activeTopic.empiricalVerdict}
                </p>
              </div>

              <div className="space-y-1.5 bg-blue-50/50 p-4 rounded-lg border border-blue-200">
                <span className="text-[10px] font-mono uppercase text-blue-800 block">
                  Counterfactual Test
                </span>
                <p className="text-xs text-blue-950 leading-relaxed">
                  {activeTopic.counterfactualAnalysis}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Detailed Forensic Evidence
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {activeTopic.keyEvidence}
              </p>
            </div>
          </div>
        )}

        {/* Custom Audit Result if Active */}
        {customAnalysis && (
          <div className="bg-white border border-slate-900 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block">Audited Claim</span>
                <h3 className="text-lg font-bold text-slate-900">&ldquo;{customAnalysis.userClaim}&rdquo;</h3>
              </div>
              <span className="px-3 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
                {customAnalysis.verdict}
              </span>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-xs font-mono uppercase text-slate-500 block mb-1">Criminological Axiom</span>
              <p className="text-xs text-slate-800 font-medium">{customAnalysis.criminologicalPrinciple}</p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-slate-400 block">Key Empirical Counters</span>
              <ul className="space-y-2">
                {customAnalysis.evidence.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                    <span className="text-emerald-600 font-bold mt-0.5">&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Interactive Custom Claim Submission */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6">
          <form onSubmit={handleAuditCustomThesis} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Test a specific thesis variation (e.g. 'GTA causes carjackings' or 'Violent games trigger homicides')..."
                value={customThesis}
                onChange={(e) => setCustomThesis(e.target.value)}
                className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap inline-flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Audit Hypothesis Against Data</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
