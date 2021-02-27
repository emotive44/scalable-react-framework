import React, { FC } from 'react';
import classes from './Navbar.module.scss';

interface NavbarProps {

}

const Navbar:FC<NavbarProps> = () => {
  return (
    <div className={classes.navbar}>Navbar</div>
  );
}

export default Navbar;
