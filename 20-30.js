// 문제 19
// a의 b승 구하기 (제곱)

const num = ["2", "6"]; 
console.log(Math.pow(num[0], num[1])); 


// 문제 20: 몫과 나머지
// 두 번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하기. 

let data = prompt().split(" "); 
// prompt는 값을 받아오는 알러트창같은거! 
let newData = data[0]/data[1];  
let 몫 = parseInt(newData); 
let 나머지 = data[0]%data[1];
console.log(몫, 나머지); // 2 2 출력!! 

// 문제 21: set 만들기
// 중복되지 않는 데이터를 저장하는 데이터 구조 
const list = [1, 2, 2, 3, 4, 5, 5, 5, 6]; 
let setVal = new Set(list); 
setVal.add(10); 
setVal.delete(10); 
setVal.has(10); 
console.log(setVal); 


// 문제 22: 배수 확인하기 
i/6 == 0 // 나누기
i%6 == 0 // 나머지 연산자 (정답)
i&6 == 0 // 비트 연산자 - 각 자리의 수를 비교하는 친구 (비트오어연산자)
i|6 == 0 // 비트 연산자 - 각 자리의 수를 비교하는 친구 (비트오어연산자)
i//6==0 // 주석 처리

// 문제 23: OX 문제
// 아래의 출력 결과는 3이다  
// console.log(10/3); 

function oxQuiz(a, b) {
    let result = Math.floor(a/b); 
    if (result === 3) {
        console.log("O"); 
    } else {
        console.log("X"); 
    }
}
oxQuiz(10, 3); 

// 문제 24: 대문자로 바꾸기






