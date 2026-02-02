// 이상한 문자 만들기
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    var answer = '';
    var wordArr = s.split(' ');
    var word = '';
    
    for(var i = 0 ; i < wordArr.length ; i++){
        for(var j = 0 ; j < wordArr[i].length ; j++){
            word+= j%2== 0 ? wordArr[i].split('')[j].toUpperCase() : wordArr[i].split('')[j].toLowerCase()
        }
        wordArr[i] = word;
        word='';
    }
    answer = wordArr.join(' ');
    
    return answer;
}

//뭔가 더하고 싶은데 잘 안되어서 다른 분들의 풀이..

// 멋진 정규식
function solution(s){
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

}
