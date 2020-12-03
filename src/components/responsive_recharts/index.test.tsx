import React from 'react';
import { mount } from 'enzyme';
import { ResponsiveContainer } from 'recharts';
import ResponsiveRecharts from '.';

describe('ResponsiveRecharts', () => {
  it('Works', () => {
    expect(ResponsiveRecharts).toBeTruthy();
    const wrap = mount(
      <div
        style={{
          width: '300px', height: '400px',
        }}
      >
        <ResponsiveRecharts>
          <>
          </>
        </ResponsiveRecharts>
      </div>,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find(ResponsiveContainer)).toHaveLength(1);
    expect(wrap.find('.responsive-recharts')).toHaveLength(1);
  });
});
