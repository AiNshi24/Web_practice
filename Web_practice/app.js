// let hello = 'Hello World';
// alert(hello);

// alert('Hello' + 'World');

// let str1 = 'Hello';
// let str2 = 'world!!';
// alert(str1 + str2);

// 条件分岐--------------------------------------------
// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// }else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// }else{
//   alert('みかんの値段がりんごより高い');
// }

// while文--------------------------------------------
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count +1;
// }

// alert('2を掛け続けて'　+ max + 'を超えるのに必要だった回数は'　+ count + '回です');

// for文---------------------------------------
let i;
let num = 0;
 // for(初期値; 条件式; 増減値){
//   繰り返し処理
// }
for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');
