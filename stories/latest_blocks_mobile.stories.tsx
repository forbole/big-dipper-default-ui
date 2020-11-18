import React from 'react';
import {
  LatestBlocksMobile, TablePreviewWrapper,
} from '../src';
import {
  ActionButton, FooterAction,
} from './utils/table_preview_wrapper';

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
    <LatestBlocksMobile />
  );
};

export const WithWrapper = () => {
  return (
    <TablePreviewWrapper
      title="Latest Blocks"
      action={ActionButton}
      footerAction={FooterAction}
    >
      <LatestBlocksMobile />
    </TablePreviewWrapper>
  );
};
