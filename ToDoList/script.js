let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click", function () {
    let item=document.createElement("li");
    item.innerText=inp.value;

     let delBtn=document.createElement("button");
     delBtn.innerText="delete";
     delBtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(delBtn);
    inp.value=""; 
});


// on button:
// let dels=document.querySelectorAll(".delete");
// for(del of dels){
// del.addEventListener("click",function(){
//     let parent=this.parentElement;
//     parent.remove();
// });
// }
// for new childs:Event delegation:

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){//Only when button is clicked!Not on list
        let ListItem=event.target.parentElement;//button's parent is list and it'll be removed!!
        ListItem.remove();
    }
})


