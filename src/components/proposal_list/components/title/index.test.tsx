import React from 'react';
import { mount } from 'enzyme';
import Title from '.';

describe('Title', () => {
  it('Works', () => {
    expect(Title).toBeTruthy();
    const wrap = mount(
      <Title
        display="Lunie.io on iOS and Android 📱🔥🚀"
        id="123"
      />,
    );
    expect(wrap).not.toBeNull();
  });
});
