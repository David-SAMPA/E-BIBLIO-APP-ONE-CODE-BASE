import React from 'react';

export const HeaderPublic: React.FC<{ onNavigate?: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1240px] mx-auto px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md flex-shrink-0 cursor-pointer" onClick={() => onNavigate?.('accueil_public_desktop_pro_lookup_ztf_1')}>
          <img
            alt="Logo officiel PRO-LOOKUP Université ZTF"
            className="h-8 w-auto object-contain"
            src="/assets/pro_lookup_logo.png"
            onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo_officiel_pro_lookup_ztf.png'; }}
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary leading-tight tracking-tight">PRO-LOOKUP</span>
            <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">Université ZTF</span>
          </div>
        </div>

        <div className="hidden xl:flex items-center flex-1 max-w-xs mx-space-md">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
            <input
              className="w-full h-10 pl-9 pr-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary transition-all"
              placeholder="Rechercher un chercheur, thèse..."
              type="text"
            />
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-space-md flex-shrink-0">
          <button onClick={() => onNavigate?.('accueil_public_desktop_pro_lookup_ztf_1')} className="transition-colors text-secondary font-headline-sm font-semibold border-b-2 border-secondary pb-1">
            Accueil
          </button>
          <button onClick={() => onNavigate?.('classement_g_n_ral_desktop_pro_lookup_ztf')} className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors">
            Classement par Rangs
          </button>
          <button onClick={() => onNavigate?.('permalien_de_publication_publique_zone_a')} className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors">
            Publications
          </button>
          <button onClick={() => onNavigate?.('tableau_de_bord_administrateur_desktop_pro_lookup_1')} className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors">
            Administration ZTF
          </button>
        </nav>

        <div className="flex items-center gap-space-sm flex-shrink-0">
          <button onClick={() => onNavigate?.('connexion_desktop_pro_lookup')} className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary px-space-sm py-1.5 transition-colors">
            Connexion
          </button>
          <button onClick={() => onNavigate?.('inscription_multi_tapes_desktop_pro_lookup')} className="bg-secondary text-on-secondary px-space-md py-2 rounded-lg font-label-lg text-label-lg hover:bg-secondary/90 transition-all shadow-sm">
            S'inscrire
          </button>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs cursor-pointer" onClick={() => onNavigate?.('connexion_desktop_pro_lookup')}>
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export const FooterPublic: React.FC<{ onNavigate?: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-primary text-on-primary py-12 border-t border-surface-variant/10">
      <div className="max-w-[1240px] mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src="/assets/pro_lookup_logo.png" alt="Logo" className="h-6 w-auto" />
              <span className="font-headline-sm text-surface-container-lowest">PRO-LOOKUP</span>
            </div>
            <p className="font-body-sm text-surface-variant text-xs leading-relaxed">
              Réseau professionnel et annuaire unifié des membres, chercheurs et diplômés de l'Université ZTF (Bertoua, Cameroun).
            </p>
          </div>
          <div>
            <h4 className="font-label-lg text-surface-container-lowest mb-3">Navigation</h4>
            <ul className="space-y-2 text-xs text-surface-variant">
              <li><button onClick={() => onNavigate?.('accueil_public_desktop_pro_lookup_ztf_1')} className="hover:text-secondary">Accueil</button></li>
              <li><button onClick={() => onNavigate?.('classement_g_n_ral_desktop_pro_lookup_ztf')} className="hover:text-secondary">Classement par Rang</button></li>
              <li><button onClick={() => onNavigate?.('r_sultats_de_recherche_publique_zone_a')} className="hover:text-secondary">Annuaire Public</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-surface-container-lowest mb-3">Université ZTF</h4>
            <ul className="space-y-2 text-xs text-surface-variant">
              <li>Campus Régional de Bertoua</li>
              <li>République du Cameroun</li>
              <li>Homologation Scientifique & Doctorale</li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-surface-container-lowest mb-3">Accès Membres</h4>
            <p className="font-body-sm text-xs text-surface-variant mb-3">Adhésion réservée aux membres accrédités de l'Université ZTF.</p>
            <button onClick={() => onNavigate?.('connexion_desktop_pro_lookup')} className="px-3 py-1.5 rounded bg-secondary text-on-secondary font-label-md text-xs hover:bg-secondary/90 transition-all">
              Espace Membre
            </button>
          </div>
        </div>
        <div className="pt-6 border-t border-surface-variant/20 flex flex-col sm:flex-row justify-between items-center text-xs text-surface-variant gap-2">
          <span>&copy; {new Date().getFullYear()} Université ZTF — Tous droits réservés.</span>
          <div className="flex gap-4">
            <button onClick={() => onNavigate?.('accueil_public_avec_bandeau_cookies_zone_a')} className="hover:text-secondary">Confidentialité & Cookies</button>
            <button className="hover:text-secondary">Mentions Légales</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
