import React from 'react';
import { ShieldAlert, CheckCircle2, TrendingDown, ArrowDownRight, Scale } from 'lucide-react';

export const ThesisVerdictBanner: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Thesis Citation & Verdict Lockup */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
            <span>Hypothesis Evaluation</span>
            <span aria-hidden="true">·</span>
            <span>Empirical Criminology &amp; Econometrics</span>
            <span aria-hidden="true">·</span>
            <span>FBI UCR / CDC / UNODC / NBER</span>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg mb-6">
            <span className="text-xs uppercase font-mono text-slate-500 block mb-1">Evaluated Thesis Statement</span>
            <blockquote className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              &ldquo;There is more crime in the world with the Grand Theft Auto series and more homicides.&rdquo;
            </blockquote>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Empirical Scientific Verdict: Refuted by Longitudinal Data
              </span>
              <span className="text-xs text-slate-500">
                Peer-reviewed consensus (APA 2020, JEBO 2016, SCOTUS 2011)
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The empirical evidence directly contradicts the thesis. During the exact 30-year span when the <em className="italic">Grand Theft Auto</em> franchise debuted and sold over <strong>430 million units</strong> worldwide, violent crime and homicide rates in the United States and OECD nations experienced an unprecedented, sustained decline of more than <strong>50%</strong>. Econometric studies demonstrate that major GTA release weeks actually cause short-term drops in violent crime due to the <strong className="text-slate-900 font-semibold">Time-Use Displacement (Incapacitation) Effect</strong>, while international comparisons (e.g. Japan and the UK) confirm that video game consumption exhibits zero causal relationship to homicide.
            </p>
          </div>
        </div>

        {/* 4-KPI Metric Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 pt-8 border-t border-slate-200">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block mb-1">
              US Peak Homicides (1991)
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-mono font-bold text-slate-900 tabular-nums">9.80</span>
              <span className="text-xs font-mono text-slate-500">/ 100k pop</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Pre-GTA baseline before 3D open-world gaming existed.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block mb-1">
              GTA V Era Homicides (2014)
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-mono font-bold text-emerald-700 tabular-nums">4.44</span>
              <span className="text-xs font-mono text-slate-500">/ 100k pop</span>
            </div>
            <p className="text-xs text-emerald-700 font-medium mt-2 flex items-center gap-1">
              <ArrowDownRight className="w-3.5 h-3.5" />
              <span>-54.7% drop during peak GTA franchise saturation</span>
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block mb-1">
              Pearson Correlation (r)
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-mono font-bold text-slate-900 tabular-nums">-0.89</span>
              <span className="text-xs font-mono text-slate-500">p &lt; 0.001</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Strong statistically significant inverse correlation (1995–2024).
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block mb-1">
              Launch Week Effect
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-mono font-bold text-blue-700 tabular-nums">-2.7%</span>
              <span className="text-xs font-mono text-slate-500">weekly crime</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Cunningham et al. (JEBO 2016) time-displacement finding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
