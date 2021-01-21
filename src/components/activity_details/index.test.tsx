import React from 'react';
import { mount } from 'enzyme';
import ActivityDetails from '.';

describe('ActivityDetails', () => {
  it('Works', () => {
    expect(ActivityDetails).toBeTruthy();
    const wrap = mount(
      <ActivityDetails
        labels={{
          time: 'time',
          hash: 'hash',
          height: 'height',
          fee: 'fee',
          gas: 'Gas (used/ wanted)',
          status: 'Status',
          memo: 'Memo',
        }}
        data={{
          time: '1 hour',
          success: true,
          hash: '12344566',
          height: <div>height</div>,
          fee: '123 uatm',
          gas: '1,234 / 20, 999',
          memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
        }}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.activity-details-mobile')).toHaveLength(1);
    expect(wrap.find('.activity-details-desktop')).toHaveLength(0);
  });

  it('Works desktop', () => {
    expect(ActivityDetails).toBeTruthy();
    const wrap = mount(
      <ActivityDetails
        desktop
        labels={{
          hash: 'hash',
          height: 'height',
          fee: 'fee',
          gas: 'Gas (used/ wanted)',
          status: 'Status',
          memo: 'Memo',
        }}
        data={{
          time: '1 hour',
          success: true,
          hash: '12344566',
          height: <div>height</div>,
          fee: '123 uatm',
          gas: '1,234 / 20, 999',
          memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
        }}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.activity-details-mobile')).toHaveLength(0);
    expect(wrap.find('.activity-details-desktop')).toHaveLength(1);
  });
});
