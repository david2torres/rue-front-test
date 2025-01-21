import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Inventory from './pages/Inventory'; // Importa la página principal

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Inventory />
  </StrictMode>,
);