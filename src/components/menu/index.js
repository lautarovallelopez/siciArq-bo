import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { routes } from 'constant';
import { useResize } from 'hooks';
import Sidebar from 'components/sidebar';

import { Item, Items, SidebarItem } from './styled';

const Menu = ({ onRedirect, onLogout }) => {
  const resize = useResize();
  const [open, setOpen] = useState(false);
  const isSmallDisplay = resize.width < 470;
  const location = useLocation();
  const getPathName = path => location.pathname === path;

  const onClickSidebar = e => {
    setOpen(false);
    onRedirect(e);
  };

  return isSmallDisplay ? (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarItem
        id={routes.PROFILE}
        onClick={onClickSidebar}
        active={getPathName(routes.PROFILE)}
      >
        Mi Perfil
      </SidebarItem>
      <SidebarItem onClick={onLogout}>Cerrar Sesión</SidebarItem>
    </Sidebar>
  ) : (
    <Items>
      <Item id={routes.PROFILE} onClick={onRedirect} active={getPathName(routes.PROFILE)}>
        Mi Perfil
      </Item>
      <Item onClick={onLogout}>Cerrar Sesión</Item>
    </Items>
  );
};

Menu.propTypes = {
  onRedirect: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Menu;
