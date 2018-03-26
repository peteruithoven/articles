import * as theme from '../../theme.js';

export default {
  results: {
    listStyle: 'none',
    padding: 0
  },
  result: {
    backgroundColor: '#FBFBFB',
    border: theme.border,
    borderBottomWidth: '0',
    padding: theme.boxPadding,
    '&:last-child': {
      borderBottomWidth: theme.border.width,
    }
  },
  link: {
    color: theme.textColor,
    textDecoration: 'none',
  }
}
