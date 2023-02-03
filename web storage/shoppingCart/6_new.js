let storage = localStorage
function doFirst(){
  let itemString = storage.getItem('addItemList')
  let items = itemString.substring(0, itemString.length - 2).split(', ')
  // console.log(items);   // ['A1001', 'A1005', 'A1006', 'A1002']

  newDiv = document.createElement('div')
  newTable = document.createElement('table')

  //將table放進div， 再將div放進cartList
  newDiv.appendChild(newTable)
  document.getElementById('cartList').appendChild(newDiv)

  //total金額
  total = 0
  for(let i = 0; i < items.length; i++){
    let itemInfo = storage.getItem(items[i])
    total += parseInt(itemInfo.split('|')[2])
    
    createCartList(items[i],itemInfo)
  }
  document.getElementById('total').innerText = total
}

  function createCartList(itemId, itemValue){
    // alert(`${itemId}: ${itemValue}`)
    let itemTitle = itemValue.split('|')[0]
    let itemImage = 'imgs/' + itemValue.split('|')[1]
    let itemPrice = parseInt(itemValue.split('|')[2])
    
    //建立每個品項的清單區域 -- tr
    let trItemList = document.createElement('tr')
    trItemList.className = 'item'
    
    //tr建立完放入td
    newTable.appendChild(trItemList)


    //建立商品圖片  -- 第一個td
    let tdImage = document.createElement('td')
    tdImage.style.width = `200px`
    //td裡的img
    let image = document.createElement('img')
    image.src = itemImage
    image.width = 60

    tdImage.appendChild(image)
    trItemList.appendChild(tdImage)

    // 建立商品名稱和刪除按鈕 -- 第二個 td
    let tdTitle = document.createElement('td')
    tdTitle.style.width = `280px`
    tdTitle.id = itemId
    //p標籤
    let pTitle = document.createElement('p')
    pTitle.innerText = itemTitle
    //button標籤
    let delButton = document.createElement('button')
    delButton.innerText = 'Delete'
    delButton.addEventListener('click',deleteItem)
  
    tdTitle.appendChild(pTitle)
    tdTitle.appendChild(delButton)
    trItemList.appendChild(tdTitle)

    // 建立商品價格 -- 第三個 td
    let tdPrice = document.createElement('td')
    tdPrice.style.width = `170px`

    let pPrice = document.createElement('p')
    pPrice.innerText = itemPrice

    tdPrice.appendChild(pPrice)
    trItemList.appendChild(tdPrice)

    // 建立商品數量 -- 第四個 td
    let tdItemCount = document.createElement('td')
    tdItemCount.style.width = `60px`

    let pItemCount = document.createElement('p')
    
    let inputItemCount = document.createElement('input')
    inputItemCount.type = `number`
    inputItemCount.value = 1
    inputItemCount.min = 1  //最少值為1，無法再向下遞減
    inputItemCount.addEventListener('',changeItemCount)
    
    //input放進p裡
    pItemCount.appendChild(inputItemCount)
    //p放進td裡
    tdItemCount.appendChild(pItemCount)
    //td放進tr裡
    trItemList.appendChild(tdItemCount)
  }
//刪除購物車裡的商品
function deleteItem(e){
  let itemId = e.target.parentNode.id //e.target.parentNode -> button
  //alert(itemId)

  //1.先扣總金額
  let itemValue = storage.getItem(itemId)
  total -= parseInt(itemValue.split('|')[2])
  document.getElementById('total').innerText = total

  //2.清除 storage
  storage.removeItem(itemId)
  storage['addItemList'] = storage['addItemList'].replace(`${itemId}, `, ``) //空字串取代

  //3. 刪除該筆<tr></tr>
  //e.target => button本身 
  //parentNode.parentNode.parentNode 順序為: td->tr->table

  //寫法一
  // e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
  //寫法二
  newTable.removeChild(e.target.parentNode.parentNode)

}  
function changeItemCount(){}
window.addEventListener('load', doFirst);