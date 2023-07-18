import './App.css';
import Customer from './components/Customer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/material/styles';

const styles = theme =>({
  root:{
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth : 1080
  }
})

const customers = [{
   'id' : 1
  ,'image' : 'https://loremflickr.com/64/64/any'
  ,'name' : '홍길동1'
  ,'birthday' : '9612221'
  ,'gender' : '남자'
  ,'job' : '대학생1'
  
},
{
  'id' : 2
 ,'image' : 'https://loremflickr.com/64/64/any'
 ,'name' : '홍길동2'
 ,'birthday' : '9612222'
 ,'gender' : '남자'
 ,'job' : '대학생2'
 
},
{
  'id' : 3
 ,'image' : 'https://loremflickr.com/64/64/any'
 ,'name' : '홍길동3'
 ,'birthday' : '9612223'
 ,'gender' : '남자'
 ,'job' : '대학생3'
 
}
]

function App() {
  const { classes }  = this.props;
  return (
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
      {
        customers.map(c => {
        return (
                <Customer 
                  key = {c.id} 
                  id = {c.id}
                  image = {c.image}
                  name = {c.name}
                  birthday = {c.birthday}
                  gender = {c.gender}
                  job = {c.job}
                  />
          )
        })
      }
        </TableBody>
      </Table>      
    </Paper>
  );
}

//export default App;
export default withStyles(styles)(App);
// App.js 실질적으로 화면의 내용 출력을 담당하는 부분임.
// class => className  : jsx 표현식을 따름
// Props를 이용해서 데이타를 전달한다.
// 요소가 하나인 경우 <Customer /> 
// 요소가 다중인 경우 <div><Customer /> <Customer /> <Customer /> </div> DIV tag로 감싸야 한다.