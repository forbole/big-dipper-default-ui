import { makeStyles } from '@material-ui/styles';

export const useGetStyles = (prop: boolean) => {
  const useStyles = makeStyles({
    root: {
      overflow: 'auto',
      '& .displayContent': {
        textAlign: 'right',
        color: '#000000',
      },
      '& .label': {
        color: '#414141',
      },
      '& .proposer': {
        marginRight: '0',
        marginLeft: 'auto',
        width: 'fit-content',
      },
      '& .statusRow': {
        display: prop ? 'none' : 'tabel-cell',
      },
      '& .button': {
        display: prop ? 'block' : 'none',
        width: '100%',
        marginTop: '2rem',
        height: '2.5rem',
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
      '& hr': {
        height: '1px',
        margin: '0',
        width: '100%',
        background: '#E8E8E8',
        borderStyle: 'unset',
      },
      '& .MuiGrid-item': {
        padding: '1rem',
        '&.descriptionDisplay': {
          paddingTop: '0',
          color: '#000000',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
