import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      background: 'white',
      overflow: 'auto',
      '& .staking': {
        padding: '1rem 0.5rem',
        borderBottom: 'solid #E8E8E8 1px',
      },
      '&. validator-staking-address': {
        float: 'left',
      },
      '&. validator-staking-amount': {
        float: 'right',
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
        marginTop: '1rem',
      },
      '& .overflow': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },

      '& .table-pagination': {
        float: 'right',
        overflow: 'auto',
      },

    },
  });

  return {
    classes: useStyles(),
  };
};
