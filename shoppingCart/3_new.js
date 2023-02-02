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
      alert(`${itemId}: ${itemValue}`)
   }
}
window.addEventListener('load', doFirst);