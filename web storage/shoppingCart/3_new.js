let storage = localStorage
function doFirst(){
   
   if(storage['addItemList'] == null){
   //資料儲存區顯示空字串
   storage['addItemList'] = ''
   // storage.addItemList = ''
   // storage.setItem('addItemList', '')
   }
   

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
      
      //找到爸爸('newItem')-> 加進去(addItem)
      let newItem = document.getElementById('newItem')
      //先判斷此處是否已有物件，如果有要先刪除
      // alert(newItem.childNodes.length)
      while(newItem.childNodes.length >= 1 ){
         newItem.removeChild(newItem.firstChild)
      }

      //再顯示新物件
      newItem.appendChild(image)
      newItem.appendChild(title)
      newItem.appendChild(price)

      //存入storage
      if(storage[itemId]){
         alert('You have checked.') //若storage裡已有這筆id-> alert
      }else{
         //storage裡沒有這筆，加進去並轉換為字串
         storage['addItemList'] += `${itemId}, `
         // 將資料存到 storage
         storage[itemId] = itemValue //=> storage.setItem(itemId, itemValue)
      }
   }
   // 計算購買數量和小計
   let itemString = storage.getItem('addItemList')
   let items = itemString.substring(0, itemString.length - 2).split(', ')
   console.log(items);   // ['A1001', 'A1005', 'A1006', 'A1002']

   subtotal = 0
   for(let i = 0; i < items.length; i++){
       let itemInfo = storage.getItem(items[i])
       subtotal += parseInt(itemInfo.split('|')[2])
   }


   document.getElementById('itemCount').innerText = items.length
   document.getElementById('subtotal').innerText = subtotal
}
window.addEventListener('load', doFirst);