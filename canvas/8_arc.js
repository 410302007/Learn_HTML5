function doFirst(){
  let canvas = document.getElementById('canvas') //先跟html畫面產生關聯
  context = canvas.getContext('2d')  //設定2d繪圖環境; canvas必備

//==格線開始==
  if(canvas.width > canvas.height){
    range = canvas.width / 50
  }else{
    range = canvas.height / 50
  }

  for(let i = 0; i <= range; i++){
    let interval = i * 50
    //水平線
    context.moveTo(0,interval);
    context.lineTo(canvas.width, interval);
    context.fillText(interval, 0, interval);
    

    //垂直線
    context.moveTo(interval,0);
    context.lineTo(interval,canvas.height);
    context.fillText(interval, interval, 8 );
    

  }
  context.strokeStyle='rgba(0,0,0,0.3)';
  context.stroke();
//=============
  
  //垂直線
  // context.moveTo(50,0);
  // context.lineTo(50,800);
  // context.moveTo(100,0);
  // context.lineTo(100,800);
  // context.stroke();
  
  //重新畫線時，要先beginPath
  // context.beginPath();

  //四分之一
  context.beginPath();
  context.strokeStyle='rgba(0,0,0,0.7)';

  context.moveTo(0, canvas.height/2);
  context.lineTo(canvas.width, canvas.height/2);
  context.stroke();
  
  context.moveTo(canvas.width/2, 0);
  context.lineTo(canvas.width/2, canvas.height);
  context.stroke();
  //-----------------------

  context.font='bold 30px Tahoma';
  context.fillText('arc()', 50, 50);
  context.strokeStyle='red';
  context.lineWidth=5;

  //左上
  context.translate(250, 200); //從此行之後(250, 200) -->(0,0)
  
  context.beginPath();
  context.arc(0, 0, 150,0, Math.PI, false);
  context.stroke();
  
  context.translate(-250, -200) //從此行之後(-250, -200) 回復原狀

  //左下
  context.translate(250, 600); //從此行之後(250, 200) -->(0,0)
  
  context.beginPath();
  context.arc(0, 0, 150,0, Math.PI, true);
  context.stroke();
  context.translate(-250, -600)

  //右上
  context.translate(750, 200); //從此行之後(250, 200) -->(0,0)
  
  context.beginPath();
  context.arc(0, 0, 150,0, Math.PI, true);
  context.stroke();
  
  context.translate(-750, -200) //從此行之後(-250, -200) 回復原狀

  
  
}
window.addEventListener('load', doFirst, false)