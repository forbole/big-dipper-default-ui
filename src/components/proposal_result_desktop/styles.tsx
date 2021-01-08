import { makeStyles } from '@material-ui/styles';

export const useGetStyles = (prop: any) => {
  const useStyles = makeStyles({
    root: {
      overflow: 'auto',
    },
    table: {
      '& .tab': {
        boxShadow: 'none',
        color: ' #777777',
        backgroundColor: 'rgba(0,0,0,0)',
        '& .MuiTab-root': {
          padding: '0',
          minWidth: 'fit-content',
        },
        '& .indicator': {
          backgroundColor: '#FD3B4C',
        },
        '& .MuiAppBar-colorDefault': {
          backgroundColor: 'rgba(0,0,0,0)',
        },
        '& .MuiTab-textColorPrimary.Mui-selected': {
          // backgroundColor: '#004C9B',
          color: '#FD3B4C',
          // fontWeight: theme.typography.fontWeightMedium,
        },
      },
      '& .MuiBox-root': {
        padding: '0',
      },
      '&$selected': {
        backgroundColor: '#004C9B',
        color: 'white',
        // fontWeight: theme.typography.fontWeightMedium,
      },
    },
    chart: {
      display: 'flex',
      '& .chartBox': {
        width: '7.5rem',
        height: '7.5rem',
        margin: '3.75rem',
      },
      '& p': {
        margin: '0',
        color: '#414141',
      },
      '& h1': {
        fontSize: '1.5rem',
        margin: '0',
        fontWeight: '400',
      },
      '& .amount': {
        fontSize: '1rem',
        color: '#414141',
        marginLeft: '0.5rem',
      },
      '& .dataName': {
        color: '##777777',
      },
      '& .dataDisplay': {
        fontSize: '1.25rem',
        color: '#000000',
      },
      '& .dataContent': {
        display: 'flex',
        marginTop: '0.5rem',
      },
      '& .dataColumn': {
        marginRight: '2rem',
      },
      '& .dataType': {
        marginTop: '1.5rem',
        position: 'relative',
        paddingLeft: '0.7rem',
        fontSize: '0.875rem',
        minWidth: '0',
        flex: 1,
        '&.yes': {
          '&:before': {
            background: prop[0],
          },
        },
        '&.abstain': {
          '&:before': {
            background: prop[3],
          },
        },
        '&.veto': {
          '&:before': {
            background: prop[2],
          },
        },
        '&.no': {
          '&:before': {
            background: prop[1],
          },
        },
        '&:before': {
          content: '""',
          width: '5px',
          height: '100%',
          left: '0',
          top: '0',
          background: '#b3b3b3',
          display: 'block',
          position: 'absolute',
          borderRadius: '15px',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
