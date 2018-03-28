import * as theme from '../../theme.js';

export default {
  form: {
    position: 'relative'
  },
  loader: {
    position: 'absolute',
    right: '1.3rem',
    top: '50%'
  },
  input: {
    background: 'transparent',
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
