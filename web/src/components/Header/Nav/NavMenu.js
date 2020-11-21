import React, { useRef } from 'react';
import { useClickOutside } from '../../../hooks/index';

const NavMenu = () => {
  const menuRef = useRef();

  const onClickSide = () => console.log('Clicked outside');

  useClickOutside(menuRef, onClickSide);

  return (
    <ul ref={menuRef}>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  );
};

export default NavMenu;
