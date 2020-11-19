import React from 'react';
import {
  LatestBlocksMobile, TablePreviewWrapper,
} from '../src';
import {
  ActionButton, FooterAction,
} from './utils/table_preview_wrapper';
import { dummyData } from './utils/latest_blocks';

export default {
  title: 'LatestBlocks/mobile',
  component: LatestBlocksMobile,
  argTypes: {
    proposer: {
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'object',
          detail: JSON.stringify({
            value: 'React.FC',
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
    height: {
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'object',
          detail: JSON.stringify({
            value: 'React.FC',
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
    time: {
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'object',
          detail: JSON.stringify({
            value: 'string',
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
    hash: {
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'object',
          detail: JSON.stringify({
            value: 'string',
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
    tx: {
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'object',
          detail: JSON.stringify({
            value: 'string | number',
            string: 'string',
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
