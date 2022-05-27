import React from 'react'
import AppBar from '@material-ui/core/Appbar'
import { Toolbar } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
function Header() {
  return (
    <HideOnScroll>
    <AppBar position='static'>
        <Toolbar>
            Expertguru
        </Toolbar>
        </AppBar>
      </HideOnScroll>
  )
}

export default Header