import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#185ADB', // Prim. color for headings or text
        },
        secondary: {
            main: '#FFC947', // Sec. color
        },
        background: {
            default: '#1f1f1f', // Bg. color
            paper: '#121212', // Bg. color for paper components
        },
        text: {
            primary: '#FFFFFF', // Default text color
            secondary: '#fafafa', // Sec. text color for specific elements
        },
    },
});

export default customTheme;