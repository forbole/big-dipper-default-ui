import React from 'react';
import { mount } from 'enzyme';
import Detail from '.';

describe('Detail', () => {
  it('Works', () => {
    expect(Detail).toBeTruthy();
    const wrap = mount(
      <Detail
        data={{
          type: 'Text Proposal',
          description: 'This proposal is intended to signal acceptance/rejection of the precise software release that will contain the changes to be included in the Cosmos Hub 3 upgrade. A high level overview of these changes was successfully approved by the voters signalling via Cosmos Hub 3 Upgrade Proposal A: https://hubble.figment.network/cosmos/chains/cosmoshub-2/governance/proposals/13 We are proposing to use this code https://github.com/cosmos/gaia/releases/tag/v2.0.0 to upgrade the Cosmos Hub. We are proposing to export the ledger’s state at Block Height 1823000, which we expect to occur on Sunday, September 15, 2019 at or around 2:00 pm UTC. We are proposing to launch Cosmos Hub 3 at 3:57 pm UTC on Sunday, September 15, 2019. Instructions for migration: https://github.com/cosmos/gaia/wiki/Cosmos-Hub-2-Upgrade Full proposal: https://ipfs.io/ipfs/Qmf54mwb8cSRf316jS4by96dL91fPCabvB9V5i2Sa1hxdz',
        }}
        label={{
          type: 'Type',
          description: 'Description',
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.label').find('.type').first().text()).toEqual('Type');
    expect(wrap.find('.cell').find('.type').first().text()).toEqual('Text Proposal');
    expect(wrap.find(Detail)).toHaveLength(1);
  });
});
