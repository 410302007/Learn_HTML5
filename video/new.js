function doFirst(){
  //先跟畫面產生關聯
  myMovie = document.getElementById('myMovie')
  playButton = document.getElementById('playButton')
  defaultBar = document.getElementById('defaultBar')
  progress = document.getElementById('progress')

  //再建事件聆聽功能
  playButton.addEventListener('click',playOrPause)
  defaultBar.addEventListener('click',clickedBar)

  //全螢幕
  // fullButton = document.getElementById('fullButton')
  // fullButton.addEventListener('click',function(){
  //   myMovie.webkitEnterFullScreen()
  // })
}
function playOrPause(){
  //影片正在播放中  //paused->屬性
  if(!myMovie.paused && !myMovie.ended){
    myMovie.pause() //pause->方法
    playButton.innerText='play'
  //影片結束或暫停
  }else{
    myMovie.play()
    playButton.innerText ='pause'
  }
}
function clickedBar(){}
window.addEventListener('load',doFirst)