import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      containedPrimary: { // Name of the rule
        color: 'white', // Some CSS
      },
      containedSecondary: { // Name of the rule
        color: 'white', // Some CSS
      },
    },
  },
  palette: {
    primary: { main: '#1c518a' },
    secondary: { main: '#4bbbf1' },
    error: { main: '#ff0001' },
  },
  typography: { useNextVariants: true },
});


export default theme;
