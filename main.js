let addButton = document.querySelector('#add1');
let deleteButton = document.querySelector('#remove1');

let addButton2 = document.querySelector('#add2');
let deleteButton2 = document.querySelector('#remove2');

let amount = 1;
let amount2 = 1;

// Botonera 
addButton.addEventListener('click', itemsAdd);
deleteButton.addEventListener('click', itemsDelete);

function itemsAdd(){
    amount = amount + 1;
    document.querySelector('#itemAmount').innerHTML= amount;
}
function itemsDelete(){
    amount = amount - 1;
    document.querySelector('#itemAmount').innerHTML = amount;

}

// Botonera 2
addButton2.addEventListener('click', itemsAdd2);
deleteButton2.addEventListener('click', itemsDelete2);

function itemsAdd2(){
    amount2 = amount2 + 1;
    document.querySelector('#itemAmount2').innerHTML= amount2;
}
function itemsDelete2(){
    amount2 = amount2 - 1;
    document.querySelector('#itemAmount2').innerHTML = amount2;

}
