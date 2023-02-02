function doFirst(){
  //先跟畫面產生關聯，再建事件聆聽功能
  document.getElementById('theFile').onchange = fileChange
}
function fileChange(){
  let file = document.getElementById('theFile').files[0]
  // console.log(file);
  let message = ``
  message += `File name: ${file.name}\n`
  message += `File name: ${file.type}\n`
  message += `File size: ${file.size} byte\n`
  message += `Last modified: ${file.lastModifiedDate}\n`
  document.getElementById('fileInfo').value = message

  //------讀取圖片-------
  let readFile = new FileReader() //fileReader型態
  readFile.readAsDataURL(file)  //以DataURL格式回傳結果，讀取圖檔和影片都使用此方法
  readFile.addEventListener('load',function(){
    document.getElementById('image')
    image.src = readFile.result
    image.style.maxWidth ='400px'
    image.style.maxHeight = '400px'
  })
}
window.addEventListener('load',doFirst)