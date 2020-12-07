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
        paddingTop: '1rem',
        width: '1rem',
        fontSize: '1rem',
        padding: '0 0 0 0',
        verticalAlign: 'top',
        horizontalAlign: 'left',
        margin: '0',

      },
      '& .proposer': {
        color: '#414141',
        display: 'flex',
        marginRight: '0.5rem',
      },
      '& .title': {
        fontSize: '1.25rem',
        fontWeight: 400,
      },
      '& .content': {
        marginTop: '0.875rem',
        color: '#414141',
      },
      '& .time': {
        display: 'flex',
        marginBottom: '1.6875rem',
      },
      '& .days': {
        color: '#FD7522',
      },
      '& .proposal': {
        paddingLeft: '1.5rem',
        fontSize: '1rem',
      },
      '& .cell': {
        padding: '0',
        // paddingLeft: '1.5rem',
        // borderBottom: 'none',
        fontWeight: 300,
        '&.hash': {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          maxWidth: '120px',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
