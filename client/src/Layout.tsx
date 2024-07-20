import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar.js';
import { SideBar } from './SideBar.js';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <main id="content" className="content bg-white col">
            <div className="container-fluid">
              <nav aria-label="breadcrumb" className="mt-3">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">--pageTitle--</li>
                </ol>
              </nav>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
