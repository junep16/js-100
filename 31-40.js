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