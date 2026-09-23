import React, { useEffect, useRef } from 'react';
import parse from 'html-react-parser';
import mockupsHtml from './mockups_html.json';

interface ScreenViewerProps {
  screenId: string;
  onNavigate?: (screenId: string) => void;
}

export const ScreenViewer: React.FC<ScreenViewerProps> = ({ screenId, onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const rawHtml = (mockupsHtml as Record<string, string>)[screenId] || '<div className="p-8 text-center text-slate-500">Écran non trouvé</div>';

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-path], a[href], button');
      if (!target) return;

      const dataPath = target.getAttribute('data-path');
      if (dataPath && onNavigate) {
        e.preventDefault();
        const pathMapping: Record<string, string> = {
          'accueil-public': 'accueil_public_desktop_pro_lookup_ztf_1',
          'classement-general': 'classement_g_n_ral_desktop_pro_lookup_ztf',
          'connexion': 'connexion_desktop_pro_lookup',
          'inscription': 'inscription_multi_tapes_desktop_pro_lookup',
          'publications-scientifiques': 'permalien_de_publication_publique_zone_a',
          'administration-ztf': 'tableau_de_bord_administrateur_desktop_pro_lookup_1',
          'fil-actualite': 'fil_d_actualit_connect_desktop_pro_lookup_ztf',
          'messagerie': 'messagerie_vue_compl_te_double_volet_zone_b',
          'notifications': 'notifications_page_compl_te_d_di_e_zone_b',
          'reseau': 'mon_r_seau_connexions_et_invitations_zone_b',
          'parametres': 'param_tres_du_compte_desktop_pro_lookup_ztf'
        };

        const targetScreen = pathMapping[dataPath] || dataPath;
        if (targetScreen in mockupsHtml) {
          onNavigate(targetScreen);
        }
      }
    };

    el.addEventListener('click', handleClick);
    return () => {
      el.removeEventListener('click', handleClick);
    };
  }, [screenId, onNavigate]);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-surface">
      {parse(rawHtml)}
    </div>
  );
};
