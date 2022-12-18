import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Table } from './overview/table-component/index.ts';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Table workshop={'autoproff'} />,
  },
  {
    path: 'iis',
    element: <Table workshop={'iis'} />,
  },
  {
    path: 'awesome',
    element: <Table workshop={'awesome'} />,
  },
]);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
