'use strict';

//Array API
//Q1. make a string out of an array
{
    const fruits = ['apple','banana','orange'];
    const result = fruits.join('|');
    console.log(result);
}

//Q2. make an array out of a string
{
    const fruits = 'apple,banana,orange';
    const result = fruits.split(',');
    console.log(result);
}

//Q3. make this array look like this : [5,4,3,2,1]
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}

//Q4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    const result = array.splice(0,2);
    console.log(result);
    console.log(array);
    const array1 = [1,2,3,4,5];
    const result1 = array1.slice(2,5);
    console.log(result1);
    console.log(array1);
}

/////////////////////////////////
class Student{
    constructor(name, age, enrolled, score){
        this.name=name,
        this.age=age,
        this.enrolled = enrolled,
        this.score = score
    }
}
const students = [
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88)
]

//Q5. find a student with the score 90
{
    //const result = students.find((student, index) => {
    //   return student.score === 90;
    //})
    const result = students.find((student) => student.score === 90);
    console.log(result);
}
//Q6. make an array of enrolled students
{
    const result = students.filter((st) => st.enrolled == true);
    console.log(result);
}
//Q7. make an array containing only the students' cores
// result should be : [45,80,90,66,88]
{
    const result = students.map((st) => st.score);
    console.log(result);
}
//Q8. check if there is a student with the score lower than 50
{
    // 하나라도 조건에 만족하는 경우
    const result = students.some((student) => student.score < 50);
    console.log(result);
    //모든 배열의 조건이 만족될 경우
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
}
//Q9. compute students' average score
{
    //prev 이전의 콜백된 값을 전달 받는다.
    //prev 이전값, curr 현재값
    const result = students.reduce((prev, curr) => prev + curr.score, 0);//0 이전값
    //result 총합계
    console.log(result/students.length);
}
//Q10. make a string containing all the scores
// result should be : '475,80,90,66,88'
{
    const result = students.map((st) => st.score).join();
    console.log(result);
}

//Bonus! do Q10 sorted in ascending order
//result should be : '45,66,80,88,90'
{
    const result = students.map((st) => st.score).sort((a,b) => a-b).join();
    console.log(result);
}