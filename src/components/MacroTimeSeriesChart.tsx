import React, { useState, useMemo } from 'react';
import { HISTORICAL_DATA, TimeSeriesPoint } from '../data/criminologyData';
import { Info, HelpCircle, Check, Calendar, TrendingDown } from 'lucide-react';

export const MacroTimeSeriesChart: React.FC = () => {
  const [startYear, setStartYear] = useState<number>(1995);
  const [endYear, setEndYear] = useState<number>(2024);
  const [hoveredPoint, setHoveredPoint] = useState<TimeSeriesPoint | null>(null);

  // Dataset visibility toggles
  const [showUsHomicide, setShowUsHomicide] = useState(true);
  const [showGtaSales, setShowGtaSales] = useState(true);
  const [showUsViolentCrime, setShowUsViolentCrime] = useState(false);
  const [showYouthArrests, setShowYouthArrests] = useState(false);
  const [showUkHomicide, setShowUkHomicide] = useState(false);
  const [showJapanHomicide, setShowJapanHomicide] = useState(false);

  // Filtered dataset
  const filteredData = useMemo(() => {
    return HISTORICAL_DATA.filter(d => d.year >= startYear && d.year <= endYear);
  }, [startYear, endYear]);

  // Dynamic Pearson Correlation calculation between US Homicide Rate and Cumulative GTA Sales
  const correlationStats = useMemo(() => {
    const n = filteredData.length;
    if (n < 3) return { r: 0, r2: 0 };

    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;
    let sumY2 = 0;

    for (const d of filteredData) {
      const x = d.cumulativeGtaSalesM;
      const y = d.usHomicideRate;
      sumX += x;
      sumY += y;
      sumXY += x * y;
      sumX2 += x * x;
      sumY2 += y * y;
    }

    const numerator = n * sumXY - sumX * sumY;
    const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
    const r = denominator === 0 ? 0 : numerator / denominator;
    const r2 = r * r;

    return {
      r: Number(r.toFixed(3)),
      r2: Number(r2.toFixed(3))
    };
  }, [filteredData]);

  // Chart Dimensions
  const svgWidth = 1000;
  const svgHeight = 440;
  const padding = { top: 40, right: 70, bottom: 60, left: 70 };
  const chartW = svgWidth - padding.left - padding.right;
  const chartH = svgHeight - padding.top - padding.bottom;

  // Scales
  const minYear = startYear;
  const maxYear = endYear;
  const maxHomicide = 10.5; // per 100k
  const maxSales = 450; // Millions

  const getX = (year: number) => {
    return padding.left + ((year - minYear) / (maxYear - minYear || 1)) * chartW;
  };

  const getYHomicide = (val: number) => {
    return padding.top + chartH - (val / maxHomicide) * chartH;
  };

  const getYSales = (val: number) => {
    return padding.top + chartH - (val / maxSales) * chartH;
  };

  // Paths
  const homicidePath = useMemo(() => {
    return filteredData
      .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(d.year)} ${getYHomicide(d.usHomicideRate)}`)
      .join(' ');
  }, [filteredData, minYear, maxYear]);

  const salesPath = useMemo(() => {
    return filteredData
      .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(d.year)} ${getYSales(d.cumulativeGtaSalesM)}`)
      .join(' ');
  }, [filteredData, minYear, maxYear]);

  const salesAreaPath = useMemo(() => {
    if (filteredData.length === 0) return '';
    const firstX = getX(filteredData[0].year);
    const lastX = getX(filteredData[filteredData.length - 1].year);
    const baselineY = padding.top + chartH;
    return `${salesPath} L ${lastX} ${baselineY} L ${firstX} ${baselineY} Z`;
  }, [salesPath, filteredData, minYear, maxYear]);

  const violentCrimePath = useMemo(() => {
    // scaled to fit 0 - 1000 range into 0 - 10.5 axis (val / 70)
    return filteredData
      .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(d.year)} ${getYHomicide(d.usViolentCrimeRate / 70)}`)
      .join(' ');
  }, [filteredData, minYear, maxYear]);

  const youthArrestPath = useMemo(() => {
    // scaled to fit 0 - 500 range into 0 - 10.5 axis (val / 50)
    return filteredData
      .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(d.year)} ${getYHomicide(d.usYouthArrestsRate / 50)}`)
      .join(' ');
  }, [filteredData, minYear, maxYear]);

  const ukHomicidePath = useMemo(() => {
    return filteredData
      .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(d.year)} ${getYHomicide(d.ukHomicideRate)}`)
      .join(' ');
  }, [filteredData, minYear, maxYear]);

  const japanHomicidePath = useMemo(() => {
    return filteredData
      .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(d.year)} ${getYHomicide(d.japanHomicideRate)}`)
      .join(' ');
  }, [filteredData, minYear, maxYear]);

  const setPresetWindow = (start: number, end: number) => {
    setStartYear(start);
    setEndYear(end);
    setHoveredPoint(null);
  };

  return (
    <section id="macro" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block mb-1">
              01. Empirical Historical Time-Series (1995 – 2024)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Macro Criminological Timeline vs. GTA Franchise Expansion
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Inspect 30 years of official FBI Uniform Crime Reports, CDC mortality data, and global homicide records against cumulative Grand Theft Auto video game sales.
            </p>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
            <button
              type="button"
              onClick={() => setPresetWindow(1995, 2024)}
              className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${startYear === 1995 && endYear === 2024 ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Full Era (1995–2024)
            </button>
            <button
              type="button"
              onClick={() => setPresetWindow(1997, 2007)}
              className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${startYear === 1997 && endYear === 2007 ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              3D Golden Era (1997–2007)
            </button>
            <button
              type="button"
              onClick={() => setPresetWindow(2008, 2024)}
              className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${startYear === 2008 && endYear === 2024 ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              HD &amp; GTA V (2008–2024)
            </button>
          </div>
        </div>

        {/* Dataset Filter Toggles */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          <span className="text-xs font-mono text-slate-500 mr-2 uppercase tracking-wide">Data Series:</span>
          
          <button
            type="button"
            onClick={() => setShowUsHomicide(!showUsHomicide)}
            className={`cursor-pointer px-3 py-1.5 rounded-md text-xs font-medium border transition-colors inline-flex items-center gap-2 ${showUsHomicide ? 'bg-rose-50 border-rose-300 text-rose-900 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 inline-block" />
            <span>US Homicide Rate (per 100k)</span>
          </button>

          <button
            type="button"
            onClick={() => setShowGtaSales(!showGtaSales)}
            className={`cursor-pointer px-3 py-1.5 rounded-md text-xs font-medium border transition-colors inline-flex items-center gap-2 ${showGtaSales ? 'bg-blue-50 border-blue-300 text-blue-900 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
            <span>Cumulative GTA Sales (Millions)</span>
          </button>

          <button
            type="button"
            onClick={() => setShowUsViolentCrime(!showUsViolentCrime)}
            className={`cursor-pointer px-3 py-1.5 rounded-md text-xs font-medium border transition-colors inline-flex items-center gap-2 ${showUsViolentCrime ? 'bg-amber-50 border-amber-300 text-amber-900 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block" />
            <span>US Violent Crime Index</span>
          </button>

          <button
            type="button"
            onClick={() => setShowYouthArrests(!showYouthArrests)}
            className={`cursor-pointer px-3 py-1.5 rounded-md text-xs font-medium border transition-colors inline-flex items-center gap-2 ${showYouthArrests ? 'bg-purple-50 border-purple-300 text-purple-900 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 inline-block" />
            <span>Youth Violent Arrest Rate</span>
          </button>

          <button
            type="button"
            onClick={() => setShowUkHomicide(!showUkHomicide)}
            className={`cursor-pointer px-3 py-1.5 rounded-md text-xs font-medium border transition-colors inline-flex items-center gap-2 ${showUkHomicide ? 'bg-teal-50 border-teal-300 text-teal-900 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block" />
            <span>UK Homicide Rate</span>
          </button>

          <button
            type="button"
            onClick={() => setShowJapanHomicide(!showJapanHomicide)}
            className={`cursor-pointer px-3 py-1.5 rounded-md text-xs font-medium border transition-colors inline-flex items-center gap-2 ${showJapanHomicide ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
            <span>Japan Homicide Rate</span>
          </button>
        </div>

        {/* Statistical Summary Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <div>
            <span className="text-xs uppercase font-mono text-slate-500 block mb-0.5">Active Time Horizon</span>
            <span className="text-base font-semibold text-slate-900 font-mono tabular-nums">
              {startYear} &ndash; {endYear} ({endYear - startYear + 1} Years Analyzed)
            </span>
          </div>

          <div>
            <span className="text-xs uppercase font-mono text-slate-500 block mb-0.5">Calculated Pearson r</span>
            <div className="flex items-center gap-2">
              <span className={`text-base font-bold font-mono tabular-nums ${correlationStats.r < -0.4 ? 'text-emerald-700' : 'text-slate-900'}`}>
                r = {correlationStats.r}
              </span>
              <span className="text-xs text-slate-500">
                ({correlationStats.r < -0.5 ? 'Strong Negative / Inverse' : correlationStats.r < 0 ? 'Moderate Negative' : 'Positive'})
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase font-mono text-slate-500 block mb-0.5">Statistical Inference</span>
            <span className="text-xs text-slate-700 leading-tight block">
              {correlationStats.r < -0.6 
                ? 'Homicides consistently decreased as GTA sales increased; causal hypothesis of elevated murder is rejected.'
                : 'Data shows no positive covariance between game adoption and lethal crime.'}
            </span>
          </div>
        </div>

        {/* SVG Time Series Graph */}
        <div className="mt-6 border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-600" /> Left Axis: Homicide Rate / 100k
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600" /> Right Axis: Cumulative GTA Sales (Millions)
            </span>
          </div>

          <div className="relative w-full overflow-x-auto">
            <svg 
              viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
              className="w-full h-auto min-w-[700px] select-none"
            >
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.01" />
                </linearGradient>
              </defs>

              {/* Grid Lines (Homicide Axis) */}
              {[2, 4, 6, 8, 10].map(hVal => {
                const y = getYHomicide(hVal);
                return (
                  <g key={hVal}>
                    <line 
                      x1={padding.left} 
                      y1={y} 
                      x2={svgWidth - padding.right} 
                      y2={y} 
                      stroke="#E2E8F0" 
                      strokeDasharray="4 4" 
                    />
                    <text 
                      x={padding.left - 12} 
                      y={y + 4} 
                      textAnchor="end" 
                      className="text-[11px] font-mono fill-slate-400 tabular-nums"
                    >
                      {hVal}.0
                    </text>
                  </g>
                );
              })}

              {/* Right Axis Tick Labels (GTA Sales) */}
              {[0, 100, 200, 300, 400].map(sVal => {
                const y = getYSales(sVal);
                return (
                  <text 
                    key={sVal} 
                    x={svgWidth - padding.right + 12} 
                    y={y + 4} 
                    textAnchor="start" 
                    className="text-[11px] font-mono fill-blue-500 tabular-nums"
                  >
                    {sVal}M
                  </text>
                );
              })}

              {/* Year Vertical Grid & Labels */}
              {filteredData.map(d => {
                const x = getX(d.year);
                const isEvery5 = d.year % 5 === 0;
                return (
                  <g key={d.year}>
                    {isEvery5 && (
                      <line 
                        x1={x} 
                        y1={padding.top} 
                        x2={x} 
                        y2={padding.top + chartH} 
                        stroke="#F1F5F9" 
                      />
                    )}
                    {isEvery5 && (
                      <text 
                        x={x} 
                        y={padding.top + chartH + 24} 
                        textAnchor="middle" 
                        className="text-[11px] font-mono fill-slate-500 tabular-nums"
                      >
                        {d.year}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Sales Area & Line (Right Axis) */}
              {showGtaSales && (
                <>
                  <path d={salesAreaPath} fill="url(#salesGradient)" />
                  <path 
                    d={salesPath} 
                    fill="none" 
                    stroke="#2563EB" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                  />
                </>
              )}

              {/* US Violent Crime Index Path */}
              {showUsViolentCrime && (
                <path 
                  d={violentCrimePath} 
                  fill="none" 
                  stroke="#D97706" 
                  strokeWidth="2" 
                  strokeDasharray="6 3" 
                />
              )}

              {/* US Youth Arrests Path */}
              {showYouthArrests && (
                <path 
                  d={youthArrestPath} 
                  fill="none" 
                  stroke="#9333EA" 
                  strokeWidth="2" 
                  strokeDasharray="4 2" 
                />
              )}

              {/* UK Homicide Path */}
              {showUkHomicide && (
                <path 
                  d={ukHomicidePath} 
                  fill="none" 
                  stroke="#0D9488" 
                  strokeWidth="2" 
                />
              )}

              {/* Japan Homicide Path */}
              {showJapanHomicide && (
                <path 
                  d={japanHomicidePath} 
                  fill="none" 
                  stroke="#059669" 
                  strokeWidth="2" 
                />
              )}

              {/* US Homicide Line (Left Axis) */}
              {showUsHomicide && (
                <path 
                  d={homicidePath} 
                  fill="none" 
                  stroke="#E11D48" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                />
              )}

              {/* GTA Release Markers & Data Points */}
              {filteredData.map(d => {
                const x = getX(d.year);
                const yHomicide = getYHomicide(d.usHomicideRate);
                const hasRelease = Boolean(d.gtaRelease);
                const isHovered = hoveredPoint?.year === d.year;

                return (
                  <g key={d.year}>
                    {/* Homicide point dot */}
                    {showUsHomicide && (
                      <circle 
                        cx={x} 
                        cy={yHomicide} 
                        r={isHovered ? 6 : (hasRelease ? 4.5 : 3)} 
                        fill={hasRelease ? "#B91C1C" : "#E11D48"} 
                        stroke="#FFFFFF" 
                        strokeWidth="1.5"
                        className="transition-all"
                      />
                    )}

                    {/* Game Launch Flag on timeline */}
                    {hasRelease && (
                      <g 
                        className="cursor-pointer" 
                        onClick={() => setHoveredPoint(d)}
                      >
                        <line 
                          x1={x} 
                          y1={padding.top} 
                          x2={x} 
                          y2={padding.top + chartH} 
                          stroke="#2563EB" 
                          strokeWidth="1" 
                          strokeDasharray="3 3" 
                          opacity="0.6"
                        />
                        <rect 
                          x={x - 18} 
                          y={padding.top - 24} 
                          width="36" 
                          height="18" 
                          rx="3" 
                          fill="#1E293B" 
                        />
                        <text 
                          x={x} 
                          y={padding.top - 12} 
                          textAnchor="middle" 
                          className="text-[9px] font-mono font-bold fill-white"
                        >
                          GTA
                        </text>
                      </g>
                    )}

                    {/* Interactive hit areas */}
                    <rect 
                      x={x - (chartW / filteredData.length) / 2} 
                      y={padding.top} 
                      width={chartW / filteredData.length} 
                      height={chartH + 30} 
                      fill="transparent" 
                      className="cursor-crosshair"
                      onMouseEnter={() => setHoveredPoint(d)}
                    />
                  </g>
                );
              })}

              {/* Crosshair on hover */}
              {hoveredPoint && (
                <g>
                  <line 
                    x1={getX(hoveredPoint.year)} 
                    y1={padding.top} 
                    x2={getX(hoveredPoint.year)} 
                    y2={padding.top + chartH} 
                    stroke="#475569" 
                    strokeWidth="1.5" 
                  />
                </g>
              )}
            </svg>
          </div>

          {/* Interactive HUD Readout */}
          <div className="p-4 bg-slate-50 border-t border-slate-200">
            {hoveredPoint ? (
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold font-mono text-slate-900 tabular-nums">
                      Year: {hoveredPoint.year}
                    </span>
                    {hoveredPoint.gtaRelease && (
                      <span className="px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-200">
                        Milestone: {hoveredPoint.gtaRelease.title}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 max-w-2xl">
                    {hoveredPoint.gtaRelease ? hoveredPoint.gtaRelease.description : hoveredPoint.macroContext}
                  </p>
                </div>

                <div className="flex items-center gap-6 font-mono text-xs tabular-nums shrink-0">
                  <div className="bg-white px-3 py-2 rounded border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase">US Homicide Rate</span>
                    <span className="text-sm font-bold text-rose-600">{hoveredPoint.usHomicideRate.toFixed(2)}</span>
                    <span className="text-slate-400 text-[10px]"> /100k</span>
                  </div>

                  <div className="bg-white px-3 py-2 rounded border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase">Cumulative GTA Sales</span>
                    <span className="text-sm font-bold text-blue-600">{hoveredPoint.cumulativeGtaSalesM}M</span>
                    <span className="text-slate-400 text-[10px]"> copies</span>
                  </div>

                  <div className="bg-white px-3 py-2 rounded border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase">US Violent Crime</span>
                    <span className="text-sm font-bold text-amber-600">{hoveredPoint.usViolentCrimeRate.toFixed(1)}</span>
                    <span className="text-slate-400 text-[10px]"> /100k</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-slate-400" />
                  Hover or scrub across any year on the chart to inspect empirical crime rates and historical GTA release events.
                </span>
                <span className="font-mono text-slate-400">Sources: FBI Uniform Crime Reporting, CDC WONDER, Rockstar Games financial disclosures</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
