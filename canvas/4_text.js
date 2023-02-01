function doFirst(){
  let canvas = document.getElementById('canvas') //先跟html畫面產生關聯
  let context = canvas.getContext('2d')  //設定2d繪圖環境; canvas必備

  context.font='bold 50px sans-serif';
  // context.textBaseline='top | hanging | middle | alphabetic(default) | ideographic | bottom'; //設定基準線
  context.textBaseline='alphabetic'; 
  
  context.strokeText('yellow', 100, 100);
 
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.strokeStyle='red';
  context.stroke();
  
  
  
  
  
  

  
}
window.addEventListener('load', doFirst, false)