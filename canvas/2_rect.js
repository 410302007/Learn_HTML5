function doFirst(){
  let canvas = document.getElementById('canvas') //先跟html畫面產生關聯
  let context = canvas.getContext('2d')  //設定2d繪圖環境; canvas必備

  context.fillStyle='red'; //填滿紅色
  context.strokeStyle='blue'; //描藍色邊
  
  

  context.fillRect(100,100,300,200)  //矩形
  // context.strokeRect(100,100,300,200)   //描邊
  context.clearRect(150, 150, 50, 50); //清除
  
  context.rect(700, 500, 300, 300);
  context.stroke();

  //橡皮擦
  // context.clearRect(0,0, canvas.width, canvas.height) //width & height是canvas標籤的屬性
  
  
}
window.addEventListener('load', doFirst, false)