import React from 'react';
import { mount } from 'enzyme';
import { ArrowForward } from '@material-ui/icons';
import PowerEvents from '.';

describe('PowerEvents ', () => {
  it('Works', () => {
    expect(PowerEvents).toBeTruthy();
    const wrap = mount(
      <PowerEvents
        desktop={768}
        data={[
          {
            blockHeight: <div>1,233</div>,
            date: '10 Dec 2019 18:12 UTC',
            previousValue: '12,468,123',
            currentValue: '12,468,123',
            user: <div>cosmos13pa4duhhy60vu63x…y4pq</div>,
            valueDifference: {
              className: 'negative',
              display: '-1,123',
            },
            value: '1,2345.03 DARIC',
            type: {
              className: 'delegation',
              display: 'Delegation',
            },
            redelegate: {
              from: <div>Wallet A</div>,
              to: <div>Wallet B</div>,
            },
          },
          {
            blockHeight: <div>1,233</div>,
            date: '10 Dec 2009 18:12 UTC',
            previousValue: '12,468,123',
            currentValue: '12,468,123',
            user: <div>cosmos13pa4duhhy60vu63x…y4pq</div>,
            valueDifference: {
              className: 'negative',
              display: '-1,123',
            },
            value: '1,2345.03 DARIC',
            type: {
              className: 'delegation',
              display: 'Delegation',
            },
          },
        ]}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find(ArrowForward).length).toEqual(3);
    expect(wrap.find('.power-events')).toHaveLength(1);
    expect(wrap.find('.event')).toHaveLength(2);
    expect(wrap.find('.redelegate__from')).toHaveLength(1);
  });
});
