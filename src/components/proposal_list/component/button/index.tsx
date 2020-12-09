import React from 'react';
import classnames from 'classnames';
import { ButtonProp } from './types';
// import { useGetStyles } from './styles';

const Button = (props: ButtonProp) => {
  const { display } = props;
  // const { classes } = useGetStyles();
  // constructor(props: any) {
  //   super(props);
  //   this.state = ({ clickCount: 0 });
  //   this.addCount = this.addCount.bind(this);
  // }

  // addCount() {
  //   console.log(this);
  //   this.setState({ clickCount: this.state.clickCount + 1 });
  //   console.log(`點了${this.state.clickCount}下`);
  // }

  // render() {
  console.log(display);
  return (
    // <div
    //   className={classnames('button')}
    // >
    <input
      type="button"
      // onClick={this.addCount}
      value={display}
      className={classnames('button', display)}
      // style={{
      //   display: current === true ? 'block' : 'none',
      // }}
    />
    // </div>
  );
  // }
};

export default Button;
