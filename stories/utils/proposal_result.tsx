import React from 'react';
import { Proposer } from '../../src/components/consensus/types';
import { AvatarDisplay } from '../../src';

const ProposerData = () => {
  return (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
  );
};

export const yes = {
  validator: {
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  votingPower: {
    rawValue: 4602020.799998,
    display: '4,602,020.799998 ATOM',
  },
  votingPowerPercentage: {
    rawValue: 77,
    display: '0.77%',
  },
  votingPowerOverride: {
    rawValue: 1.9,
    display: '1.9%',
  },
  answer: {
    rawValue: 'yes',
    display: 'Yes',
  },
};

export const no = {
  validator: {
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  votingPower: {
    rawValue: 4602020.799998,
    display: '4,602,020.799998 ATOM',
  },
  votingPowerPercentage: {
    rawValue: 77,
    display: '0.77%',
  },
  votingPowerOverride: {
    rawValue: 1.9,
    display: '1.9%',
  },
  answer: {
    rawValue: 'no',
    display: 'No',
  },
};

export const veto = {
  validator: {
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  votingPower: {
    rawValue: 4602020.799998,
    display: '4,602,020.799998 ATOM',
  },
  votingPowerPercentage: {
    rawValue: 77,
    display: '0.77%',
  },
  votingPowerOverride: {
    rawValue: 1.9,
    display: '1.9%',
  },
  answer: {
    rawValue: 'veto',
    display: 'No With Veto',
  },
};

export const abstain = {
  validator: {
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  votingPower: {
    rawValue: 4602020.799998,
    display: '4,602,020.799998 ATOM',
  },
  votingPowerPercentage: {
    rawValue: 77,
    display: '0.77%',
  },
  votingPowerOverride: {
    rawValue: 1.9,
    display: '1.9%',
  },
  answer: {
    rawValue: 'abstain',
    display: 'Abstain',
  },
};

export const absence = {
  validator: {
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  votingPower: {
    rawValue: 4602020.799998,
    display: '4,602,020.799998 ATOM',
  },
  votingPowerPercentage: {
    rawValue: 77,
    display: '0.77%',
  },
  votingPowerOverride: {
    rawValue: 1.9,
    display: '1.9%',
  },
  answer: {
    rawValue: 'absence',
    display: 'Absence',
  },
};

export const dummyData: any = {
  chart: {
    subTitle: 'Voted (43.78%)',
    title: '81,674,736.604642 ATOM',
    amount: '(~81M of ~186M ATOM)',
    colors: ['#28C989', '#1C86FC', '#FD248C', '#FD7522'],
    data: [
      {
        type: 'yes',
        title: 'Yes',
        percentage: '30.66%',
        value: 2504158159222,
        amount: '25,041,581,559222',
      },
      {
        type: 'abstain',
        title: 'Abstain',
        percentage: '0.05%',
        value: 3504158159222,
        amount: '3,504,158,159,222',
      },
      {
        type: 'no',
        title: 'No',
        percentage: '69.28%',
        value: 2504158159222,
        amount: '2,504,158,159,222',
      },
      {
        type: 'veto',
        title: 'No with Veto',
        percentage: '0.00%',
        value: 58159222000,
        amount: '58,159,222,000',
      },
    ],
  },
  tableDefaultProps: {
    overrideLabel: 'Override',
    data: [
      yes,
      no,
      veto,
      abstain,
      yes,
      no,
      veto,
      abstain,
      absence,
      yes,
      no,
      veto,
      abstain,
      yes,
      no,
      veto,
      abstain,
      absence,
      yes,
      no,
      veto,
      abstain,
      yes,
      no,
      veto,
      abstain,
      absence,
      yes,
      no,
      veto,
      abstain,
      yes,
      no,
      veto,
      abstain,
      absence,
    ],
    columns: [
      {
        label: 'validator',
        display: 'Voter',
        sort: true,
      },
      {
        label: 'votingPower',
        display: 'Voting Power',
        align: 'right',
        sort: true,
      },
      {
        label: 'votingPowerPercentage',
        display: 'Voting Power %',
        align: 'right',
        sort: true,
      },
      {
        label: 'votingPowerOverride',
        display: 'Voting Power Override',
        align: 'right',
        sort: true,
      },
      {
        label: 'answer',
        display: 'Answer',
        align: 'right',
        sort: true,
      },
    ],
    absenceColumns: [
      {
        label: 'validator',
        display: 'Validator',
        sort: true,
      },
      {
        label: 'votingPower',
        display: 'Voting Power',
        align: 'right',
        sort: true,
      },
      {
        label: 'votingPowerPercentage',
        display: 'Voting Power %',
        align: 'right',
        sort: true,
      },
      {
        label: 'answer',
        display: 'Status',
        align: 'right',
        sort: true,
      },
    ],
    initialActiveSort: 'validator',
  },
  tabProps: {
    all: 'All votes (60)',
    yes: 'yes (15)',
    no: 'no (43)',
    veto: 'No with veto (0)',
    abstain: 'abstain (2)',
    absence: 'absence (40/100)',
  },
};
