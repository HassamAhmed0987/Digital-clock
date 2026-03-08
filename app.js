
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const second = document.querySelector(".second")
const date = document.querySelector(".date")




setInterval(function () {
    let nowTime = new Date()

    let h = nowTime.getHours()
    let m = nowTime.getMinutes()
    let s = nowTime.getSeconds()

    console.log(h);

    let time = `${h}:${m}:${s}`
    date.textContent = nowTime.toDateString()
    hours.textContent = h
    // minutes.textContent = m
    // second.textContent = `0${s}`
    if (s >= 10 && s <= 60) {
        second.textContent = `${s}`
    } else {
        second.textContent = `0${s}`
    }

    if (m >= 10 && m <= 60) {
        minutes.textContent = `${m}`
    } else {
        minutes.textContent = `0${m}`
    }

    if (h >= 10 && h <= 24) {
        hours.textContent = `${h}`
    } else {
        hours.textContent = `0${h}`
    }

    // console.log(nowTime.getDay())

}, 1000)










