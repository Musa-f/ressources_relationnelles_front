import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'
import Logo from '../../assets/img/logo.png';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      const decodedToken = jwtDecode(token);
      const roles = decodedToken.roles;
      setUsername(decodedToken.username);
      if (roles.includes('ROLE_ADMIN')) {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setIsAdmin(false);
    setUsername('');
  };

  return (
    <nav className="navbar navbar-expand-lg d-none d-sm-block">
      <div className="container-fluid">

        <a href="">
          <img src={Logo} alt="Logo"/>
        </a>

        <div className="navbar-nav">
          <li className="nav-item mx-3">
            <a className="nav-link" href="#"><i className="bi bi-house-door-fill"></i></a>
          </li>

        {isAuthenticated && (
        <>
          <li className="nav-item mx-3">
            <a 
              className="nav-link" 
              id="popover"
              data-bs-container="body" 
              data-bs-toggle="popover" 
              data-bs-placement="bottom" 
              data-bs-content="Aucune notification."
            >
              <i className="bi bi-bell-fill"></i>
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#"><i className="bi bi-bookmark-fill"></i></a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#"><i className="bi bi-wechat"></i></a>
          </li>
        </>
        )}
          
        {isAuthenticated && isAdmin && (
          <li className="nav-item mx-3">
            <a className="nav-link" href="#"><i className="bi bi-card-checklist"></i></a>
          </li>
        )}

        <div className="vr mx-4"></div>

        {isAuthenticated ? (
          <div className="dropdown mx-3">
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-person-circle"></i> {username}
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="">Profil</a></li>
              <li><a className="dropdown-item" href="#">Paramètres</a></li>
              {isAdmin && <li><a className="dropdown-item" href="#">Tableau de bord</a></li>}
              <li><a className="dropdown-item" href="#" onClick={handleLogout}>Se déconnecter</a></li>
            </ul>
          </div>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Connexion</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                <button className="btn mx-3">Inscription</button>
              </Link>
            </li>
          </>
        )}

      </div>
    </div>
  </nav>
  );
};

export default Header;
