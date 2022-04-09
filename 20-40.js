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

// 문제 35: Factory 함수 사용하기 
function one(n) {
    function two(x) {
        return Math.pow(x , n); 
    }
    return two; 
}
const a = one(2); 
const b = one(3); 
const c = one(4); 

console.log(a(10)); 
console.log(b(10));
console.log(b(10));

// 문제 36: 구구단 출력하기 
// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램 작성하기 

let randomNum = prompt(); 
for (let i = 0; i<=9; i++) {
    console.log(`${randomNum} X ${i} = ${randomNum*i}`); 
}

// 한줄에 출력하기 
let arr = []; 
for (let i = 0; i<=9; i++) {
    arr.push(randomNum*i); 
}
console.log(arr); 


// 문제 37: 반장 선거
let student = ['원범', '혜원', '혜원', '혜원', '원범', '혜원', '유진', '지윤', '지윤']; 

function countVote(vote){
let counts = {}

for(let i =0; i < student.length; i++){ 
    // 만약 이름이 있으면, key와 value로 넣어주기 (이름이 연속적으로 뜰때까지)
    if (counts[vote[i]]){
    counts[vote[i]] += 1 
    } 
    // 만약 해당 이름이 아니면 1더해주기
    else {
    counts[vote[i]] = 1
    }
    }  

    // counts의 키 밸류가 1보다 크거나 같을 경우 다음의 문장을 출력
    for (let prop in counts){
        if (counts[prop] >= 0){
            console.log(prop + "이는" + counts[prop] + " 표를 받았습니다")
        }
    }
    console.log(counts)
}
countVote(student); 

// 문제 38: 아르바이트 점수 소팅
let scores = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95]; 

// 점수 sort한것 새로운 배열 생성, reverse로 큰 숫자순으로 정렬
let sortedScore = scores.sort().reverse();  

// 같은 점수이면 패스 
function sortScores() {
    let arr = [];
    let count = 0;  
    let check = false; 

    sortedScore.forEach(element => {
        if(sortedScore.indexOf(element) === element) {
            count += 1;
            arr.push(element); 
            console.log(count, "넣음"); 
            console.log(arr); 

        }  else {
            arr.push(element); 
            console.log(arr); 
            const set = new Set(arr); 
            console.log(set); 
        }
        return count;   

    });
}
sortScores();  

// 강사님 코드 
const 점수 = ["97", "86", "75", "66", "55", "97", "85", "97", "97", "95", "85", "85", "85"]; 

// 오름차순 정렬
점수.sort(function(a, b) {
    return a - b; 
}); 
console.log(점수); 

let 탑쓰리 = []; 
let count = 0; 

while(탑쓰리.length < 4) {
    let value = 점수.pop(); 

    // includes = 있다면, true, 없다면, false
    if (!탑쓰리.includes(value)) {
        탑쓰리.push(value); 
    }

    // 몇명일까
    count++; 
}
console.log(탑쓰리); 
console.log(count - 1); 


