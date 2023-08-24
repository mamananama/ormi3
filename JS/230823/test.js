// 원시타입
// 변경 불가능한 타입 - pass by value

let str1 = 'hello';
let str2 = str1;
console.log(str2);

str1 = 'world';
console.log(str1);
console.log(str2);


// 원시타입 - 문자열

let myPassword = "qwer123!@#";
console.log(myPassword.length);

// 한번 만들어진 문자열은 절대 변하지 않음 - 불변의 성질
{
    let apple = "fineapple";
    apple[0] = 'p';
    console.log(apple);

    apple.toUpperCase();
    let APPLE = apple.toUpperCase();
    console.log(APPLE);
    console.log(apple);
}

{
    let pine = "pine";
    console.log(pine);
    pine = pine + 'a';
    console.log(pine);
    let apple = "apple";
    console.log(apple);

    console.log(pine+apple);

    pine = pine + apple;

    console.log(pine);
    console.log(apple);
}


{
    let pineapple = "pineapple pineapple pen pine apple apple pen";
    console.log(pineapple.indexOf('pen'));
    console.log(pineapple.indexOf('pineapple', 5));
    console.log(pineapple.indexOf('penpineapple'));
}

{
    let pineapple = "pineapple pineapple pen pine apple apple pen";
    console.log(pineapple.lastIndexOf('pen'));
    console.log(pineapple.lastIndexOf('pineapple', 5));
    console.log(pineapple.lastIndexOf('penpineapple'));
}

{
    let pineapple = "pineapple pineapple pen pine apple apple pen";
    console.log(pineapple.match(/pine/));   // pine만 찾아서 배열로
    console.log(pineapple.match(/pine/g));  // 모든 pine을 찾아서 배열로
    console.log(pineapple.match(/[a-zA-Z]\w+/g)); // 모든 단어를 찾아서 배열로
}

{
    let pineapple = "pineapple pineapple pen pine apple apple pen";
    console.log(pineapple.replace("pine", "fine"));

    let pineapple2 = "pineapple pineapple pen pine apple apple pen";
    console.log(pineapple2.replace(/pine/g, "fine"));
}

{
    
}