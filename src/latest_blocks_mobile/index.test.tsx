import React from 'react';
import { mount } from 'enzyme';
import LatestBlocksMobile from '.';

describe('LatestBlocksMobile', () => {
  it('Works', () => {
    expect(LatestBlocksMobile).toBeTruthy();
    const wrap = mount(
      <LatestBlocksMobile
        labels={
          {
            tx: 'tx',
          }
        }
        data={[{
          proposer: () => <div>proposer</div>,
          height: () => <div>1,234</div>,
          time: '10 Jan 2020,13:00:22 UTC',
          hash: '89832B67F594asddw32',
          tx: 2,
        },
        ]}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.latest-blocks-mobile')).toHaveLength(1);
    expect(wrap.find('.single-block')).toHaveLength(1);
    expect(wrap.find('.time')).toHaveLength(1);
    expect(wrap.find('.time').first().text()).toEqual('10 Jan 2020,13:00:22 UTC');
  });
});
