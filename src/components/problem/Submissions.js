import React from 'react';
import { Layout, Row, Col, Icon} from 'antd';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 13,
  },
  body: {
    fontSize: 13,
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
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 500,
  },
}));

export default function CustomizedTables() {
    
    const classes = useStyles();

  return (
    <div>
        <div className={classes.root}>
            <Row>
                <h2 style={{display: 'none'}}>asdsdasd</h2>
            </Row>
            <Row>
                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Time Submitted</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                        <StyledTableCell align="center">Runtime</StyledTableCell>
                        <StyledTableCell align="center">Memory</StyledTableCell>
                        <StyledTableCell align="center">Language</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={row.time}>
                        <StyledTableCell component="th" scope="row" align="center">
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
            </Row>
        </div>
    </div>
  );
}