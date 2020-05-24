'use strict';
var fibonacci = new Map();
const length = 40;
//フィボナッチ数列作成
for (let i=0;i<=length;i++){
    fibonacci.set(i,fib(i));
    console.log(fibonacci.get(i));
}

//フィボナッチ数列作成関数
function fib(n){
    if(n===0){
        return 0;
    }else if(n===1){
        return 1;
    }
    return fibonacci.get(n-1) + fibonacci.get(n-2);
}
