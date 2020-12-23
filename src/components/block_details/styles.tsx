import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      background: 'white',
      overflow: 'auto',
      '& .cell': {
        borderBottom: 'none',
      },
      '& h1': {
        fontSize: '1.5rem',
        margin: '0',
        fontWeight: 400,
      },
      '& .table': {
        '& tr': {
          borderBottom: '1px solid #E8E8E8',
          '&:last-child': {
            borderBottom: 'none',
          },
        },
      },
      '& .txHashValue': {
        color: '#1D86FF',
      },
      '& .arrowRight': {
        paddingTop: '0.2rem',
        justifyContent: 'flex-end',
        height: '1rem',
        width: '1rem',
      },
      '& .signatureContent': {
        flex: 1,
        justifyContent: 'flex-end',
        display: 'flex',
      },
      '& .signatureValue': {
        flex: 1,
        display: 'flex',
      },
      '& .value': {
        display: 'flex',
      },
      '& .dialog': {
        fontSize: '10rem',

        '& tableHead': {
          background: '#F8F8F8',
        },
        '& .signatureTable': {
          background: 'red',
        },
        '& .table__row': {
          '&:nth-of-type(odd)': {
            background: '#F8F8F8',
            '& .rank': {
              '&:nth-of-type(odd)': {
                background: '#FFFFFF',
              },
            },
          },
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
    desktop: {
      '& .title': {
        width: 'auto',
      },
      '& .MuiTableCell-root': {
        display: 'table-cell',
        // '&:last-child': {
        //   // borderBottom: '10px solid #E8E8E8',
        // },
        // '& tr': {
        //   borderBottom: '10px solid #E8E8E8',
        //   '&:last-child': {
        //     borderBottom: 'none',
        //   },
        // },
      },
      '& .signatureTable': {
        margin: '2.5rem',
      },
    },
    mobile: {
      '& .MuiTableCell-head': {
        color: 'red',
      },
      '& .MuiTableCell-root': {
        display: 'block',
        padding: '0.1rem 0 0.1rem 0',
      },
      '& .display': {
        borderBottom: 'none',
        marginTop: '0.7rem',
      },
      '& .value': {
        paddingBottom: '0.7rem',
        display: 'flex',
      },

      '& .title': {
        display: 'none',
      },
      '& .arrowRight': {
        paddingTop: '0.2rem',
        justifyContent: 'flex-end',
        height: '1rem',
        width: '1rem',
      },
      '& .signatureContent': {
        flex: 1,
        justifyContent: 'flex-end',
        display: 'flex',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
