import { createRoot } from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';
import { SettingsProvider } from './contexts/SettingsContext';
import { CoordProvider } from './contexts/CoordContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <LanguageProvider>
    <SettingsProvider>
      <CoordProvider>
        <App />
      </CoordProvider>
    </SettingsProvider>
  </LanguageProvider>,
);
