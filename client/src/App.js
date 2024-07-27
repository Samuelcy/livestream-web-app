import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material';
import darkTheme from './theme';

export const App = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        {children}
        <Toaster position='bottom-right' reverseOrder={false} />
      </ThemeProvider>
    </>
  );
}