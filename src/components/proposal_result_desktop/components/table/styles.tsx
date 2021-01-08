import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& .MuiBox-root': {
        padding: '0',
      },

      // display: 'block',
      // overflow: 'auto',
      // '& .MuiTableCell-head': {
      //   fontSize: '1rem',
      // },
      // '& .cell, & .label': {
      //   borderBottom: 'none',
      // },
      // '& h1': {
      //   fontSize: '1.5rem',
      //   margin: '0 0 1.5rem 0.5rem',
      //   fontWeight: 400,
      // },
      // '& .tableRow': {
      //   '&:nth-of-type(odd)': {
      //     background: '#F8F8F8',
      //   },
      // },
      // '& .depositor': {
      //   paddingLeft: '2.5rem',
      // },
      // '& .time': {
      //   paddingRight: '2.5rem',
      // },
    },
  });

  return {
    classes: useStyles(),
  };
};
