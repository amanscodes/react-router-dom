import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (route) => location.pathname === route;

  return (
    <>
      <div className='navbar'>
        <div
          onClick={() => navigate('/All')}
          className={`nav-item ${isActive('/All') ? 'active' : ''}`}
        >
          All
        </div>
        <div
          onClick={() => navigate('/FullStack')}
          className={`nav-item ${isActive('/FullStack') ? 'active' : ''}`}
        >
          Full Stack Development
        </div>
        <div
          onClick={() => navigate('/DataScience')}
          className={`nav-item ${isActive('/DataScience') ? 'active' : ''}`}
        >
          Data Science
        </div>
        <div
          onClick={() => navigate('/CyberSecurity')}
          className={`nav-item ${isActive('/CyberSecurity') ? 'active' : ''}`}
        >
          Cyber Security
        </div>
        <div
          onClick={() => navigate('/Career')}
          className={`nav-item ${isActive('/Career') ? 'active' : ''}`}
        >
          Career
        </div>
      </div>
    </>
  );
}

export default Navbar;