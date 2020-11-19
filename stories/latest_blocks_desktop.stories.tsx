import React from 'react';
import {
  LatestBlocksDesktop, TablePreviewWrapper,
} from '../src';
import { ActionButton } from './utils/table_preview_wrapper';
import { dummyData } from './utils/latest_blocks';

export default {
  title: 'LatestBlocks/desktop',
  component: LatestBlocksDesktop,
  argTypes: {
    // title: {
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

export const Default = () => {
  return (
    <LatestBlocksDesktop data={dummyData} />
  );
};

export const WithWrapper = () => {
  return (
    <TablePreviewWrapper
      title="Latest Blocks"
      action={ActionButton}
    >
      <LatestBlocksDesktop data={dummyData} />
    </TablePreviewWrapper>
  );
};
