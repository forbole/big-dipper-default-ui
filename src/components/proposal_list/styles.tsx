import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      padding: '0 1.5rem 0 1.5rem',
      background: 'white',
      overflow: 'auto',
      '& .label': {
        borderBottom: 'none',
        fontWeight: 500,
      },
      '& .id': {
        width: '1rem',
        fontSize: '1rem',
        padding: '1.5rem 0 0 0',
        verticalAlign: 'top',
        horizontalAlign: 'left',
        margin: '1.5rem 0 0 0',
      },
      '& .layout': {
        // display: 'block',
      },
      '& .proposer': {
        display: 'flex',
        marginRight: '0.5rem',
      },
      '& .mainContent': {
        display: 'block',
        margin: '0',
      },
      '& .title': {
        fontSize: '1.25rem',
        fontWeight: 400,
        color: '#000000',
      },
      '& .content': {
        marginTop: '0.875rem',
      },
      '& .time': {
        marginTop: '0.875rem',
        display: 'flex',
        marginBottom: '1.6875rem',
      },

      '& .days': {
        color: '#FD7522',
      },
      '& .proposal': {
        paddingLeft: '1.375rem',
        fontSize: '1rem',
        color: '#414141',
      },
      '& .cell': {
        padding: '1.5rem 0 0 0',
        '&.hash': {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          maxWidth: '120px',
        },
      },
      // '& .component': {
        // position: 'absolute',
        // right: '40px',
      // },
      '& .button': {
        width: '100px',
        height: '30px',
        position: 'absolute',
        right: '40px',
        display: 'block',
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
        position: 'absolute',
        right: '40px',
        display: 'flex',
      },
      '& .type': {
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
  });

  return {
    classes: useStyles(),
  };
};
