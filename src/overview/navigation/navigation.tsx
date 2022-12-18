import { Box, Tabs, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Box sx={{ margin: '64px 0', borderBottom: 1, borderColor: 'divider' }}>
      <Tabs id="sidebar">
        {/* <Tab label="AUTOProff" component={<Link to={`/`}>AUTOProff</Link>} /> */}

        <Link tabIndex={-1} to={`/`}>
          <Button>AUTOProff</Button>
        </Link>

        <Link tabIndex={-1} to={`/IIS`}>
          <Button>IIS</Button>
        </Link>

        <Link tabIndex={-1} to={`/awesome`}>
          <Button>Awes0m3</Button>
        </Link>
      </Tabs>
    </Box>
  );
};
