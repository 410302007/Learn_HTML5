function doFirst(){
  let canvas = document.getElementById('canvas') //先跟html畫面產生關聯
  let context = canvas.getContext('2d')  //設定2d繪圖環境; canvas必備

  context.fillStyle='red'; //填滿紅色
  context.strokeStyle='blue'; //描藍色邊
  context.lineWidth=10; //線的厚度
  
  
  context.moveTo(100, 100);
  context.lineTo(250, 250);
  context.lineTo(400, 50);
  context.lineTo(50, 200);
  context.closePath();  //關閉路徑
  
  
 //先畫矩形，再描邊!!
  
  context.stroke();
  context.fill();
  
  

  
}
window.addEventListener('load', doFirst, false)