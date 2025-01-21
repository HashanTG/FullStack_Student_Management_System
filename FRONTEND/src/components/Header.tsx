import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand text-white fw-bold" href="#">
          <i className="fas fa-users me-2"></i>
          Employee Management System With backend
        </a>
        <div>
          <button className="btn btn-outline-light me-2" type="button">Login</button>
          <button className="btn btn-light" type="button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
