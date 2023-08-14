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
// let i;
// let num = 0;
// // for(初期値; 条件式; 増減値){
// //   繰り返し処理
// // }
// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');

// 関数ーーーーーーーーーーーーーーーー
// function関数名（引数）{
//   処理
//   return 戻り値;
// }

// --------メイン部分
// let alertString;
// ---- 作成した関数を呼び出し、変数へ格納
// alertString = addString("WebCamp");
// alert(alertString);
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }


// 入力ダイアログで値を入力する----------------
// let promptStr = prompt('何か好きな文字を入力してください。');
// alert(promptStr);


// 関数の関数を定義する-----------------------------------------

// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand;

function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3 );
  
  if(js_hand_num == 0){
    js_hand = "グー";
  }else if(js_hand_num == 1){
    js_hand = "チョキ";
  }else if(js_hand_num == 2){
    js_hand = "パー";
  }
  return js_hand;
}
