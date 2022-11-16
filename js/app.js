var filter = document.getElementById('search')
var list = document.getElementById('contacts-list');

filter.addEventListener('keyup', search)

function search(e){
  var text = e.target.value.toLowerCase()
  
  var items = list.getElementsByTagName('li');
 
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 ){
      item.style.display = 'block';
    } else{
     
      item.style.display = 'none'
    }
  });
}