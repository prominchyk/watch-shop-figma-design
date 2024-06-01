"use strict";

let menu = document.querySelector('.header-menu');
let menuButtons = Array.from(menu.children);
let showAllBtn = document.querySelector('.show-all-block');
let lastShownItem = showAllBtn.parentElement;
let newGoodsItems = document.querySelectorAll('.new-goods-item');

//clicking on menu button in header its style becomes active
for (let button of menuButtons) {
    button.addEventListener('click', function() {
        for (let elem of menuButtons) {
            elem.classList.contains('active') && elem.classList.remove('active');
        }
        button.classList.add('active');
    })
}

//showing hidden goods by clicking "Show all"
showAllBtn.addEventListener('click', function() {
    this.remove();
    lastShownItem.classList.remove('last');
    lastShownItem.lastElementChild.classList.remove('hidden');
    lastShownItem.firstElementChild.style.opacity = 1;
    for (let elem of newGoodsItems) {
        elem.classList.contains('hidden') && elem.classList.remove('hidden');
    }
})
