import React from 'react';
import { DataBlock } from '../src';
import { DataBlockCustom } from './utils';

export default {
  title: 'DataBlock',
  component: DataBlock,
  argTypes: {
    label: {
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'null',
        },
      },
      control: {
        type: null,
      },
    },
    value: {
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'string | number',
        },
        defaultValue: {
          summary: 'null',
        },
      },
    },
    selectedValue: {
      table: {
        type: {
          summary: 'string | number',
        },
        defaultValue: {
          summary: 'null',
        },
      },
    },
    customComponent: {
      table: {
        type: {
          summary: 'ReactElement',
        },
        defaultValue: {
          summary: 'null',
        },
      },
      control: {
        type: null,
      },
    },
    durations: {
      table: {
        type: {
          summary: 'Object[]',
          detail: JSON.stringify({
            value: 'string | number',
            display: 'string',
            callback: '(key:string | number) => void',
          }, null, 2),
        },
        defaultValue: {
          summary: '[]',
        },
      },
      control: {
        type: null,
      },
    },
  },
};

const Template = (args) => (
  <DataBlock
    {...args}
  />
);

export const WithCustom = Template.bind({
});

WithCustom.args = {
  label: 'Latest Block Height',
  value: '15,000',
  selectedValue: '24',
  customComponent: <DataBlockCustom />,
  durationsCallback: (key) => {
    console.log(`called with key: ${key}`);
  },
  durations: [{
    value: '7_hours',
    display: 'Last 7 hours',
  }, {
    value: '24',
    display: '24 hours',
  }],
};

export const NoDurations = Template.bind({
});
NoDurations.args = {
  label: 'Latest Block Height',
  value: '15,000',
};

export const SingleDuration = Template.bind({
});
SingleDuration.args = {
  label: 'Latest Block Height',
  value: '15,000',
  durations: [{
    value: '7_hours',
    display: 'Last 7 hours',
  }],
};

export const MultiDurations = Template.bind({
});
MultiDurations.args = {
  label: 'Latest Block Height',
  value: '15,000',
  selectedValue: '24',
  durationsCallback: (key) => {
    console.log(`called with key: ${key}`);
  },
  durations: [{
    value: '7_hours',
    display: 'Last 7 hours',
  }, {
    value: '24',
    display: '24 hours',
  }],
};
