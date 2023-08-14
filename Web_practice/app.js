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
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

if(user_hand != null){
 alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else{
  alert('またチャレンジしてね')
}
// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3 );
  let hand_name;
  
  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }
  return hand_name;
}

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;
  
  if(user == "グー"){
    if(js == "グー"){
      winLoseStr= "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js == "パー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}

