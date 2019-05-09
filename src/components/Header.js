import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({children}) => {
  
  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30,
  };

  return(
    <div>
      <div>
        <h3 style={style}><Link to='/'><u>Home</u></Link></h3>
        <h3 style={style}><Link to='/jokes'><u>Jokes</u></Link></h3>
        <p></p>
      </div>
      {children}
    </div>
  );
}

export default Header;
