// 문제 41: 소수 판별 
function findPrime(num) {
    for(let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("NO");
            return false;  
        }
        if (num === 1) {
            console.log("NO"); 
            return false; 
        }
        console.log("YES"); 
        return true; 
    }
}
findPrime(11); 

// 문제 42: 요일 알아내기
let months = {
    1: "Jaunary", 
    2: "February", 
    3: "March", 
    4: "April", 
    5: "May", 
    6: "June", 
    7: "July", 
    8: "August", 
    9: "September", 
    10: "October", 
    11: "November", 
    12: "December"
};  

let weeks = {
    1: "Monday", 
    2: "Tuesday", 
    3: "Wednesday", 
    4: "Thursday", 
    5: "Friday", 
    6: "Saturday", 
    7: "Sunday"
}

function findDay(month, date) {
    let dates = new Date(`${months[month]} ${date}, 2020 00:00:00`); 
    let day = dates.getDay(); 
    return weeks[day]; 
}

// 문제 45: getTime함수 사용하기 
// 1970년도 부터 현재까지 흐른 시간 밀리세컨드로 출력하기 

// 현재 시간 
const theDate = new Date(); 

console.log(Math.floor(theDate.getTime()/(60*60*24*365*1000))+1970); 






