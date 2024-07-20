export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="#">Prompt Management</a>
          <a className="nav-link" href="#" id="sidebarToggle">
            <i className="bi bi-list"></i>
          </a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Docs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Feedback</a>
            </li>
            <li className="nav-item dropdown ms-5">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Welcome, Power User
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    {' '}
                    <i className="bi bi-person pe-2"></i>
                    {' '}
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {' '}
                    <i className="bi bi-box-arrow-left pe-2"></i>
                    {' '}
                    Logoff
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
