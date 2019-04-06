
var cnvs,dc;
var p1=2, p2=2;

window.onload = function(){

    cnvs = document.getElementById("myCanvas");
    cnvs.addEventListener("click", GetPosition, false);
    dc = cnvs.getContext("2d");

    btnP1 = document.getElementById("P1");
    btnP1.addEventListener("click", ChangeParameter, false);
    btnP1.eventParam = "P1";

    btnP2 = document.getElementById("P2");
    btnP2.addEventListener("click", ChangeParameter, false);
    btnP2.eventParam = "P2";

    init();

}

function Draw(){

  dc.fillStyle = "black";
  dc.fillRect(0, 0, 640, 480);

  for(var y=0; y<480; y++){
    for(var x=0; x<640; x++){
       var r  = ( Math.sin(x) + Math.cos(y) ) * p1 * p2 % 256;
       var g  = ( x*x + y*y ) * p1 % 256;
       var b  = ( x * y * p2 ) % 256;
       dc.fillStyle = "rgb(" + r +"," + g + "," + b +")";
       dc.fillRect(x, y, 1, 1);
    }
  }

  // requestAnimationFrame(Draw);

}

function init(){

  // パラメータ、数式を描画
  var obj =document.getElementById("parameter").querySelectorAll(".value");
  obj[0].innerHTML = p1;
  obj[1].innerHTML = p2;

  // 描画
  Draw();
}

// マウスイベントで描画
function GetPosition(e) {


  // nothing to do

  // マウスの座標からパラメータを取得
  // var rect = e.target.getBoundingClientRect();
  // Window x軸方向 の クリックされた座標 e.clientX
  // Window y軸方向 の クリックされた座標 e.clientY

  // Window x軸方向 の CANVASの左上座標 rect.left
  // Window y軸方向 の CANVASの左上座標 rect.top

}

// ボタンイベント対応
function ChangeParameter(e){

  switch (e.target.eventParam) {
    case "P1":
      p1 = Math.floor( Math.random() * 256 );
      break;
    case "P2":
      p2 = Math.floor( Math.random() * 256 );
      break;
    default:
      break;
  }

  init();

}
