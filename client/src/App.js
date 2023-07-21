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

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

class App extends Component {

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
      <Paper sx={{ width : '100%', marginTop : 3, overflowX: "auto" }}>
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