const input=document.getElementById('input');
const button=document.getElementById('todo');
const list=document.getElementById('list');

button.onclick=function(e){
      
    const todotext=input.value;
    if(todotext===""){
        alert("Please enter a list item!!");
    }
    else{
    const li=document.createElement('li');
    const edit=document.createElement('button');
    li.innerText=todotext;

    li.onclick = function(e){
        console.log(e.target);
        e.target.remove();
    }
    list.append(li);
    input.value="";
    
}
}





