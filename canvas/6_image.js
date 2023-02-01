function doFirst(){
  let canvas = document.getElementById('canvas') //先跟html畫面產生關聯
  let context = canvas.getContext('2d')  //設定2d繪圖環境; canvas必備

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

let picture = new Image() //先給image型態
pic.src=`../../images/cityscape.jpg`
picture.addEventListener('load',function(){
  context.drawImage(picture,0,0,canvas.width,canvas.height);
})
  
  
  
  
  
}
window.addEventListener('load', doFirst, false)