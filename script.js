let inputbx = document.querySelector('#inputbx');
let list = document.querySelector('#list');

inputbx.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (inputbx) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputbx}<i></i>`;
    listItem.addEventListener("click",function(){
        this.classList.toggle('feito');
    })
    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    })
    list.appendChild(listItem);
};