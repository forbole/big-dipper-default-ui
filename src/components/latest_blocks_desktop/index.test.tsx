import React from 'react';
import { mount } from 'enzyme';
import {
  Table,
  TableHead,
} from '@material-ui/core';
import LatestBlocksDesktop from '.';

describe('LatestBlocksDesktop', () => {
  it('Works', () => {
    expect(LatestBlocksDesktop).toBeTruthy();
    const wrap = mount(
      <LatestBlocksDesktop
        labels={
          {
            tx: 'tx',
            proposer: 'Proposer',
            height: 'height',
            hash: 'hash',
            time: 'time',
          }
        }
        data={[{
          proposer: <div>proposer</div>,
          height: <div>1,234</div>,
          time: '10 Jan 2020,13:00:22 UTC',
          hash: '89832B67F594asddw32',
          tx: 2,
        },
        ]}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.latest-blocks-desktop')).toHaveLength(1);
    expect(wrap.find(Table)).toHaveLength(1);
    expect(wrap.find(TableHead)).toHaveLength(1);
    expect(wrap.find('.cell').find('.time').first().text()).toEqual('10 Jan 2020,13:00:22 UTC');
  });
});
