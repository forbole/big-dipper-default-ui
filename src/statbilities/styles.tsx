import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = () => {
  const theme: any = useTheme();

  const useStyles = makeStyles({
    root: {
      height: '29.5rem',
      width: '26.75rem',
      display: 'flex',
      borderRadius: '2px',
    },
    container: {
      height: '25.5rem',
      width: '23.75rem',
      margin: 'auto',
    },
    titleMain: {
      fontSize: '1.375rem',
      fontWeight: 500,
      margin: '0',
      marginBottom: '2rem',
    },
    itemTitle: {
      fontSize: '0.875rem',
      fontWeight: 300,
      margin: '0.9375rem 0 0 0.5rem',
      color: theme.palette.custom.fonts.fontThree,
    },
    amount: {
      fontSize: '1.25rem',
      fontWeight: 400,
      margin: '0rem 0 0 0.5rem',
      color: '#000000',
    },
    chartCenter: {
      width: '8.75rem',
      height: '2.875rem',
      margin: '3.3rem 0 0 0',
      position: 'absolute',
      textAlign: 'center',
    },
    amountInChart: {
      fontSize: '1.25rem',
      fontWeight: 400,
      margin: '0',
      height: '1.65rem',
      color: '#000000',
    },
    atom: {
      fontSize: '0.875rem',
      fontWeight: 400,
      margin: '0rem 0 0 0.5rem',
      color: '#000000',
    },
    rectangle1: {
      display: 'block',
      width: '0.25rem',
      height: '2.375rem',
      background: '#FF7846',
      marginTop: '1.125rem',
      marginLeft: '2rem',
      borderRadius: '1px',

    },
    rectangle2: {
      display: 'flex',
      width: '0.25rem',
      height: '2.375rem',
      background: '#FFD800',
      marginTop: '1.125rem',
      marginLeft: '2rem',
      borderRadius: '16px',
    },
    line: {
      height: '0.0625rem',
      width: '23.75rem',
      background: '#E8E8E8',
      margin: '1.5rem 2.53125rem 1.5rem 0',
    },
    box: {
      display: 'flex',
      width: '22.375rem',
      height: '8.75rem',
    },
    chartBox: {
      display: 'flex',
      width: '8.75rem',
      height: '8.75rem',
      // background: 'red',
      position: 'relative',
      margin: '0',
    },
    box2: {
      width: '12.375rem',
      height: '8.75rem',
      margin: '0rem',
    },
    boxSmall: {
      display: 'flex',
      width: '15rem',
      height: '4.375rem',
      margin: '0rem',
    },
    boxSuperSmall: {
      width: '15rem',
      height: '2.6875rem',
      margin: '0rem',
    },
    boxBottom: {
      display: 'flex',
      width: '22.438rem',
      height: '8.75rem',
      marginLeft: '0.625rem',
      marginRight: '0.625rem',
    },
    boxBottomSmall1: {
      width: '11rem',
      height: '8.75rem',
    },
    boxBottomSmall2: {
      width: '8rem',
      height: '8.75rem',
    },
  });

  return {
    classes: useStyles(),
  };
};
