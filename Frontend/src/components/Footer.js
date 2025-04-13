import React from 'react';

const Footer = () => {
  const getYear = () => new Date().getFullYear();

  return (
    <footer>
      <h4>Copyright &copy; {getYear()}.All rights reserved!</h4>
    </footer>
  );
};

export default Footer;
