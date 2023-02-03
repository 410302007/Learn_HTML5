function doFirst(){
  //先跟畫面產生關連，再建事件聆聽功能
  let area = document.getElementById('map') //網頁上要呈現地圖的地方
  let position = new google.maps.LatLng(22.6282173,120.293041)
  let options = {      //地圖資訊
    zoom: 14,          //比例
    center:position,  //地圖的中心點
    myTypeId: google.maps.MapTypeId.ROADMAP //地圖形式
  }     
  let map = new google.maps.Map(area, options)
  let marker = new google.maps.Marker({
    position, //position:position,
    map,     //map:map,
    // title : 'iSpan',
    // icon: '../../images/number/dgtp.gif'
  })
  marker.setTitle('這裡是iSpan!')
  marker.setIcon('../../images/number/dgtp.gif')

}
window.addEventListener('load',doFirst)