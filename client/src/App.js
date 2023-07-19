import React, { Component } from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CircularProgress from '@mui/material/CircularProgress';
//import { withStyles } from '@mui/material/styles';

// const styles = theme =>({
//   root:{
//     width : '100%',
//     marginTop : theme.spacing.unit * 3,
//     overflowX: "auto"
//   },
//   table:{
//     minWidth : 1080
//   }
// })

class App extends Component {
  //const { classes }  = this.props;

  constructor(props){
    super(props);
    this.state = {
      customers : "",
      completed : 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers : "",
      completed : 0
    });
    this.callApi()
        .then(res => this.setState({customers : res}))
        .catch(err => console.log(err));
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
        .then(res => this.setState({customers : res}))
        .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const {completed} = this.state;
    this.setState({completed:completed >= 100 ? 0 : completed + 1});
  }

  render(){
    return (
      <div>
      <Paper>
      <Table sx={{ minWidth: 650 }}>
      <TableHead>
        <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
          <TableCell>설정</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          this.state.customers?this.state.customers.map(c => {
          return (
                  <Customer stateRefresh={this.stateRefresh}
                    key = {c.id} 
                    id = {c.id}
                    image = {c.image}
                    name = {c.name}
                    birthday = {c.birthday}
                    gender = {c.gender}
                    job = {c.job}
                    />
            )
          }):
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress variant='determinate' value={this.state.completed}/>
            </TableCell>
          </TableRow>
        }
          </TableBody>
        </Table>      
      </Paper>
      <CustomerAdd stateRefresh={this.stateRefresh}/>
      </div>
    );
  }
}

export default App;
//export default withStyles(styles)(App);
// App.js 실질적으로 화면의 내용 출력을 담당하는 부분임.
// class => className  : jsx 표현식을 따름
// Props를 이용해서 데이타를 전달한다.
// 요소가 하나인 경우 <Customer /> 
// 요소가 다중인 경우 <div><Customer /> <Customer /> <Customer /> </div> DIV tag로 감싸야 한다.