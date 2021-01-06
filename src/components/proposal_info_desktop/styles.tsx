import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      overflow: 'auto',
      '& .cell, & .label': {
        borderBottom: 'none',
      },
      '& .MuiTableCell-root': {
        paddingTop: '0',
      },
      '& .label': {
        width: '10rem',
      },
      '& .detail': {
        verticalAlign: 'top',
      },
      '& .type': {
        paddingTop: '1.5rem',
      },
      '& .table': {
        borderBottom: '1px solid #E8E8E8',
      },
      '& .id': {
        width: '1rem',
        fontSize: '1rem',
        verticalAlign: 'top',
        margin: '0',
        padding: '0 1.5rem 0 0',
      },
      '& .proposer': {
        display: 'flex',
        margin: '0 0.5rem 0.5rem 0',
      },
      '& .mainContent': {
        display: 'block',
        margin: '0',
      },
      '& .content': {
        marginTop: '0.875rem',
        display: 'block',
      },
      '& .time': {
        marginTop: '0.875rem',
        display: 'flex',
        marginBottom: '1rem',
        color: '#414141',
      },
      '& .days': {
        color: '#FD7522',
        marginLeft: '0.5rem',
      },
      '& .proposal': {
        padding: '0',
        color: '#414141',
        display: 'flex',
        flexDirection: 'row',
        fontSize: '1rem',
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
      '& .title': {
        fontSize: '1.25rem',
      },
      '& .component': {
        display: 'inline-flex',
        flex: 1,
        justifyContent: 'flex-end',
      },
      '& .submitted_votingStart': {
        width: 'fit-content',
        marginRight: '3rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
