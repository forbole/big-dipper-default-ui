import React from 'react';
import { mount } from 'enzyme';
import Row from '.';

describe('Row', () => {
  it('Works active', () => {
    expect(Row).toBeTruthy();
    const wrap = mount(
      <table>
        <tbody>
          <Row
            data={{
              operatorAddress: 'forbole12345',
              moniker: {
                rawValue: 'forbole',
                display: <div>forbole</div>,
              },
              self: {
                rawValue: 100,
                display: '100%',
              },
              status: {
                className: 'jailed',
                rawValue: 'jailed',
                display: 'jailed',
              },
              commission: {
                rawValue: 100,
                display: '100',
              },
              votingPower: {
                rawValue: 100,
                display: '100',
                percentDisplay: '100%',
              },
            }}
            columns={[
              {
                id: 'rank',
                label: 'rank',
              },
              {
                id: 'moniker',
                label: 'moniker',
                sort: true,
              },
              {
                id: 'votingPower',
                label: 'votingPower',
                sort: true,
              },
              {
                id: 'self',
                label: 'self',
                sort: true,
                align: 'right',
              },
              {
                id: 'commission',
                label: 'commission',
                sort: true,
                align: 'right',
              },
              {
                id: 'status',
                label: 'status',
              },
            ]}
            index={1}
            onClick={() => {}}
          />
        </tbody>
      </table>,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.status')).toHaveLength(1);
  });
});
