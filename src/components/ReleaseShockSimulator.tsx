import React, { useState, useMemo } from 'react';
import { Sliders, RotateCcw, ShieldCheck, TrendingDown, Info, Flame } from 'lucide-react';

export const ReleaseShockSimulator: React.FC = () => {
  // Parameters
  const [displacementRate, setDisplacementRate] = useState<number>(75); // 0 to 100%
  const [agitationBias, setAgitationBias] = useState<number>(10); // 0 to 100% (hypothetical priming)
  const [gameScale, setGameScale] = useState<'blockbuster' | 'standard'>('blockbuster');

  // Days: -15 to +35 relative to launch (Day 0)
  const days = useMemo(() => {
    const list: number[] = [];
    for (let d = -15; d <= 35; d += 1) {
      list.push(d);
    }
    return list;
  }, []);

  // Compute Crime Index: Baseline = 100
  const simulationData = useMemo(() => {
    const scaleMultiplier = gameScale === 'blockbuster' ? 1.0 : 0.45;

    return days.map(d => {
      // Baseline with natural random variance
      const naturalVariance = Math.sin(d / 3.5) * 1.5;
      let baseCrime = 100 + naturalVariance;

      // Incapacitation effect decays over ~21 days post launch
      let incapacitationDip = 0;
      if (d >= 0 && d <= 28) {
        // Peak impact in week 1 (days 0 to 7)
        const intensity = Math.exp(-d / 10.0);
        incapacitationDip = (displacementRate / 100) * 4.8 * intensity * scaleMultiplier;
      }

      // Theoretical agitation / priming bump
      let agitationBump = 0;
      if (d >= 0 && d <= 28) {
        const intensity = Math.exp(-d / 12.0);
        agitationBump = (agitationBias / 100) * 3.5 * intensity * scaleMultiplier;
      }

      const netSimulatedCrime = baseCrime - incapacitationDip + agitationBump;

      // Cunningham 2016 empirical observed curve (dip of ~3% in first 2 weeks)
      let empiricalCrime = baseCrime;
      if (d >= 0 && d <= 21) {
        const cunninghamDip = 3.1 * Math.exp(-d / 8.5) * scaleMultiplier;
        empiricalCrime -= cunninghamDip;
      }

      return {
        day: d,
        netCrime: Number(netSimulatedCrime.toFixed(2)),
        empiricalCrime: Number(empiricalCrime.toFixed(2)),
        incapacitationDip: Number(incapacitationDip.toFixed(2)),
        agitationBump: Number(agitationBump.toFixed(2))
      };
    });
  }, [days, displacementRate, agitationBias, gameScale]);

  // Chart Dimensions
  const svgWidth = 840;
  const svgHeight = 280;
  const padding = { top: 30, right: 30, bottom: 40, left: 50 };
  const w = svgWidth - padding.left - padding.right;
  const h = svgHeight - padding.top - padding.bottom;

  const minCrime = 92;
  const maxCrime = 108;

  const getX = (day: number) => {
    return padding.left + ((day - (-15)) / (35 - (-15))) * w;
  };

  const getY = (val: number) => {
    return padding.top + h - ((val - minCrime) / (maxCrime - minCrime)) * h;
  };

  const simulatedPath = simulationData
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(p.day)} ${getY(p.netCrime)}`)
    .join(' ');

  const empiricalPath = simulationData
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(p.day)} ${getY(p.empiricalCrime)}`)
    .join(' ');

  const resetDefaults = () => {
    setDisplacementRate(75);
    setAgitationBias(10);
    setGameScale('blockbuster');
  };

  // Launch week delta
  const launchWeekSimulated = simulationData.find(p => p.day === 3)?.netCrime ?? 100;
  const launchWeekDelta = launchWeekSimulated - 100;

  return (
    <section id="shock" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block mb-1">
              03. Econometric Quasi-Experiment (Cunningham et al. JEBO 2016)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              GTA &ldquo;Release Shock&rdquo; Crime Simulator
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Model what happens to street violence during the 50 days surrounding a major GTA launch. Test the competing weights of indoor time-displacement against hypothetical behavioral agitation.
            </p>
          </div>

          <button
            type="button"
            onClick={resetDefaults}
            className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Cunningham 2016 Baseline</span>
          </button>
        </div>

        {/* 2-Column Split: Controls + Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
          {/* Left Parameter Panel (4 cols) */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="displacement-slider" className="text-xs font-semibold text-slate-900">
                  Voluntary Indoor Confinement Rate
                </label>
                <span className="text-xs font-mono font-bold text-blue-700">{displacementRate}%</span>
              </div>
              <input
                id="displacement-slider"
                type="range"
                min="0"
                max="100"
                value={displacementRate}
                onChange={(e) => setDisplacementRate(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                Percentage of young male cohort spending weekend peak crime hours playing indoors rather than outdoors in night venues.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="agitation-slider" className="text-xs font-semibold text-slate-900">
                  Hypothetical Violent Agitation Bias
                </label>
                <span className="text-xs font-mono font-bold text-rose-700">{agitationBias}%</span>
              </div>
              <input
                id="agitation-slider"
                type="range"
                min="0"
                max="100"
                value={agitationBias}
                onChange={(e) => setAgitationBias(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
              />
              <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                The theoretical GAM parameter: hypothetical propensity for virtual violence to prime real-world criminal aggression.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <label className="text-xs font-semibold text-slate-900 block mb-2">
                Release Magnitude
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGameScale('blockbuster')}
                  className={`cursor-pointer px-3 py-2 text-xs font-medium rounded-md border text-center transition-colors ${
                    gameScale === 'blockbuster'
                      ? 'bg-white border-slate-900 text-slate-900 font-semibold shadow-sm'
                      : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-white'
                  }`}
                >
                  Blockbuster (e.g. GTA V)
                </button>
                <button
                  type="button"
                  onClick={() => setGameScale('standard')}
                  className={`cursor-pointer px-3 py-2 text-xs font-medium rounded-md border text-center transition-colors ${
                    gameScale === 'standard'
                      ? 'bg-white border-slate-900 text-slate-900 font-semibold shadow-sm'
                      : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-white'
                  }`}
                >
                  Standard Launch (e.g. GTA 2)
                </button>
              </div>
            </div>

            {/* Simulated Outcome Card */}
            <div className="p-4 rounded-lg bg-white border border-slate-200">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                Net Launch Week 1 Crime Shift
              </span>
              <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-mono font-bold tabular-nums ${launchWeekDelta < 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                  {launchWeekDelta > 0 ? `+${launchWeekDelta.toFixed(1)}%` : `${launchWeekDelta.toFixed(1)}%`}
                </span>
                <span className="text-xs text-slate-500">vs 100 baseline</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-2">
                {launchWeekDelta < 0 
                  ? 'Incapacitation dominates: Young adults at home cannot commit street homicides or assaults.'
                  : 'Requires an unrealistically massive agitation factor not documented in any municipal police registry.'}
              </p>
            </div>
          </div>

          {/* Right Chart Visualization (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4 text-xs font-mono">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-blue-700 font-medium">
                  <span className="w-2.5 h-0.5 bg-blue-600 inline-block" />
                  Your Simulation Model
                </span>
                <span className="flex items-center gap-1.5 text-slate-500">
                  <span className="w-2.5 h-0.5 bg-slate-400 border-b border-dashed inline-block" />
                  Observed NBER / JEBO Curve (Cunningham 2016)
                </span>
              </div>
              <span className="text-slate-400">Baseline = 100.0</span>
            </div>

            <div className="relative overflow-x-auto">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto min-w-[550px] select-none">
                {/* Horizontal Baseline (100) */}
                <line
                  x1={padding.left}
                  y1={getY(100)}
                  x2={svgWidth - padding.right}
                  y2={getY(100)}
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <text
                  x={padding.left - 8}
                  y={getY(100) + 4}
                  textAnchor="end"
                  className="text-[10px] font-mono fill-slate-500 tabular-nums"
                >
                  100.0
                </text>

                {/* Day 0 Launch Marker */}
                <line
                  x1={getX(0)}
                  y1={padding.top}
                  x2={getX(0)}
                  y2={padding.top + h}
                  stroke="#2563EB"
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                />
                <rect
                  x={getX(0) - 40}
                  y={padding.top - 20}
                  width="80"
                  height="18"
                  rx="3"
                  fill="#1E293B"
                />
                <text
                  x={getX(0)}
                  y={padding.top - 8}
                  textAnchor="middle"
                  className="text-[9px] font-mono font-bold fill-white"
                >
                  Day 0: Launch
                </text>

                {/* Grid ticks for days */}
                {[-10, 0, 10, 20, 30].map(d => (
                  <text
                    key={d}
                    x={getX(d)}
                    y={padding.top + h + 20}
                    textAnchor="middle"
                    className="text-[10px] font-mono fill-slate-400 tabular-nums"
                  >
                    {d === 0 ? 'Launch' : d > 0 ? `+${d}d` : `${d}d`}
                  </text>
                ))}

                {/* Empirical JEBO 2016 Curve */}
                <path
                  d={empiricalPath}
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />

                {/* Simulated Curve */}
                <path
                  d={simulatedPath}
                  fill="none"
                  stroke={launchWeekDelta < 0 ? "#2563EB" : "#DC2626"}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-semibold">Key Empirical Finding:</strong> Cunningham, Engelhardt, and Ward examined city-level weekly crime logs across dozens of American metropolitan police departments during releases of violent games including <em className="italic">GTA: Vice City</em>, <em className="italic">San Andreas</em>, and <em className="italic">GTA IV</em>. They found that in week 1 and week 2 following launch, violent offenses plummeted by an average of <strong>2.1% to 3.4%</strong>. The reason: millions of young men who represent the statistical demographic with the highest risk of committing or being victimized by street assaults were engaged at home.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
