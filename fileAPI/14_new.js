function doFirst(){
  //先跟畫面產生關聯，再建事件聆聽功能
  document.getElementById('dropzone').ondragover = dragOver
  document.getElementById('dropzone').ondrop = dropped
}
function dragOver(e){
  e.preventDefault()
  
}
function dropped(e){
  e.preventDefault()

  //指定某個檔案
  let file = e.dataTransfer.files[0] 
  //顯示拖放檔案的名稱
  document.getElementById('fileName').innerText = file.name 
  //顯示拖放檔案的文字內容
  let readFile = new FileReader() //fileReader型態
  readFile.readAsDataURL(file)  //以純文字格式回傳結果
  readFile.addEventListener('load',function(){
    document.getElementById('image').src = readFile.result
  })
}
window.addEventListener('load',doFirst)