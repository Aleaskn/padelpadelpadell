import { createTheme } from '@mui/material/styles';

export const theme = createTheme({

    palette : {

      primary : {
          main : '#052E53',
      },
        secondary : {
          main : '#69DFE2',
        },
        warning : {
          main : '#c12400'
        },
    },
    typography: {

        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Space Mono"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1 : {
            fontSize: '26px',
            fontWeight: 700,
            lineHeight: '38px'
        },
        h2 : {
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '38px',
            '@media (max-width:600px)': {
                fontSize: '16px',
            }
        },
        h3 : {
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: '33px',
            '@media (max-width:600px)': {
                fontSize: '16px',
            }
        },
        h4 : {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            '@media (max-width:600px)': {
                fontSize: '13px',
            }
        },
        h5 : {
            fontSize: '13px',
            fontWeight: 700,
            lineHeight: '20px',
        },
        body1 : {
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '25px',
            '@media (max-width:600px)': {
                fontSize: '13px',
            }
        }
    },
});

