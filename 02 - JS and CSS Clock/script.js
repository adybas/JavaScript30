    // <div class="hand hour-hand"></div>
    //     <div class="hand min-hand"></div>
    //     <div class="hand second-hand"></div>
console.log("I'm connected")

const hourHand = document.querySelector(".hour-hand")
const minuteHand = document.querySelector(".min-hand")
const secondHand = document.querySelector(".second-hand")

function setDate() {
    const currentTime = new Date()

    const currentSeconds = currentTime.getSeconds()
    const secondDegree = ((currentSeconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondDegree}deg)`

    const currentMinute = currentTime.getMinutes()
    const minutesDegree = ((currentMinute / 60) * 360) + 90
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`

    const currentHour = currentTime.getHours()
    const hourDegree = ((currentHour / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(setDate, 1000);