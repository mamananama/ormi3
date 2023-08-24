// Boolean 테스트

// 함수는 실행하면 일련의 과정을 거치고 리턴 값을 준다. + 입력 값
function plus2(x){
    return x + 2;
}

const plus2Result = plus2(1339);
console.log(plus2Result);
console.log(plus2(1000));


// ----------------------------------------------------------
// 읽어볼만한 문헌 : https://ko.javascript.info/function-basics

// 1번
function 안녕1(파라미터){
    console.log(파라미터);
    console.log('hello');
    return 100;
}

let 아규먼트 = 1000;
안녕1(아규먼트);
console.log(안녕1(아규먼트) + 안녕1(아규먼트));

// 2번
function 안녕2(){
    console.log('hello');
}

안녕2();
console.log(String(안녕2()) + String(안녕2()));

// 3번
function 안녕3(){
    console.log('hello');
    return 10;
}

안녕3();
console.log(String(안녕3()) + String(안녕3()));

// 4번
function 안녕4(){
    console.log('hello');
    console.log('hello');
    console.log('hello');
    return;
    console.log('hello');
    console.log('hello');
    console.log('hello');
}

안녕4();


// ----------------------------------------------------------

function func1 (a, b, c){
    return a + b + c;
}

func1(); // 에러가 발생하지 않는다. NaN 리턴
func1(10, 20, 30, 40); // 에러가 발생하지 않는다. 40을 제외한 결과 return
func1(10, 20); // 에러가 발생하지 않는다. NaN 리턴. 10+20+undefined

// 화살표 함수, 람다식 함수, 익명 함수  함수의 이름이 없다
// (파라미터) => 리턴 값

let func2 = (x, y, z) => x + y + z;
func2(10, 20, 30);


// 즉시 실행 함수(IIFE, Immediately Invoked Function Expression)
// 함수가 저장되지 않고, 함수를 만드는 즉시 바로 실행된다.
// 실행되고 메모리에서 사라지기 때문에, 바로 실행이 필요하고, 휘발시켜야 하는 함수, 메모리 절약 등등을 위해 사용되는 기법
(function() {console.log('이 함수는 만들어지자마자 바로 실행됩니다.')})();
((x, y) => { console.log(x+y);})(1, 2);
console.log(((x, y) => (x+y))(1, 2));


// 객체형 자료형
{
    let arr1 = [1, 2, 3];
    let arr2 = arr1;
    console.log(arr2); // [1, 2, 3]

    arr1[0] = 10;
    // arr1 = [10, 20];
    console.log(arr2); // [10, 2, 3]
}


// Callback 함수
// forEach
{
    const arr = ['참외', '키위', '감귤'];

    arr.forEach(function(item, index) {
        console.log(item, `은(는) ${index} 번째 입니다.`);
    });

    const arr1 = ['참외', '키위', '감귤'];
    function callbackfn(item, index, arr){
        console.log(item, `은(는) ${index} 번째 입니다.`);
    }

    arr1.forEach(callbackfn);

    const arr4 = ['참외', '키위', '감귤'];
}


// map
// map > callbackfn에서 리턴한 값들을 모아 새로운 배열을 만든다.
{
    const arr = [1, 2, 3];
    function callbackfn(item){
        return item*2;
    }
    console.log(arr.map(callbackfn));
    console.log(arr);


}

// filter
{
    const arr = [1, 2, 3, 4, 5];
    // function filterfn(num){
    //     return num % 2 == 1;
    // }

    // const filterfn = (num) => num%2===1;
    const result = arr.filter((num)=>num%2===1);

    // console.log(arr.filter(filterfn));
    console.log(arr);
    console.log(result);
}

// reduce
{
    const arr = [1, 2, 3, 4, 5];
    // 1~5까지의 sum

    // const result = arr.reduce((a, b) => (a+b), 0);

    function reducer(x, y){
        return x+y;    
    }
    

    // console.log(result);
}

// 조건문
{
    const test = 11;
    // 만약 ()안의 값이 true라면~ 코드 블럭을 실행한다.
    if(test < 10){
        console.log("true");
    }else{
        console.log("false");
    }
}
{
    const arr = [1, 2, 3];
    function callbackfn(item){
        let result;
        if(item %2 === 1) {
            result = "홀수";
        } else {
            result = "짝수";
        }
    }
    console.log(arr.map(callbackfn));
}