'use strict'


// 1번 과제
{
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let result;

    result = arr.reduce(((pre, cur) => {if(cur%2 === 1) {return pre+cur} else {return pre}}), 0);
    console.log(result);
}

// 2번 과제
{
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let result;

    result = arr.reduce(((pre, cur) => {if(cur%2 === 1) {return pre+cur} else {return pre}}));
    console.log(result);
}

// {
//     const arr = []
//     let result;

//     result = arr.reduce(((pre, cur) => {if(cur%2 === 1) {return pre+cur} else {return pre}}));
//     console.log(result);
// }


{
    const arr = []
    let result;

    result = arr.reduce(((pre, cur) => {if(cur%2 === 1) {return pre+cur} else {return pre}}), 0);
    console.log(result);
}
