import React, { FC } from 'react';
import classes from './Navbar.module.scss';
import setThemeMode from '../../utils/themeMode';


interface NavbarProps {

}

const Navbar:FC<NavbarProps> = () => {
  return (
    <div className={classes.navbar}>
      Navbar
      <span onClick={setThemeMode}>Change theme mode</span>
    </div>
  );
}

export default Navbar;
