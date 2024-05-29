import React, { useState, useEffect } from 'react';

import Sidebar from './Sidebar';
import { db } from '../DB/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import './admin.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [contactMessages, setContactMessages] = useState([]);
  const [blogContent, setBlogContent] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactSnapshot = await getDocs(collection(db, 'contacts'));
        setContactMessages(contactSnapshot.docs.map(doc => doc.data()));

        const blogSnapshot = await getDocs(collection(db, 'blogs'));
        setBlogContent(blogSnapshot.docs.map(doc => doc.data()));

        const userSnapshot = await getDocs(collection(db, 'users'));
        setUserData(userSnapshot.docs.map(doc => doc.data()));
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="adminContainer">
 <nav className="navbar">
      <div className="navbar-brand">Elegant Dashboard</div>
    </nav>
      <div className="adminWrapper">
        <Sidebar setActiveTab={setActiveTab} />
        <div className="content">
          {activeTab === 'contact' && (
            <div>
              <h2>Contact Messages</h2>
              <ul>
                {contactMessages.map((message, index) => (
                  <li key={index}>
                    <p><strong>Name:</strong> {message.firstName} {message.lastName}</p>
                    <p><strong>Email:</strong> {message.email}</p>
                    <p><strong>Message:</strong> {message.message}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'blog' && (
            <div>
              <h2>Blog Content</h2>
              <ul>
                {blogContent.map((blog, index) => (
                  <li key={index}>
                    <img src={blog.photo} alt={blog.title} />
                    <p><strong>Title:</strong> {blog.title}</p>
                    <p><strong>Author:</strong> {blog.author}</p>
                    <p><strong>Content:</strong> {blog.content}</p>
                    <p><strong>Published on:</strong> {new Date(blog.publishDate).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'users' && (
            <div>
              <h2>User Data</h2>
              <ul>
                {userData.map((user, index) => (
                  <li key={index}>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
     
    </div>
  );
};

export default AdminDashboard;
