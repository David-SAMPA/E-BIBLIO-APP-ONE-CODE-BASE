import React, { useState } from 'react';

interface LayoutAdminProps {
  children: React.ReactNode;
  activeItem?: 'dashboard' | 'demandes' | 'membres' | 'creation' | 'rangs';
  onNavigate?: (path: string) => void;
}

export const LayoutAdmin: React.FC<LayoutAdminProps> = ({
  children,
  activeItem = 'dashboard',
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard', path: 'tableau_de_bord_administrateur_desktop_pro_lookup_1' },
    { id: 'demandes', label: 'Demandes en attente', icon: 'pending_actions', path: 'demandes_en_attente_arbitrage_pleine_page_zone_c', badge: '12' },
    { id: 'membres', label: 'Tous les membres', icon: 'group', path: 'tous_les_membres_annuaire_gestion_administrative_zone_c' },
    { id: 'creation', label: 'Enrôlement Rectoral', icon: 'person_add', path: 'cr_ation_directe_de_membre_enr_lement_rectoral_zone_c' },
    { id: 'rangs', label: 'Gestion des rangs', icon: 'military_tech', path: 'gestion_des_rangs_acad_miques_pr_rogatives_zone_c' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FB] flex flex-col font-sans">
      {/* Mobile Header with Burger */}
      <header className="lg:hidden h-16 bg-[#0A2540] text-white flex items-center justify-between px-4 sticky top-0 z-40 border-b border-white/10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
          <div className="flex items-center gap-2">
            <img src="/assets/pro_lookup_logo.png" alt="Logo" className="h-6 w-auto" />
            <span className="font-bold text-sm">Zone C — Administration ZTF</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-900 uppercase">
            Admin
          </span>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Mobile Backdrop Overlay */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          />
        )}

        {/* Independent Scrollable Sidebar */}
        <aside className={`
          fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#0A2540] text-white flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto border-r border-white/10
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          {/* Sidebar Top Identity */}
          <div className="h-16 flex items-center gap-3 px-6 border-b border-white/10 flex-shrink-0 bg-[#071B2F]">
            <img src="/assets/pro_lookup_logo.png" alt="Logo" className="h-8 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white">PRO-LOOKUP</span>
              <span className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase">Université ZTF Admin</span>
            </div>
          </div>

          {/* Independent Scroll Navigation Section */}
          <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            <div className="px-3 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Navigation Rectorale
            </div>

            {navItems.map((item) => {
              const isActive = item.id === activeItem;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate?.(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#00A9A5] text-white shadow-md'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive ? 'bg-white text-[#00A9A5]' : 'bg-red-500 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Admin Info Bottom Banner */}
          <div className="p-4 border-t border-white/10 bg-[#071B2F] flex flex-col gap-2 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Pr. Jean-Paul Onana</span>
                <span className="text-[10px] text-slate-400">Vice-Recteur ZTF</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate?.('fil_d_actualit_connect_desktop_pro_lookup_ztf')}
              className="mt-2 w-full py-1.5 px-3 bg-white/10 hover:bg-white/20 text-slate-200 rounded text-[11px] font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">arrow_back</span>
              <span>Espace Membre</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area — Strictly NO Footer in Zone C */}
        <main className="flex-1 overflow-y-auto min-w-0 bg-[#F7F9FB] p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
