import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '&.validator-staking-mobile': {
        background: 'white',
        padding: '1rem',
        boxSizing: 'border-box',
      },
      '& .staking': {
        // padding: '1rem 0.5rem',
        borderBottom: 'solid #E8E8E8 1px',
      },
      '&. validator-staking-address': {
        // float: 'left',
      },
      '&. validator-staking-amount': {
        // float: 'right',
      },
      '& .validator-staking-container': {
        flex: 1,
        minWidth: '0',
        padding: '0 0.5rem',
      },
      '& .content': {
        fontSize: '1rem',
      },
      '& .validator-staking-redelegate-message': {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: '12px',
      },
      '& .flex': {
        display: 'flex',
      },
      '& .validator-staking-content': {
        display: 'flex',
        justifyContent: 'space-between',
      },
      '& .validator-staking__pagination': {
        boxSizing: 'border-box',
        '& .MuiTablePagination-toolbar': {
          display: 'flex',
          flexDirection: 'row-reverse',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
