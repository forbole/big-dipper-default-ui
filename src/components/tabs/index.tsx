import React from 'react';
import {
  Tab, AppBar, Tabs, Box, Typography,
} from '@material-ui/core';
import { getAllyProps } from './utils';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

/**
 * Helper component to handle tabs and their corresponding components
 */
const TabsSwitcher = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        // variant="scrollable"
        variant="fullWidth"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab disableRipple label="Item One" {...getAllyProps(0)} />
        <Tab disableRipple label="Item Two" {...getAllyProps(1)} />
        <Tab disableRipple label="Item Threeeeee" {...getAllyProps(2)} />
        <Tab disableRipple label="Item Four" {...getAllyProps(3)} />
        <Tab disableRipple label="Item Five" {...getAllyProps(4)} />
        <Tab disableRipple label="Item Six" {...getAllyProps(5)} />
        <Tab disableRipple label="Item Seven" {...getAllyProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
};

export default TabsSwitcher;
