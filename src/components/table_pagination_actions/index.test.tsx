import React from 'react';
import { mount } from 'enzyme';
import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
} from '@material-ui/icons';
import TablePaginationActions from '.';

const spies = {
  onClick() {
    console.log('does something');
  },
};

describe('TablePaginationActions', () => {
  it('Works', () => {
    expect(TablePaginationActions).toBeTruthy();
    const onClickSpy = jest.spyOn(spies, 'onClick');
    const wrap = mount(
      <TablePaginationActions
        count={13}
        page={3}
        rowsPerPage={5}
        onChangePage={spies.onClick}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(FirstPage)).toHaveLength(1);
    expect(wrap.find(KeyboardArrowLeft)).toHaveLength(1);
    expect(wrap.find(KeyboardArrowRight)).toHaveLength(1);
    expect(wrap.find(LastPage)).toHaveLength(1);
    expect(onClickSpy).toHaveBeenCalledTimes(0);
    wrap.find(KeyboardArrowLeft).first().simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
