import React from 'react';
import { mount } from 'enzyme';
import LatestBlocksMobile from '.';

describe('LatestBlocksMobile', () => {
  it('Works', () => {
    expect(LatestBlocksMobile).toBeTruthy();
    const wrap = mount(
      <LatestBlocksMobile
        data={[{
          proposer: {
            value: () => <div>proposer</div>,
          },
          height: {
            value: () => <div>1,234</div>,
          },
          time: {
            value: '10 Jan 2020,13:00:22 UTC',
          },
          hash: {
            value: '89832B67F594asddw32',
          },
          tx: {
            value: 2,
            label: 'tx',
          },
        },
        {
          proposer: {
            value: () => <div>proposer</div>,
          },
          height: {
            value: () => <div>1,234</div>,
          },
          time: {
            value: '10 Jan 2020,14:00:22 UTC',
          },
          hash: {
            value: '89832B67F594asddw32',
          },
          tx: {
            value: 2,
            label: 'tx',
          },
        },
        ]}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.latest-blocks-mobile')).toHaveLength(1);
    expect(wrap.find('.single-block')).toHaveLength(2);
    expect(wrap.find('.time')).toHaveLength(2);
    expect(wrap.find('.time').first().text()).toEqual('10 Jan 2020,13:00:22 UTC');
  });
});
