
import './admin.css';
import React from 'react';


const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setActiveTab('contact')}>Contact Messages</li>
        <li onClick={() => setActiveTab('blog')}>Blog Content</li>
        <li onClick={() => setActiveTab('users')}>User Data</li>
      </ul>
    </div>
  );
};

export default Sidebar;
