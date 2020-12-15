import React from 'react';
import { mount } from 'enzyme';
import {
  Popover, Paper,
} from '@material-ui/core';
import { HelpOutline } from '@material-ui/icons';
import InfoPopover from '.';

describe('InfoPopover', () => {
  it('Works', () => {
    expect(InfoPopover).toBeTruthy();
    const wrap = mount(
      <InfoPopover
        detail="hello world"
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find(HelpOutline)).toHaveLength(1);
    expect(wrap.find(Popover)).toHaveLength(1);
    expect(wrap.find(Paper)).toHaveLength(0);
    wrap.find('span').first().simulate('mouseenter');
    expect(wrap.find(Paper).length).toBeGreaterThan(0);
  });
});
