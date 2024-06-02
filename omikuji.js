//使う変数を定義
let username;
let userresult;

//名前を入力させるウィンドを表示させて、入力内容を書き換える処理を作成
username = prompt("お名前を教えてください"); //promptは入力ダイアログ（今回はユーザーに名前を入力させるウィンド）を表示させる命令
if (username === ""){ //===は、厳密等価演算子で、型も値も同じときのみTureを返す
    username = "名無し"
}
document.getElementById("name").innerHTML = username; //"name"というidを持つタグに囲まれている文字列を、usernameと言う箱に入っている値で上書きする、という命令です

//おみくじを引いて画面に表示する処理を作成
let rand = Math.floor( Math.random() * 5); //Math.floor(Math.random() * 5) が実行されると、ランダムで0, 1, 2, 3, 4の数値のどれかが取得できる。//それをrandという変数に入れるという作業
//でた数字によっておみくじの結果が変わるのをif文で作成
if (rand == 0){
    userresult = "大吉";
}
if (rand == 1){
    userresult = "中吉";
}
if (rand == 2){
    userresult = "小吉";
}
if (rand == 3){
    userresult = "吉";
}
if (rand == 4){
    userresult = "凶";
}
document.getElementById("result").innerHTML = userresult;
