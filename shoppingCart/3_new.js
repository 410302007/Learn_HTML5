let storage = localStorage
function doFirst(){
   //1.幫每個 Add  cart 建事件聆聽
   let list = document.querySelectorAll('.addButton') //class 使用. ; id->使用# //list為陣列
   for(let i = 0; i < list.length; i++){
      list[i].addEventListener('click',function(e){
        // alert(e.target.id)
        let teddyInfo = document.querySelector(`#${e.target.id} input`).value
        //#${e.target.id}->找到id
        // alert(teddyInfo) 

        addItem(e.target.id, teddyInfo)
      }) 
   }
   function addItem(itemId, itemValue){
      // alert(`${itemId}: ${itemValue}`)
      //-> A1001: Formosa|formosa.jpg|5000
      //itemId(Formosa|formosa.jpg|5000)

      //先建img標籤
      let image = document.createElement('img')
      //	<img src="imgs/formosa.jpg">
      image.src = 'imgs/' + itemValue.split('|')[1]

      //先建title標籤
      let title = document.createElement('span')
      title.innerText=  itemValue.split('|')[0]

      //先建price標籤
      let price = document.createElement('span')
      price.innerText=  itemValue.split('|')[2]
      
      //找到爸爸-> 加進去(addItem)
      let newItem = document.getElementById('newItem')
      newItem.appendChild(image)
      newItem.appendChild(title)
      newItem.appendChild(price)

    
   }
}
window.addEventListener('load', doFirst);