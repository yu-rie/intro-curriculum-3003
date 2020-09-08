'use strict';

/**
 * 何ボナッチでも n 番目の数を返す
 * @param {number} n - 求めたい n 番目の数
 * @param {array} [0, 1, ...] - 要素数ボナッチを求める。値が初期値。
 * @return {number} ナントカボナッチの n 番目の数
 */
function fib( n , arr = [0, 1]) { 
        if ( n < 0 ) return false; // マイナスはやらない
        if ( n < arr.length ) return arr[n]; // 配列の要素にあればその値を返す
        for (let i = arr.length ; i <= n ; i++) { // 配列の値を配列の合計に置き換えつつループ
                arr[i % arr.length] =
                        arr.reduce((p, c) =>  { // このへんで配列の合計を計算しています
                                return p + c;
                        });
        }
        return arr[n % arr.length];
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i,[0, 0, 1]));
}

