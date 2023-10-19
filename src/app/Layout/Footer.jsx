import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
// import RedditIcon from '@mui/icons-material/Reddit';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    flex: '1',
    padding: '2rem 0',
    borderTop: '1px solid #eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: '#23272A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '1',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
        <a className={classes.link} href="https://twitter.com/chuck3dup" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
        <a className={classes.link} href="https://t.me/+iwWTrzMcfq0zZDcy" target="_blank" rel="noopener noreferrer">
          <TelegramIcon />
        </a>
      </IconButton>
    </footer>
  );
}

export default Footer;
