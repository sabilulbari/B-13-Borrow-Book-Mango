import React from 'react';
import Navbar from '../components/navbar/Navbar';

const layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default layout;