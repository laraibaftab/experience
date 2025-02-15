                                                                                                    
var getul = document.getElementById('ul')


function add(){
    var inp1 = document.getElementById('add item')
    var inp2 = document.getElementById('add price')

    var createli = document.createElement('li')

    var text1 = document.createTextNode(inp1.value)
    var text2 = document.createTextNode(inp2.value)

    createli.innerHTML= `
    <span> ${inp1.value} </span> &nbsp <span class='tree'> ${inp2.value} </span> 
    
    `
   getul.appendChild(createli)
   
  inp1.value = ''
  inp2.value = ''
  
  var butdel = document.createElement('button')
  var textdel = document.createTextNode('delete')
  butdel.appendChild(textdel)
  createli.appendChild(butdel)


  var editbut1 = document.createElement('button')
  var edittext1 = document.createTextNode('edit item')
  editbut1.appendChild(edittext1)
  createli.appendChild(editbut1)

  var editbut2 = document.createElement('button')
  var edittext2 = document.createTextNode('edit price')
  editbut2.appendChild(edittext2)
  createli.appendChild(editbut2)

 butdel.setAttribute('onclick','delFunc(this)')
 editbut1.setAttribute('onclick','editFunc(this)')
 editbut2.setAttribute('onclick','editFunc2(this)')

 total()
}


function delFunc(beta){
    beta.parentNode.remove()
    total()
}


function editFunc(beta){
    var editprompt= prompt('edit text ' , beta.parentNode.children[0].textContent)
    beta.parentNode.children[0].textContent= editprompt
    total()
}

function editFunc2(beta){
    var editprompt2 = prompt('edit price', beta.parentNode.children[1].textContent)
    beta.parentNode.children[1].textContent= editprompt2
    total()
}


function delall(){
   var getul = document.getElementById('ul')
   getul.innerHTML=''
   total()
}




function total(){
    var total= 0
    var items = document.getElementsByClassName('tree')
    for(var i=0 ; i<items.length ;i++){
total += parseFloat(items[i].innerHTML) || 0
    }
    document.getElementById('treew').innerHTML= 'Total:'+ total.toFixed(2)
}













