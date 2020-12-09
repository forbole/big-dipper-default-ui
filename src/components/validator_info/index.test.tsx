import React from 'react';
import { mount } from 'enzyme';
import { FileCopyOutlined } from '@material-ui/icons';
import ValidatorInfo from '.';
import { InfoPopover } from './components';

const spies = {
  onCopyCallback() {
    console.log('on copy callback click');
  },
};

describe('ValidatorInfo', () => {
  it('Works', () => {
    expect(ValidatorInfo).toBeTruthy();
    const onCopySpy = jest.spyOn(spies, 'onCopyCallback');
    const wrap = mount(
      <ValidatorInfo
        title="Validator Info"
        copyCallback={spies.onCopyCallback}
        operatorAddress={{
          label: 'Operator Address',
          rawValue: '123456678',
          display: '123...56758',
        }}
        selfDelegateAddress={{
          label: 'Self-Delegate Address',
          rawValue: '123456678',
          display: <p>123...5678</p>,
        }}
        commissionRate={{
          label: 'Commission Rate',
          display: '10%',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna libero, mattis nec ultrices sit amet, pharetra vitae lorem. Quisque pretium pulvinar eros,',
        }}
        maxChangeRate={{
          label: 'Max Change Rate',
          display: '2%',
          description: 'Max Change Description',
        }}
        maxRate={{
          label: 'Max Rate',
          display: '5%',
          description: 'Max Rate Description',
        }}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find(InfoPopover)).toHaveLength(3);
    expect(wrap.find(FileCopyOutlined)).toHaveLength(2);
    wrap.find('.icon__wrapper').first().simulate('click');
    expect(onCopySpy).toHaveBeenCalledTimes(1);
  });
});
