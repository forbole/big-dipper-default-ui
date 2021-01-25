import React from 'react';
import { mount } from 'enzyme';
import InfoDialog from '.';

describe('InfoDialog', () => {
  it('Works', () => {
    expect(InfoDialog).toBeTruthy();
    const wrap = mount(
      <InfoDialog
        title="scan for address"
        buttonDisplay="Copy Address"
        address={{
          display: 'cosmos14kn0k…swhp',
          rawValue: 'cosmos14kn0k…swhp',
        }}
        socialMedia={(
          <div>
            Share to ...
          </div>
        )}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(InfoDialog)).toHaveLength(1);
  });
});
