import React from 'react';
import { TablePreviewWrapper } from '../src';
import { DataBlockCustom } from './utils';

export default {
  title: 'TablePreviewWrapper',
  component: TablePreviewWrapper,
  argTypes: {
    // label: {
    //   type: {
    //     required: true,
    //   },
    //   table: {
    //     type: {
    //       summary: 'string',
    //     },
    //     defaultValue: {
    //       summary: 'null',
    //     },
    //   },
    //   control: {
    //     type: null,
    //   },
    // },
  },
};

const Template = (args) => (
  <TablePreviewWrapper
    {...args}
  >
    <div>
      A beautiful table
    </div>
  </TablePreviewWrapper>
);

export const Default = Template.bind({
});

Default.args = {
};
