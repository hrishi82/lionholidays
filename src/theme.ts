import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
        // fontSize: 12,
        button: {
            textTransform: 'none'
        }
    },
    palette: {
        action: {},
        text: {
            primary: '#091535',
            secondary: '#6B7280'
        },
        secondary: {
            light: '#334155',
            main: '#091535',
            dark: '#060f26',
            contrastText: '#ffffff'
        },
        neutral: {
            light: '#F8FAFC',
            main: '#E2E8F0',
            dark: '#64748B',
            contrastText: '#091535'
        },
    }
});


export default theme;