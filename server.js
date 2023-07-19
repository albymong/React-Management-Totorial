const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/api/customers',(req,res)=>{
    res.send([
        {
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
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));