import React, { useState, useMemo } from 'react';
import { PEER_REVIEWED_STUDIES, PeerReviewedStudy } from '../data/criminologyData';
import { BookOpen, Search, ExternalLink, ChevronDown, ChevronUp, CheckCircle, Scale, ShieldAlert } from 'lucide-react';

export const PeerReviewedDossier: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('cunningham-2016');

  const categories = ['All', 'Econometric', 'Longitudinal', 'Meta-Analysis', 'Institutional Consensus'];

  const filteredStudies = useMemo(() => {
    return PEER_REVIEWED_STUDIES.filter(study => {
      const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
      const matchesSearch = 
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.coreFinding.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="studies" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block mb-1">
              05. Academic Scientific Archive
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Peer-Reviewed Literature &amp; Empirical Studies
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Examine the actual peer-reviewed studies published in top-tier economics, criminology, and psychology journals that evaluated whether video games like Grand Theft Auto increase violent crime.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search studies, authors, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 text-slate-900"
            />
          </div>
        </div>

        {/* Category Filter Pills (Functional Buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 mt-6 mb-8 p-1 bg-slate-100 rounded-lg w-fit">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedCategory === cat
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Studies List */}
        <div className="space-y-4">
          {filteredStudies.map((study) => {
            const isExpanded = expandedId === study.id;
            return (
              <div
                key={study.id}
                className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleExpand(study.id)}
                  className="cursor-pointer w-full text-left p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-mono">
                      <span className="font-semibold text-slate-700">{study.authors}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{study.year}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span className="text-slate-600">{study.category}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {study.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-serif italic">
                      {study.journal}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${
                      study.impactOnThesis === 'Refutes Causality' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                      study.impactOnThesis === 'Provides Mechanism' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                      study.impactOnThesis === 'Debunks Lab Proxies' ? 'bg-purple-50 text-purple-800 border-purple-200' :
                      'bg-slate-100 text-slate-800 border-slate-200'
                    }`}>
                      {study.impactOnThesis}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <span className="font-mono uppercase text-slate-400 block mb-1">
                          Sample Size &amp; Data Sources
                        </span>
                        <p className="text-slate-800 font-medium">
                          {study.sampleSize}
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <span className="font-mono uppercase text-slate-400 block mb-1">
                          Research Methodology
                        </span>
                        <p className="text-slate-800">
                          {study.methodology}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <span className="font-mono uppercase text-slate-400 block mb-1 text-xs">
                        Core Empirical Finding
                      </span>
                      <p className="text-sm text-slate-900 leading-relaxed font-medium">
                        &ldquo;{study.coreFinding}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 text-xs font-mono text-slate-500">
                      <span>DOI / Index: {study.doi}</span>
                      <span className="text-slate-400">Archived in National Library of Medicine &amp; NBER</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
