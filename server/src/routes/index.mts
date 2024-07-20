/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';

const router = Router();

const sendHtml = (_req: any, res: any) => {
  res.send('../../../client/dist/index.html');
};

// Routes
router.get('/', sendHtml);

router.get('/dashboard', (req, res) => {
  res.json({
    pageTitle: 'Dashboard',
    totalUsers: 1234,
    activeUsers: 987,
    active: { dashboard: true }
  });
});

router.get('/query-monitor', (req, res) => {
  res.json({
    pageTitle: 'Query Monitor',
    active: { queryMonitor: true }
  });
});

router.get('/host-metrics', (req, res) => {
  res.json({
    pageTitle: 'Host Metrics',
    active: { hostMetrics: true }
  });
});

router.get('/cluster-metrics', (req, res) => {
  res.json({
    pageTitle: 'Cluster Metrics',
    active: { clusterMetrics: true }
  });
});

router.get('/history', (req, res) => {
  res.json({
    pageTitle: 'History',
    active: { history: true }
  });
});

router.get('/admin', (req, res) => {
  res.json({
    pageTitle: 'Admin',
    active: { admin: true }
  });
});

// More routes...

// Endpoint to serve the JSON data
router.get('/data', (req, res) => {
  const jsonData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: [1000, 1500, 1200, 1800, 2000]
      },
      {
        label: 'Expenses',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [800, 1000, 900, 1100, 1200]
      }
    ]
  };

  res.json(jsonData);
});

// all unhandled routes; send html; let client side react; normally we could also handle 404s here by determining if this endpoint exists or not or checking the accept header of the request.
router.use(sendHtml);

// first error handler; renders error view.
router.use((err: any, req: any, res: any, _next: any) => {
  res.status(err.status || 500);
  res.render('error', {
    pageTitle: err.name,
    layout: 'empty',
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

export default router;
