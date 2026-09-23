export interface ScreenItem {
  id: string;
  zone: 'A' | 'B' | 'C';
  title: string;
  category: string;
  folder: string;
}

export const SCREEN_REGISTRY: ScreenItem[] = [
  // Zone A — Publique
  { id: 'accueil_public_pro_lookup', zone: 'A', title: 'Accueil Publique (Base)', category: 'Accueil', folder: 'accueil_public_pro_lookup' },
  { id: 'accueil_public_desktop_pro_lookup', zone: 'A', title: 'Accueil Publique (Desktop)', category: 'Accueil', folder: 'accueil_public_desktop_pro_lookup' },
  { id: 'accueil_public_desktop_pro_lookup_ztf_1', zone: 'A', title: 'Accueil Publique ZTF (Variante 1)', category: 'Accueil', folder: 'accueil_public_desktop_pro_lookup_ztf_1' },
  { id: 'accueil_public_desktop_pro_lookup_ztf_2', zone: 'A', title: 'Accueil Publique ZTF (Variante 2)', category: 'Accueil', folder: 'accueil_public_desktop_pro_lookup_ztf_2' },
  { id: 'accueil_public_avec_bandeau_cookies_zone_a', zone: 'A', title: 'Accueil avec Bandeau Cookies', category: 'Accueil', folder: 'accueil_public_avec_bandeau_cookies_zone_a' },
  { id: 'connexion_desktop_pro_lookup', zone: 'A', title: 'Connexion (Desktop)', category: 'Authentification', folder: 'connexion_desktop_pro_lookup' },
  { id: 'connexion_mobile_pro_lookup', zone: 'A', title: 'Connexion (Mobile)', category: 'Authentification', folder: 'connexion_mobile_pro_lookup' },
  { id: 'inscription_multi_tapes_desktop_pro_lookup', zone: 'A', title: 'Inscription Multi-étapes (Desktop)', category: 'Authentification', folder: 'inscription_multi_tapes_desktop_pro_lookup' },
  { id: 'inscription_multi_tapes_mobile_pro_lookup', zone: 'A', title: 'Inscription Multi-étapes (Mobile)', category: 'Authentification', folder: 'inscription_multi_tapes_mobile_pro_lookup' },
  { id: 'inscription_multi_tapes_homologation_chercheur_zone_a', zone: 'A', title: 'Inscription - Homologation Chercheur', category: 'Authentification', folder: 'inscription_multi_tapes_homologation_chercheur_zone_a' },
  { id: 'mot_de_passe_oubli_r_cup_ration_de_compte_zone_a', zone: 'A', title: 'Mot de passe oublié / Récupération', category: 'Authentification', folder: 'mot_de_passe_oubli_r_cup_ration_de_compte_zone_a' },
  { id: 'profil_individuel_public_desktop_pro_lookup', zone: 'A', title: 'Profil individuel public', category: 'Profil Public', folder: 'profil_individuel_public_desktop_pro_lookup' },
  { id: 'permalien_de_publication_publique_zone_a', zone: 'A', title: 'Permalien de publication publique', category: 'Publications', folder: 'permalien_de_publication_publique_zone_a' },
  { id: 'classement_g_n_ral_pro_lookup', zone: 'A', title: 'Classement Général (Base)', category: 'Classement', folder: 'classement_g_n_ral_pro_lookup' },
  { id: 'classement_g_n_ral_desktop_pro_lookup_ztf', zone: 'A', title: 'Classement Général (Desktop ZTF)', category: 'Classement', folder: 'classement_g_n_ral_desktop_pro_lookup_ztf' },
  { id: 'classement_par_rang_sp_cifique_desktop_pro_lookup_ztf', zone: 'A', title: 'Classement par Rang Spécifique', category: 'Classement', folder: 'classement_par_rang_sp_cifique_desktop_pro_lookup_ztf' },
  { id: 'r_sultats_de_recherche_publique_zone_a', zone: 'A', title: 'Résultats de recherche publique', category: 'Recherche', folder: 'r_sultats_de_recherche_publique_zone_a' },

  // Zone B — Privée
  { id: 'espace_personnel_profil_en_attente_desktop_1', zone: 'B', title: 'Profil en attente (Desktop 1)', category: 'Espace Attente', folder: 'espace_personnel_profil_en_attente_desktop_1' },
  { id: 'espace_personnel_profil_en_attente_desktop_2', zone: 'B', title: 'Profil en attente (Desktop 2)', category: 'Espace Attente', folder: 'espace_personnel_profil_en_attente_desktop_2' },
  { id: 'espace_personnel_profil_en_attente_desktop_3', zone: 'B', title: 'Profil en attente (Desktop 3)', category: 'Espace Attente', folder: 'espace_personnel_profil_en_attente_desktop_3' },
  { id: 'espace_personnel_profil_en_attente_mobile', zone: 'B', title: 'Profil en attente (Mobile)', category: 'Espace Attente', folder: 'espace_personnel_profil_en_attente_mobile' },
  { id: 'fil_d_actualit_pro_lookup', zone: 'B', title: 'Fil d\'actualité (Base)', category: 'Fil d\'actualité', folder: 'fil_d_actualit_pro_lookup' },
  { id: 'fil_d_actualit_connect_desktop_pro_lookup_ztf', zone: 'B', title: 'Fil d\'actualité connecté (Desktop ZTF)', category: 'Fil d\'actualité', folder: 'fil_d_actualit_connect_desktop_pro_lookup_ztf' },
  { id: 'fil_d_actualit_modale_composer_un_post_zone_b', zone: 'B', title: 'Modale - Composer un post', category: 'Fil d\'actualité', folder: 'fil_d_actualit_modale_composer_un_post_zone_b' },
  { id: 'fil_d_actualit_lightbox_image_ouverte_zone_b_1', zone: 'B', title: 'Lightbox Image Ouverte (V1)', category: 'Fil d\'actualité', folder: 'fil_d_actualit_lightbox_image_ouverte_zone_b_1' },
  { id: 'fil_d_actualit_lightbox_image_ouverte_zone_b_2', zone: 'B', title: 'Lightbox Image Ouverte (V2)', category: 'Fil d\'actualité', folder: 'fil_d_actualit_lightbox_image_ouverte_zone_b_2' },
  { id: 'fil_d_actualit_popover_r_actions_zone_b', zone: 'B', title: 'Popover Réactions', category: 'Fil d\'actualité', folder: 'fil_d_actualit_popover_r_actions_zone_b' },
  { id: 'fil_d_actualit_modale_de_partage_zone_b_1', zone: 'B', title: 'Modale De Partage (V1)', category: 'Fil d\'actualité', folder: 'fil_d_actualit_modale_de_partage_zone_b_1' },
  { id: 'fil_d_actualit_modale_de_partage_zone_b_2', zone: 'B', title: 'Modale De Partage (V2)', category: 'Fil d\'actualité', folder: 'fil_d_actualit_modale_de_partage_zone_b_2' },
  { id: 'fil_d_actualit_messagerie_flottante_zone_b', zone: 'B', title: 'Messagerie Flottante', category: 'Fil d\'actualité', folder: 'fil_d_actualit_messagerie_flottante_zone_b' },
  { id: 'header_dropdown_notifications_ouvert_zone_b_1', zone: 'B', title: 'Dropdown Notifications (V1)', category: 'Header Overlays', folder: 'header_dropdown_notifications_ouvert_zone_b_1' },
  { id: 'header_dropdown_notifications_ouvert_zone_b_2', zone: 'B', title: 'Dropdown Notifications (V2)', category: 'Header Overlays', folder: 'header_dropdown_notifications_ouvert_zone_b_2' },
  { id: 'header_dropdown_recherche_avec_suggestions_zone_b', zone: 'B', title: 'Dropdown Recherche & Suggestions', category: 'Header Overlays', folder: 'header_dropdown_recherche_avec_suggestions_zone_b' },
  { id: 'mon_r_seau_connexions_et_invitations_zone_b', zone: 'B', title: 'Mon Réseau - Connexions & Invitations', category: 'Réseau', folder: 'mon_r_seau_connexions_et_invitations_zone_b' },
  { id: 'mon_r_seau_modale_invitation_avec_note_zone_b', zone: 'B', title: 'Modale Invitation avec Note', category: 'Réseau', folder: 'mon_r_seau_modale_invitation_avec_note_zone_b' },
  { id: 'profil_membre_pro_lookup', zone: 'B', title: 'Profil Membre Connecté', category: 'Profil Connecté', folder: 'profil_membre_pro_lookup' },
  { id: 'profil_connect_modale_ajouter_une_exp_rience_zone_b', zone: 'B', title: 'Modale Ajouter une expérience', category: 'Profil Connecté', folder: 'profil_connect_modale_ajouter_une_exp_rience_zone_b' },
  { id: 'messagerie_vue_compl_te_double_volet_zone_b', zone: 'B', title: 'Messagerie Double Volet', category: 'Messagerie', folder: 'messagerie_vue_compl_te_double_volet_zone_b' },
  { id: 'notifications_page_compl_te_d_di_e_zone_b', zone: 'B', title: 'Page Notifications Dédiée', category: 'Notifications', folder: 'notifications_page_compl_te_d_di_e_zone_b' },
  { id: 'param_tres_du_compte_desktop_pro_lookup_ztf', zone: 'B', title: 'Paramètres du compte', category: 'Paramètres', folder: 'param_tres_du_compte_desktop_pro_lookup_ztf' },

  // Zone C — Administration
  { id: 'tableau_de_bord_administrateur_desktop_pro_lookup_1', zone: 'C', title: 'Tableau de bord Admin (Desktop 1)', category: 'Dashboard Admin', folder: 'tableau_de_bord_administrateur_desktop_pro_lookup_1' },
  { id: 'tableau_de_bord_administrateur_desktop_pro_lookup_2', zone: 'C', title: 'Tableau de bord Admin (Desktop 2)', category: 'Dashboard Admin', folder: 'tableau_de_bord_administrateur_desktop_pro_lookup_2' },
  { id: 'tableau_de_bord_administrateur_mobile_pro_lookup', zone: 'C', title: 'Tableau de bord Admin (Mobile)', category: 'Dashboard Admin', folder: 'tableau_de_bord_administrateur_mobile_pro_lookup' },
  { id: 'tableau_de_bord_administrateur_vue_d_ensemble_zone_c', zone: 'C', title: 'Tableau de bord Vue d\'ensemble', category: 'Dashboard Admin', folder: 'tableau_de_bord_administrateur_vue_d_ensemble_zone_c' },
  { id: 'demandes_en_attente_arbitrage_pleine_page_zone_c', zone: 'C', title: 'Demandes en attente - Arbitrage', category: 'Demandes', folder: 'demandes_en_attente_arbitrage_pleine_page_zone_c' },
  { id: 'tous_les_membres_annuaire_gestion_administrative_zone_c', zone: 'C', title: 'Tous les membres - Annuaire', category: 'Membres', folder: 'tous_les_membres_annuaire_gestion_administrative_zone_c' },
  { id: 'cr_ation_directe_de_membre_enr_lement_rectoral_zone_c', zone: 'C', title: 'Création directe de membre', category: 'Membres', folder: 'cr_ation_directe_de_membre_enr_lement_rectoral_zone_c' },
  { id: 'gestion_des_rangs_acad_miques_pr_rogatives_zone_c', zone: 'C', title: 'Gestion des rangs académiques', category: 'Rangs', folder: 'gestion_des_rangs_acad_miques_pr_rogatives_zone_c' }
];
