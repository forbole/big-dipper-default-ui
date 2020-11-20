import React from 'react';
import {
  LatestBlocksDesktop, TablePreviewWrapper,
} from '../src';
import { ActionButton } from './utils/table_preview_wrapper';
import {
  dummyData, dummyLabelDesktop,
} from './utils/latest_blocks';

export default {
  title: 'LatestBlocks/desktop',
  component: LatestBlocksDesktop,
  argTypes: {
    className: {
      type: {
        required: false,
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
    labels: {
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'object',
          detail: JSON.stringify({
            proposer: 'string',
            height: 'string',
            time: 'string',
            hash: 'string',
            tx: 'string',
          }, null, 2),
        },
        defaultValue: {
          summary: 'null',
        },
      },
      control: {
        type: null,
      },
    },
    data: {
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'object',
          detail: JSON.stringify({
            proposer: 'React.Reactnode',
            height: 'React.Reactnode',
            time: 'string',
            hash: 'string',
            tx: 'string | number',
          }, null, 2),
        },
        defaultValue: {
          summary: 'null',
        },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Default = () => {
  return (
    <LatestBlocksDesktop labels={dummyLabelDesktop} data={dummyData} />
  );
};

export const WithWrapper = () => {
  return (
    <TablePreviewWrapper
      title="Latest Blocks"
      action={ActionButton}
    >
      <LatestBlocksDesktop labels={dummyLabelDesktop} data={dummyData} />
    </TablePreviewWrapper>
  );
};
