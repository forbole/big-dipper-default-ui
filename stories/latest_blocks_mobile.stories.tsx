import React from 'react';
import {
  LatestBlocksMobile, TablePreviewWrapper,
} from '../src';
import {
  ActionButton, FooterAction,
} from './utils/table_preview_wrapper';
import {
  dummyLabelMobile, dummyData,
} from './utils/latest_blocks';

export default {
  title: 'LatestBlocks/mobile',
  component: LatestBlocksMobile,
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
    <LatestBlocksMobile labels={dummyLabelMobile} data={dummyData} />
  );
};

export const WithWrapper = () => {
  return (
    <TablePreviewWrapper
      title="Latest Blocks"
      action={ActionButton}
      footerAction={FooterAction}
    >
      <LatestBlocksMobile labels={dummyLabelMobile} data={dummyData} />
    </TablePreviewWrapper>
  );
};
