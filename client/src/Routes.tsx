import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage.js';
import { Layout } from './Layout.js';
import { OtherPages } from './pages/OtherPages.js';
import { QueryMonitorPage } from './pages/QueryMonitorPage.js';
import { NotFoundPage } from './pages/NotFound.js';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<DashboardPage />} />
        <Route path="other-pages" element={<OtherPages />} />
        <Route path="query-monitor" element={<QueryMonitorPage />} />
        {/* <Route path="host-metrics" element={<HostMetrics />} />
        <Route path="cluster-metrics" element={<ClusterMetrics />} />
        <Route path="history" element={<History />} />
        <Route path="admin" element={<Admin />} /> */}
        <Route path="*" element={<NotFoundPage />} />
        {/* More routes... */}
      </Route>
    </Routes>
  );
};
