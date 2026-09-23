import React, { useState } from 'react';
import { SCREEN_REGISTRY, type ScreenItem } from './registry';

interface CatalogProps {
  currentScreenId: string;
  onSelectScreen: (id: string) => void;
  children: React.ReactNode;
}

export const CatalogDrawer: React.FC<CatalogProps> = ({
  currentScreenId,
  onSelectScreen,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedZone, setSelectedZone] = useState<'ALL' | 'A' | 'B' | 'C'>('ALL');
  const [search, setSearch] = useState('');

  const currentScreen: ScreenItem = SCREEN_REGISTRY.find(s => s.id === currentScreenId) || SCREEN_REGISTRY[0];

  const filteredScreens = SCREEN_REGISTRY.filter(screen => {
    const matchesZone = selectedZone === 'ALL' || screen.zone === selectedZone;
    const matchesSearch = screen.title.toLowerCase().includes(search.toLowerCase()) ||
                          screen.category.toLowerCase().includes(search.toLowerCase()) ||
                          screen.id.toLowerCase().includes(search.toLowerCase());
    return matchesZone && matchesSearch;
  });

  return (
    <div className="relative min-h-screen">
      {/* Floating Catalog Launcher */}
      <div className="fixed bottom-4 left-4 z-[9999]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0A2540] text-white rounded-full shadow-2xl hover:bg-[#00A9A5] transition-all font-semibold text-xs tracking-wide uppercase border border-white/20"
        >
          <span className="material-symbols-outlined text-[18px]">grid_view</span>
          <span>Sélecteur Maquettes ({SCREEN_REGISTRY.length})</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
            currentScreen.zone === 'A' ? 'bg-blue-500 text-white' :
            currentScreen.zone === 'B' ? 'bg-teal-500 text-white' :
            'bg-amber-500 text-slate-900'
          }`}>
            Zone {currentScreen.zone}
          </span>
        </button>
      </div>

      {/* Catalog Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[99999] bg-slate-900/60 backdrop-blur-sm flex justify-start">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-r border-slate-200">
            {/* Header */}
            <div className="p-4 bg-[#0A2540] text-white flex items-center justify-between">
              <div>
                <h2 className="font-bold text-base flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00A9A5]">school</span>
                  PRO-LOOKUP Maquettes
                </h2>
                <p className="text-xs text-slate-300">Catalogue de fidélité — Université ZTF</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Filters */}
            <div className="p-3 bg-slate-50 border-b border-slate-200 space-y-2">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
                <input
                  type="text"
                  placeholder="Rechercher une maquette..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-[#00A9A5]"
                />
              </div>

              <div className="flex gap-1">
                {(['ALL', 'A', 'B', 'C'] as const).map(zone => (
                  <button
                    key={zone}
                    onClick={() => setSelectedZone(zone)}
                    className={`flex-1 py-1 rounded text-xs font-semibold transition-colors ${
                      selectedZone === zone
                        ? 'bg-[#0A2540] text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {zone === 'ALL' ? 'Tous (48)' : `Zone ${zone}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Screen List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              {filteredScreens.map((screen) => {
                const isActive = screen.id === currentScreenId;
                return (
                  <button
                    key={screen.id}
                    onClick={() => {
                      onSelectScreen(screen.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg text-xs transition-all flex items-center justify-between border ${
                      isActive
                        ? 'bg-teal-50 border-[#00A9A5] text-[#0A2540] font-semibold shadow-sm'
                        : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex flex-col pr-2">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${
                          screen.zone === 'A' ? 'bg-blue-500' :
                          screen.zone === 'B' ? 'bg-teal-500' : 'bg-amber-500'
                        }`} />
                        <span className="font-medium text-slate-900">{screen.title}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 ml-3.5">{screen.category}</span>
                    </div>

                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 uppercase border border-slate-200 flex-shrink-0">
                      Zone {screen.zone}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Footer info */}
            <div className="p-3 bg-slate-100 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between items-center">
              <span>Écran actif: <strong className="text-slate-800">{currentScreen.title}</strong></span>
              <span className="text-slate-400">Université ZTF</span>
            </div>
          </div>
        </div>
      )}

      {/* Actual Screen Content */}
      <main className="w-full min-h-screen">
        {children}
      </main>
    </div>
  );
};
