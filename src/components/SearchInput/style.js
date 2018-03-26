import * as theme from '../../theme.js';

export default {
  input: {
    background: '#fff',
    boxShadow: 'none',
    border: theme.border,
    boxSizing: 'border-box',
    padding: theme.boxPadding,
    width: '100%',
    '&:focus': {
      border: {
        ...theme.border,
        color: theme.accentColor
      }
    }
  }
}
