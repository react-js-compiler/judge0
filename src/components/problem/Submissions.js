import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 14,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);
function createData(time, status, runtime, memory, language) {
  return { time, status, runtime, memory, language };
}

const rows = [
  createData('10 days ago', 'accept', '1 ms', '23 MB', 'java'),
  createData('10 days ago', 'wrong', 'N/A', 'N/A', 'java'),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 450,
  },
}));

export default function CustomizedTables() {
    
    const classes = useStyles();

  return (
    <div>
        <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <StyledTableCell>Time Submitted</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Runtime</StyledTableCell>
                <StyledTableCell align="right">Memory</StyledTableCell>
                <StyledTableCell align="right">Language</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map(row => (
                <StyledTableRow key={row.time}>
                <StyledTableCell component="th" scope="row">
                    {row.time}
                </StyledTableCell>
                <StyledTableCell align="center"><span className={row.status}>{row.status == 'accept' ? 'Accepted': 'Wrong Answer'}</span></StyledTableCell >
                <StyledTableCell align="center">{row.runtime}</StyledTableCell>
                <StyledTableCell align="center">{row.memory}</StyledTableCell>
                <StyledTableCell align="center">{row.language}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </Paper>
    </div>
  );
}