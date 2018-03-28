import * as theme from '../../theme.js';

export default {
  '@global': {
    html: {
      fontSize: '16px'
    },
    body: {
      color: theme.textColor
    },
    a: {
      color: theme.linkColor,
      '&:hover': {
        color: theme.linkHoverColor
      }
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50rem'
  },
  main: {
    flex: 'auto'
  },
  sidebar: {
    margin: [theme.spacing, 0, 0, theme.spacing],
    width: '18rem',
    flex: 'none'
  }
}
