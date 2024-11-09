import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import UserFacts from './UserFacts';
import UserBadges from './UserBadges';
import UserActivities from './UserActivities';

type TabOption = 'badges' | 'facts' | 'activities';

const MenuBar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabOption>('facts');

  const handleChange = (_event: React.SyntheticEvent, newValue: TabOption) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      {}
      <AppBar position="static" color="default">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Badges" value="badges" />
          <Tab label="Facts" value="facts" />
          <Tab label="Activities" value="activities" />
        </Tabs>
      </AppBar>

      {/* Content under the menu bar */}
      <Box p={2}>
        {selectedTab === 'badges' && <UserBadges />}
        {selectedTab === 'facts' && <UserFacts />}
        {selectedTab === 'activities' && <UserActivities />}
      </Box>
    </div>
  );
};

export default MenuBar;