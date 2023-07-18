import './App.css';
import Customer from './components/Customer'

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
  return (
    <div>
    {      
    /* <Customer 
    id = {customers[0].id}
    image = {customers[0].image}
    name = {customers[0].name}
    birthday = {customers[0].birthday}
    gender = {customers[0].gender}
    job = {customers[0].job}
    />
    <Customer 
    id = {customers[1].id}
    image = {customers[1].image}
    name = {customers[1].name}
    birthday = {customers[1].birthday}
    gender = {customers[1].gender}
    job = {customers[1].job}
    />
    <Customer 
    id = {customers[2].id}
    image = {customers[2].image}
    name = {customers[2].name}
    birthday = {customers[2].birthday}
    gender = {customers[2].gender}
    job = {customers[2].job}
    /> */
    
    //반복문 사용의 예
    //map 사용시 key 이름의 props 사용은  필수임.
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
    </div>

  );
}

export default App;
// App.js 실질적으로 화면의 내용 출력을 담당하는 부분임.
// class => className  : jsx 표현식을 따름
// Props를 이용해서 데이타를 전달한다.
// 요소가 하나인 경우 <Customer /> 
// 요소가 다중인 경우 <div><Customer /> <Customer /> <Customer /> </div> DIV tag로 감싸야 한다.