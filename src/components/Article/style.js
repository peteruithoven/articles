import * as theme from '../../theme.js';

export default {
  article: {
    borderBottom: theme.border
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: [theme.spacing, 0]
  },
  title: {
    fontWeight: 'normal',
    margin: 0
  },
  date: {
    fontStyle: 'italic',
    margin: [0, 0, 0, theme.spacing],
    whiteSpace: 'nowrap'
  },
  footer: {
    padding: [0, 0, theme.spacing, 0]
  }
}
