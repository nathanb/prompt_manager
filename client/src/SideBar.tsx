import { NavLink } from 'react-router-dom';

export const SideBar = () => {
  return (
    <nav id="sidebar" className="sidebar">
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/query-monitor" className="nav-link">Query Monitor</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/host-metrics" className="nav-link">Host Metrics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cluster-metrics" className="nav-link">Host Metrics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/history" className="nav-link">Host Metrics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/system"
              className="nav-link d-flex justify-content-between align-items-center {{#if active.system}}active{{/if}}"
              data-bs-toggle="collapse"
              data-bs-target="#systemSubmenu"
              aria-expanded="false"
              aria-controls="systemSubmenu"
              id="systemLink"
            >
              System
              <i className="bi bi-chevron-down"></i>
            </NavLink>

            <ul className="collapse nav flex-column ms-3 submenu" id="systemSubmenu">
              <li className="nav-item">
                <a className="nav-link" href="/segment-status">Segment Status</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/storage-status">Storage Status</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink to="/admin" className="nav-link">Admin</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
