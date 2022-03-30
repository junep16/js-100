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

// 문제 24: 대문자로 바꾸기 / 소문자로 바꾸기

let name = prompt();
let newName = name.toUpperCase(); 
console.log(newName); 

let name2 = prompt();
let newName2 = name2.toLowerCase(); 
console.log(newName2); 


// 문제 25: 원의 넓이를 구하세요 
// 원의 넓이는 반지름의 길이 X 반지름의 길이 X 3.14로 구할 수 있음. 함수를 사용하여 코드 작성하기. 

function findCircleWidth() {
    let num = prompt(); 
    return num*2*3.14; 
}
findCircleWidth()

// 문제 26: 행성 문제
//행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들기

let planets = {
    Mercury: "수성",
    Venus: "금성",
    Earth: "지구", 
    Marse: "화성", 
    Jupiter: "목성", 
    Saturn: "토성", 
    Uranus: "천왕성", 
    Neptune: "해왕성" 
}

function sayPlanetName() { 
    let name = prompt(); 

    switch (name) {
        case "Mercury": 
        console.log("수성"); 
        break; 

        case "Venus": 
        console.log("금성"); 
        break; 

        case "Earth": 
        console.log("지구"); 
        break; 

        case "Marse": 
        console.log("화성"); 
        break; 

        case "Jupiter": 
        console.log("목성"); 
        break; 

        case "Saturn": 
        console.log("토성"); 
        break; 

        case "Uranus": 
        console.log("천왕성"); 
        break; 

        case "Neptune": 
        console.log("해왕성"); 
        break; 

        default: 
        console.log("행성 이름이 아닙니다"); 
    }
    // for (let planet in planets) {
    //     if(name === planet) {
    //         console.log(`${planets[planet]}`); 
    //     } else {
    //         console.log("행성 이름이 아닙니다")
    //     }
    // }
}
sayPlanetName(); 


// 문제 27: 객체 만들기
// 이름과 점수를 입력하면 객체를 만들어 출력하기
// 출력: {"Yujin" : 70, "Hyewon" : 100}

let gradeList = {}; 
function makeList () {
    let names = []; 
    let grades = []; 
    let name = prompt();
    let grade = prompt(); 
    names.push(name); 
    grades.push(grade); 

    for(let i =0; i < names.length; i++) {
        gradeList[names[i]] = grades[i]; 
    }
    return gradeList; 
}
makeList(); 

// 문제: 28 문자열에서 2개의 연속된 요소를 출력하기 (2-gram)
const word = "안녕하세요"
for(let i =0; i < word.length-1; i++) {
    console.log(word[i], word[i+1]); 
}

// 문제 29: 대문자 지나가기
let alphabet = prompt();  
if (alphabet === alphabet.toUpperCase()) {
    console.log(alphabet, "대문자입니다"); 
} if (alphabet !== alphabet.toUpperCase()) {
    console.log(alphabet, "소문자입니다"); 
}

// 문제 30: 문자열 속 문자찾기 
// pineapple is yummy 
// apple 
let words = "pineapple is yummy"; 
let find = words.search("apple"); 
console.log(find); 

// 문제 32: 문자열 만들기 
function countWords() {
    let word = prompt(); 
    let counts= word.split(" ");
    console.log(counts); 
    alert(`${counts.length}글자입니다요`); 
}
countWords(); 

// 문제 33: 거꾸로 출력하기 
// 한줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성
let nums = prompt().split("");  
let length = nums.length; 
console.log(length); 
for (let i = 0; i < length; i++) {
    console.log(nums.pop()); 
}

// 문제 34: sort 구현하기 
// 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자

let unsorted = "176 156 155 165 166 169"; 
let sorted = ""; 

console.log(unsorted.split(" ").sort());
