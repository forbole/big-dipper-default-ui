import React from 'react';
import { mount } from 'enzyme';
import { Paper } from '@material-ui/core';
import LatestActivitiesDesktop from '.';

describe('LatestActivitiesDesktop', () => {
  it('Works', () => {
    expect(LatestActivitiesDesktop).toBeTruthy();
    const wrap = mount(
      <LatestActivitiesDesktop
        collapsibleLabels={{
          hash: 'hash',
          height: 'height',
          fee: 'fee',
          gas: 'Gas (used/ wanted)',
          status: 'Status',
          memo: 'Memo',
        }}
        data={[{
          type: {
            display: 'Delegate',
            className: 'delegate',
          },
          time: '1 hour',
          success: true,
          content: <div>custom content</div>,
          hash: '12344566',
          collapsibleData: {
            height: <div>height</div>,
            fee: '123 uatm',
            gas: '1,234 / 20, 999',
            memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
          },
        }]}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.latest-activities-desktop')).toHaveLength(3);
    expect(wrap.find(Paper)).toHaveLength(1);
  });
});
