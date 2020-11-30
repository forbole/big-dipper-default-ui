import React from 'react';
import classnames from 'classnames';
import {
  MenuItem, Select, InputBase, Typography,
} from '@material-ui/core';
import { useGetStyles } from './styles';
import { useSelectTabsHook } from './hooks';
import { SelectTabsProps } from './types';

/**
 * Helper component that will switch tabs based on the selected
 */
const SelectTabs = (props:SelectTabsProps) => {
  const { classes } = useGetStyles();
  const {
    className,
    tabs,
    selected,
  } = props;
  const {
    selectedValue,
    handleClick,
    selectedIndex,
  } = useSelectTabsHook(selected, tabs);

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'select-tabs')}>
      {
        tabs.length === 1
          ? (
            <h3 className={classnames('selected-title')}> hello world </h3>
          ) : (
            <Select
              MenuProps={{
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              }}
              value={selectedValue}
              input={<InputBase />}
            >
              {tabs.map((x, i: number) => {
                return (
                  <MenuItem
                    onClick={() => handleClick({
                      key: x.key,
                      index: i,
                    })}
                    value={x.key}
                  >
                    <Typography variant="inherit" noWrap>
                      {x.display}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Select>
          )
      }
      <div className={classnames('selected-component-container')}>
        {tabs[selectedIndex].component}
      </div>
    </div>
  );
};

export default SelectTabs;
