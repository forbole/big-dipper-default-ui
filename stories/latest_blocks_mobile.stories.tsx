import React from 'react';
import {
  LatestBlocksMobile, TablePreviewWrapper,
} from '../src';
import {
  ActionButton, FooterAction,
} from './utils/table_preview_wrapper';
import { dummyData } from './utils/latest_blocks';

export default {
  title: 'LatestBlocksMobile',
  component: LatestBlocksMobile,
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
    <LatestBlocksMobile data={dummyData} />
  );
};

export const WithWrapper = () => {
  return (
    <TablePreviewWrapper
      title="Latest Blocks"
      action={ActionButton}
      footerAction={FooterAction}
    >
      <LatestBlocksMobile data={dummyData} />
    </TablePreviewWrapper>
  );
};
