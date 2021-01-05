import { makeStyles } from '@material-ui/styles';

export const useGetStyles = (prop: boolean) => {
  const useStyles = makeStyles({
    root: {
      background: 'white',
      overflow: 'auto',
      '& .cell': {
        borderBottom: 'none',
        fontSize: '1rem',
      },
      '& .display': {
        color: '#000000',
      },
      '& .label': {
        color: '#414141',
        verticalAlign: 'top',
      },
      '& .descriptionLabel': {
        display: 'flex',
      },
      '& .descriptionDisplay': {
        display: 'flex',
        paddingTop: '0',
      },
      '& .detail': {
        verticalAlign: 'top',
      },
      '& .singleRow': {
        borderBottom: '1px solid #E8E8E8',
      },
      '& .proposer': {
        marginRight: '0',
        marginLeft: 'auto',
        width: 'fit-content',
      },
      '& .proposal': {
        padding: '1.5rem 0 0 0',
        color: '#414141',
        display: 'flex',
        flexDirection: 'row',
        fontSize: '1rem',
      },
      '& .statusRow': {
        display: prop ? 'none' : 'tabel-cell',
      },
      '& .button': {
        display: prop ? 'block' : 'none',
        width: '100%',
        marginTop: '1rem',
        height: '40px',
        color: '#FFFFFF',
        fontSize: '1rem',
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
        display: 'flex',
        marginRight: '0',
        marginLeft: 'auto',
        width: 'fit-content',
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
      '& .days': {
        display: prop ? 'block' : 'none',
        color: '#FD7846',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
