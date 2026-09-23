import React from 'react';

interface HeaderConnectedProps {
  onNavigate?: (path: string) => void;
  activeDropdown?: 'notifications_v1' | 'notifications_v2' | 'search' | null;
}

export const HeaderConnected: React.FC<HeaderConnectedProps> = ({ onNavigate, activeDropdown }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A2540] text-white shadow-md">
      <div className="h-16 max-w-[1240px] mx-auto px-4 flex items-center justify-between gap-4">
        {/* Brand & Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer flex-shrink-0"
          onClick={() => onNavigate?.('fil_d_actualit_connect_desktop_pro_lookup_ztf')}
        >
          <img
            src="/assets/pro_lookup_logo.png"
            alt="PRO-LOOKUP Logo"
            className="h-8 w-auto object-contain"
            onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo_officiel_pro_lookup_ztf.png'; }}
          />
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white leading-none">PRO-LOOKUP</span>
            <span className="text-[10px] text-teal-400 font-medium uppercase tracking-wider">Université ZTF</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-md hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
          <input
            type="text"
            placeholder="Rechercher par nom, rang, thèse..."
            onClick={() => onNavigate?.('header_dropdown_recherche_avec_suggestions_zone_b')}
            className="w-full h-9 pl-9 pr-4 bg-white/10 text-white placeholder-slate-400 rounded-lg text-xs focus:outline-none focus:bg-white focus:text-slate-900 focus:placeholder-slate-500 transition-all border border-white/10"
          />
        </div>

        {/* Connected Nav Icons */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => onNavigate?.('fil_d_actualit_connect_desktop_pro_lookup_ztf')}
            className="flex flex-col items-center px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">dynamic_feed</span>
            <span className="text-[10px] hidden md:inline">Fil d'actualité</span>
          </button>

          <button
            onClick={() => onNavigate?.('mon_r_seau_connexions_et_invitations_zone_b')}
            className="flex flex-col items-center px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors relative"
          >
            <span className="material-symbols-outlined text-[20px]">group</span>
            <span className="text-[10px] hidden md:inline">Mon réseau</span>
            <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-[#00A9A5]"></span>
          </button>

          <button
            onClick={() => onNavigate?.('messagerie_vue_compl_te_double_volet_zone_b')}
            className="flex flex-col items-center px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors relative"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span className="text-[10px] hidden md:inline">Messagerie</span>
            <span className="absolute top-1 right-2 px-1 py-0.2 bg-[#00A9A5] text-white font-bold text-[9px] rounded-full">3</span>
          </button>

          <button
            onClick={() => onNavigate?.(activeDropdown === 'notifications_v1' ? 'header_dropdown_notifications_ouvert_zone_b_2' : 'header_dropdown_notifications_ouvert_zone_b_1')}
            className={`flex flex-col items-center px-3 py-1.5 rounded-lg transition-colors relative ${
              activeDropdown?.startsWith('notifications') ? 'text-teal-400 bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="text-[10px] hidden md:inline">Notifications</span>
            <span className="absolute top-1 right-2 px-1 py-0.2 bg-red-500 text-white font-bold text-[9px] rounded-full">5</span>
          </button>

          <button
            onClick={() => onNavigate?.('param_tres_du_compte_desktop_pro_lookup_ztf')}
            className="flex flex-col items-center px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">settings</span>
            <span className="text-[10px] hidden md:inline">Paramètres</span>
          </button>
        </nav>

        {/* User Profile Avatar */}
        <div
          onClick={() => onNavigate?.('profil_membre_pro_lookup')}
          className="flex items-center gap-2 pl-2 border-l border-white/10 cursor-pointer group"
        >
          <div className="relative">
            <img
              src="/assets/researcher_portrait.png"
              alt="Avatar User"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#D4A24C]"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-[#0A2540] rounded-full"></span>
          </div>
          <div className="hidden lg:flex flex-col">
            <span className="text-xs font-semibold text-white group-hover:text-teal-300 transition-colors">Dr. Marie Mbarga</span>
            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Docteur</span>
          </div>
        </div>
      </div>
    </header>
  );
};
