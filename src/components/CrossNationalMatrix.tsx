import React, { useState } from 'react';
import { CROSS_NATIONAL_DATA, CrossNationalPoint } from '../data/criminologyData';
import { Globe, ArrowUpDown, Shield, AlertTriangle, Info } from 'lucide-react';

export const CrossNationalMatrix: React.FC = () => {
  const [sortField, setSortField] = useState<keyof CrossNationalPoint>('homicideRatePer100k');
  const [sortAsc, setSortAsc] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<CrossNationalPoint>(CROSS_NATIONAL_DATA[0]);

  const handleSort = (field: keyof CrossNationalPoint) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  const sortedData = [...CROSS_NATIONAL_DATA].sort((a, b) => {
    const aVal = a[sortField];
    const bVal = b[sortField];
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortAsc ? aVal - bVal : bVal - aVal;
    }
    return 0;
  });

  return (
    <section id="global" className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block mb-1">
            04. Cross-National Epidemiological Analysis
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            The International Paradox: Testing GTA Across Borders
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            If Grand Theft Auto drove global crime and homicides, countries with the highest video game consumption per capita would suffer the highest rates of lethal violence. The international data reveals the exact opposite.
          </p>
        </div>

        {/* 2-Column Split: Interactive Table + Selected Country Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase text-slate-700">
                Cross-National Homicide vs. Video Game Consumption (UNODC &amp; Newzoo)
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Click column headers to sort
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-mono uppercase tracking-wider">
                    <th className="py-3 px-4 font-semibold">Country</th>
                    <th 
                      onClick={() => handleSort('homicideRatePer100k')}
                      className="py-3 px-4 font-semibold cursor-pointer hover:text-slate-900"
                    >
                      <div className="flex items-center gap-1">
                        <span>Homicide Rate</span>
                        <ArrowUpDown className="w-3 h-3 text-slate-400" />
                      </div>
                    </th>
                    <th 
                      onClick={() => handleSort('videoGameRevenuePerCapitaUsd')}
                      className="py-3 px-4 font-semibold cursor-pointer hover:text-slate-900"
                    >
                      <div className="flex items-center gap-1">
                        <span>Gaming Spend / Cap</span>
                        <ArrowUpDown className="w-3 h-3 text-slate-400" />
                      </div>
                    </th>
                    <th 
                      onClick={() => handleSort('firearmsPer100People')}
                      className="py-3 px-4 font-semibold cursor-pointer hover:text-slate-900 hidden sm:table-cell"
                    >
                      <div className="flex items-center gap-1">
                        <span>Firearms / 100</span>
                        <ArrowUpDown className="w-3 h-3 text-slate-400" />
                      </div>
                    </th>
                    <th 
                      onClick={() => handleSort('youthPovertyPct')}
                      className="py-3 px-4 font-semibold cursor-pointer hover:text-slate-900 hidden sm:table-cell"
                    >
                      <div className="flex items-center gap-1">
                        <span>Poverty %</span>
                        <ArrowUpDown className="w-3 h-3 text-slate-400" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sortedData.map((item) => {
                    const isSelected = selectedCountry.country === item.country;
                    return (
                      <tr 
                        key={item.country}
                        onClick={() => setSelectedCountry(item)}
                        className={`cursor-pointer transition-colors ${isSelected ? 'bg-blue-50/70 font-medium' : 'hover:bg-slate-50'}`}
                      >
                        <td className="py-3.5 px-4 font-medium text-slate-900 flex items-center gap-2">
                          <span className="text-base" role="img" aria-label={item.country}>{item.flag}</span>
                          <span>{item.country}</span>
                        </td>
                        <td className="py-3.5 px-4 font-mono tabular-nums">
                          <span className={`font-semibold ${item.homicideRatePer100k > 5 ? 'text-rose-600' : 'text-slate-700'}`}>
                            {item.homicideRatePer100k.toFixed(2)}
                          </span>
                          <span className="text-slate-400 text-[10px]"> /100k</span>
                        </td>
                        <td className="py-3.5 px-4 font-mono tabular-nums text-slate-700">
                          ${item.videoGameRevenuePerCapitaUsd.toFixed(1)}
                        </td>
                        <td className="py-3.5 px-4 font-mono tabular-nums text-slate-600 hidden sm:table-cell">
                          {item.firearmsPer100People.toFixed(1)}
                        </td>
                        <td className="py-3.5 px-4 font-mono tabular-nums text-slate-600 hidden sm:table-cell">
                          {item.youthPovertyPct.toFixed(1)}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Selected Country Dossier Card (4 cols) */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
              <span className="text-3xl" role="img" aria-label={selectedCountry.country}>
                {selectedCountry.flag}
              </span>
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block">Country Profile</span>
                <h3 className="text-lg font-bold text-slate-900">{selectedCountry.country}</h3>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded bg-slate-50 border border-slate-100">
                <span className="text-slate-500">Homicide Rate (UNODC)</span>
                <span className="font-bold text-slate-900 tabular-nums">
                  {selectedCountry.homicideRatePer100k} / 100,000
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded bg-slate-50 border border-slate-100">
                <span className="text-slate-500">Video Game Spend / Person</span>
                <span className="font-bold text-blue-700 tabular-nums">
                  ${selectedCountry.videoGameRevenuePerCapitaUsd} USD
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded bg-slate-50 border border-slate-100">
                <span className="text-slate-500">GTA V Density / 10k Pop</span>
                <span className="font-bold text-slate-900 tabular-nums">
                  ~{selectedCountry.gtaCopiesPer10kResidents} copies
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded bg-slate-50 border border-slate-100">
                <span className="text-slate-500">Civilian Firearms / 100</span>
                <span className="font-bold text-slate-900 tabular-nums">
                  {selectedCountry.firearmsPer100People}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Criminological Key Takeaway
              </span>
              <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                {selectedCountry.criminologicalKey}
              </p>
            </div>
          </div>
        </div>

        {/* Criminological Conclusion Box */}
        <div className="mt-8 p-6 bg-white border border-slate-200 rounded-xl">
          <h4 className="text-sm font-bold text-slate-900 mb-2">
            Why Pop Culture Cannot Explain Macro Homicide Discrepancies
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">
            In comparative criminology, if an alleged causal agent (like playing violent video games) is equally prevalent in Country A (Japan) and Country B (United States), but Country B exhibits <strong>25 times more homicides</strong>, the alleged factor cannot be the primary driver. The variance is driven by structural determinants: access to lethal firearms (120 per 100 in the US vs 0.3 in Japan), concentrated poverty, and judicial/healthcare infrastructures.
          </p>
        </div>
      </div>
    </section>
  );
};
