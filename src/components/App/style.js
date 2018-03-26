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
  sidebar: {
    margin: [theme.spacing, 0, 0, theme.spacing],
    maxWidth: '18rem',
    minWidth: '18rem'
  }
}
