import React from 'react';
import { mount } from 'enzyme';
import TablePreviewWrapper from '.';

describe('TablePreviewWrapper', () => {
  it('Works with no footer', () => {
    expect(TablePreviewWrapper).toBeTruthy();
    const wrap = mount(
      <TablePreviewWrapper
        title="hello world"
        action={<div>hello world</div>}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.table-preview-wrapper')).toHaveLength(1);
    expect(wrap.find('.top-bar')).toHaveLength(1);
    expect(wrap.find('h3')).toHaveLength(1);
    expect(wrap.find('.content')).toHaveLength(1);
    expect(wrap.find('.footer-action')).toHaveLength(0);
  });

  it('Works with footer', () => {
    expect(TablePreviewWrapper).toBeTruthy();
    const wrap = mount(
      <TablePreviewWrapper
        title="hello world"
        action={<div>hello world</div>}
        footerAction={<div>hello world</div>}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.footer-action')).toHaveLength(1);
  });
});
