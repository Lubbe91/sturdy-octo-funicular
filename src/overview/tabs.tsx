import { Box, Tabs as Muitabs, Tab as MuiTab } from '@mui/material';
import React, { useState } from 'react';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Tab = () => {
  const [value, setValue] = useState(1);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Muitabs
          value={value}
          onChange={(_e, newValue) => setValue(newValue)}
          aria-label="basic tabs example"
        >
          <MuiTab label="AUTOProff" {...a11yProps(0)} />
          <MuiTab label="IIS" {...a11yProps(1)} />
          <MuiTab label="Awes0m3" {...a11yProps(2)} />
        </Muitabs>
      </Box>
    </>
  );
};
