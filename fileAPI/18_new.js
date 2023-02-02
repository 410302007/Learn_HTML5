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

  //多個檔案
  let files = e.dataTransfer.files 
 
  //顯示拖放檔案的文字內容
  let readFile = new FileReader() //fileReader型態
  for(let i = 0; i < files.length; i++){
    readFile.readAsDataURL(files[i])   //fileReader方法
    readFile.addEventListener('load',function(){
      //動態新增<img>
      //1.先建標籤
      let image = document.createElement('img')
      //2.將該標籤的屬性及方法先寫好
      image.src = readFile.result
      //3.找到parent 加進去
      let dropzone = document.getElementById('dropzone')
      // dropzone.appendChild(image)
      //最後的放的圖檔會在最上面
      dropzone.insertBefore(image,dropzone.firstChild)
  })
  }
  
}
window.addEventListener('load',doFirst)