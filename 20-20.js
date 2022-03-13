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
console.log(setVal); 


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


