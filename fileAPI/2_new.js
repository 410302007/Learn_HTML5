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
}
window.addEventListener('load',doFirst)