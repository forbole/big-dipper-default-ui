import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      background: 'white',
      overflow: 'auto',
      '& .cell': {
        borderBottom: 'none',
      },
      '& .MuiTableCell-root': {
        '&:last-child': {
          borderBottom: 'none',
        },
        '& tr': {
          borderBottom: '10px solid #E8E8E8',
          '&:last-child': {
            borderBottom: 'none',
          },
        },
      },
      '& .id': {
        width: '1rem',
        fontSize: '1rem',
        verticalAlign: 'top',
        margin: '1.5rem 0 0 0',
      },
      '& .proposer': {
        display: 'flex',
        margin: '0 0.5rem 0.5rem 0',
      },
      '& .proposerText': {
        display: 'none',
      },
      '& .mainContent': {
        display: 'block',
        margin: '0',
      },
      '& .content': {
        marginTop: '0.875rem',
      },
      '& .time': {
        marginTop: '0.875rem',
        display: 'flex',
        marginBottom: '1rem',
      },
      '& .days': {
        color: '#FD7522',
        marginLeft: '0.5rem',
      },
      '& .proposal': {
        padding: '1.5rem 0 0 0',
        color: '#414141',
        display: 'flex',
        flexDirection: 'column',
      },
      '& .button': {
        width: '100px',
        height: '30px',
        color: '#FFFFFF',
        fontSize: '0.875rem',
        borderRadius: '6px',
        border: 'none',
      },
      '& .Vote': {
        background: '#FD3B4C',
      },
      '& .Deposit': {
        background: '#FD7522',
      },
      '& .status': {
        width: '100px',
        height: '30px',
        display: 'flex',
      },
      '& .statusType': {
        marginTop: '8px',
        width: '4px',
        height: '0.75rem',
        borderRadius: '8px',
        background: '#b3b3b3',
      },
      '& .Rejected': {
        background: '#FD3B4C',
      },
      '& .Passed': {
        background: '#1EC490',
      },
      '& .Removed': {
        background: '#FEA729',
      },
      '& .statusContent': {
        marginTop: '4px',
        fontSize: '0.875rem',
        marginLeft: '0.4rem',
      },
    },
    desktop: {
      '& .content': {
        display: 'block',
      },
      '& .layout': {
        display: 'flex',
      },
      '& .proposerText': {
        display: 'flex',
        '&:after': {
          content: '""',
          width: '5px',
          height: '1rem',
          display: 'block',
        },
      },
      '& .proposal': {
        flexDirection: 'row',
        fontSize: '1rem',
      },
      '& .title': {
        fontSize: '1.25rem',
      },
      '& .id': {
        padding: '1.5rem 1.5rem 0 0',
      },
      '& .component': {
        display: 'inline-flex',
        flex: 1,
        justifyContent: 'flex-end',
      },
      '& .clockImage': {
        display: 'none',
      },
    },
    mobile: {
      '& .content': {
        display: 'none',
      },
      '& .proposerText': {
        display: 'none',
      },
      '& .proposal': {
        flexDirection: 'column',
        fontSize: '0.875rem',
      },
      '& .title': {
        fontSize: '1rem',
      },
      '& .id': {
        padding: '1.5rem 0.5rem 0 0',
      },
      '& .component': {
        marginBottom: '1rem',
      },
      '& .clockImage': {
        verticalAlign: 'text-bottom',
        height: '1rem',
        width: '1rem',
        marginRight: '0.2rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
