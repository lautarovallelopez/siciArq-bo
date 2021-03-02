import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Container, ToggleButton, Content, WrapperContent } from './styled';

const Sidebar = ({ open, setOpen, children }) => {
  const containerRef = useRef();
  const toggleMenu = () => setOpen(!open);

  const handleClickOutside = event => {
    if (!containerRef || !containerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <ToggleButton onClick={toggleMenu} close={!open} isOpen={open}>
        <span className={`top ${open ? 'open' : ''}`} />
        <span className={`mid ${open ? 'open' : ''}`} />
        <span className={`bot ${open ? 'open' : ''}`} />
      </ToggleButton>
      <Container isOpen={open}>
        <WrapperContent visibility={open}>
          <Content>{children}</Content>
        </WrapperContent>
      </Container>
    </div>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
};

Sidebar.defaultProps = {
  children: null,
  open: false,
};

export default Sidebar;
