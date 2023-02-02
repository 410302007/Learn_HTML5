function doFirst(){
  
  //先跟畫面產生關聯
  myMovie = document.getElementById('myMovie')
  playButton = document.getElementById('playButton')
  defaultBar = document.getElementById('defaultBar')
  progress = document.getElementById('progress')

  //barsize->progress的width
  barsize = parseInt(getComputedStyle(defaultBar).width)
  // barsize = defaultBar.style.width->抓不到屬性
  // alert(barsize)

  //再建事件聆聽功能
  playButton.addEventListener('click',playOrPause)
  myMovie.addEventListener('click',playOrPause) //點選影片->播放/暫停; 與播放按鈕同功能
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
    myMovie.play()  //影片播放中時，螢幕顯示pause
    playButton.innerText ='pause'
    setInterval(update,300) //每300毫秒更新一次 //也可使用setTimeOut
  }
}
function update(){
  if(!myMovie.ended){
    let size = barsize / myMovie.duration * myMovie.currentTime //barsize->progress
    progress.style.width = `${size}px`
  }else{
    progress.style.width = `0px`
    playButton.innerText='play'
    myMovie.currentTime = 0
  }

}
function clickedBar(e){
  let mouseX = e.clientX - defaultBar.offsetLeft //
  progress.style.width = `${mouseX}px`

  let newTime = mouseX / (barsize / myMovie.duration)
  myMovie.currentTime = newTime
}
window.addEventListener('load',doFirst)