function doFirst(){
  //先跟畫面產生關聯，再建事件聆聽功能
  //第一個參數一定要寫: 成功時的處理函數
  //第二個參數: 錯誤時的處理函數(errorCallback)
  //第三個參數: 設定地裡位置的其他資訊
  navigator.geolocation.getCurrentPosition(sucCallback, errorCallback, {
    enableHighAccuracy: false,
    timeout: 1000000,
    maximumAge: 0 
  })
}
function sucCallback(e){
  if(e.coords.accuracy > 10000){
    document.getElementById('position').innerHTML = '超過偵測範圍!'
  }else{
  document.getElementById('position').innerHTML = `
  緯度: ${e.coords.latitude} <br>
  經度: ${e.coords.longitude} <br>
  準確度: ${e.coords.accuracy} 公尺<br>
  `
  }
}
function errorCallback(e){
  document.getElementById('position').innerHTML = `
    錯誤碼: ${e.code} <br>
    錯誤碼: ${e.message} <br>
  `
}
window.addEventListener('load',doFirst)