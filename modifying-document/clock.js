"use strict"

let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');

function setTime() {
    let current = new Date();
    let h = current.getHours();
    if(h < 10){
        h = '0' + h;
    }
    let m = current.getMinutes();
    if(m < 10){
        m = '0' + m;
    }
    let s = current.getSeconds();
    hour.textContent = h;
    if(s < 10){
        s = '0' + s;
    }
    min.textContent = m;
    sec.textContent = s;
}

let timer;

function clockStart() {
    timer = setInterval(setTime, 1000);
}

function clockStop() {
    clearInterval(timer);
}