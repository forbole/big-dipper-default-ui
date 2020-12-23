import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '&.validator-staking-mobile': {
        background: 'white',
        boxSizing: 'border-box',
      },
      '& .staking': {
        padding: '1rem 0',
        borderBottom: 'solid #E8E8E8 1px',
      },
      '& .content': {
        fontSize: '1rem',
      },
      '& .validator-staking-content': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      '& .validator-staking__pagination': {
        boxSizing: 'border-box',
        '& .MuiTablePagination-toolbar': {
          display: 'flex',
          justifyContent: 'flex-end',
        },
        '& .MuiTablePagination-spacer': {
          flex: 'none',
        },
        '& .MuiToolbar-gutters': {
          padding: 0,
          margin: 0,
        },
        '& .MuiTablePagination-caption': {
          flexShrink: 'initial',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
