import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id':1,
    'image':'https://placeimg.com/64/64/any',
    'name':'천지호',
    'birthday':'940117',
    'gender':'남자',
    'job':'추노꾼'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/any',
    'name':'홍길동',
    'birthday':'940117',
    'gender':'남자',
    'job':'활빈당원'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/any',
    'name':'허준',
    'birthday':'020202',
    'gender':'남자',
    'job':'의사'
  }
]

class App extends Component {
  render() {
    return(
      <div>
        {customers.map(c => { return( <Customer key={c.id} id={c.id} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> )})}
      </div>
    )
  };
}

export default App;
