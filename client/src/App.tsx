import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes.js';
import './stylesheets/index.css';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
