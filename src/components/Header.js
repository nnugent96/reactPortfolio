import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { Component } = props;
  
  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30,
  };

  return(
    <div>
      <h3 style={style}><Link to='/'><u>Home</u></Link></h3>
      <h3 style={style}><Link to='/jokes'><u>Jokes</u></Link></h3>
      <p></p>
    </div>
  );
}

export default Header;
