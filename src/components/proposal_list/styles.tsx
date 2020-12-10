import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      background: 'white',
      overflow: 'auto',
      '& .label': {
        borderBottom: 'none',
        fontWeight: 500,
      },
      '& .id': {
        width: '1rem',
        fontSize: '1rem',
        verticalAlign: 'top',
        horizontalAlign: 'left',
        margin: '1.5rem 0 0 0',
      },
      '& .proposer': {
        display: 'flex',
        marginRight: '0.5rem',
      },
      '& .proposerText': {
        display: 'none',
      },
      '& .mainContent': {
        display: 'block',
        margin: '0',
      },
      '& .title': {
        fontWeight: 400,
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
      '& .button, & .status': {
        float: 'right',
      },
      '& .component': {
        flex: 1,
      },
      '& .clock': {
        display: 'none',
      },
    },
    mobile: {
      '& .content': {
        display: 'none',
      },
      '& .layout': {
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
      },
      '& .voting': {
        verticalAlign: 'text-bottom',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
