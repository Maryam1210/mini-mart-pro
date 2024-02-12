let items = []
function add(){
    if(inp.value == ""){
        hello.style.display = "block"
    }
    else{
        hello.style.display = "none"
        items.push(inp.value)
        call.style.display = "block"
      cart()
        document.getElementById("inp").value = ""
    }
}
function addTo(){
    hello.style.display = "none"
    items.unshift(inp.value)
cart()
    document.getElementById("inp").value = ""

}
function remove(){

    items.shift()
  cart()

}

function any(){
    let num = Number(prompt("input the number you want to delete"))
    items.splice(num-1, 1) 
    // items.splice (0,2)
cart()
}

function delAll(){
    items.splice(0,items.length)
  cart()
 
}



function edit(){
    
    let input = Number (prompt("which number did you want to delete"))
    let reep = prompt("enter the new item")
    items.splice(input-1, 1, reep)
  cart()
}
function cart(){
    show.innerHTML = ""
    for (x=0; x<items.length; x++){
        show.innerHTML += `<tr>
        <td><p>${x+1}</p> </td>
        <td><p>${items[x]}</p> </td>
        <td><button class = "btn btn-primary" onclick = "del(${x})">Delete</button>
        <button class=" btn btn-danger" onclick = "dit(${x})"> edit</button>
        </td>  
        </tr>`
    }
}
function del (index){
    items.splice(index , 1)
    cart()
}
function dit (index){
    let yello= (prompt("Enter the new item"))
    items.splice(index,1, yello)
    cart()
}