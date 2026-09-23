import React, { useState } from 'react';
import { CatalogDrawer } from './mockups/CatalogDrawer';
import { SCREEN_REGISTRY } from './mockups/registry';
import { ScreenViewer } from './generated/ScreenViewer';

export const App: React.FC = () => {
  const [currentScreenId, setCurrentScreenId] = useState<string>('accueil_public_desktop_pro_lookup_ztf_1');

  return (
    <CatalogDrawer
      currentScreenId={currentScreenId}
      onSelectScreen={(id) => setCurrentScreenId(id)}
    >
      <ScreenViewer
        screenId={currentScreenId}
        onNavigate={(id) => {
          if (SCREEN_REGISTRY.some(s => s.id === id)) {
            setCurrentScreenId(id);
          }
        }}
      />
    </CatalogDrawer>
  );
};

export default App;
