// 가장 가까운 같은 글자
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
    var answer = [];
    var stack = [];
    
    for(var i = 0 ; i < s.length ; i++){
        if(!stack.includes(s[i])){
            answer.push(-1);
        }else{
            answer.push(stack.length - stack.lastIndexOf(s[i]));
        }
            stack.push(s[i]);
    }
    return answer;
}

// 이게 뭐다냐..
function solution(s) {
    const hash={};

    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}

// 이 방법도 있네,,
const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });