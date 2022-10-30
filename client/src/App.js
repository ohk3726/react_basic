import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import { Paper } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1680
  }
})

const customers = [
  {
    'id':1,
    'image':'https://picsum.photos/id/237/64/64',
    'name':'천지호',
    'birthday':'940117',
    'gender':'남자',
    'job':'추노꾼'
  },
  {
    'id':2,
    'image':'https://picsum.photos/id/236/64/64',
    'name':'홍길동',
    'birthday':'940117',
    'gender':'남자',
    'job':'활빈당원'
  },
  {
    'id':3,
    'image':'https://picsum.photos/id/235/64/64',
    'name':'허준',
    'birthday':'020202',
    'gender':'남자',
    'job':'의사'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props; 
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return( <Customer key={c.id} id={c.id} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> )})}
          </TableBody>
        </Table>
      </Paper>
    )
  };
}

export default withStyles(styles)(App);