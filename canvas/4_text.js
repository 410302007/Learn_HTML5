function doFirst(){
  let canvas = document.getElementById('canvas') //先跟html畫面產生關聯
  let context = canvas.getContext('2d')  //設定2d繪圖環境; canvas必備

  context.font='bold 50px sans-serif';

  //第一個字
  // context.textBaseline='top | hanging | middle | alphabetic(default) | ideographic | bottom'; //設定基準線
  context.textBaseline='alphabetic'; 
  
  context.strokeText('yellow', 100, 100);
 
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.strokeStyle='red';
  context.stroke();
  
  
  //第二個字
  context.shadowColor='red';
  context.shadowOffsetX=5;
  context.shadowOffsetY=5;
  context.shadowBlur=5;

  context.fillText('yellow', 100, 200);
  //第三個字
  context.shadowOffsetX=0;
  context.shadowOffsetY=0;
  context.shadowBlur=15;
  context.fillStyle='#fff';

  context.fillText('yellow', 100, 300);
  //第四個字
  context.shadowOffsetX=5;
  context.shadowOffsetY=5;
  context.shadowBlur=5;
  context.fillText('yellow', 100, 400) //紅色陰影先寫
  
  context.shadowColor='blue';   
  context.fillText('yellow', 100, 400); //藍色陰影再蓋上去
  
}
window.addEventListener('load', doFirst, false)