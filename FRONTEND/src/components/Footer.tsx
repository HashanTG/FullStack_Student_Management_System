import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-center text-white mt-auto py-4">
      <div className="container">
        <p className="mb-1">&copy; 2024 Employee Management System. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#" className="text-white">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white">Terms of Service</a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white">Contact Us</a>
          </li>
        </ul>
        <div className="mt-3">
          <a href="#" className="text-white me-3">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white me-3">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
