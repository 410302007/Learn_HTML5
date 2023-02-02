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

  //------讀取文字檔-------
  let readFile = new FileReader() //fileReader型態
  readFile.readAsText(file)  //以純文字格式回傳結果
  readFile.addEventListener('load',function(){
    document.getElementById('fileContent').value = readFile.result
  })
}
window.addEventListener('load',doFirst)